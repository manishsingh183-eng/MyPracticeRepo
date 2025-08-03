import React, { Component } from 'react';

class CurrencyConvertor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rupees: '',
            euro: ''
        };
    }

    handleChange = (e) => {
        this.setState({ rupees: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const rate = 0.011; // Example conversion rate
        const amount = parseFloat(this.state.rupees);
        if (!isNaN(amount)) {
            const result = (amount * rate).toFixed(2);
            this.setState({ euro: result });
        } else {
            alert("Please enter a valid number");
        }
    };

    render() {
        return (
            <div style={{ marginTop: '20px' }}>
                <h2>Currency Convertor</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter amount in ₹"
                        value={this.state.rupees}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Convert</button>
                </form>
                {this.state.euro && (
                    <p>Converted Amount: <strong>€{this.state.euro}</strong></p>
                )}
            </div>
        );
    }
}

export default CurrencyConvertor;
