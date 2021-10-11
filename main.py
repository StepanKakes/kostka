def on_forever():

    def on_button_pressed_a():

        def on_gesture_shake():  
            basic.show_number(randint(1, 6))
        input.on_gesture(Gesture.SHAKE, on_gesture_shake)
    input.on_button_pressed(Button.A, on_button_pressed_a)
basic.forever(on_forever)