input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index - 3)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, index - 3)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index - 2)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, index - 2)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index - 1)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, index - 1)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, index)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index + 1)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, index + 1)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index + 2)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, index + 2)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index + 3)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, index + 3)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
