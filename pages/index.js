import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Tweet from "./components/Tweet";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col h-full relative">
        <div className="w-100 h-14 bg-purple-50">
          <TopBar />
        </div>
        <div className="w-100 flex-1 bg-red-400">
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
        <div className="w-100 h-14 bg-blue-900">
          <NavBar />
        </div>
      </div>
    </>
  );
}
