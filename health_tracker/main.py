from tkinter import *
import requests
from config import *



#################################### CREATING THE GUI ####################################
window = Tk()
window.title("Orion Fitness 🏋🏽‍♂️")
window.config(padx=20, pady=20, bg=WIN_BG)
image = PhotoImage(file="fitness-logo.png")
canvas = Canvas(width=500, height=250, bg=WIN_BG, highlightthickness=0)
canvas.create_image(250, 100, image=image)
canvas.grid(row=0, column=0, columnspan=3)

################################## SETTING THE LAYOUT ####################################
# Radio buttons
the_event_state = IntVar()
nutrition_radio_btn = Radiobutton(text="Nutrition", value=1, variable=the_event_state, cursor="hand1", bg=WIN_BG,
                                  highlightthickness=0, fg=TEXT_COLOR)
nutrition_radio_btn.grid(row=1, column=1)
exercise_radio_btn = Radiobutton(text="Exercise", value=2, variable=the_event_state, cursor="hand1", bg=WIN_BG,
                                 highlightthickness=0, fg=TEXT_COLOR)
exercise_radio_btn.grid(row=1, column=2)

# Label text
event_label = Label(text="Select an event to check: ", font=BODY_FONT, fg=TEXT_COLOR, bg=WIN_BG)
event_label.grid(row=1, column=0)
text_label = Label(text="Enter the activity: ", font=BODY_FONT, fg=TEXT_COLOR, bg=WIN_BG)
text_label.grid(row=2, column=0)

# Text entry
text = Text(width=40, height=5, font=BODY_FONT, fg=TEXT_COLOR, bg="gray90", highlightthickness=0)
text.insert("1.0", "type in the activity")
text.grid(row=3, column=1, columnspan=2)

# Send button
send_btn = Button(text="Send", width=10, font=BODY_FONT, fg=TEXT_COLOR, bg=WIN_BG, highlightbackground=WIN_BG)
send_btn.grid(row=4, column=1)
#########################################################################################












window.mainloop()