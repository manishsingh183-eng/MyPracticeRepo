import React from 'react';

function IndianPlayers() {
    const allPlayers = ['Virat', 'Rohit', 'Dhoni', 'Pant', 'Kohli', 'Gill'];

    // Destructuring - Split odd & even team
    const oddTeam = allPlayers.filter((_, index) => index % 2 === 0);
    const evenTeam = allPlayers.filter((_, index) => index % 2 !== 0);

    // Declare T20 and Ranji players
    const T20Players = ['Raina', 'Yuvraj'];
    const RanjiTrophyPlayers = ['Pujara', 'Unadkat'];

    // Merge arrays using ES6 spread
    const allMerged = [...T20Players, ...RanjiTrophyPlayers];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Indian Players</h2>

            <h3>Odd Team</h3>
            <ul>
                {oddTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h3>Even Team</h3>
            <ul>
                {evenTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h3>Merged Players (T20 + Ranji)</h3>
            <ul>
                {allMerged.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default IndianPlayers;
