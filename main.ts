controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
let mySprite2 = sprites.create(img`
    . . . . . . . . . e e e e e . . 
    . . . . . . . . e e e . e e . . 
    . . . . . . e e e e e e . e . . 
    . . . . . . e e e e e e e e . . 
    . . . . . . e . e e . e e e . . 
    . . . . . . e e e e e e e e e . 
    . . . . . . . e e e e e e e . . 
    . . . . . . . e e e e e e e . . 
    . . . . . . . e e e . . e e . . 
    . . . . . . . e . e e e e e . . 
    . . . . . . e e e e e e e e . . 
    . . . . . . e . . e e e e e . . 
    . . . . . . e e e e e e e e . . 
    . . . . . . e e e . . e e . . . 
    . . . . . . e . e e e . e . . . 
    . . . . . . e e e e e e e . . . 
    `, SpriteKind.Enemy)
let mySprite = sprites.create(img`
    . . . . . 2 . . . . . . 2 . . . 
    . . . . . 2 . . . . 2 2 . . . . 
    . . . . 5 2 5 5 5 2 . . . . . . 
    . . . . 5 2 . 2 2 5 . . . . . . 
    . . . . 5 2 . 2 2 5 . . . . . . 
    . . . . 5 . . . 2 2 . . . . . . 
    . . . . 2 2 5 5 5 2 . . . . . . 
    . . . . 2 . . . . 2 2 . . . . . 
    . . . 2 2 . . . . . 2 2 . . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . . . 2 . . . . . . 2 2 . . . 
    . . . 2 2 . . 2 . . . . 2 2 . . 
    . . . 2 . . . 2 2 . . . . 2 . . 
    . . . . . . . . . . . . . 2 2 . 
    . . . . . . . . . . . . . . 2 2 
    . . . . . . . . . . . . . . . 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.changeScoreBy(1)
info.setLife(5)
info.startCountdown(10)
mySprite.setPosition(123, 83)
