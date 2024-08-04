import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionMessageParam  } from 'openai/resources/index.mjs';
const client=new OpenAI()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

const instructionMessage:ChatCompletionMessageParam={
    role:"system",
    content:"You are a code generator, You must answer only in  code snippets. Give explanation also "
} 

export async function POST(req:Request) {
    try{
        const{userId}=auth();
        const body=await req.json();
        const {messages}=body;

        if(!userId){
            return new NextResponse("Unauthorized",{status:401})

        }
        if(!openai.apiKey){
            return new NextResponse("openAi api key not configured",{status:500})
        }
        if(!messages){
            return new NextResponse("Message are required",{status:400})
        }
        const response=await openai.chat.completions.create({
            model:"gpt-3.5-turbo-1106",
            messages:[instructionMessage,...messages]
            //it will first take the instruction message and then rest of the messages so that it only egenerates code

        });
       return NextResponse.json(response.choices[0].message)
    }
    catch(err){
        console.log("[code_error]",err);
        return new NextResponse("Internal error",{status:500})
    }
    
}