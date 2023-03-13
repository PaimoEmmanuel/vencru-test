import * as React from "react";
import SideNav from "../organisms/side-nav";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="home">
      <aside>
        <SideNav />
      </aside>
      <main className="setting__main">Settings main</main>
    </div>
  );
};

export default HomePage;
