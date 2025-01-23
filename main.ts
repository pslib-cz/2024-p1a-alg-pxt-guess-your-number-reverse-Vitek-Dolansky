let min: number = 1;
let max: number = 100;
let guess: number = 0;
let attempts: number = 0;
let gameActive: boolean = false;


function resetGame(): void {
    min = 1;
    max = 100;
    guess = 0;
    attempts = 0;
    gameActive = false;
}


input.onButtonPressed(Button.A, function (): void {
    min += 1;
    basic.showString("Min: " + min);
});

input.onButtonPressed(Button.B, function (): void {
    max += 1;
    basic.showString("Max: " + max);
});

input.onButtonPressed(Button.AB, function (): void {
    if (min < max) {
        basic.showString("Interval OK");
        gameActive = true;
        startGuessing();
    } else {
        basic.showString("Err: Min >= Max");
    }
});


function startGuessing(): void {
    while (gameActive) {
        guess = Math.floor((min + max) / 2);
        attempts += 1;
        basic.showString("Guess: " + guess);

        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                
                max = guess - 1;
                break;
            } else if (input.buttonIsPressed(Button.B)) {
                
                min = guess + 1;
                break;
            } else if (input.logoIsPressed()) {
                
                basic.showString("Correct!");
                basic.showString("Attempts: " + attempts);
                gameActive = false;
                resetGame();
                break;
            }
        }
    }
}
