from tkinter import *
from config import *



#################################### CREATING THE GUI ####################################
window = Tk()
window.title("Orion Fitness 🏋🏽‍♂️")
window.geometry("800x500")
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
font=("Verdana", 12, "bold"), pady=5,
padx=10)
event_frame.grid()

# Radio buttons section
choice_label_frame = LabelFrame(event_frame, pady=5, bg=WIN_BG, borderwidth=0)
choice_label_frame.grid(row=1, column=0)
choice_label_text = Label(choice_label_frame, text="Select an option: ",  font=FRAME_TEXT, fg=TEXT_COLOR, bg=WIN_BG)
choice_label_text.grid(row=1, column=0)

the_event_state = IntVar()
nutrition_radio_btn = Radiobutton(choice_label_frame, text="Nutrition", value=1, variable=the_event_state, cursor="hand1",
bg=WIN_BG, highlightthickness=0, fg=TEXT_COLOR, font=BODY_FONT)
nutrition_radio_btn.grid(row=1, column=1)

exercise_radio_btn = Radiobutton(choice_label_frame, text="Exercise", value=2, variable=the_event_state, cursor="hand1",
bg=WIN_BG, highlightthickness=0, fg=TEXT_COLOR, font=BODY_FONT)
exercise_radio_btn.grid(row=1, column=2)

# Text entry section
text_field_frame = LabelFrame(event_frame, pady=5, bg=WIN_BG, borderwidth=0)
text_field_frame.grid(row=2, column=0)
text_field_label = Label(text_field_frame, text="Enter the activity: ", font=FRAME_TEXT, fg=TEXT_COLOR, bg=WIN_BG)
text_field_label.grid(row=2, column=0, sticky="w")

text = Text(text_field_frame, width=30, height=5, font=BODY_FONT, fg=TEXT_COLOR, bg="gray95", padx=5)
text.insert("1.0", "type in the activity")
text.grid(row=3, column=0, columnspan=2)

# button section
send_btn = Button(event_frame, text="Send", width=10, font=BODY_FONT, fg=TEXT_COLOR, pady=5, highlightthickness=0)
send_btn.grid(row=4, column=0)
#########################################################################################












window.mainloop()