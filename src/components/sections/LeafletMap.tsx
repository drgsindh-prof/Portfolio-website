"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with webpack
const createCustomIcon = (isHQ: boolean, isSelected: boolean) => {
  const size = isHQ ? 20 : 14;
  const color = isHQ ? "#C0A062" : "#38BDF8";
  const borderColor = isSelected ? "#ffffff" : "#ffffff";
  const shadowSize = isSelected ? "0 0 20px" : "0 0 10px";
  
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border: 3px solid ${borderColor};
        border-radius: 50%;
        box-shadow: ${shadowSize} ${color}80;
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: all 0.3s ease;
        ${isSelected ? "transform: translate(-50%, -50%) scale(1.3);" : ""}
      "></div>
      ${isHQ ? `
        <div style="
          position: absolute;
          top: -8px;
          left: -8px;
          width: ${size + 16}px;
          height: ${size + 16}px;
          border: 2px solid ${color}40;
          border-radius: 50%;
          animation: pulse 2s infinite;
        "></div>
      ` : ""}
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

// Component to handle map view changes
function MapController({ selectedCampus, coordinates }: { 
  selectedCampus: string | null; 
  coordinates: Record<string, { lat: number; lng: number }>;
}) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedCampus && coordinates[selectedCampus]) {
      const { lat, lng } = coordinates[selectedCampus];
      map.flyTo([lat, lng], 6, { duration: 1.5 });
    }
  }, [selectedCampus, coordinates, map]);
  
  return null;
}

interface LeafletMapProps {
  campuses: Array<{
    id: string;
    city: string;
    country: string;
    region: string;
    description: string;
    significance: string;
    established: string;
  }>;
  coordinates: Record<string, { lat: number; lng: number }>;
  selectedCampus: string | null;
  onMarkerClick: (campusId: string) => void;
}

export default function LeafletMap({ 
  campuses, 
  coordinates, 
  selectedCampus, 
  onMarkerClick 
}: LeafletMapProps) {
  return (
    <>
      <style jsx global>{`
        .leaflet-container {
          background: #f8fafc;
          font-family: inherit;
        }
        .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          color: #1e293b;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }
        .leaflet-popup-tip {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
        .leaflet-popup-close-button {
          color: #64748b !important;
        }
        .leaflet-popup-close-button:hover {
          color: #5C7AEA !important;
        }
        .custom-marker {
          background: transparent;
          border: none;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
        }
        .leaflet-control-zoom a {
          background: rgba(255, 255, 255, 0.95) !important;
          color: #334155 !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          backdrop-filter: blur(10px);
        }
        .leaflet-control-zoom a:hover {
          background: rgba(92, 122, 234, 0.1) !important;
          color: #5C7AEA !important;
        }
        .leaflet-control-attribution {
          background: rgba(255, 255, 255, 0.9) !important;
          color: #64748b !important;
          font-size: 10px;
        }
        .leaflet-control-attribution a {
          color: #5C7AEA !important;
        }
      `}</style>
      
      <MapContainer
        center={[20, 78]} // Centered on India
        zoom={2}
        minZoom={2}
        maxZoom={10}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        zoomControl={true}
      >
{/* Clean, elegant map tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        <MapController selectedCampus={selectedCampus} coordinates={coordinates} />
        
        {/* Campus Markers */}
        {campuses.map((campus) => {
          const coord = coordinates[campus.id];
          if (!coord) return null;
          
          const isHQ = campus.id === "noida";
          const isSelected = selectedCampus === campus.id;
          
          return (
            <Marker
              key={campus.id}
              position={[coord.lat, coord.lng]}
              icon={createCustomIcon(isHQ, isSelected)}
              eventHandlers={{
                click: () => onMarkerClick(campus.id),
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ background: isHQ ? "#B8860B" : "#5C7AEA" }}
                    />
                    <h3 className="font-bold text-lg" style={{ color: isHQ ? "#B8860B" : "#5C7AEA" }}>
                      {campus.city}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    {campus.country} • {campus.region}
                  </p>
                  <span 
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ 
                      background: isHQ ? "rgba(184, 134, 11, 0.15)" : "rgba(92, 122, 234, 0.15)",
                      color: isHQ ? "#B8860B" : "#5C7AEA"
                    }}
                  >
                    {campus.significance}
                  </span>
                  <p className="text-xs text-slate-500 mt-2">
                    Est. {campus.established}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}
