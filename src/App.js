import './App.css';
import profiler from './img/profile-metodo-fire.png';

function App() {
  return (
    <div className="App">

      <div className="box-App">

        <h1>
          Venda nas<br/> 
          Redes com<br/> 
          Estratégia
        </h1>

        <h2>
          Aprenda a<br/> 
          aumentar<br/> 
          suas<br/> 
          <strong>VENDAS</strong><br/> 
          com o FIRE
        </h2>


        <p>
          Destrave suas <br/> vendas de uma vez <br/> 
          por todas através<br/> da internet, usando<br/> 
          suas redes sociais.
        </p>

        <button>
          <a href='https://pay.hotmart.com/O101138882Q' target='_blank'>ENTRAR PARA O FIRE</a>
        </button>

        <img src={profiler} />

      </div>

    </div>
  );
}

export default App;
