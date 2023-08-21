import requests
from twilio.rest import Client
from config import *
from calculation import kelvin_to_celsius, kelvin_to_fahrenheit


# The API url for the OpenWeather/weather end for a particular location.
API_END_POINT = (f"https://api.openweathermap.org/data/2.5/"
                 f"weather?lat={LATITUDE}&lon={LONGITUDE}&appid={API_KEY}")

response = requests.get(API_END_POINT)
response.raise_for_status()
data = response.json()

# Getting the needed data
# the weather id is meant for adding conditionals in the near future.
# The id is a code for checking the weather condition.
# https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 link to weather condition codes
weather_id = data["weather"][0]["id"]
weather_description = data["weather"][0]["description"]
the_temperature = data["main"]["temp"]
temperature_feels_like = data["main"]["feels_like"]
wind_speed = data["wind"]["speed"]
weather_humidity = data["main"]["humidity"]

# sending the sms to the employees
the_message = (f"Good Morning Linda. Today's weather is {weather_description} ☀️, the temperature is {kelvin_to_celsius(the_temperature):.1f}℃"
                f" and {kelvin_to_fahrenheit(the_temperature):.1f} ℉. Wind speed 💨 is {wind_speed}meter/sec,"
                f" and humidity is at {weather_humidity}%. With that said, it feels like {kelvin_to_celsius(temperature_feels_like):.1f} ℃,"
                f" and {kelvin_to_fahrenheit(temperature_feels_like):.1f} ℉ outside. Have great day 🤘🏾.")

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
message = client.messages.create(
    body=the_message,
    from_=TWILIO_PHONE_NUMBER,
    to=EMPLOYEE
)
