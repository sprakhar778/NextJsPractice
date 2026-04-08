import Image from "next/image";

export default function Home() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-16 bg-green-200">
            <h1 className="text-3xl font-bold">Home</h1>
            <p className="text-gray-500">This is the Home Page.</p>
          <img src="/next.svg" alt="" />
        </div>
    );
}