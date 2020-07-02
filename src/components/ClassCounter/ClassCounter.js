import React, { Component } from 'react';

class ClassCounter extends Component {
    state = {
        number: 0,
    };

    addNumber = () => {
        this.setState({ number: this.state.number + 1 });
    };

    substractNumber = () => {
        if (this.state.number === 0) {
            alert('Ga bisa ngurangin lagi wwweeeee');
        } else {
            this.setState({ number: this.state.number - 1 });
        }
    };

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.addNumber}>Tambah</button>
                <button onClick={this.substractNumber}>Kurang</button>
            </div>
        );
    }
}

export default ClassCounter;
