import style from './Buscador.module.scss';
import React from 'react';
import {CgSearch} from 'react-icons/cg';

interface Iprops {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}
export default function Buscardor({busca, setBusca}: Iprops){
    return(
        <div className={style.buscador}>
            <input
                value=''
                
                placeholder='Buscar'>
            </input>
            <CgSearch 
                size={20}
                color="#4C4D5E"
             />
        </div>

    )
}