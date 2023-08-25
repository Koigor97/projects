from gui_config import *
from data_handling import PostData, SaveLocally
# import requests

post_data = PostData()
local_storage = SaveLocally()

def send_btn_helper():
    post_data.set_body(content=text.get(1.0, END), gender=gender_combobox.get(), age=age_spinbox.get(),
                       weight=weight_spinbox.get(), height=height_spinbox.get())
    result = post_data.fetch_data()
    print(result)
    display_results(row_index=8, value=1, results=post_data.get_result())

send_btn.config(command=send_btn_helper)
# window.mainloop()

# TESTING TO LOG THE DATA TO GOOGLE SHEET [test was a fail - received a 500 Server Error]
# sheet_endpoint = "https://api.sheety.co/19f150e92e462797dab865579a69960e/workoutTracker/workouts"
# header = {
#     "Content-Type": "application/json"
# }
# body = {
#     "workout": {
#        "date": "23/09/2023",
#         "time": "10:30:00",
#         "exercise": "Running",
#         "duration": 40,
#         "calories": 240
#     }
# }
#
# response = requests.post(url=sheet_endpoint, json=body, headers=header)
# response.raise_for_status()
