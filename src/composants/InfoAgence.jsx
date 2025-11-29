import { useState } from "react"
//import '../global.css'

function InfoAgence(arg) {
    const [form, setForm] = useState({
        nom: 'Hello', object: 'World', message: 'Hello World'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <div>
            <h1>Informations de l'Agence</h1>
            <h3>Nom de l'agence' : {arg.agence}</h3>
            <h3>Localisation : {arg.localisation}</h3>

            <form onSubmit={handleSubmit}>
                <p>Nom</p>
                <input type="text" name='nom' value={form.nom} onChange={handleChange}></input>
                <p>Objet</p>
                <input type="text" name='objet' value={form.object} onChange={handleChange}></input>
                <p>Message</p>
                <input type="textarea" name='message' value={form.message} onChange={handleChange}></input>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default InfoAgence