import React from "react"
import blob1 from "../src/images/blob 5 (1).svg"
import blob2 from "../src/images/blob 5.svg"
import Main from "./components/Main"
import blob3 from "./images/blob 2.svg"
import blob4 from "./images/blob 3.svg"

export default function App(){
    const [showMain, setShowMain]= React.useState(false)

    const [questions, setQuestions]=React.useState([])

    const [checkAnswerFunction, setCheckAnswerFunction] = React.useState(null);
       
    function handleStartQuiz(){
        setShowMain(true);
    }

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=medium")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
        .catch(error => console.error("Error fetching data:", error))
            },[]);

    const allQuestions = questions.map((item, index) =>{
        return(
            <Main
            item={item}
            key={index}
            />
        )
    })

    

    // function handleCheckAnswer(event, option, correctAnswer) {
    //     event.preventDefault();
    //     console.log("handleCheckAnswer called with:", option, correctAnswer);

    //     if (checkAnswerFunction) {
    //       const result = checkAnswerFunction(option, correctAnswer);
    //       console.log("Answer result:", result);
    //     }else {
    //         console.log("checkAnswerFunction is not defined.");
    //       }
    //   }
    // function handleAnswer(option, correctAnswer) {
    //     const result = checkAnswer(option, correctAnswer);
    //     setAnswers((prevAnswers) => [...prevAnswers, result]);
    //   }

    //   function handleCheckAnswers(event) {
    //     const allCorrect = answers.every((answer) => answer === "green");
    //     event.preventDefault();
    //     if (allCorrect) {
    //         console.log("All answers correct!");
    //       } else {
    //         console.log("Some answers are incorrect.");
    //       }
    //   }
     
    return(
        <div>
            {!showMain && (
            <main>
                <img src={blob1} className="blob1"/>
                <h1>Quizzical</h1>
                <h3>Some description if needed</h3>
                <button className="start" onClick={handleStartQuiz}>Start quiz</button>
                <img src={blob2} className="blob2"/>
            </main>
            )}
            {showMain && (
                <div className="main">
                    <img src={blob3} className="blob3" />
                    {allQuestions}
                    <p onClick={(event, option, correct_answer) => handleCheckAnswer(event, option, correct_answer)}>
                    <a href="" className="check">Check answers</a>
                    </p>
                    <img src={blob4} className="blob4" />
                </div>
            )}
        </div>
    )
}