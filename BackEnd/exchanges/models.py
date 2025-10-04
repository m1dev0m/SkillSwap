from django.db import models
from accounts.models import User

class Exchange(models.Model):
    sender = models.ForeignKey(User, related_name='sent_exchanges', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_exchanges', on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender} → {self.receiver}: {self.message[:20]}"
