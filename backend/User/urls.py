
from django.db import router
from rest_framework import routers, urlpatterns
from .api import UserViewSet,DocViewSet,PatViewSet,SlotViewSet

router = routers.DefaultRouter()
router.register(r'api/user', UserViewSet, basename='user')
router.register(r'api/doctor', DocViewSet, basename='doctor')
router.register(r'api/patient', PatViewSet, basename='patient')
router.register(r'api/booking', SlotViewSet, basename='booking')

urlpatterns=router.urls
