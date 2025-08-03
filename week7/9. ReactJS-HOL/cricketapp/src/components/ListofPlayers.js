import React from 'react';

const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 88 },
    { name: 'Dhoni', score: 72 },
    { name: 'Pant', score: 65 },
    { name: 'Kohli', score: 100 },
    { name: 'Bumrah', score: 58 },
    { name: 'Ashwin', score: 78 },
    { name: 'Jadeja', score: 82 },
    { name: 'Gill', score: 69 },
    { name: 'Surya', score: 73 },
    { name: 'Iyer', score: 60 }
];

// Filter with arrow function
const below70 = players.filter(player => player.score < 70);

function ListofPlayers() {
    return (
        <div>
            <h2>All Players</h2>
            <ul>
                {players.map((p, i) => (
                    <li key={i}>{p.name} - {p.score}</li>
                ))}
            </ul>

            <h3>Players with score below 70</h3>
            <ul>
                {below70.map((p, i) => (
                    <li key={i}>{p.name} - {p.score}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
