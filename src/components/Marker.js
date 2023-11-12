// src/components/Marker.js
import React from 'react';
import './Marker.css'; // Import the CSS for styling the marker

const Marker = ({ text }) => (
  <div className="marker">
    {text} {/* Display the text prop */}
  </div>
);

export default Marker;
