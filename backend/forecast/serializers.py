from rest_framework import serializers
from .models import SearchHistory


class SearchHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchHistory
        fields = ['id', 'city_name', 'country', 'searched_at']


class WeatherQuerySerializer(serializers.Serializer):
    """Validates the incoming request — not tied to a database model."""
    city = serializers.CharField(max_length=100, required=True)
    