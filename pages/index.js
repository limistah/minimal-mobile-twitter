import Head from "next/head";

export default function Home() {
  return (
    <>
      <div class="container mx-auto flex flex-col h-full relative">
        <div className="w-100 h-14 bg-purple-300">Top Bar</div>
        <div className="w-100 flex-1 bg-red-400">Content Container</div>
        <div className="w-100 h-14 bg-green-500">Footer with Nav buttons</div>
      </div>
    </>
  );
}