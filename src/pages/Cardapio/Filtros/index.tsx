import style from "./Filtros.module.scss";
import filtros from "./Filtros.json";
import classNames from "classnames";

interface Iprops {
    filtro: number | null;
    setFiltro:  React.Dispatch<React.SetStateAction<number | null>>
}



export default function Filtros({filtro, setFiltro}: Iprops){
    function selecionarFiltro(id: number){
      
    }

    return(
        <div className={style.filtros}>
            {filtros.map(opcao => (
                <button className={classNames({
                    [style.filtros__filtro]: true,
                  
                })} key={opcao.id} onClick={()=> selecionarFiltro(opcao.id)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}