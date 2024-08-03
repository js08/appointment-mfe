// appointment-details.js
import React from 'react';
import { registerApplication, start } from 'single-spa';

function appointmentDetails(props) {
  // Render appointment details using props
  return (
    <div>
      <h2>Appointment Details</h2>
      {/* ... */}
    </div>
  );
}

registerApplication(
  'appointmentDetails',
  () => import('./appointment-details'),
  () => true
);

start();
