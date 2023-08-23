import requests

class PostData:
    def __init__(self):
        self.__app_id = "YOUR_API_ID"
        self.__api_key = "YOUR_API_KEY"
        self.__exercise_endpoint = "https://trackapi.nutritionix.com/v2/natural/exercise"
        self.__nutrition_endpoint = "https://trackapi.nutritionix.com/v2/natural/nutrients"
        self.__entry = "USER_ENTRY"


    def __get_header(self):
        header = {
            "x-app-id": self.__app_id,
            "x-app-key": self.__api_key
        }
        return header


    def __get_body(self):
        body = {
            "query": self.__entry,
            "gender": "female",
            "weight_kg": 72.5,
            "height_cm": 167.64,
            "age": 30
        }
        return body


    def fetch_data(self, value):
        the_endpoint = ""
        if value == 1:
            the_endpoint = self.__exercise_endpoint
        if value == 2:
            the_endpoint = self.__nutrition_endpoint

        response = requests.post(url=the_endpoint, json=self.__get_body(), headers=self.__get_header())
        response.raise_for_status()
        data = response.json()
        return data


