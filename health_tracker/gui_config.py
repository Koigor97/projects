from tkinter import *

############################## CONFIGURATION CONSTANTS ##################################
WIN_BG = "GhostWhite"
HEADERS_FONT = ("Ubuntu", 16, "bold")
BODY_FONT = ("Lato", 16, "normal")
FRAME_TEXT = ("Verdana", 16, "bold")
TEXT_COLOR = "gray0"
RESULTS_HEADER_COLOR = "forest green"

#################################### CREATING THE GUI ####################################
window = Tk()
window.title("Orion Fitness 🏋🏽‍♂️")
window.geometry("800x800")
window.config(padx=20, pady=20, bg=WIN_BG)
window.columnconfigure(index=1, weight=3)
image = PhotoImage(file="fitness-logo.png")
canvas = Canvas(width=500, height=200, bg=WIN_BG, highlightthickness=0)
canvas.create_image(250, 100, image=image)
canvas.grid(row=0, column=1)
frame = Frame()
frame.grid(row=1, column=1)


################################## SETTING THE LAYOUT ####################################
# Frame Container
event_frame = LabelFrame(frame,text="What would you like to check: ", fg=TEXT_COLOR, bg=WIN_BG,
font=("Verdana", 12, "bold"), pady=5, padx=10)
event_frame.grid()

# Radio buttons section
choice_label_frame = LabelFrame(event_frame, pady=5, bg=WIN_BG, borderwidth=0)
choice_label_frame.grid(row=1, column=0)
choice_label_text = Label(choice_label_frame, text="Select an option: ",  font=BODY_FONT, fg=TEXT_COLOR, bg=WIN_BG)
choice_label_text.grid(row=1, column=0)

the_event_state = IntVar()
nutrition_radio_btn = Radiobutton(choice_label_frame, text="Nutrition", value=1, variable=the_event_state, cursor="hand1",
bg=WIN_BG, highlightthickness=0, fg=TEXT_COLOR, font=BODY_FONT)
nutrition_radio_btn.grid(row=1, column=1)

exercise_radio_btn = Radiobutton(choice_label_frame, text="Exercise", value=2, variable=the_event_state, cursor="hand1",
bg=WIN_BG, highlightthickness=0, fg=TEXT_COLOR, font=BODY_FONT)
exercise_radio_btn.grid(row=1, column=2)

# Text entry section
text_field_frame = LabelFrame(event_frame, pady=10, bg=WIN_BG, borderwidth=0)
text_field_frame.grid(row=2, column=0)
text_field_label = Label(text_field_frame, text="Enter the activity: ", font=BODY_FONT, fg=TEXT_COLOR, bg=WIN_BG)
text_field_label.grid(row=2, column=0, sticky="w")

text = Text(text_field_frame, width=30, height=5, font=BODY_FONT, fg=TEXT_COLOR, bg="gray95", padx=5, pady=5)
text.insert(END, "type in the activity")
text.grid(row=3, column=0, columnspan=2)

# button section
send_btn = Button(event_frame, text="Send", width=10, font=BODY_FONT, fg=TEXT_COLOR, highlightthickness=0)
send_btn.grid(row=4, column=0)

####################################### OUTPUT SECTION##################################################
results_label_frame = LabelFrame(event_frame, pady=5, bg=WIN_BG)
results_label_frame.grid()
results_label_text = Label(results_label_frame, text="Results", pady=5, bg=WIN_BG, fg=TEXT_COLOR, font=("Verdana", 12, "bold"))
results_label_text.grid(row=5, column=3)

def display_results(row_index, value, results):
    header = ""
    nutrient_header = ["Qty 🔢", "Unit 🔣", "Food 🥗", "Calories 💪🏽", "Weight ⚖️", "Food Group 🔗"]
    exercise_header = ["Exercise Name 👟", "MET ⚛️", "Duration ⏱️", "Calories Expended 🔥"]
    if value == 1:
        header += exercise_header
    if value == 2:
        header += nutrient_header

    _render_results_helper(header)
    _render_results_helper(results, the_row=row_index)


def _render_results_helper(results, the_row = 6):
    for i in range(len(results)):
        quantity_label = Label(results_label_frame, text=results[i], font=HEADERS_FONT, fg=RESULTS_HEADER_COLOR, bg=WIN_BG)
        quantity_label.grid(row=the_row, column=i)








