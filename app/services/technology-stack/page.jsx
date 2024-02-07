import Image from "next/image";

export const metadata = {
    title: "Technology Stack - ETG Software",
    description: "ETG Software Technology Stack",
  };

const TechnologyStack = () =>{
    return(
        <>
    
        <div className='bg-gray-100'>
        <div className="min-h-screen max-container py-24 ">
            <div className="pt-16">      
                <h1 className="md:text-5xl text-3xl font-medium mb-16 text-center">Technology Stack</h1>
                <div className='flex flex-col md:flex-row gap-x-12 gap-y-8'>
                <Image
                src="/images/software/tech.png"
                alt="Technology Stack Image"
                className="rounded-lg shadow-lg object-contain md:max-w-screen-sm w-full h-auto flex-1"
                width={700}
                height={500}
                />
                <div className="w-full flex-1">
                    <p className=" text-2xl text-gray-600 ">
                    ETG Software & IT Solutions is proficient in utilizing a wide range of technologies such as; React JS, React Native, Next JS, JavaScript, TypeScript, Docker, Node JS, Kubernetes, Google Cloud, PHP, Laravel to build robust and scalable solutions. Our team is well-versed in the latest programming languages, frameworks, and tools, ensuring that we stay at the forefront of technological advancements.
                    </p>
                </div>
                </div>     
            </div>
            </div>
        </div>
        </>
    )
}
export default TechnologyStack;