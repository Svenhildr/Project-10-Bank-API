/* import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './app/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
 */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "../components/NavBar";
import Home from "../views/Home";
import Signin from "../views/Signin";
import Layout from "../components/Layout";
import UserPage from "../views/Userpage";

// import Features from "../views/Features";
// import Footer from "./components/Footer";
//import NotFound from './pages/NotFound';  Pour les routes non trouvées

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<Signin />} />
                    <Route path="/profile" element={<UserPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
