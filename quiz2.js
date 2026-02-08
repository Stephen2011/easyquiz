// Sample quiz data (10 questions). You can expand this!
const quizData = [
  { q: "What is the first book in the Bible?", a: "Genesis", choices: ["Genesis","Exodus","Psalms","Revelation"] },
  { q: "How many books are in the Bible?", a: "66", choices: ["39","27","66","52"] },
  { q: "Who was the first man created by God?", a: "Adam", choices: ["Noah","Abraham","Adam","David"] },
  { q: "Who built the ark to survive the flood?", a: "Noah", choices: ["Moses","Noah","Elijah","Daniel"] },
  { q: "Which book tells about Jesus’ life on Earth?", a: "Matthew", choices: ["Job","Matthew","Romans","Revelation"] },
  { q: "What is the shortest book in the Bible?", a: "3 John", choices: ["Philemon","Jude","3 John","Nahum"] },
  { q: "In what language was most of the Old Testament given?", a: "Hebrew", choices: ["Greek","Hebrew","Latin","Aramaic"] },
  { q: "Who led the Israelites out of Egypt?", a: "Moses", choices: ["Aaron","Samuel","Moses","Joshua"] },
  { q: "Who defeated Goliath?", a: "David", choices: ["Jonah","Peter","David","Saul"] },
  { q: "Where can you find the Lord’s Prayer?", a: "Matthew 6", choices: ["Genesis 1","Matthew 6","John 3","Acts 2"] },
  {q: "Who led Israel out of Egypt?", a:"Moses", choices:["Moses","Joshua","Aaron"] },
  {q: "Who was swallowed by a fish?", a:"Jonah", choices:["Jonah","Paul","Peter"] },
  {q: "Mother of Jesus?", a:"Mary", choices:["Mary","Ruth","Esther"] },
  {q: "First man?", a:"Adam", choices:["Adam","Noah","Abraham"] },
  {q: "First woman?", a:"Eve" , choices:["Eve","Sarah","Leah"]},
  {q: "Who killed Goliath?", a:"David" , choices:["David","Saul","Samuel"] },
  {q: "Who betrayed Jesus?", a:"Judas", choices:["Judas","Peter","John"] },
  {q: "Who denied Jesus?",  a:"Peter", choices:["Peter","James","Paul"] },
  {q: "Who wrote Psalms?", a:"David", choices:["David","Solomon","Moses"] },
  {q: "Who built the temple?", a:"Solomon", choices:["Solomon","David","Ezra"] },
  {q: "Who interpreted dreams?", a:"Joseph", choices:["Joseph","Daniel","Jacob"] },
  {q: "Who in lions’ den?", a:"Daniel" , choices:["Daniel","Paul","Peter"] },
  {q: "Who wrote Revelation?", a:"John" , choices:["John","Paul","Luke"] },
  {q: "Strongest man?", a:"Samson" , choices:["Samson","David","Saul"] },
  {q: "Who walked on water?", a:"Jesus" , choices:["Jesus","Peter","Moses"] },
  {q: "First king of Israel?", a:"Saul" , choices:["Saul","David","Solomon"] },
  {q: "Who wrote Hebrews?", a:"Unknown" , choices:["Paul","Unknown","Peter"] },
];


let shuffledQuestions;
let currentQuestionIndex = 0;

// Shuffle the questions each quiz
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

document.getElementById("startBtn").addEventListener("click", () => {
  shuffledQuestions = shuffle(quizData).slice(0,27); // Choose 27 random questions
  currentQuestionIndex = 0;
  document.getElementById("startBtn").classList.add("hidden");
  showQuestion();
});

function showQuestion() {
  document.getElementById("question-box").classList.remove("hidden");
  const current = shuffledQuestions[currentQuestionIndex];
  document.getElementById("question").textContent = current.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  shuffle(current.choices).forEach(choice => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" value="${choice}"> ${choice}`;
    answersDiv.appendChild(label);
  });

  document.getElementById("result").textContent = "";
}

document.getElementById("submitBtn").addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return alert("Please select an answer.");

  const current = shuffledQuestions[currentQuestionIndex];
  if (selected.value === current.a) {
    document.getElementById("result").textContent = "Correct! 🎉";
  } else {
    document.getElementById("result").textContent = "Incorrect. The correct answer is: " + current.a;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    setTimeout(showQuestion, 1200);
  } else {
    setTimeout(() => {
      document.getElementById("result").textContent = "Quiz Complete! Come back for another challenge!";
      document.getElementById("submitBtn").classList.add("hidden");
    }, 1200);
  }
});
