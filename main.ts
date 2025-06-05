// variables
let array:string[] = ["rock", "paper", "scissors"]
let playerchoice: number = null
let cpuchoice: number = null
let fortunenum: number = null
let answer = ["Unclear, ask again.", "I'm not sure.", "Yeah, that'll go well.", "Signs point to yes.", "Most likely, yes.", "Proceed with caution.", "I have a bad feeling about this.", "Don't try it."]
let countdownimages:Image[] = [assets.image`ROCK`,assets.image`PAPER`,assets.image`SCISSORS`,assets.image`GO`]
let countdown:Sprite = sprites.create(assets.image`myImage`,SpriteKind.Projectile)
let player: Sprite = null
let winner: number = null
let narrator = sprites.create(assets.image`myImage`, SpriteKind.Food)
let results:String[] = ["you lose!","you win!","it's a tie!"]
// functions
function setchoices() {
    playerchoice = game.askForNumber("0 = rock, 1 = paper, 2 = scissors",1,false)
    cpuchoice = randint(0, 2)
}
function fortune() {
    let mushroom = sprites.create(assets.image`shroom`, SpriteKind.Player)
    game.splash("Now ask the mushroom how that will go")
    mushroom.sayText("...",2000)
    pause(2000)
    fortunenum = randint(0, 7)
    mushroom.sayText(answer[fortunenum],3000,true,randint(2,13),)
    pause(4000)
    mushroom.destroy()
}
function compare() {
    music.play(music.stringPlayable("E - E - E - A - ", 150), music.PlaybackMode.InBackground)
    for (let i = 0; i < 4; i++){
        countdown.setImage(countdownimages[i])
        pause(750)
        if (i == 3){
            countdown.destroy()
        }
    }
    if (cpuchoice == 0) {
        let cpu = sprites.create(assets.image`rockcpu`, SpriteKind.Enemy)
        cpu.x = 152
        if (playerchoice == 0) {
            player = sprites.create(assets.image`rockplayer`, SpriteKind.Player)
            winner = 2
        }
        else {
            if (playerchoice == 1) {
                player = sprites.create(assets.image`paperplayer`, SpriteKind.Player)
                winner = 1
            }
            else {
                player = sprites.create(assets.image`scissorsplayer`, SpriteKind.Player)
                winner = 0
            }
        }
    }
    if (cpuchoice == 1) {
        let cpu = sprites.create(assets.image`papercpu`, SpriteKind.Enemy)
        cpu.x = 152
        if (playerchoice == 0) {
            player = sprites.create(assets.image`rockplayer`, SpriteKind.Player)
            winner = 0
        }
        else {
            if (playerchoice == 1) {
                player = sprites.create(assets.image`paperplayer`, SpriteKind.Player)
                winner = 2
            }
            else {
                player = sprites.create(assets.image`scissorsplayer`, SpriteKind.Player)
                winner = 1
            }
        }
    }    if (cpuchoice == 2) {
        let cpu = sprites.create(assets.image`scissorscpu`, SpriteKind.Enemy)
        cpu.x = 152
        if (playerchoice == 0) {
            player = sprites.create(assets.image`rockplayer`, SpriteKind.Player)
            winner = 1
        }
        else {
            if (playerchoice == 1) {
                player = sprites.create(assets.image`paperplayer`, SpriteKind.Player)
                winner = 0
            }
            else {
                player = sprites.create(assets.image`scissorsplayer`, SpriteKind.Player)
                winner = 2
            }
        }
    }
    player.x = 8
    narrator.sayText("you chose " + array[playerchoice] + ", the CPU chose " + array[cpuchoice] + ", this means " + results[winner])
    pause(2000)
    if (winner == 1) {
        game.gameOver(true)
    }
    else {
        game.gameOver(false)
    }
}
// event handlers

// main program
setchoices()
fortune()
compare()
game.onUpdate(() => {
    // Code in this function will run once per frame. MakeCode
    // Arcade games run at 30 FPS
});