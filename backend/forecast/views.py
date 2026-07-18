# # from django.shortcuts import render

# # # Create your views here.
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status


# class WeatherView(APIView):
#     def get(self, request):
#         city = request.query_params.get('city')

#         if not city:
#             return Response(
#                 {"error": "City parameter is required."},
#                 status=status.HTTP_400_BAD_REQUEST
#             )

#         # Placeholder response — Lesson 4 will replace this with a real API call
#         return Response(
#             {"message": f"You searched for {city}. Real weather data coming in Lesson 4!"},
#             status=status.HTTP_200_OK
#         )

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .services import get_weather_by_city, WeatherServiceError


# class WeatherView(APIView):
#     def get(self, request):
#         city = request.query_params.get('city')

#         if not city:
#             return Response(
#                 {"error": "City parameter is required."},
#                 status=status.HTTP_400_BAD_REQUEST
#             )

#         try:
#             weather_data = get_weather_by_city(city)
#         except WeatherServiceError as e:
#             return Response({"error": e.message}, status=e.status_code)

#         return Response(weather_data, status=status.HTTP_200_OK)



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services import get_weather_by_city, WeatherServiceError
from .serializers import WeatherQuerySerializer, SearchHistorySerializer
from .models import SearchHistory


class WeatherView(APIView):
    def get(self, request):
        # Validate the incoming query params using our serializer
        query_serializer = WeatherQuerySerializer(data=request.query_params)
        query_serializer.is_valid(raise_exception=True)
        city = query_serializer.validated_data['city']

        try:
            weather_data = get_weather_by_city(city)
        except WeatherServiceError as e:
            return Response({"error": e.message}, status=e.status_code)

        # Save this successful search into history
        SearchHistory.objects.create(
            city_name=weather_data['city'],
            country=weather_data['country'],
        )

        return Response(weather_data, status=status.HTTP_200_OK)


class SearchHistoryView(APIView):
    def get(self, request):
        history = SearchHistory.objects.all()[:5]  # last 5, newest first (see Meta.ordering)
        serializer = SearchHistorySerializer(history, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)