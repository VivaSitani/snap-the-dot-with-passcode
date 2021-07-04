input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
basic.forever(function () {
	
})
