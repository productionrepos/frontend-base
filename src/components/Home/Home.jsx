import React from 'react'
import './Home.css'
import { Header } from '../../shared/header/header'
import '../NavBars/NavBarComponents/Navbar.css'
import CardView from '../Cards/CardView/CardView'
import AlertView from '../Alertas/AlertView/AlertView'
import FormView from '../Forms/FormView/FormView'
import DropdownView from '../DropDowns/DropwDownView/DropDownView'
import TypographyView from '../Typography/TypographyView/TypographyView'
import ButtonView from '../Buttons/ButtonView/ButtonView'
import NavBarView from '../NavBars/NavBarView/NavBarView'
import TablesView from '../Tables/TablesView/Tablesview'
import CalendarView from '../Calendar/Calendarview'
import { Container, Row, Col } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link
  } from "react-router-dom";
  import {
    CDBSidebar,
    CDBSidebarContent,
    //CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
export default function Home() {
    return (
        <>
        <Header></Header>

        <Container fluid style={{marginTop:'2%'}}>
            
            <Row >
                <Router>
                    <Col lg={3} md={3}><Sidebar/></Col>
                    <Col lg={9} md={9}>
                        <Switch>
                            <Route path='/Cards'>
                                <CardView />
                            </Route>
                            <Route path='/Alerts'>
                                <AlertView />
                            </Route>
                            <Route path='/Forms'>
                                <FormView />
                            </Route>
                            <Route path='/Dropdowns'>
                                <DropdownView />
                            </Route>
                            <Route path='/Typography'>
                                <TypographyView />
                            </Route>
                            <Route path='/ButtonView'>
                                <ButtonView />
                            </Route>
                            <Route path='/Navbars'>
                                <NavBarView />
                            </Route>
                            <Route path='/Tables'>
                                <TablesView />
                            </Route>
                            <Route path='/Calendar'>
                                <CalendarView />
                            </Route>
                        </Switch>
                    </Col>
                    </Router>
            </Row>
        </Container>
        </>
        // <>    
        // <Header></Header>
        // <Sidebar></Sidebar>
        // </>
    )

}

const Sidebar = ()  => {
    return (
        <div style={{marginTop:'7%',position:'fixed',overflowY:'hidden'}}>
              <CDBSidebar textColor="#fff" backgroundColor="#009B78">
                <CDBSidebarHeader style={{borderColor:'#FFF'}} prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'inherit' }}
                    >
                        Componentes
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent  className="sidebar-content">
                    <CDBSidebarMenu >
                        <NavLink  exact to="/" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Cards" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="table">Cards</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Alerts" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Alerts</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Forms" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">
                            Forms
                        </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Dropdowns" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">
                            Dropdowns
                        </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Typography" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">
                            Typography
                        </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/ButtonView" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">
                            Buttons
                        </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Navbars" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">
                            Navbars
                        </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Tables" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">
                            Tables
                        </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Calendar" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">
                            Calendar
                        </CDBSidebarMenuItem>
                        </NavLink>                        
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                
              </CDBSidebar>
              

        </div>)
}