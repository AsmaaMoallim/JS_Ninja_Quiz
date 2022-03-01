const correct = ["A", "B", "A", "C"];

const form = document.querySelector(".quiz__form");
const score_lable = document.querySelector(".quiz__score");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.question_1.value,
    form.question_2.value,
    form.question_3.value,
    form.question_4.value,
  ];

  // cheack answers
  userAnswers.forEach((ans, ind) => {
    if (correct[ind] === ans) {
      score += 25;
    }
  });

  window.scrollTo(0, 0); //you do not need the window .. scrollTo can be used own its own
  score_lable.parentElement.style.display = "inline-block";

  let output = 0;
  const timer = setInterval(() => {
    score_lable.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 60);
});
