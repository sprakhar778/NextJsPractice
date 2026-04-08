

export default async function BlogDetails({params} :{params:Promise<{blogId:string}>} )
{
    const {blogId} = await params;

     return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-16 bg-green-200">
      <h1 className="text-3xl font-bold">Blog Details</h1>
      <p className="text-gray-500">This is blog page {blogId}</p>
      <img src="/next.svg" alt="Card Image" />
    </div>
  );
}