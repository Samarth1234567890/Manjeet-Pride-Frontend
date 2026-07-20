import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


interface ProjectCardProps {

  project: {
    slug: string;
    name: string;
    location: string;
    cover: string;
    type?: string;
  };

}


export function ProjectCard({
  project,
}: ProjectCardProps) {

const href = `/projects/${project.slug}`;

return (

<Link
href={href}
className="group block overflow-hidden rounded-[32px]"
>

<div className="relative aspect-[4/3] overflow-hidden">


<Image
src={project.cover}
alt={project.name}
fill
className="object-cover transition duration-700 group-hover:scale-110"
/>


<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>


<div className="absolute bottom-0 p-8 text-white">


{
project.type && (

<p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#C9A54C]">
{project.type}
</p>

)
}


<h3 className="font-serif text-3xl">
{project.name}
</h3>


<p className="mt-2 text-white/70">
{project.location}
</p>


<div className="mt-5 flex items-center gap-2 text-sm text-[#C9A54C]">

View Project

<ArrowUpRight size={16}/>

</div>


</div>


</div>


</Link>

);

}