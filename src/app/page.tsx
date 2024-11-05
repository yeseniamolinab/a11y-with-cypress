import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <main className="min-w-64 flex flex-col items-center justify-center">
        <Card />
      </main>
    </div>
  );
}
