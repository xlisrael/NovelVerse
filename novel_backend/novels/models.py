from django.db import models


# Create your models here.
class Novel(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    content = models.TextField()
    genres = models.JSONField(default=list)  # store selected genres
    image = models.ImageField(
        upload_to="novel_images/", blank=True, null=True
    )  # new field
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    unpublished = models.BooleanField(default=False)

    def __str__(self):
        return self.title
