import React from "react";
import Panel from "../pagina";
import Navigation from "../nav";
import './home.css'

const AppLayout = () => {
  return (
    <div className="home">
      <Navigation />
      <Panel />
    </div>
  );
};

export default AppLayout;
