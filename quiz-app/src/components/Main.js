import blob3 from "../images/blob 2.svg"
import blob4 from "../images/blob 3.svg"


export default function Main (props){

    const answerOptions = [...props.item.incorrect_answers, props.item.correct_answer].sort(() => Math.random() - 0.5);
    const options = answerOptions.map((option, index) => (
        <button 
        key={index}
        option={option}>{option}</button>
    ))
    return(
        <div>
            <h2>{props.item.question}</h2>
            <span>
                {options}
            </span>
        </div>
    )
}