import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="container mx-auto px-5 mb-10">
        <div className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8">
          <div className="">
            <Link href="/post_1">
              <div className="grid grid-cols-12 gap-4  ">
                <div className="col-start-1 col-span-12">

                  <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <span  >
                      <img className=" rounded-lg  max-w-xl" style={{ height: "325px" }} src="https://www.tripplannersindia.com/assets/images/postimages/Aagaya_Gangai_Waterfalls.webp" alt="image description" />
                    </span>
                  </figure>
                </div>

              </div></Link>
            <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
              <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
                <Link href="/post_1">
                  The Healing Power of Travel: Finding Myself Again</Link>
              </h2>
              <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
                30 April 2024
              </div>
              <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
                Heartbroken, I traveled to Kollihills seeking healing. Amid ancient Hindu traditions, majestic peaks, and remote villages, I shed layers of pain. Kollihill's spiritual energy and simplicity reignited my essence. Travel's power immersed me in new beliefs, allowing me to rediscover my true self.
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="mr-2 inline-block">
                  <span  >#Kollihills</span>
                </div><div className="mr-2 inline-block">
                  <span  >#travel</span>
                </div>
              </div>
            </div>
          </div>
          <div className="break-words">
            <Link href="/post_2">
              <div className="grid grid-cols-12 gap-4  ">
                <div className="col-start-1 col-span-12">
                  <figure className="relative max-w-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <span  >
                      <img className="rounded-lg  max-w-xl" style={{ height: "325px" }} src="https://content.r9cdn.net/rimg/dimg/26/2e/ad960cee-city-60709-168cd171c21.jpg?width=1366&height=768&xhint=1370&yhint=964&crop=true&watermarkposition=lowerright" alt="image description" />
                    </span>
                  </figure>
                </div>
              </div></Link>
            <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
              <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
                <Link href="/post_2">
                Sacred city on Mount Arunachala: The Fire is Here</Link>
              </h2>
              <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
                30 April 2024
              </div>
              <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
              Here Shiva is worshipped in his most brutal form, fire. The temple of Tiruvannamalai, or Arunachalaleswarar Temple, occupies an area of 10 hectares and is one of the largest temples in India, with Gopuram up to 66 meters high.
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="mr-2 inline-block">
                  <span  >#Thiruvanamalai</span>
                </div><div className="mr-2 inline-block">
                  <span  >#travel</span>
                </div>
              </div>
            </div>
          </div>
          <div className="break-words">
            <Link href="/post_3">
              <div className="grid grid-cols-12 gap-4  ">
                <div className="col-start-1 col-span-12">

                  <figure className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <span  >
                      <img className="rounded-lg max-w-xl" style={{ height: "325px" }} data-nimg="fill" src="https://www.indiautentica.com/wp-content/uploads/2022/10/29ezcwtmtnm.jpg" alt="image description" />
                    </span>
                  </figure>
                </div>
              </div>
          </Link>
        <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
          <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
            <Link href="/post_3">
            “God's Own Country”: The Green nature</Link>
          </h2><br></br>
          <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
            30 April 2024
          </div>
          <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
          Known for its serene backwaters, picturesque beaches, lush green forests and misty hills, Kerala is often referred to as “God's Own Country”. Kerala is a popular tourist destination for both domestic and international travelers. Kerala is southwest coastal area of India providing
          </div>
          <div className="text-sm text-muted-foreground">
            <div className="mr-2 inline-block">
              <span  >#Kerala</span>
            </div><div className="mr-2 inline-block">
              <span  >#travel</span>
            </div>
          </div>
        </div>
      </div>
      <div className="break-words">
        <Link href="/post_4">
        <div className="grid grid-cols-12 gap-4  ">
        <div className="col-start-1 col-span-12">

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <span  >
                <img className="rounded-lg max-w-xl"  style={{ height: "325px" }} src="https://himalayanrider.wordpress.com/wp-content/uploads/2018/03/img_20170609_185809_hdr.jpg?w=672&h=372&crop=1" alt="image description" />
              </span>
            </figure>
            </div>
          </div></Link>
        <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
          <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
            <Link href="/post_4">
            Crystal clear skies, with Peace: boundary of India</Link>
          </h2>
          <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
            30 April 2024
          </div>
          <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
          Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals. but it is also the place where you will find the Magnetic Hill, the one-of-a-kind phenomena that defies gravity.          </div>
          <div className="text-sm text-muted-foreground">
            <div className="mr-2 inline-block">
              <span  >#Ladakh</span>
            </div><div className="mr-2 inline-block">
              <span  >#travel</span>
            </div>
          </div>
        </div>
      </div>
      <div className="break-words">
        <Link href="/post_5">
        <div className="grid grid-cols-12 gap-4  ">
        <div className="col-start-1 col-span-12">

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <span  >
                <img className="rounded-lg max-w-xl"  style={{ height: "325px" }} src="https://www.shutterstock.com/image-photo/arial-view-auroville-experimental-township-600nw-1967101996.jpg" alt="image description" />
              </span>
            </figure>
            </div>
          </div></Link>
        <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
          <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
            <Link href="/post_5">
            Union territory "real Paradise": French colony</Link>
          </h2><br></br>
          <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
            30 April 2024
          </div>
          <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
          Amongst the many attractions that this charming town boasts of, the most outstanding is the French Colony, also called the White Town. Flaunting cobblestone streets and yellow houses, this old French residential area retains its old world charm, picturesqueness and also the architecture of the old French quarters.          </div>
          <div className="text-sm text-muted-foreground">
            <div className="mr-2 inline-block">
              <span  >#Pondicherry</span>
            </div><div className="mr-2 inline-block">
              <span  >#travel</span>
            </div>
          </div>
        </div>
      </div>
      <div className="break-words">
        <Link href="/post_6">
        <div className="grid grid-cols-12 gap-4  ">
        <div className="col-start-1 col-span-12">

            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <span  >
                <img className="rounded-lg max-w-xl"  style={{ height: "325px" }} src="https://www.cholaimpressions.com/Blog%20Images/Culture%20And%20Tourism/4193143492_ca23db0df4_o.jpg" alt="image description" />
              </span>
            </figure>
            </div>
          </div></Link>
        <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
          <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
            <Link href="/post_6">
              Land of culture and architecture: The chola's Kingdom</Link>
          </h2>
          <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
            30 April 2024
          </div>
          <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
          The Brihadeshwara Temple at Thanjavur was built by Rajaraja I in 1009 CE for worshipping Lord Shiva. Thanjavur is called 'The Rice Bowl of Tamil Nadu' because of its agricultural activities in the delta region of river Cauvey. The temple, culture and architecture of Thanjavur are famous throughout world. </div>
          <div className="text-sm text-muted-foreground">
            <div className="mr-2 inline-block">
              <span  >#Thanjavur</span>
            </div><div className="mr-2 inline-block">
              <span  >#travel</span>
            </div>
          </div>
        </div>
      </div>
    </div >
      </div >

    </>


  );
}
