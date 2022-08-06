import {MapContainer} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Map from "./components/Map"

function App() {

  // useEffect(() => {
  //   const geohash = Geohash.encode(52.20, 0.12, 12);
  //   const latlon = Geohash.decode(geohash);
  //   console.log(geohash);
  //   console.log(latlon);
  //   console.log(Geohash.bounds(geohash));
  //   console.log(Geohash.neighbours(geohash));
  //   console.log(Geohash.adjacent(geohash, "N"));
  //   console.log(Geohash.adjacent(geohash, "S"));
  //   console.log(Geohash.adjacent(geohash, "E"));
  //   console.log(Geohash.adjacent(geohash, "W"));
  // }, [])


  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <MapContainer
        center={[36.84344957521509, -2.4578603643971357]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        doubleClickZoom={false}
      >
        <Map/>
      </MapContainer>
    </div>
  );
}

export default App;
