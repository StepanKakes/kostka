basic.forever(function on_forever() {
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        input.onGesture(Gesture.Shake, function on_gesture_shake() {
            basic.showNumber(randint(1, 6))
        })
    })
})
