from django.conf import settings
from django.db import models
from django.utils import timezone

class Contact(models.Model):
    email = models.CharField(max_length=200)
    message = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.email