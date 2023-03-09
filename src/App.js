import logo from './logo.svg';
import './App.css';
import CardDiscord from "./CardDiscord/CardDiscord.js";
import Header from './Header/Header.js';
import Footer from "./Footer/Footer.js"

function App() {
  return (
    <div className="App">

      <Header />

      <div className='box-buscador'>
        <h1 className='titulo-principal-app'>Central de Ajuda</h1>
        <input className='buscador' placeholder='Pesquisa' />

      </div>

      <div className='box-conteudo-textual-1'>
          <h1 className='titulo-box-conteudo-textual-1'>Precisa de ajuda? Conte com a gente.</h1>
          <p className='p-box-conteudo-textual-1'>De configurações de conta a permissões, encontre ajuda sobre tudo para o Discord</p>
          <p className='p-box-conteudo-textual-1'>Se você é novo no Discord e está precisando de umas dicas, dê uma olhada no nosso Guia do Iniciante!</p>
      </div>
      <div className='box-conteudo-cads'>
          
          <CardDiscord urlImg="/assets/mega-fone.svg" titulo="Anúncios" paragrafo="Estamos de olho no que está acontecendo. Aqui está o que nós sabemos que não está certo."  />
          <CardDiscord urlImg="/assets/interface-discord.svg" titulo="Interdace do Discord" paragrafo="PRA QUE SERVE ESSE BOTÃO!?!!"  />
          <CardDiscord urlImg="/assets/config-conta.svg" titulo="Configurações de Conta" paragrafo="Você é importante e sua conta também."  />
          <CardDiscord urlImg="/assets/comecando.svg" titulo="Começando" paragrafo="Comece com o pé direito! Não com o esquerdo!"  />
          <CardDiscord urlImg="/assets/config-servidor.svg" titulo="Configurações do Servidor" paragrafo="Quase tão emocionante quanto decoração de interiores."  />
          
          <CardDiscord urlImg="/assets/programas-comunitarios.svg" titulo="Programas Comunitários" paragrafo="Hype para HypeSquaders, party para Parceiros"  />
          <CardDiscord urlImg="/assets/nitro.svg" titulo="Nitro" paragrafo="Por favor, não compre até cair. Deixe a gente te ajudar."  />
          <CardDiscord urlImg="/assets/forma-pagamento.svg" titulo="Formas de Pagamento" paragrafo="Aquela sensação quando você olha o seu saldo."  />
          <CardDiscord urlImg="/assets/confianca-seguranca.svg" titulo="Confiança e Segurança" paragrafo="Mantenha as coisas sãs e salvas para você e seus amigos."  />
          <CardDiscord urlImg="/assets/faq.svg" titulo="F.A.Q.s" paragrafo="Tudo o que você puder fazer num auto-atendimento."  />

          
      </div>

      <div>
              <div className='box-conteudo-textual-2'>
                  <h2>Outras formas de conseguir ajuda!</h2>
              </div>
              
              <div className='box-conteudo-cads'>
                  <CardDiscord urlImg="/assets/dev-jogos.svg" titulo="Desenvolvedores de Jogos" paragrafo="Sua casa para suporte com o desenvolvimento de bots, aplicativos e jogos usando nossa API e SDK!"  />
                  <CardDiscord urlImg="/assets/twitter.svg" titulo="Twitter" paragrafo="Alguma perguntinha rápida? Chame a gente no Twitter"  />
              </div>
             
          </div>


      <Footer />

    
      

      
      

    </div>
  );
}

export default App;
