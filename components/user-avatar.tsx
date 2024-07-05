import { useUser } from "@clerk/nextjs"

import { userAgent } from "next/server"
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export const UserAvatar =()=>{
    const {user}=useUser();
    return(
        <Avatar className="h-8 w-8">
            <AvatarImage src={user?.imageUrl}/>
            
            <AvatarFallback>
                {/* this will work if user image does not loads */}
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    )
}