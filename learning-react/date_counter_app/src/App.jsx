import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

// eslint-disable-next-line react-refresh/only-export-components
function App() {

    const [step, setStep] = React.useState(1);
    const [count, setCount] = React.useState(0);

    function handleStepPlus() { setStep((s) => s + 1); }
    function handleStepMinus() { if (step > 1) setStep((s) => s - 1); }
    function handleCountPlus() { setCount((c) => c + step); }
    function handleCountMinus() { setCount((c) => c - step); }

    return (
        <div className="App">
            <h1>React Counter & Calendar</h1>

            <Counter
                step={step}
                count={count}
                onStepPlus={handleStepPlus}
                onStepMinus={handleStepMinus}
                onCountPlus={handleCountPlus}
                onCountMinus={handleCountMinus}
            />

            <Calendar count={count} />
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
function Counter({ step, count, onStepPlus, onStepMinus, onCountPlus, onCountMinus }) {
    return (
        <div style={{ marginBottom: "20px" }}>
            <div>
                <button onClick={onStepMinus}>-</button>
                <span> Step: {step} </span>
                <button onClick={onStepPlus}>+</button>
            </div>

            <div style={{ marginTop: "10px" }}>
                <button onClick={onCountMinus}>-</button>
                <span> Counter: {count} </span>
                <button onClick={onCountPlus}>+</button>
            </div>
        </div>
    );
}


// eslint-disable-next-line react-refresh/only-export-components
function Calendar({ count }) {

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
        </div>
    );
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
