namespace SpriteKind {
    export const Bullet = SpriteKind.create()
    export const BulletB = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Bullet, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(10)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.BulletB, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 200)
    info.changeScoreBy(20)
    music.pewPew.play()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (ShootPower >= 80) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 4 
            . . . . . . . . . . . . 4 4 4 4 
            . . . . . . . . . . . 4 4 5 5 4 
            . . . . . . . . . 4 4 4 5 5 5 4 
            . . . . . . . 4 4 4 5 5 5 5 5 5 
            . . 4 4 4 4 4 4 5 5 5 5 5 5 2 5 
            . . . . . . . 4 4 4 5 5 5 5 5 5 
            . . . . . . . . . 4 4 4 5 5 5 4 
            . . . . . . . . . . . 4 4 5 5 4 
            . . . . . . . . . . . . 4 4 4 4 
            . . . . . . . . . . . . . . . 4 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 80, 0)
        projectile.setKind(SpriteKind.BulletB)
        music.beamUp.play()
    }
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . e e e f e 2 2 b f f f d c . 
        . e e 2 2 d f e 2 1 1 1 1 b c . 
        . e e 2 2 d f e e e c c c . . . 
        . b 1 1 e e 2 2 e e c . . . . . 
        . . f d d 2 2 2 f f f d d . . . 
        e e f d d e e e . f f d d . . . 
        e e e f f f f f . . . . . . . . 
        e e . . . . f f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `)
    ChangeAnimFlag = 0
    ShootPower = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 80, 80)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . 2 8 2 
        . . . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    projectile.setKind(SpriteKind.Bullet)
    pause(250)
})
let Enemy2: Sprite = null
let Enemy1: Sprite = null
let Enemy3: Sprite = null
let Enemy3Available = 0
let Timer = 0
let projectile: Sprite = null
let ShootPower = 0
let ChangeAnimFlag = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . e e e f e 2 2 b f f f d c . 
    . e e 2 2 d f e 2 1 1 1 1 b c . 
    . e e 2 2 d f e e e c c c . . . 
    . b 1 1 e e 2 2 e e c . . . . . 
    . . f d d 2 2 2 f f f d d . . . 
    e e f d d e e e . f f d d . . . 
    e e e f f f f f . . . . . . . . 
    e e . . . . f f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 80, 80)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setPosition(6, 60)
let statusbar = statusbars.create(20, 3, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite)
statusbar.value = 80
statusbar.setColor(5, 12)
ChangeAnimFlag = 0
game.onUpdate(function () {
    Timer += 0.1
    console.logValue("Timer", Timer)
    console.logValue("Position", Math.sin(Timer))
    if (Enemy3Available == 1) {
        Enemy3.y += Math.sin(Timer) * randint(1, 4)
    }
})
game.onUpdateInterval(2000, function () {
    if (Math.percentChance(20)) {
        Enemy3 = sprites.create(img`
            ....ffffff.........ccc..
            ....ff88ccf.......ccaf..
            .....ffccccfff...ccaaf..
            ....cc8aaa8888ccccaa8f..
            ...c9baa88888888cca88f..
            ..c999b8888888888888fc..
            .c8b99111b888888888c88c.
            c888b111998888ccccccc88f
            f888888888888c888ccfffff
            .f8888888888aa8888f.....
            ..ff8888888cfaa8888f....
            ....ffffffffffaa8888c...
            .........f8cfffc8888c...
            .........fcc8ffffffff...
            ..........fc8ffff.......
            ...........fffff........
            `, SpriteKind.Enemy)
        Enemy3.setPosition(160, randint(40, 80))
        Enemy3.vx = -20
        Enemy3Available = 1
    }
})
forever(function () {
    console.log(ShootPower)
    statusbar.value = ShootPower
    if (controller.A.isPressed()) {
        ShootPower += 1
        if (ShootPower > 80 && ChangeAnimFlag == 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . 2 2 2 2 2 e . . . . . . 
                . . . 2 2 2 2 d 2 2 e . . . . . 
                . . e 2 2 2 2 2 2 2 e . . . . . 
                . . e 2 2 2 2 2 2 2 e . . . . . 
                . . e 2 2 2 2 2 e f f c c . . . 
                . . e e 2 2 e f f f f b c . 5 . 
                . e e e f e 2 b f f f d c . . . 
                e e 2 2 d f 2 1 1 1 1 b c . . . 
                e e 2 2 d f e e c c c . . . . . 
                b 1 1 d e 2 2 e e c . . . . . . 
                . f f e 2 2 2 2 e . . . . . . . 
                . . f f d d 2 2 f f d d . . . . 
                . . f f d d e e f f d d . . . . 
                . . . f f f f . . . . . . . . . 
                . . e e e f f f . . . . . . . . 
                . . e e e e f f f . . . . . . . 
                `,img`
                . . . . 2 2 2 2 2 e . . . . . . 
                . . . 2 2 2 2 d 2 2 e . . . . . 
                . . e 2 2 2 2 2 2 2 e . . 5 . . 
                . . e 2 2 2 2 2 2 2 e . . . . . 
                . . e 2 2 2 2 2 e f f c c . . . 
                . . e e 2 2 e f f f f b c . 5 . 
                . e e e f e 2 b f f f d c . . . 
                e e 2 2 d f 2 1 1 1 1 b c . . . 
                e e 2 2 d f e e c c c . . . 5 . 
                b 1 1 d e 2 2 e e c . . . . . . 
                . f f e 2 2 2 2 e . . . . . . . 
                . . f f d d 2 2 f f d d . 5 . . 
                . . f f d d e e f f d d . . . . 
                . . . f f f f . . . . . . . . . 
                . . e e e f f f . . . . . . . . 
                . . e e e e f f f . . . . . . . 
                `,img`
                . . . . 2 2 2 2 2 e . . . . . . 
                . . . 2 2 2 2 d 2 2 e . . . . . 
                . . e 2 2 2 2 2 2 2 e . . 5 4 . 
                . . e 2 2 2 2 2 2 2 e . . 5 5 . 
                . . e 2 2 2 2 2 e f f c c . . . 
                . . e e 2 2 e f f f f b c . 5 4 
                . e e e f e 2 b f f f d c . 5 5 
                e e 2 2 d f 2 1 1 1 1 b c . . . 
                e e 2 2 d f e e c c c . . . 5 4 
                b 1 1 d e 2 2 e e c . . . . 5 5 
                . f f e 2 2 2 2 e . . . . . . . 
                . . f f d d 2 2 f f d d . 5 4 . 
                . . f f d d e e f f d d . 5 5 . 
                . . . f f f f . . . . . . . . . 
                . . e e e f f f . . . . . . . . 
                . . e e e e f f f . . . . . . . 
                `],
            100,
            true
            )
            ChangeAnimFlag = 1
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(70)) {
        Enemy1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c a a a a c . . . 
            . . . . . c c c c c c a c . . . 
            . . . . c c 8 8 8 8 a c c . . . 
            . . . c 8 a 8 8 8 8 8 a c . c c 
            . . c 8 8 8 a 8 8 8 8 a a c 8 c 
            . c 8 8 8 8 a 8 8 8 8 8 a c 8 c 
            c 8 8 8 8 8 a 8 8 8 8 8 a 8 8 c 
            c 8 8 8 5 8 a c c 8 8 8 a c 8 c 
            c 8 8 8 8 8 a 8 8 c 8 8 a c 8 c 
            . c 8 8 8 8 a c 8 c 8 a c c c c 
            . . c c 8 a 8 8 c c 8 c c c . . 
            . . . . c c 8 8 8 8 c a c c . . 
            . . . . . . c c c c a a a c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Enemy)
        Enemy1.setPosition(160, randint(5, 115))
        Enemy1.setVelocity(randint(-20, -40), 0)
    } else {
        Enemy2 = sprites.create(img`
            .............ccfff..............
            ...........ccdd5cf..............
            ..........ccdd55f...............
            ..........fcc55cf...............
            .....fffffccccccff.........ccc..
            ...ff5555555c5555cfff....cc55c..
            ..f55555555cbc5555cccff.c555c...
            ff555555aa55c5c555cccccfc555f...
            f5c555bbaab5c55555cccccff55f....
            f555bbbbbbbb55555ccccccc55cf....
            .f5bbb33ccbb5555cccccccccccf....
            ..fccc3bcbbb555ccccc555ff55cf...
            ...fcb3cbbbc555fc5555cc..f55f...
            ....fcccbbbf5d55cc5cc.....f55f..
            ........ccccfcd55cc........fff..
            .............fffff..............
            `, SpriteKind.Enemy)
        Enemy2.setPosition(160, randint(5, 115))
        Enemy2.setVelocity(randint(-20, -40), randint(-20, 20))
    }
})
