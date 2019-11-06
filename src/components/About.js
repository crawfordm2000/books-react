import React, { Component } from 'react';

class Bookshelf extends Component {
    state = {  }

    onClick() {
        console.log('Hey')
    }
    render() { 
        return (  
            <button onClick={this.onClick} className="about-btn">Bookshelf</button>
        );
    }
}
 
export default Bookshelf;