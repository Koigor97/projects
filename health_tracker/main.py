from tkinter import *
import requests
from config import *



#################################### CREATING THE GUI ####################################
window = Tk()
window.title("Orion Fitness 🏋🏽‍♂️")
window.geometry("800x500")
window.config(padx=20, pady=20, bg=WIN_BG)
image = PhotoImage(file="fitness-logo.png")
canvas = Canvas(width=600, height=250, bg=WIN_BG, highlightthickness=0)
canvas.create_image(400, 100, image=image)
canvas.grid(row=0, column=0, columnspan=2)
frame = Frame(window)
frame.place(x=100, y=200)

################################## SETTING THE LAYOUT ####################################
# Radio buttons section
event_frame = LabelFrame(frame, text="What would you like to check: ", fg=TEXT_COLOR, bg=WIN_BG, font=FRAME_TEXT, pady=5,
                         padx=10)
event_frame.grid(sticky="news")

choice_label = Label(event_frame, text="Select an option: ",  font=BODY_FONT, fg=TEXT_COLOR, bg=WIN_BG)
choice_label.grid(row=1, column=1)

the_event_state = IntVar()
nutrition_radio_btn = Radiobutton(event_frame, text="Nutrition", value=1, variable=the_event_state, cursor="hand1", bg=WIN_BG,
                                  highlightthickness=0, fg=TEXT_COLOR, font=BODY_FONT)
nutrition_radio_btn.grid(row=1, column=3)
exercise_radio_btn = Radiobutton(event_frame, text="Exercise", value=2, variable=the_event_state, cursor="hand1", bg=WIN_BG,
                                 highlightthickness=0, fg=TEXT_COLOR, font=BODY_FONT)
exercise_radio_btn.grid(row=1, column=4)

# Label text
text_field_frame = LabelFrame(frame, text="Enter the activity: ", font=FRAME_TEXT, fg=TEXT_COLOR, bg=WIN_BG, padx=15, pady=5)
text_field_frame.grid()

text = Text(text_field_frame, width=30, height=5, font=BODY_FONT, fg=TEXT_COLOR, bg="gray95", padx=5)
text.insert("1.0", "type in the activity")
text.grid(row=3, column=1)
# Text entry


# Send button
send_btn = Button(text="Send", width=10, font=BODY_FONT, fg=TEXT_COLOR, bg=WIN_BG, highlightbackground=WIN_BG)
send_btn.grid(row=4, column=1)
#########################################################################################












window.mainloop()