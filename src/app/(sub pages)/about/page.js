import Image from "next/image";
import bg from "../../../../public/background/21.png";
import AboutDetails from "@/components/about";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="About page background"
        className="-z-50 fixed inset-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-blue-500">
            Anshu Patel
          </h1>
          <p className="font-light text-foreground text-lg mt-2">
            Meet the MASTER MIND behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
