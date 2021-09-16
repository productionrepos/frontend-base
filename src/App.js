import './App.css';
import { Header } from './shared/header/header';
import { CardLogin } from './login/components/card/CardLogin';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content-login">
        <CardLogin></CardLogin>
      </div> 
    </div>
  );
}

export default App;
