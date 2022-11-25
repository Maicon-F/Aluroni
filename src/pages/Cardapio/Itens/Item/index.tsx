import style from "./Item.module.scss";
import classNames from 'classnames';



export default function Item(
  ) {

    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img/>
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>Titulo</h2>
                    <p>descricao</p>
                </div>

                <div className={style.item__tags}>
                    <div className={classNames({
                      [style.item__tipo]: true,
                      })}>
                        'Categoria'
                    </div>
                    <div className={style.item__porcao}>
                        '400g'
                    </div>
                    <div className={style.item__qtdpessoas}>
                        Serve 4 pessoas
                    </div>
                    <div className={style.item__valor}>
                       R$ 50,00
                    </div>
                </div>

            </div>
        </div>
    )
}
