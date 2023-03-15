import { useEffect } from "react";
import MobileNav from "../organisms/mobile-nav";
import Settings from "../organisms/settings";
import SideNav from "../organisms/side-nav";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  useEffect(() => {
    document.title = "Untitled UI - Settings";
  }, []);
  return (
    <div className="home">
      <aside>
        <MobileNav />
        <SideNav />
      </aside>
      <main className="settings__main">
        <Settings />
      </main>
    </div>
  );
};

export default HomePage;
