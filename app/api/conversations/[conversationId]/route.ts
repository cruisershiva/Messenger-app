import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

interface IParams {
    conversationId?: string;
}

export async function DELETE(
    request: Request,
    {params}:{params:IParams}
) {
    try{

        const {conversationId} = params;
        const currentUser = await getCurrentUser();

        if(!currentUser?.id){
            return new NextResponse('unauthorized',{status:500})
        }

    } catch(error:any){
        console.log(error,'ERROR_CONVERSATION_DELETE')
        return new NextResponse('internal error',{status:500})
    }
}