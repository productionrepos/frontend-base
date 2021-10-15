import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebase-config';
//import {CardLogin} from "../login/components/card/CardLogin";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import {login} from "../actions/auth";
// import Cards from '../login/components/CardView/Cards'
// import Home from '../login/components/Home/Home';
import Home from '../components/Home/Home'
import {CardLogin} from '../components/login/card/CardLogin'
// import CardView from '../components/Cards/CardView/CardView'
// import FormView from '../components/Forms/FormView/FormView';
// import ButtonView from '../components/Buttons/ButtonView/ButtonView';
// import NavBarView from '../components/NavBars/NavBarView/NavBarView';
// import DropDownView from '../components/DropDowns/DropwDownView/DropDownView';
// import AlertView from '../components/Alertas/AlertView/AlertView'
// import TypographyView from '../components/Typography/TypographyView/TypographyView'
// import Tablesview from '../components/Tables/TablesView/Tablesview';
// import Calendarview from '../components/Calendar/Calendarview';
const RouterComponent = props => {

    const dispatch = useDispatch();
    const selector = useSelector(selector => selector.auth.conectado);

    const [checking, setchecking] = useState(true);
    // eslint-disable-next-line 
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect( () => {

        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid && user.email.includes('@spread.cl') ) {
                dispatch( login() );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
                
                console.log('debe ingresar con una cuenta spread')
            }

            setchecking(false);

        } );

    }, [ dispatch, setchecking, setIsLoggedIn ]);

    if ( checking ) {
        return(
            <h1>Cargando...</h1>
        )
    }

    return (
        <Router>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            exact
                            path = "/"
                            component = { CardLogin }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/home"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/Cards"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/Alerts"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/Forms"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/Dropdowns"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/Typography"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/ButtonView"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/Navbars"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/Tables"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = "/Calendar"
                            component = { Home }
                            isAuthenticated = { selector }
                        />
                    </Switch>
                </div>
            </Router>
        </Router>
    );
};

export default RouterComponent;
