let povoleno = false
let pick = 6
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    
    if (pick == 10) {
        pick = 6
        basic.showNumber(6)
    } else {
        pick = 10
        basic.showNumber(10)
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    povoleno = true
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    let roll: number;
    
    if (povoleno) {
        roll = randint(1, pick)
        if (roll == 1) {
            basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                `)
        }
        
        if (roll == 2) {
            basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . #
                `)
        }
        
        if (roll == 3) {
            basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . #
                `)
        }
        
        if (roll == 4) {
            basic.showLeds(`
                    # . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . #
                `)
        }
        
        if (roll == 5) {
            basic.showLeds(`
                    # . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . #
                `)
        }
        
        if (roll == 6) {
            basic.showLeds(`
                    # . . . #
                    . . . . .
                    # . . . #
                    . . . . .
                    # . . . #
                `)
        }
        
        if (roll == 7) {
            basic.showLeds(`
                    # . . . #
                    . . . . .
                    # . # . #
                    . . . . .
                    # . . . #
                `)
        }
        
        if (roll == 8) {
            basic.showLeds(`
                    # . . . #
                    . . # . .
                    # . . . #
                    . . # . .
                    # . . . #
                `)
        }
        
        if (roll == 9) {
            basic.showLeds(`
                    # . # . #
                    . . . . .
                    # . # . #
                    . . . . .
                    # . # . #
                `)
        }
        
        if (roll == 10) {
            basic.showLeds(`
                    # . . . #
                    # . . . #
                    # . . . #
                    # . . . #
                    # . . . #
                `)
        }
        
        for (let i = 0; i < roll; i++) {
            music.playMelody("C5 - ", 700)
        }
        povoleno = false
    }
    
})
