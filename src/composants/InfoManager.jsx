import { useState } from "react"
import '../global.css'

function InfoManager(arg) {
    return (
        <div>
            <h1>Informations du Manager</h1>
            <h3>Nom : {arg.nom}</h3>
            <h3>Langue : {arg.languge}</h3>
        </div>
    )
}

export default InfoManager