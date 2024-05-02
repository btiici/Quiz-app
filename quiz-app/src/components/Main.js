import blob1 from "../images/blob 2.svg"
import blob2 from "../images/blob 3.svg"


export default function Main (props){
    return(
        <main className="main">
            <img src={blob1} className="blob1"/>
            <h2>{props.item.question}</h2>
            <div>
                <button>Adiós</button>
                <button>Hola</button>
                <button>Au Revoir</button>
                <button>Salir</button>
            </div>
            <img src={blob2} className="blob2"/>
        </main>
    )
}