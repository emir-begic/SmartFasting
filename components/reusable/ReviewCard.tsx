import Image from "next/image";

interface ReviewCardProps {
    image: string;
    name: string;
    review: string;
    job:string;
  }



export default function ReviewCard ({image,name,review,job}:ReviewCardProps) {
  return (
    <div className=" flex flex-col m-5 text-center w-full h-full gap-8">
        <div className="w-full h-full flex justify-center ">
        <Image src={image} alt={name} width={80} height={50} />
        </div>
        <div className="mt-4">
            <h1 className="mb-6 text-black font-semibold text-xl">{name}</h1>
            <h1 className="text-[#6C6C6C] font-medium text-sm ">{job}</h1>
            <h1 className="mt-2">{review}</h1>
        </div>

    </div>
  )
}
