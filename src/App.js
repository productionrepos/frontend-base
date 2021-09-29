import RouterComponent from "./router/RouterComponent";
import {Provider} from "react-redux";
import { store } from "./store/store";

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
