import style from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import {useState} from "react";
import classNames from "classnames";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";

interface IProps {
 
}

export default function Ordenador({}: IProps){
    const ordenadorNome= '';
    const aberto = false;
   
    return(
        <button className={classNames({
            [style.ordenador]:true,
           
        })} 
            onClick={()=> ''}
            onBlur={()=> ''}
        >
            <span>{ordenadorNome || 'Ordenar por'}</span>
            {aberto? <MdKeyboardArrowUp size={20}/>: <MdKeyboardArrowDown size={20}/>}
            <div className={classNames({
                [style.ordenador__options]: true,
                [style['ordenador__options--ativo']]:aberto
            })}>
                {opcoes.map((opcao) =>(
                    <div className={classNames({
                        [style.ordenador__option]: true
                    })}
                    key={opcao.value}
                    onClick={()=> ''}
                    >{opcao.nome}</div>
                ))}
            </div>
        </button>
    )
}