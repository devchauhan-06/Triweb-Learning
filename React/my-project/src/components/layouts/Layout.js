import React from "react";
import MainMenu from "./MainMenu";
import Style from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={Style.main}>
      <main>
        <MainMenu />
      </main>
      {props.children}
    </div>
  );
}

export default Layout;
