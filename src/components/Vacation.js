import React, { Component } from 'react';

class Vacation extends Component {
    render() {
        const { available } = this.props;
        return (
          <div className = "card" >
              <h1 className = "vacation-text" >
                  { available ? "Going on vacation" :  "Too busy for Vacations" }
              </h1>
          </div>
        )
    }
}

export default Vacation