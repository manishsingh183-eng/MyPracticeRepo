import React from 'react';
import officeImg from './office.jpg'; // ✅ Importing local image

function App() {
  const office = {
    name: 'WorkNest',
    rent: 58000,
    address: '5th Floor, IT Park, Bangalore'
  };

  const officeList = [
    {
      name: 'SpaceOne',
      rent: 55000,
      address: 'Koramangala, Bangalore'
    },
    {
      name: 'InnoHub',
      rent: 62000,
      address: 'HSR Layout, Bangalore'
    },
    {
      name: 'TechDen',
      rent: 75000,
      address: 'Electronic City, Bangalore'
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Office Space Rental Portal</h1>

      <img
        src={officeImg}
        alt="Office Space"
        width="400"
        style={{ borderRadius: '10px', marginBottom: '20px' }}
      />

      <h2>{office.name}</h2>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
          ₹{office.rent}
        </span>
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      <hr />

      <h2>Other Office Listings</h2>
      {officeList.map((space, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '8px'
          }}
        >
          <h3>{space.name}</h3>
          <p>
            <strong>Rent:</strong>{' '}
            <span style={{ color: space.rent < 60000 ? 'red' : 'green' }}>
              ₹{space.rent}
            </span>
          </p>
          <p><strong>Address:</strong> {space.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
