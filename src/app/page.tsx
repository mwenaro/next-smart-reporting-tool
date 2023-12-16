
// import { HomePage } from "@/components";
import { ToastDemo } from "@/components/atoms/ToastDemo";
import { Button } from "@/components/ui/button";


export default function Home() {
  // return <HomePage />
  return (
    <div className="w-full flex flex-col gap-12 justify-center items-center h-full container">
      <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center ">
        Hello, Welcome to SmartReportingTool (SRT)
      </h2>
      {/* <ToastDemo title ={'Coming soon ...'}/>
      
      */}
      <Button className="font-semibold text-base md:text-2xl  md:py-8">
        Coming soon ...
      </Button>
    </div>
  );
}