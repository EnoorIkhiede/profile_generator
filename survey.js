const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileQuestions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favorite (e.g., dinner, brunch, etc.)?",
  "What's your favorite thing to eat for that meal?",
  "Which sport is your absolute favorite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

let profileAnswers = [];

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question + " ", (answer) => {
      profileAnswers.push(answer);
      resolve();
    });
  });
};

const askQuestions = async () => {
  for (const question of profileQuestions) {
    await askQuestion(question);
  }
  rl.close();
};

const generateProfile = () => {
  const [name, activity, music, meal, food, sport, superpower] = profileAnswers;

  const profile = `Name: ${name}\n` +
    `Activity: ${activity}\n` +
    `Music: ${music}\n` +
    `Favorite Meal: ${meal}\n` +
    `Favorite Food: ${food}\n` +
    `Favorite Sport: ${sport}\n` +
    `Superpower: ${superpower}`;

  console.log("\nProfile:\n");
  console.log(profile);
};

askQuestions()
  .then(generateProfile)
  .then(() => {
    console.log("\nThank you for completing the survey! Your profile has been generated.");
  })
  .catch((error) => {
    console.log("\nAn error occurred while processing the survey:", error);
  });
