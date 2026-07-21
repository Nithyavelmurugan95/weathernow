# skyra 🌦️

A full-stack weather web application built with Django REST Framework and React, consuming live data from the OpenWeatherMap API.

## Features

- 🔍 Search weather by city name
- 🌡️ Current temperature, feels-like, humidity, wind, pressure, and condition
- 🕐 Live date and time display
- 🎨 Dynamic gradient backgrounds based on weather condition and day/night
- 📱 Fully responsive (desktop, tablet, mobile)
- 📜 Search history with Local Storage (last 5 cities, deduplicated)
- ⚠️ Robust error handling (invalid city, network failure, timeout, server error) with retry
- 💀 Skeleton loading states

## Tech Stack

**Backend:** Python, Django, Django REST Framework, SQLite3, OpenWeatherMap API
**Frontend:** React, Vite, Tailwind CSS, Axios, React Router

## Project Structure

```
weather-app/
├── backend/       Django REST API
└── frontend/      React application
```

## Getting Started

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate          # Windows
pip install -r requirements.txt
```

Create a `.env` file in `backend/` with:
```
OPENWEATHER_API_KEY=your_api_key_here
DEBUG=True
SECRET_KEY=your_secret_key_here
```

```bash
python manage.py migrate
python manage.py runserver
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/` with:
```
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

```bash
npm run dev
```

Visit `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/weather/?city={city}` | Get current weather for a city |
| GET | `/api/history/` | Get last 5 successful searches (server-side) |

## Author

Built by Nithya as a portfolio project.
