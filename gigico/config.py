import os
"""
The config file is responsible for housing all the configuration needed for the project, for example the API keys. 
Think of it as an asset file. Because most are confidential data information, they are enclose as environmental 
variables 
"""
################OPEN-WEATHER-API_SECTION#################
API_KEY = os.environ.get("OWM_API_KEY")
LATITUDE = -25.750445
LONGITUDE = 28.2375503

###################TWILLIO-API-SECTION###################
TWILIO_ACCOUNT_SID = os.environ.get("TWILIO_SID")
TWILIO_AUTH_TOKEN = os.environ.get("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.environ.get("TWILIO_PHONE_NUMBER")
EMPLOYEE = "RECIPIENT_NUMBER"