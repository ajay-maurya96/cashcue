import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "animate.css";

export default function Home() {
  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid box-animate w-full h-full grid-cols-1 bg-white md:grid-cols-2">
        <div className="bg-[#3C4E5F] text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="animate__animated  animate__rubberBand animate__delay-1s text-[1.5rem] font-semibold">Login</h1>
            <p className="animate__animated animate__zoomInDown animate__slow animate__delay-2s mt-2 text-[1rem] text-white-400">
              {""}
              Let Your Money Grow
            </p>
          </div>
          <form>
            <Button
              className="flex mb-4 items-center w-full gap-4 px-12 bg-transparent rounded-full"
              variant="outline"
            >
              <FcGoogle />
              Sign in with google
            </Button>
            <Label htmlFor="email">Email</Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full"
              type="email"
              id="email"
              placeholder="Email"
            />
            <Label htmlFor="password">Password</Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full"
              type="password"
              id="password"
              placeholder="Password"
            />
            <Button
              type="submit"
              className="w-full mt-6 bg-indigo-700 rounded-full hover:bg-indigo-500"
            >
              Login
            </Button>
          </form>
          <p classNmae="mt-4 text-xs text-slate-200">@made for chirag </p>
        </div>
         <div className="relative hidden md:block">
          <Image
            className="object-cover"
            fill={true}
            src="/save2.jpg"
            alt="background image"
          />
        </div> 
      </div>
    </main>
  );
}
