import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map
      mapRef.current = L.map("map").setView([latitude, longitude], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    } else {
      // Update map center and marker
      mapRef.current.setView([latitude, longitude], 13);
    }

    // Add marker
    L.marker([latitude, longitude])
      .addTo(mapRef.current)
      .bindPopup("You are here!")
      .openPopup();
  }, [latitude, longitude]);

  return <div id="map" className="w-full h-96"></div>;
};

export default Map;
