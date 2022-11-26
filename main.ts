let strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
let shiftLedStrip = 1
basic.forever(function () {
    basic.showString("Ukulunch")
    for (let index = 0; index < 4; index++) {
        images.createBigImage(`
            . . # . . . . # . .
            . # . . . . # # . .
            # . . . . # # # . .
            . # . . . . # # . .
            . . # . . . . # . .
            `).scrollImage(1, 150)
    }
})
control.inBackground(function () {
    while (true) {
        for (let index = 0; index < 7; index++) {
            strip.shift(1)
            strip.show()
            basic.pause(100)
        }
        strip.setPixelColor(0, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        strip.show()
        basic.pause(100)
    }
})
