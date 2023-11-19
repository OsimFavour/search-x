from rest_framework import routers
from .views import PostViewSet

posts_router = routers.DefaultRouter()

posts_router.register(r'posts', PostViewSet)
urlpatterns = posts_router.urls
