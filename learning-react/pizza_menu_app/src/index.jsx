import React from 'react';
import ReactDOM from 'react-dom/client';

import {pizzaData} from './data.js';
import './index.css';


// eslint-disable-next-line react-refresh/only-export-components
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
function Pizza({pizzaObj}) {

    //if(pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
            </div>
        </li>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
function Menu() {

    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>


            {numPizzas > 0 ? (
                <React.Fragment>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from our
                        stone oven, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map(pizza => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </React.Fragment>
            ) : (
                <p>We're still working on our menu. Please come back later:</p>
            )}

        </main>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? <Order closeHour={closeHour} openHour={openHour} /> : (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online
            </p>
            <button className="btn">Order</button>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);