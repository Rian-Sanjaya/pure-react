import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './components/table'

// function Title() {
//     return (
//         <div className='title'>
//             The Title
//         </div>
//     )
// }
function Title() {
    return (
        React.createElement(
            'div',
            { className: 'title' },
            'The Title'
        )
    )
}

// function Author() {
//     return (
//         <div className='author'>
//             The Author
//         </div>
//     )
// }
function Author() {
    return (
        React.createElement(
            'div',
            { className: 'author' },
            'The Author'
        )
    )
}

// function List() {
//     return (
//         <Fragment>
//             <li className='rating'>
//                 5 star
//             </li>
//             <li className='isbn'>
//                 12-837777378
//             </li>
//         </Fragment>
//     )
// }
function List() {
    return React.createElement(
        Fragment,
        null,
        React.createElement(
            'li',
            { className: 'rating' },
            '5 star'
        ),
        React.createElement(
            'li',
            { className: 'isbn' },
            '12-837777378'
        )
    );
}

function Greeting() {
    //let username = "root";
    //let username = undefined; 
    let username = null;
    //let username = false;
  
    return (
        <div>{ (typeof username !== 'undefined' && username !== null) ? 'Hello, username' : 'Not logged in' }</div>
    )
}

function MyThing() {
    return(
        <Fragment>
            <div className='book'>
                <Title/>
                <Author/>
                <ul className='stats'>
                    <List/>
                </ul>
            </div>
            <div>
                Newline
                Test
            </div>
            <div>
                Empty

                Newlines

                Here
            </div>
            <div>
                &nbsp;Non-breaking
                &nbsp;Space&nbsp;
            </div>
            <div>
                Line1
                {' '}
                Line2
            </div>
            <div>
                <Greeting/>
            </div>
            <Table />
        </Fragment>
    )
}

ReactDOM.render(<MyThing/>, document.getElementById('root'));
