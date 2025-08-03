import React from 'react';

function GuestPage() {
    return (
        <div>
            <h2>Welcome, Guest!</h2>
            <p>Here are some flight options you can browse.</p>
            <ul>
                <li>✈️ Delhi → Mumbai — 10:00 AM</li>
                <li>✈️ Bangalore → Kolkata — 2:30 PM</li>
                <li>✈️ Chennai → Pune — 6:45 PM</li>
            </ul>
            <p><strong>Login</strong> to book your tickets.</p>
        </div>
    );
}

export default GuestPage;
