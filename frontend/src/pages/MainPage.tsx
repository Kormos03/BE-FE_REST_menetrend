import { useEffect, useState } from "react"
import { IMenetrend } from "../IMenetrend"

export function MainPage(){
    const [jaratok, setJaratok] = useState([] as IMenetrend[])
    let tempAllomasok = [];

    useEffect(() => {
        async function loadRoutes(){
        const response = await fetch('http://localhost:3000/jaratok', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            const data = await response.json()
            setJaratok(data)
            console.log(jaratok)
            console.log('data: '+data)
        }
        else{
            console.error('Something went wrong!')
        }

    }
    loadRoutes()
    tempAllomasok = []  
    }, [])

    
    let groupedJaratok = jaratok.reduce((grouped, jarat) => {
        (grouped[jarat.allomasok] = grouped[jarat.allomasok] || []).push(jarat.idopont);
        return grouped;
    }, {});
    
    return  <>
        <h1>Menetrend</h1>
            <tbody>
                <h2>Mindennap</h2>
            {Object.entries(groupedJaratok).map(([allomasok, idopontok]) => (
                <tr>
                    <td>{allomasok}</td>
                    <td>{idopontok.join(', ')}</td>
                </tr>
            ))}
        </tbody>
    </>
}