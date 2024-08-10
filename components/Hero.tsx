
import Footer from "./Footer";
import Image from 'next/image';


export const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <div className="flex justify-around py-40 mx-10  font-thin justify-items-center">
        <div className="text-4xl py-10 w-1/2">
          <div className="py-1">
            Hey there, I&apos;m
            <span className="text-green-300 font-bold">Vijay Ravichander</span>
          </div>
          <div className="py-2 leading-10">
            I&apos;m good at building highly asychronous, complex <span className="text-green-300">Websites with web hooks</span> and training <span className="text-green-300">Neural Networks like transformers</span> 
          </div>
        </div>
        <div className="py-10">
          <Image src="/headshot.jpeg" alt = "alt" width={200} height={200} className="rounded"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};
