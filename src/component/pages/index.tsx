import * as React from "react";
import Settings from "../organisms/settings";
import SideNav from "../organisms/side-nav";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="home">
      <aside>
        <SideNav />
      </aside>
      <main className="settings__main">
        <Settings />
      </main>
    </div>
  );
};

export default HomePage;
