
import { UserButton } from "@clerk/nextjs"

import MobileSideBar from "./mobile-sidebar"
const NavBar=()=>{
    return(
        <div className="flex items-center p-4">
            <MobileSideBar/>
            <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}
export default NavBar