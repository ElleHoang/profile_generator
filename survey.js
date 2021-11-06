const readline = require('readline'); // imports the readline function
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of Node.js? ", (answer) => {
  rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    rl.question("What's an activity you like doing? ", (answer) => {
      rl.question("What do you listen to while doing that? ", (answer) => {
        rl.question("Which meal is your favorite (eg: dinner, brunch, etc.)? ", (answer) => {
          rl.question("What's your favorite thing to eat for that meal? ", (answer) => {
            rl.question("Which sport is your absolute favorite? ", (answer) => {
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

