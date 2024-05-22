import React from "react"


export default function Main ({item, generateOptions, options, holdOption}){

    React.useEffect(() => {
        generateOptions(item)
    }, []) 

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
            <h2>{item.question}</h2>
            <span>
                {buttonElements}
            </span>
        </div>
    )
}