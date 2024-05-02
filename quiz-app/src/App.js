import React from "react"
import blob1 from "../src/images/blob 5 (1).svg"
import blob2 from "../src/images/blob 5.svg"
import Main from "./components/Main"


export default function App(){
    const [showMain, setShowMain]= React.useState(false)

    const [questions, setQuestions]=React.useState([])

    function handleStartQuiz(){
        setShowMain(true);
    }

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&difficulty=medium")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
        .catch(error => console.error("Error fetching data:", error))
    },[])

    const allQuestions = questions.map((item, index) =>{
        return(
            <Main
            item={item}
            key={index} />
        )
    })
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
        {showMain && allQuestions}
        </div>
    )
}