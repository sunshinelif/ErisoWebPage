import Image from "next/image";


export const metadata = {
    title: "Our Clientele - ETG Software",
    description: "ETG Software Clientele",
  };

const Clientele = () =>{
    return(
        <>
        <div className="bg-gray-100">
        <div className="min-h-screen max-container py-24 ">
            <div className="pt-16">
                <h1 className="md:text-5xl text-3xl font-medium mb-16">Our Clientele</h1>
                <div className='flex flex-col md:flex-row gap-x-12 gap-y-8'>
                    <div className='w-full flex-1'>
                        <p className="text-2xl text-gray-600 justify-center text-left">
                            We have had the privilege of serving a diverse clientele, ranging from startups to established enterprises. Our commitment to delivering high-quality solutions has earned us the trust of our clients, and we continue to build lasting relationships based on excellence and reliability.
                        </p>
                    </div>
                    <div className="rounded-xl bg-gradient-to-r p-[6px] from-[#b6bcba] via-[#354769] to-[#7d7c7c] ">
                    <Image src="/images/software/clientele.jpeg" width={900} height={400} className='rounded-lg shadow-lg object-contain md:max-w-screen-sm w-full h-auto flex-1' />
                    </div>
                </div>
            </div>
        </div>
      </div>
        </>
    )
}
export default Clientele;