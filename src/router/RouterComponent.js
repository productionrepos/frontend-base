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
import CardView from '../components/Cards/CardView/CardView'
import {CardLogin} from '../components/login/card/CardLogin'
import FormView from '../components/Forms/FormView/FormView';
import ButtonView from '../components/Buttons/ButtonView/ButtonView';
import NavBarView from '../components/NavBars/NavBarView/NavBarView';
import DropDownView from '../components/DropDowns/DropwDownView/DropDownView';
import TypographyView from '../components/Typography/TypographyView/TypographyView'
const RouterComponent = props => {

    const dispatch = useDispatch();
    const selector = useSelector(selector => selector.auth.conectado);

    const [checking, setchecking] = useState(true);
    // eslint-disable-next-line 
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect( () => {

        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login() );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
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
                            path = '/Cards'
                            component = { CardView }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = '/Forms'
                            component = { FormView }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = '/Dropdowns'
                            component = { DropDownView }
                            isAuthenticated = { selector }
                        />         
                        <PrivateRoute
                            path = '/Typography'
                            component = { TypographyView }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = '/Buttons'
                            component = { ButtonView }
                            isAuthenticated = { selector }
                        />
                        <PrivateRoute
                            path = '/Navbars'
                            component = { NavBarView }
                            isAuthenticated = { selector }
                        />               
                    </Switch>
                </div>
            </Router>
        </Router>
    );
};

export default RouterComponent;
