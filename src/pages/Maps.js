import React from "react";
import BingMapsReact from "bingmaps-react";

function BingMap() {
  return ( 
    <BingMapsReact
      bingMapsKey="your bing maps API key goes here"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="100%"
      viewOptions={{
        center: { latitude: 100.4590, longitude: 5.3655 },
        mapTypeId: "grayscale",
      }}
    />
  );
}
export default BingMap;