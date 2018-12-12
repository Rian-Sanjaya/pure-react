import React, { Fragment } from 'react'

function Data() {
    return (
        <Fragment>
            <td>1</td>
            <td>Bruce</td>
            <td>Lee</td>
        </Fragment>
    )
}

class Table extends React.Component {
    render() {
        return (
            <div>
                <table style={{border: '1px solid'}}>
                    <thead>
                        <tr>
                            <th style={{border: '1px solid'}}>Id</th>
                            <th style={{border: '1px solid'}}>First Name</th>
                            <th style={{border: '1px solid'}}>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Data />
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table