import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails
        name="React Bootcamp"
        status="ongoing"
        startDate="01-Aug-2025"
        endDate="31-Aug-2025"
      />
      <CohortDetails
        name="NodeJS Workshop"
        status="completed"
        startDate="01-Jul-2025"
        endDate="20-Jul-2025"
      />
    </div>
  );
}

export default App;
