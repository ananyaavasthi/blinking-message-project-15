// on button A, show the time: 9:00a.m going across the screen
input.onButtonPressed(Button.A, function () {
    basic.showString("time: 9:00a.m")
})
// show boarding: 037 going across the screen
input.onButtonPressed(Button.B, function () {
    basic.showString("boarding: 037")
})
// show the place: Boston, going across the screen
basic.showString("place: Boston")
basic.forever(function () {
	
})
