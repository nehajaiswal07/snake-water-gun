// use js to create snake,water,gun.the game ask you to enter s,w,or g. the computer should be able to randomly 
// generate s,w,g and declare win or loss using alert .use confirm and prompt required..

// s=snake
// w=water
// g=gun
// computer win (c)                             user win(u)
//  c        u                                     same but opposite for user
//  s        w
//  w        g
//  g        s
//  draw--- (s,s)(w,w)(g,g)


function generateRandomString(length) {
    const characters = 'swg'; // Characters to use in the random string
    let result = '';

    // Generate the random string
    for (let i = 0; i < length; i++) {
        // Pick a random character from the characters string
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}
alert(" || You have only five chances to win the game..||")
let play = confirm("Do you want to play this Game !")
if (play) {
    let computer_guess_chance = 0;
    let user_guess_chance = 0;
    guess_chances = 1
    while (guess_chances <= 5) {

        let user_input = prompt("Enter  \'s'\  for snake ,   \'w'\  for water and   \'g'\  for gun ! Select only one! ")
        console.log("Your choice : ", user_input)


        const randomStringLength = 1; // Desired length of the random string
        const computer_choice = generateRandomString(randomStringLength);
        console.log("Computer choice : ", computer_choice); // Outputs a random string of length 10 consisting of 's', 'w', and 'g'

        if (user_input == computer_choice) {
            alert("It's Draw !")
            console.log(`          ${5 - guess_chances} Chances left..`)
        }
        else if (computer_choice == 's' && user_input == 'w' || computer_choice == 'w' && user_input == 'g' || computer_choice == 'g' && user_input == 's') {
            alert("OOPS! You loose..")
            console.log(`          ${5 - guess_chances} Chances left..`)
            computer_guess_chance++
        }
        else {
            alert("Congrats you win !")
            console.log(`          ${5 - guess_chances} Chances left..`)
            user_guess_chance++;

        }
        guess_chances++
    }
console.log("Game is over .....")
console.log("   Your score : ", user_guess_chance)
console.log("   Computer's score : ", computer_guess_chance)
}
else{
    alert(" you exit the game !")
}

