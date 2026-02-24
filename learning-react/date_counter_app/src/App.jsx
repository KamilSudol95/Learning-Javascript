import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

// eslint-disable-next-line react-refresh/only-export-components
function App() {

    const [step, setStep] = React.useState(1);
    const [count, setCount] = React.useState(0);

    function handleCountPlus() { setCount((c) => c + step); }
    function handleCountMinus() { setCount((c) => c - step); }
    function handleReset() {setCount(0);}

    return (
        <div className="App">
            <h1>React Counter & Calendar</h1>

            <Counter
                step={step}
                setStep={setStep}
                count={count}
                setCount={setCount}
                handleReset={handleReset}
                onCountPlus={handleCountPlus}
                onCountMinus={handleCountMinus}
            />

            <Calendar count={count} />
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
function Counter({ step, setStep, count, setCount, onCountPlus, onCountMinus }) {
    return (
        <div>
            <div>
                <input type='range' min='1' max='10' onChange={(e) => setStep(Number(e.target.value))} />
                <span> Step: {step} </span>
            </div>

            <div>
                <button onClick={onCountMinus}>-</button>
                <input
                    type='text'
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button onClick={onCountPlus}>+</button>
            </div>
        </div>
    );
}


// eslint-disable-next-line react-refresh/only-export-components
function Calendar({ count, handleReset }) {

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div>
            <p>
            <span>
                {count === 0
                    ? "Today is "
                    : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
            </span>
                <strong>{date.toDateString()}</strong>
            </p>

            {count !== 0 ? (
                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : null}
        </div>
    );
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
