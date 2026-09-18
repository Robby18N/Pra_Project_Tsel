"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE } from "@/lib/mapbox-config";
import { REGION_DATA, MAX_REGION_COUNT, regionColor } from "./offline-region-data";

/** Indonesia's rough bounding box — [southwest, northeast]. */
const INDONESIA_BOUNDS: [[number, number], [number, number]] = [
  [94, -11.5],
  [142, 6.5],
];

/**
 * Real Mapbox basemap of Indonesia with a marker per region, sized and
 * colored by offline-device count — replaces the earlier hand-drawn dot-map
 * placeholder with an actual, pannable/zoomable map.
 */
export function OfflineRegionMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    if (!MAPBOX_ACCESS_TOKEN) {
      console.warn(
        "NEXT_PUBLIC_MAPBOX_TOKEN is not set — add it to .env.local (see .env.example) to render the offline-region map."
      );
      return;
    }

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: MAPBOX_STYLE,
      bounds: INDONESIA_BOUNDS,
      fitBoundsOptions: { padding: 16 },
      attributionControl: false,
    });
    mapRef.current = map;

    // Don't let the map trap the page's mouse-wheel scroll while embedded in a card.
    map.scrollZoom.disable();
    map.addControl(new mapboxgl.AttributionControl({ compact: true }));
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      for (const r of REGION_DATA) {
        const size = 14 + (r.count / MAX_REGION_COUNT) * 22;
        const el = document.createElement("div");
        el.className = "flex items-center justify-center rounded-full text-white font-semibold";
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.fontSize = "9px";
        el.style.lineHeight = "1";
        el.style.backgroundColor = regionColor(r.count);
        el.style.boxShadow = "0 0 0 3px #ffffffb3";
        el.title = `${r.region}: ${r.count} offline`;
        el.textContent = String(r.count);

        new mapboxgl.Marker({ element: el }).setLngLat([r.lng, r.lat]).addTo(map);
      }
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="box-border w-full h-[220px] shrink-0 rounded-[8px] border border-[#e2e8f0] overflow-hidden"
    />
  );
}
