import About from "@/components/sections/about";
import CallToAction from "@/components/sections/callToAction";
import Hero from "@/components/sections/hero";
import Insights from "@/components/sections/insights";
import Partnership from "@/components/sections/partnership";
import Services from "@/components/sections/services";
import SuccessStories from "@/components/sections/success_stories";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {

  return (
<>

<Hero/>
<Services/>
<div className="mt-28 w-full bg-black/5">
<About/>
{/*<Partnership/>*/}
</div>
<Insights/>
<div className="h-28 w-full"></div>
<SuccessStories/>
<CallToAction/>
</>
  );
}
