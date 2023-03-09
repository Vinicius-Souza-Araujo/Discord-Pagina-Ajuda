import "./Header.css"

export default function Header(){
    return(
        <div className="box-header">

            <img className="logo-header" src="../../assets/logo-roxo.svg" />
        
            <div className="box-text-header">
                <p className="p-header">Feedback</p>
                
                <p className="p-header">Português do Brasil<span><img className="img-seta" src="../../assets/seta.png" /></span></p>
                
                <p className="p-header">Enviar uma solicitação</p>
                <p className="p-header">Entrar</p>
            </div>
        </div>
    );
}