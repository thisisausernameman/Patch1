function renderRoad () {
    if (road == 0) {
        led.plotBrightness(0, 0, 50)
        led.plotBrightness(0, 1, 50)
        led.plotBrightness(0, 3, 50)
        led.plotBrightness(0, 4, 50)
        led.plotBrightness(4, 0, 50)
        led.plotBrightness(4, 1, 50)
        led.plotBrightness(4, 3, 50)
        led.plotBrightness(4, 4, 50)
    }
    if (road == 1) {
        led.plotBrightness(0, 1, 50)
        led.plotBrightness(0, 2, 50)
        led.plotBrightness(0, 4, 50)
        led.plotBrightness(4, 1, 50)
        led.plotBrightness(4, 2, 50)
        led.plotBrightness(4, 4, 50)
    }
    if (road == 2) {
        led.plotBrightness(0, 0, 50)
        led.plotBrightness(0, 2, 50)
        led.plotBrightness(0, 3, 50)
        led.plotBrightness(4, 0, 50)
        led.plotBrightness(4, 2, 50)
        led.plotBrightness(4, 3, 50)
    }
}
let road = 0
let playerX = 0
let playerY = 0
road = 0
basic.forever(function () {
	
})
basic.forever(function () {
    basic.clearScreen()
    renderRoad()
    led.plot(playerX, playerY)
})
basic.forever(function () {
    road = 0
    basic.pause(200)
    road = 1
    basic.pause(200)
    road = 2
    basic.pause(200)
})
// Tilt Loop
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 30 && input.rotation(Rotation.Roll) < 90) {
        playerX += 1
    }
    if (input.rotation(Rotation.Roll) < -30 && input.rotation(Rotation.Roll) > -90) {
        playerX += -1
    }
    if (input.rotation(Rotation.Pitch) > 30 && input.rotation(Rotation.Pitch) < 90) {
        playerY += 1
    }
    if (input.rotation(Rotation.Pitch) < -30 && input.rotation(Rotation.Pitch) > -90) {
        playerY += -1
    }
    basic.pause(200)
})
