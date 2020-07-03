radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("pitch", input.rotation(Rotation.Pitch))
    radio.sendValue("roll", input.rotation(Rotation.Roll))
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 10) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Roll) < -10) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Pitch) < -10) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Pitch) > 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . . . .
            # . . . #
            . . . . .
            . . # . .
            `)
    }
})
