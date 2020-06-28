input.onButtonPressed(Button.A, function () {
    servomotor.useservo()
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    servomotor.servo4(0)
    basic.pause(2000)
    servomotor.servo4(180)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    dcmotor.usedc()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    dcmotor.m4(false, 0)
})
input.onButtonPressed(Button.B, function () {
    dcmotor.usedc()
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    dcmotor.m4(false, 100)
})
