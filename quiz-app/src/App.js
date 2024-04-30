import blob1 from "../src/images/blob 5 (1).svg"
import blob2 from "../src/images/blob 5.svg"


export default function App(){
    return(
        <main>
            <img src={blob1} className="blob1"/>
            <h1>Quizzical</h1>
            <h3>Some description if needed</h3>
            <button>Start quiz</button>
            <img src={blob2} className="blob2"/>
        </main>
    )
}