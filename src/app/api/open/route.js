import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({message:'Hello, from API!'})
}


export async function POST(req) {
    const data = await req.json()
    const {message} = data
   return NextResponse.json({message:`Hello,${message} from API!`})
}