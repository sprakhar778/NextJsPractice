
import { comments } from "./data";
import { NextRequest } from "next/server";

//Get all data point
// export async function GET(){

//     return Response.json(comments);

// }


//Get all data point filtered by search parameter
export async function GET(request:NextRequest){
    const searchParams= request.nextUrl.searchParams;
    const query = searchParams.get("query");

    const filteredComments= query ? comments.filter((comment)=>comment.text.includes(query)) : comments;

    return Response.json(filteredComments);
}


// Create data point
export async function POST(request:Request)
{
    const comment = await request.json();

    const newComment = { id: (comments.length + 1).toString(), text: comment.text };

    comments.push(newComment);

    return new Response(JSON.stringify(newComment),{
             headers: { "Content-Type": "application/json" },
             status:201
    })


    
}