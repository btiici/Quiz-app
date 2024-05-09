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

    function checkAnswer(){
       
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
                    <p>
                    <a href="" className="check">Check answers</a>
                    </p>
                    <img src={blob4} className="blob4" />
                </div>
            )}
        </div>
    )
}