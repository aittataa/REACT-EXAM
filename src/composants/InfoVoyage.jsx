import { useState } from "react"
import '../global.css'

function InfoVoyage(arg) {
    const [duree, setDuree] = useState(0)
    function dureePlus() {
        setDuree(duree + 1)
    }

    function dureeMinus() {
        if (duree !== 0) { setDuree(duree - 1) }
    }

    return (
        <div id="voyage">
            <h1>Informations du Voyage</h1>
            <h3>Destination : {arg.destination}</h3>
            <h3>Duree : {duree} jours</h3>
            <button onClick={dureeMinus}>- Duree</button>
            <button onClick={dureePlus}>+ Duree</button>
        </div>
    )
}

export default InfoVoyage