from django.contrib import admin
from .models import Doctor,Patient,Users,BookedSlot
# Register your models here.
admin.site.register(Users)
admin.site.register(Doctor)
admin.site.register(Patient)
admin.site.register(BookedSlot)