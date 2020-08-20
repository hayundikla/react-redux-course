import React, { Component } from 'react';

class Vacation extends Component {
    render() {
        const { available } = this.props;
        return ( <
            div className = "card" >
            <
            h1 className = "vacation-text" > { available ? < span > Going on vacation < /span> :  <span>Too busy for Vacations</span > } <
            /h1> <
            /div>
        )
    }
}

export default Vacation