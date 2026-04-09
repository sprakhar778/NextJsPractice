//Caching
export const dynamic = "force-static";
export const revalidate = 10;
//--------------------------------------


import { headers } from "next/headers";
import { cookies } from "next/headers";
import { type NextRequest } from "next/server";

//Get header and set header
//Get cookies and set cookies

export async function GET(request:NextRequest){
    //Get headers
    const headerList= await headers();
    console.log(headerList.get("Authorization"));
    
    //Get cookies
     const theme=request.cookies.get("theme");
     const color = request.cookies.get("color");
     console.log(theme);
     console.log(color);
    

    //Set cookies
    const cookieStore= await cookies();
    cookieStore.set("color","blue");

    //Set headers
    return new Response(
        "<h1>Profile API data</h1>",{
            headers:{
    "Content-Type": "text/html",
      "Set-Cookie": `theme=dark`,
            }
        }
    )
   

}