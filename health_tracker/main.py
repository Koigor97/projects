from gui_config import *
from data_handling import PostData

post_data = PostData()

def send_btn_helper():
    post_data.set_body(content=text.get(1.0, END), gender=gender_combobox.get(), age=age_spinbox.get(),
                       weight=weight_spinbox.get(), height=height_spinbox.get())
    result = post_data.fetch_data()
    print(result)
    display_results(row_index=8, value=1, results=post_data.get_result())

send_btn.config(command=send_btn_helper)
window.mainloop()
