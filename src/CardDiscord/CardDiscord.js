import "./CardDiscord.css"

export default function CardDiscord(props){
    return(
        <div className="box-card-discord">
        <div className="sub-box-card-discord">
        <img className="img-card-discord"  src={props.urlImg}/>
            <h1 className="titulo-card-discord">{props.titulo}</h1>
            <p className="p-card-discord">{props.paragrafo}</p>

        </div>
        </div>
    );
}
