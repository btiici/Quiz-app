export default function checkAnswer(option, correctAnswer) {
    if (option.isHeld && option.text === correctAnswer) {
      return "green";
    }
    return "red";
  }