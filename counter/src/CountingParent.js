import React from 'react';

function Child({onAction}) {
    return (
        <button onClick={onAction}>
            Click Me
        </button>
    );
}

class CountingParent extends React.Component {
    state = {
        actionCount: 0
    }

    handleAction = (action) => {
        console.log("Child did ", action);
        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction} />
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }
}

export default CountingParent;