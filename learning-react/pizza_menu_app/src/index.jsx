import React from 'react';
import ReactDOM from 'react-dom/client';

import {pizzaData} from './data.js';
import './index.css';


function App() {
    return (
        <div className="container">
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
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {

    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {pizzas.map(pizza => (
                        <Pizza pizzaObj={pizza} key={pizza.name} />
                    ))}
                </ul>
            ) : (
                <p>We're still working on our menu. Please come back later:</p>
            )}

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
            {isOpen ? (
                <div className="order">
                    <p>
                        We're open until {closeHour}:00. Come visit us or order online
                    </p>
                    <button className="btn">Order</button>
                </div>
            ): (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);