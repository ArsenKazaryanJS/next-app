import { createMessageGreeting, messageApiModul } from "@/app/lib/open";
import { NextResponse } from "next/server";

export async function GET(){
    const data = messageApiModul()
    return NextResponse.json(data)
}


export async function POST(req) {
    const {message} = await req.json()
    const greeting = createMessageGreeting(message)
   return NextResponse.json(greeting)
}