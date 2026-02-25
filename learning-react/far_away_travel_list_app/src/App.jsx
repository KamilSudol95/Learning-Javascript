import React from "react";

import Logo from './Logo.jsx'
import Form from './Form.jsx'
import PackingList from './PackingList.jsx'
import Stats from './Stats.jsx'

export default function App() {

    const [items, setItems] = React.useState([]);


    function handleAddItem(item) {
        setItems(items => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems(items => items.filter(item => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed } : item));
    }

    function handleClearList() {
        const confirmedDelete = window.confirm('Are you sure you want to delete all items?');
        if (confirmedDelete) {
            setItems([]);
        }
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}

