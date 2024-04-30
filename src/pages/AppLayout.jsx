import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app-layout">
      <main className="main">
        <div className="app-layout__container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
