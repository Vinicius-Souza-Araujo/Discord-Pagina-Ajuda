import './Footer.css'


export default function Footer(){
    return(
        <div className="box-footer">

            <button className='btn-sabia-mais'>SAIBA MAIS</button>
            
            <div className='box-conteudo-footer-1'>
            
                   
                    <div className='box-img-navegadores'>
                        <img className='img-navegadores' src="../../assets/navegadores.svg" />
                    </div>

                    <div className='box-img-mobile'>
                        <img className='img-mobile-android' src="../../assets/android.svg" />
                        <img className='img-mobile-ios' src="../../assets/ios.svg" />
                    </div>

                    <div className='box-img-windows-e-x'>
                        <img className='img-windows' src="../../assets/windows.svg" />
                        <img className='img-x' src="../../assets/x.svg" />
                    </div>
              



            </div>

            <div className='box-conteudo-footer-2'>

            <img className='logo-footer' src="../../assets/logo.svg" />


            <div className='box-text-conteudo-footer-2'>
                <div>
                <p className='p-footer-2'>Download</p>
                <p className='p-footer-2'>Ajuda e Suporte</p>
                <p className='p-footer-2'>Feedback</p>
                <p className='p-footer-2'>Status</p>
                </div>

                <div>
                <p className='p-footer-2'>Parceiros</p>
                <p className='p-footer-2'>HypeSquad</p>
                <p className='p-footer-2'>Merchandising</p>
                <p className='p-footer-2'>Branding</p>
                </div>

                <div>
                <p className='p-footer-2'>Companhia</p>
                <p className='p-footer-2'>Trabalhe  Conosco - <span className='p-contratando'>Estamos contratando</span></p>
                <p className='p-footer-2'>Blog</p>
                <p className='p-footer-2'>Termos <span className='e-comercial-footer2'>&</span> Privacidade</p>
                </div>

                
            </div>
               
            
            </div>

            <div>
            <button className='btn-ajuda-footer-2'>
                <img className='img-ajuda-btn-ajuda-footer-2' src='../../assets/ajuda.png' />
                Ajuda
            </button>
            </div>

        </div>
    );
}