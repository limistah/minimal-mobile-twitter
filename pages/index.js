import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col h-full relative">
        <div className="w-100 h-14 bg-purple-50">
          <TopBar />
        </div>
        <div className="w-100 flex-1 bg-red-400">Content Container</div>
        <div className="w-100 h-14 bg-green-500">Nav Bar</div>
      </div>
    </>
  );
}
