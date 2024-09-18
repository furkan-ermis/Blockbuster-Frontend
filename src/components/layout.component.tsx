import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./layout/footer.layout.component";
import Header from "./layout/header.layout.component";
import Loginpopup from "./layout/loginpopup.layout.component";
import Preload from "./layout/preload.layout.component";
import Signuppopup from "./layout/signuppopup.layout.component";
function Layout() {
  return (
    <div>
      <Preload />
      <Loginpopup />
      <Signuppopup />
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
