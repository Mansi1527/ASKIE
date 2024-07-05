import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import Image from "next/image";
// import robot from "@/public/giphy.gif"
import robot from "@/public/robohand.svg"
import logo from "@/public/logo_askie.png"
import roboface from "@/public/roboface.svg"
const LandingPage=()=>{
    return(
        <>
        <div className="bg-gradient-to-r from-[#0f0524] to-[#a459df] ">

          {/* head */}
            <div className="flex justify-between">
            <div className="flex">
            <Image src={logo} alt="" width={50} height={10} className="ml-5 pt-5"/>
            <h1 className="text-xl  text-white mt-5 underline'">Askie</h1>
            </div>
            <div className="flex justify-center mr-20 gap-5 mt-5">
                <p className="text-white hover:underline hover:text-black "><Link href="/sign-in">Login</Link></p>
                <div className="border-l-2 border-black h-8 "></div>
                <p className="text-white hover:underline hover:text-black "><Link href="/sign-up" >Sign Up</Link></p>
            </div>
            </div>
            <div className="flex  justify-between">
                <div className="mt-24 ml-52">
                    <h1 className="text-white text-7xl w-[300px] font-roboto">Always ready    </h1>
                    <p className="text-white text-7xl font-roboto">to make your</p>
                    <p className="text-white text-7xl font-roboto">Life better</p>
                    <p className="text-white text-xl mt-10">Every step of the way</p>
                    <p className="text-black bg-[#E6DADA] rounded-lg w-[110px] p-2 m-5 mb-20"><Link href="/sign-in">Try Askie {"->"}</Link></p>
                </div>
                <div className="">
                <Image src={robot} alt="" width={500} height={10}/>
                </div>
            </div>
            
            
            
            {/* <div className="">
                <Link href="/sign-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div> */}
            
            {/* About */}
            
        </div>
       
        <div className="bg-gradient-to-r from-zinc-300 to-white ">
                <h1 className="flex justify-center items-center text-3xl p-10 " id="About">About</h1>
                <div className="flex justify-between">
                <div className="ml-32">
                <Image src={roboface} alt="" width={350} height={20} className=""/>
                </div>
                <p className="mr-32 w-[500px] text-center">Welcome to our AI-powered world, where images come to life and conversations spark imagination. Our website is a gateway to a realm where artificial intelligence meets creativity, offering a unique blend of visual storytelling and interactive dialogue.
                Step into our gallery of images, where every pixel tells a story. Whether it's a serene landscape, a futuristic cityscape, or a whimsical character, our AI artists craft stunning visuals that captivate and inspire. Each image is a masterpiece, created from your words and brought to life by our intelligent algorithms.
                But our website is more than just a collection of images. It's a place for meaningful conversations and engaging interactions. Chat with our AI, share your thoughts and ideas, and watch as it responds with wit and wisdom. Whether you're seeking inspiration, looking for a virtual companion, or simply curious about the possibilities of AI, our website is here to delight and surprise you.
                Join us on a journey of discovery and creativity. Explore our images, engage in conversations, and let your imagination run wild. Welcome to the future of AI, where art and technology collide in a beautiful symphony of pixels and words.
                </p>
                
                
                </div>
                
            </div>
        </>
    )
}
export default LandingPage;