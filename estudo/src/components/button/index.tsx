'use client'

import { useState } from "react";

export function Button() {
    const [ nome, setNome] = useState('Manoel dti')
    function handleClick() {
        setNome('Manoel')
    }
    return (
        <div>
            <button onClick={handleClick} className="bg-slate-300 p-3">Alterar nome</button>
            <h3>Nome:{nome}</h3>
        </div>
    );
}