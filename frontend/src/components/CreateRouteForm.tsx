import { useEffect, useState } from "react"

export function CreateRouteForm(){
        const  [allomasok, setAllomasok] = useState('')
        const [idopont, setIdopont] = useState('')
        const [error, setError] = useState('')

        async function sendRoute(){
        const response = await fetch('http://localhost:3000/jaratok', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({allomasok, idopont})
        })
        if(response.ok){
            console.log('Route sent!')
            setError('A járat sikeresen elküldve!')
            setAllomasok([])
            setIdopont([])
        }
        else{
            console.error('Something went wrong!')
            setError('Valami hiba történt!')
        }

    }


    return <>
    <form action="">
        <label>Megállók:<input type="text" onChange={e => { setAllomasok(e.currentTarget.value)}}/></label><br />
        <label>Időpontok:<input type="text" onChange={e => { setIdopont(e.currentTarget.value)}}/></label>
        <button type='submit' onClick={sendRoute}>Járat elküldése</button>
    </form>
    <p>{error}</p>
    </>
}