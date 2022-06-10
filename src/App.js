import './App.css';
import {Fragment} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import Tourism from "./components/pages/Tourism";
import Tour from "./components/pages/Tour";
import SignUp from "./components/pages/SignUp";
import ScrollToTop from "./ScrolltoTop";
function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <ScrollToTop />
                <Navbar/>

                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/tourism"} exact component={Tourism}/>
                    <Route path={"/tour"} exact component={Tour}/>
                    <Route path={"/sign-up"} exact component={SignUp}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
