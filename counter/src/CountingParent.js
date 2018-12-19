import React from 'react';

function Child({onAction, onReset}) {
    return (
        <React.Fragment>
            <button onClick={onAction}>
                Click Me
            </button>
            <button onClick={onReset}>
                Reset
            </button>
        </React.Fragment>
    );
}

class CountingParent extends React.Component {
    state = {
        actionCount: 0
    }

    handleAction = (action) => {
        // console.log("Child did ", action);
    
        // functional setState
        // this.setState( (prevState, props) => {
        //     return {
        //         actionCount: prevState.actionCount + 1
        //     }
        // });
        this.setState( (prevState, props) => {
            return {
                actionCount: prevState.actionCount + 1
            }
        }, () => console.log(`setState after callback {actionCount: ${this.state.actionCount}}`)
        );

        console.log(this.state);
    }

    handleReset = (event) => (
        this.setState({
            actionCount: 0
        })
    );

    render() {
        return (
            <div>
                <Child onAction={this.handleAction} onReset={this.handleReset} />
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }
}

export default CountingParent;