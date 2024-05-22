import React from "react"
import blob1 from "../src/images/blob 5 (1).svg"
import blob2 from "../src/images/blob 5.svg"
import Main from "./components/Main"
import blob3 from "./images/blob 2.svg"
import blob4 from "./images/blob 3.svg"
import { nanoid } from "nanoid";

export default function App(){

    const [showMain, setShowMain]= React.useState(false)

    const [questions, setQuestions]=React.useState([])

    const [options, setOptions] = React.useState([])

    
       
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
            holdOption={holdOption}
            generateOptions={generateOptions}
            options={options}
            />
        )
    })

    function generateOptions(item){
        const answerOptions = [
            ...item.incorrect_answers,
            item.correct_answer,
        ].sort(() => Math.random() - 0.5);

       return setOptions(
            answerOptions.map((option) => ({
                id: nanoid(),
                text: option,
                isHeld: false,
            }))
        );
    }

   
    function holdOption(id){
        setOptions((prevOptions) => 
        prevOptions.map((option) =>
        option.id === id ? { ...option, isHeld: !option.isHeld } : option
      )
    );
  }

  function checkAnswer(option, correct_Answer) {
    if (option.isHeld && option.text === correct_Answer) {
      return "green";
    }
    return "red";
  }

    
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
                    <p onClick={(event, option, correct_Answer) => checkAnswer(event, option, correct_Answer)}>
                    <a href="" className="check">Check answers</a>
                    </p>
                    <img src={blob4} className="blob4" />
                </div>
            )}
        </div>
    )
}