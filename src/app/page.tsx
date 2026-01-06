import MapContainer from '@/components/MapContainer';

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <main className="flex-grow w-full h-full">
        <MapContainer />
      </main>
    </div>
  );
}
