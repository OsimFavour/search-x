from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=220)
    # other fields necessary

    def __str__(self) -> str:
        return str(self.title)