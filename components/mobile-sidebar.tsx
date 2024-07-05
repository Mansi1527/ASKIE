'use client'
import { Sidebar } from "./sidebar"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { useEffect, useState } from "react"
const MobileSideBar=()=>{
    const [isMounted,setIsMounted]=useState(false)
    useEffect(()=>{
        setIsMounted(true);
    },[]);
    if(!isMounted){
        return null
    }
    return(
        

        <Sheet>
            <SheetTrigger>
        
        <Button variant="ghost" size="icon" className="md:hidden">
                <Menu/>
        </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
            <Sidebar apiLimitCount={0} isPro={false}/>
        </SheetContent>
       
        </Sheet>
    )
}
export default MobileSideBar;