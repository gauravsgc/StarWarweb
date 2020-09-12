import React, { Component } from 'react'

export class personinfo extends Component {
    render() {
        return (
            <div>
                {this.props.persondata}
            </div>
        )
    }
}

export default personinfo
