export default async function About() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("delay");
    }, 4000);
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-16 bg-green-200">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-gray-500">This is the About Page.</p>
      <img src="next.svg" alt="Card Image" />
    </div>
  );
}
