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
basic.forever(function on_forever() {
    let roll: number;
    
    if (povoleno) {
        if (input.isGesture(Gesture.Shake)) {
            roll = randint(1, pick)
            if (roll == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                `)
                music.playMelody("C5 - - - - - - - ", 700)
            }
            
            if (roll == 2) {
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . #
                `)
                music.playMelody("C5 - C5 - - - - - ", 700)
            }
            
            if (roll == 3) {
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . #
                `)
                music.playMelody("C5 - C5 - C5 - - - ", 700)
            }
            
            if (roll == 4) {
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . #
                `)
                music.playMelody("C5 - C5 - C5 - C5 - ", 700)
            }
            
            if (roll == 5) {
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . #
                `)
                music.playMelody("C5 - C5 - C5 - C5 - C5 -", 700)
            }
            
            if (roll == 6) {
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    # . . . #
                    . . . . .
                    # . . . #
                `)
                music.playMelody("C5 - C5 - C5 - C5 - C5 - C5", 700)
            }
            
            if (roll == 7) {
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    # . # . #
                    . . . . .
                    # . . . #
                `)
                music.playMelody("C5 - C5 - C5 - C5 - C5 - C5 - C5", 700)
            }
            
            if (roll == 8) {
                basic.showLeds(`
                    # . . . #
                    . . # . .
                    # . . . #
                    . . # . .
                    # . . . #
                `)
                music.playMelody("C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5", 700)
            }
            
            if (roll == 9) {
                basic.showLeds(`
                    # . # . #
                    . . . . .
                    # . # . #
                    . . . . .
                    # . # . #
                `)
                music.playMelody("C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5", 700)
            }
            
            if (roll == 10) {
                basic.showLeds(`
                    # . . . #
                    # . . . #
                    # . . . #
                    # . . . #
                    # . . . #
                `)
                music.playMelody("C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5", 700)
            }
            
            povoleno = false
        }
        
    }
    
})
