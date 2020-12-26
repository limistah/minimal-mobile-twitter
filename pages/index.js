import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Tweet from "./components/Tweet";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col h-full relative">
        <div className="w-100 h-14 fixed bg-background inset-x-0 top-0">
          <TopBar />
        </div>
        <div className="w-100 flex-1 py-14 bg-background">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
        <div className="w-100 h-14 fixed bg-background inset-x-0 bottom-0">
          <NavBar />
        </div>
      </div>
    </>
  );
}
