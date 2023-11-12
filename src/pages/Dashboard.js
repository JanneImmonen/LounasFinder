// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import Map from '../components/Map';
import { getMarkers } from '../utils/markerService'; // You would create this service

const Dashboard = () => {
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMarkers = async () => {
      try {
        const markerData = await getMarkers();
        setMarkers(markerData);
      } catch (err) {
        setError('Could not load markers.');
      } finally {
        setLoading(false);
      }
    };

    loadMarkers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <Map apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} markers={markers} />
    </div>
  );
};

export default Dashboard;
