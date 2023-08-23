from gui_config import window, display_results
from data_handling import PostData

post_data = PostData()
result = post_data.fetch_data()
print(result)

display_results(row_index=7, value=1, results=post_data.get_result())


window.mainloop()
