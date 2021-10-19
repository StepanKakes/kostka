povoleno = False
pick=6
def on_logo_event_pressed(): 
    global pick
    if pick == 10:
        pick = 6
        basic.show_number(6)
    else:
        pick = 10
        basic.show_number(10)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)

def on_button_pressed_a():
    global povoleno
    povoleno=True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
        global povoleno
        if povoleno:
            roll = randint(1, pick) 
            if roll == 1:
                basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                """)
            if roll == 2:
                basic.show_leds("""
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . #
                """)
            if roll == 3:
                basic.show_leds("""
                    # . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . #
                """)
            if roll == 4:
                basic.show_leds("""
                    # . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . #
                """)
            if roll == 5:
                basic.show_leds("""
                    # . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . #
                """)
            if roll == 6:
                basic.show_leds("""
                    # . . . #
                    . . . . .
                    # . . . #
                    . . . . .
                    # . . . #
                """)
            if roll == 7:
                basic.show_leds("""
                    # . . . #
                    . . . . .
                    # . # . #
                    . . . . .
                    # . . . #
                """)
            if roll == 8:
                basic.show_leds("""
                    # . . . #
                    . . # . .
                    # . . . #
                    . . # . .
                    # . . . #
                """)
            if roll == 9:
                basic.show_leds("""
                    # . # . #
                    . . . . .
                    # . # . #
                    . . . . .
                    # . # . #
                """)
            if roll == 10:
                basic.show_leds("""
                    # . . . #
                    # . . . #
                    # . . . #
                    # . . . #
                    # . . . #
                """)
            for i in range(roll):
                music.play_melody("C5 - ", 700)
            povoleno = False
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

