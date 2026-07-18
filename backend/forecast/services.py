# This file will hold the logic for calling the OpenWeatherMap API.
# We'll build this out in Lesson 4.

import requests
from django.conf import settings


class WeatherServiceError(Exception):
    """Custom exception so views.py can catch OUR errors specifically,
    not generic Python exceptions."""
    def __init__(self, message, status_code=500):
        self.message = message
        self.status_code = status_code
        super().__init__(message)


def get_weather_by_city(city_name):
    """Calls OpenWeatherMap's Current Weather API and returns cleaned data."""

    api_key = settings.OPENWEATHER_API_KEY
    url = "https://api.openweathermap.org/data/2.5/weather"

    params = {
        "q": city_name,
        "appid": api_key,
        "units": "metric",  # Celsius instead of Kelvin
    }

    try:
        response = requests.get(url, params=params, timeout=5)
    except requests.exceptions.ConnectionError:
        raise WeatherServiceError("Network error. Please check your internet connection.", 503)
    except requests.exceptions.Timeout:
        raise WeatherServiceError("Weather service timed out. Please try again.", 504)

    if response.status_code == 404:
        raise WeatherServiceError("City not found. Please enter a valid city.", 404)

    if response.status_code == 401:
        raise WeatherServiceError("Invalid API key. Please check server configuration.", 500)

    if response.status_code != 200:
        raise WeatherServiceError("Something went wrong fetching weather data.", response.status_code)

    data = response.json()

    return {
        "city": data["name"],
        "country": data["sys"]["country"],
        "temperature": data["main"]["temp"],
        "feels_like": data["main"]["feels_like"],
        "humidity": data["main"]["humidity"],
        "pressure": data["main"]["pressure"],
        "wind_speed": data["wind"]["speed"],
        "condition": data["weather"][0]["main"],
        "description": data["weather"][0]["description"],
        "icon": data["weather"][0]["icon"],
    }