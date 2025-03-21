import React from "react";
import Banner from "./component/banner/Banner";
import SnowEffect from "./component/effect/SnowEffect";
import "./App.css";
import Aside from "./component/aside/Aside";
import Album from "./component/album/album";
import Footer from "./component/footer/footer";
import CalendarWedding from "./component/calendar/calendar";
function App() {
  return (
    <div>
      <SnowEffect />
      <Banner />
      <Aside />
      <div className="max-w-6xl m-auto px-2 ">
        <CalendarWedding />
        <Album />
      </div>
      <Footer />
    </div>
  );
}

export default App;
