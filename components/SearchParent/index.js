/* default */
import { useState } from 'react'
/* package */


export default function SearchParent() {

    const [searchParent, setSearchParent]  = useState(null)
    console.log(searchParent)
    const thereIsParent = e =>{
        setSearchParent(e.target.value)
        console.log(searchParent)     
    }

    return (
        <div>
                <legent>Buscar datos del padre o tutor</legent>
                <div className="input-group mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ingresa el nombre del padre o tutor"
                        aria-label="Ingresa el nombre del padre o tutor"
                        aria-describedby="email-parent" />
                    <button className="btn btn-outline-secondary" type="button" id="email-parent">Buscar</button>
                </div>


            </div>
    )
}