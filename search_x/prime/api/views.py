from rest_framework import viewsets
from .serializers import PostSerializer
from ..models import Post


# http://.../api/posts?title=xxx

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        qs = Post.objects.all()
        title = self.request.query_params.get('title')
        if title is not None:
            qs = qs.filter(title__icontains=title)
        return qs    