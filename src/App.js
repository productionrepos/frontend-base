import RouterComponent from "./router/RouterComponent";
import {Provider} from "react-redux";
import { store } from "./store/store";
import 'bootswatch/dist/darkly/bootstrap.min.css'; // Added this :boom:
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
function App() {
  return (

    <>
        <Provider store={ store }>
            <RouterComponent />
        </Provider>
    </>
  );
}

export default App;
