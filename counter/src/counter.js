import React from 'react';

function handleAction(event) {
    return (
        console.log("Child did ", event)
    );
}

function Parent() {
    return (
        <Child onAction={handleAction}/>
    );
}

function Child({onAction}) {
    return (
        <button onClick={onAction}>
            Click Me
        </button>
    );
}

export default Parent;