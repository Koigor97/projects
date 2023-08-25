import requests
import pandas as pd


class PostData:
    def __init__(self):
        self.__app_id = "xxxxxxx"
        self.__api_key = "xxxxxxx"
        self.__exercise_endpoint = "https://trackapi.nutritionix.com/v2/natural/exercise"
        self.__nutrition_endpoint = "https://trackapi.nutritionix.com/v2/natural/nutrients"
        self.__entry = ""
        self.__gender = ""
        self.__age = ""
        self.__weight = ""
        self.__height = ""

    def __get_header(self):
        header = {
            "x-app-id": self.__app_id,
            "x-app-key": self.__api_key
        }
        return header


    def __get_body(self):
        body = {
            "query": self.__get_content(),
            "gender": self.__get_gender(),
            "weight_kg": self.__get_weight(),
            "height_cm": self.__get_height(),
            "age": self.__get_age()
        }
        return body


    def fetch_data(self, value=1):
        the_endpoint = ""
        if value == 1:
            the_endpoint = self.__exercise_endpoint
        if value == 2:
            the_endpoint = self.__nutrition_endpoint

        response = requests.post(url=the_endpoint, json=self.__get_body(), headers=self.__get_header())
        response.raise_for_status()
        data = response.json()
        return data


    def get_result(self):
        result = self.fetch_data()["exercises"][0]
        the_result = [result["name"].title(), result["met"], result["duration_min"], result["nf_calories"]]
        return the_result


    def set_body(self, content, gender, weight, height, age):
        self.__entry = content
        self.__gender = gender
        self.__age = age
        self.__weight = weight
        self.__height = height


    def __get_content(self):
        return self.__entry


    def __get_gender(self):
        return self.__gender.lower()


    def __get_age(self):
        return int(self.__age)


    def __get_weight(self):
        return float(self.__weight)


    def __get_height(self):
        return float(self.__height)





class SaveLocally:
    def __init__(self,):
        self.__content = ""

    def set_result(self, result):
        self.__content = result


    def __get_content(self):
        return self.__content


    def __data_to_dict(self):
        content = self.__get_content()["exercises"][0]
        the_dict = {
            "name": content["name"],
            "met": content["met"],
            "duration-min": content["duration_min"],
            "nf-calories": content["nf_calories"]
        }
        content_list = [the_dict]
        return content_list


    def save_data(self):
        data = pd.DataFrame(self.__data_to_dict())
        print(data)

