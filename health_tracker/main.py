from gui_config import *
from tkinter import messagebox
from data_handling import PostData, SaveLocally
# import requests

post_data = PostData()
local_storage = SaveLocally()

def send_btn_helper():
    if is_entry_fields_empty(content=text.get(1.0, END), gender=gender_combobox.get(), age=age_spinbox.get(),
weight=weight_spinbox.get(), height=height_spinbox.get()):
        post_data.set_body(content=text.get(1.0, END), gender=gender_combobox.get(), age=age_spinbox.get(),
                           weight=weight_spinbox.get(), height=height_spinbox.get())
        local_storage.set_result(post_data.fetch_data())
        display_results(row_index=9, value=1, results=post_data.get_result())


def is_entry_fields_empty(content, gender, age, weight, height):
    if (content == "") or (gender == "") or (age == "") or (weight == "") or (height == ""):
        messagebox.showinfo(title="Empty field", message="You have an empty input field. Please enter the data needed 🙂")
    else:
        return True


send_btn.config(command=send_btn_helper)
save_local_btn.config(command=local_storage.save_data)
window.mainloop()

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
