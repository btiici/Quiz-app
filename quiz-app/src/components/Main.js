import React from "react"
import { nanoid } from "nanoid";

export default function Main (props){

    const [options, setOptions] = React.useState([])

    function generateOptions(){
        const answerOptions = [
            ...props.item.incorrect_answers,
            props.item.correct_answer,
        ].sort(() => Math.random() - 0.5);

        setOptions(
            answerOptions.map((option) => ({
                id: nanoid(),
                text: option,
                isHeld: false,
            }))
        );
    }

    React.useEffect(() => {
        generateOptions()
    }, [])


    function holdOption(id){
        setOptions((prevOptions) => 
        prevOptions.map((option) =>
        option.id === id ? { ...option, isHeld: !option.isHeld } : option
      )
    );
  }
// this function bellow, i want to use it for the check answer paragraph in the app.js.. 
  function checkAnswer(option, correct_Answer) {
    if (option.isHeld && option.text === correct_Answer) {
      return "green";
    }
    return "red";
  }

    const buttonElements = options.map((option) => {
        return(
            <button
            key={option.id}
            option={option.text}
            id={option.id}
            isHeld={option.isHeld}
            onClick={() => holdOption(option.id)}
            style={{ backgroundColor: option.isHeld ? 'rgba(214, 219, 245, 1)' : '' }}
            >{option.text}</button>
        )
      })
        return(
        <div>
            <h2>{props.item.question}</h2>
            <span>
                {buttonElements}
            </span>
        </div>
    )
}