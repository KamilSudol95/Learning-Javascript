import React from 'react';
import ReactDOM from 'react-dom/client';

import {pizzaData} from './data.js';


function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Header() {
    return <h1>Fast React Pizza Co.</h1>
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                {pizzaData.map(pizza => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            </ul>
        </main>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}.{isOpen ? "We're currently open!" : "Sorry, we're closed"}
        </footer>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);