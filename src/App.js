import { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import Loader from "./component/Loader/Loader";
import Map from './component/Map/Map'

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');

      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData}/> : <Loader /> }
    </div>
  );
}

export default App;
