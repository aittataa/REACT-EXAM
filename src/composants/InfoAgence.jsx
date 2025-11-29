import { useState } from "react"
//import '../global.css'

function InfoAgence(arg) {
    const [formData, setformData] = useState({
        nom: 'Jon DOE', object: 'Hello World', message: 'My Message'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Formulaire : `, formData)
        //alert(`Formulaire : `, formData)
    }

    /*return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Firstname</p>
                <input type="text" name='firstname' value={formData.firstname} onChange={handleChange}></input>
                <br />
                <p>Lastname</p>
                <input type="text" name='lastname' value={formData.lastname} onChange={handleChange}></input>
                <br />
                <p>email</p>
                <input type="email" name='email' value={formData.email} onChange={handleChange}></input>
                <br />
                <p>password</p>
                <input type="password" name='password' value={formData.password} onChange={handleChange}></input>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )*/

    return (
        <div>
            <h1>Informations de l'Agence</h1>
            <h3>Nom de l'agence' : {arg.agence}</h3>
            <h3>Localisation : {arg.localisation}</h3>

            <form onSubmit={handleSubmit}>
                <p>Nom</p>
                <input type="text" name='nom' value={formData.nom} onChange={handleChange}></input>
                <p>Objet</p>
                <input type="text" name='objet' value={formData.object} onChange={handleChange}></input>
                <p>Message</p>
                <input type="textarea" name='message' value={formData.message} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default InfoAgence