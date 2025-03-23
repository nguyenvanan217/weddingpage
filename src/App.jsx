import React from "react";
import Banner from "./component/banner/Banner";
import SnowEffect from "./component/effect/SnowEffect";
import "./App.css";
import Aside from "./component/aside/Aside";
import Invitationletter from "./component/invitationletter/Invitationletter";
import CalendarWedding from "./component/calendar/calendar";
import Album from "./component/album/album";
import Footer from "./component/footer/footer";
import Map from "./component/map/map";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //         setLoading(false);
  //     }, 4000); // 3 seconds

  //     return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //     return (
  //         <div className="loading-screen">
  //             <Heart />
  //         </div>
  //     );
  // }

  return (
    <div>
      <SnowEffect />
      <Banner />
      <Aside />
      <Invitationletter />
      <div className="max-w-6xl m-auto px-2 ">
        <CalendarWedding />
        <Map />
        <Album />
      </div>
      <Footer />
    </div>
  );
}

export default App;
