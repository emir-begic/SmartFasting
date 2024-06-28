import {Bangers} from "next/font/google";
import { Poppins } from "next/font/google";
import {DATA} from "../app/constants/index";
import ReviewCard from "./reusable/ReviewCard";


const bangers = Bangers({
  weight:'400',
  subsets:["latin"],
});
const popins = Poppins({
  weight:'400',
  subsets:["latin"],
});

function Testimonials() {
  return (
    <section  className={`${popins.className} max-container padding-container justify-center flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row`}>
        <div className="flex flex-col">
          <div className="flex flex-col text-center items-center mb-32">
            <div className={`${bangers.className}`}>
                <h1 className="text-primary flex flex-row font-xl">-<h1 className="text-black flex flex-row ml-2">Testimonials</h1></h1>
            </div>
            <h1 className="mt-2 text-black flex flex-row text-2xl font-medium">Naši <h1 className="text-primary text-2xl font-medium ml-2 mr-2">zadovoljni</h1>korisnici</h1>
            </div>
            <div className="flex flex-row gap-10">
            {DATA.map((review,index)=>(
              <ReviewCard
              key={index}
              image={review.image}
              name={review.name}
              job={review.job}
              review={review.review}
              />
            ))}
        </div>
          </div>
        
    </section>
  )
}

export default Testimonials