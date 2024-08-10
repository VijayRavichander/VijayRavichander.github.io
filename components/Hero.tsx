
import Footer from "./Footer";
import Image from 'next/image';


export const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <div className="flex flex-col justify-center mx-2 md:flex-row md:justify-around py-32 md:mx-10 font-thin justify-items-center">
        <div className="text-4xl py-10 md:w-1/2">
          <div className="py-1">
            Hey there, I&apos;m
            <span className="text-green-300 font-bold"> Vijay Ravichander</span>
          </div>
          <div className="py-2 leading-10">
            I&apos;m good at building highly asychronous, complex <span className="text-green-300">Websites with web hooks</span> and training <span className="text-green-300">Neural Networks like transformers</span> 
          </div>
        </div>
        <div className="py-10 mx-auto">
          <Image src="/headshot3.png" alt = "alt" width={300} height={100} className="rounded"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};
