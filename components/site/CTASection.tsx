import Link from "next/link";
import { ArrowRight } from "lucide-react";


interface CTASectionProps {

title:string;
description:string;
buttonText:string;
href:string;

}


export function CTASection({

title,
description,
buttonText,
href,

}:CTASectionProps){


return (

<section className="relative overflow-hidden rounded-[40px] bg-[#163d6c] px-6 py-20 text-center text-white">


<div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#C9A54C]/20 blur-[120px]"/>


<div className="relative mx-auto max-w-3xl">


<h2 className="font-serif text-4xl sm:text-5xl">
{title}
</h2>


<p className="mt-6 text-white/70">
{description}
</p>


<Link
href={href}
className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#C9A54C] px-8 py-4 text-[#163d6c] transition hover:bg-white"
>

{buttonText}

<ArrowRight size={18}/>

</Link>


</div>


</section>

);

}