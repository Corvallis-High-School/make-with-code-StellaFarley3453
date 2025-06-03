// variables
let array:string[] = ["rock", "paper", "scissors"]
let playerchoice: number = null
let cpuchoice: number = null
let fortunenum: number = null
let answer = ["Unclear, ask again.", "I'm not sure.", "Yeah, that'll go well.", "Signs point to yes.", "Most likely, yes.", "Proceed with caution.", "I have a bad feeling about this.", "Don't try it."]
let countdownimages:Image[] = [assets.image`ROCK`,assets.image`PAPER`,assets.image`SCISSORS`,assets.image`GO`]
let countdown:Sprite = sprites.create(assets.image`myImage`,SpriteKind.Projectile)
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
        sprites.create(assets.image`rockcpu`,SpriteKind.Enemy)
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