
export const metadata = {
    title: "Overview",
    description: "",
};
const Overview = () =>{
    return(
        <div className="min-h-screen" style={{ background: 'url("/images/software/service7.jpeg")', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition: 'center', width: '100%', height: '800px' }}>
        <div className='max-container'>
            <div className="flex flex-col w-full h-full justify-center items-end min-h-screen">
                <div className="flex flex-col max-w-[600px] pt-8">
                    <h1 className="text-5xl mb-8 text-white">Overview</h1>
                    <div className="">
                        <p className='text-white text-xl'>ETG Software & IT Solutions is a dynamic and innovative tech company specializing
                        in a wide array of IT solutions. Our expertise spans from front-end to back-end 
                        development, and we are well-versed in core programming languages, allowing us
                        to craft end-to-end solutions efficiently. As a result, we have rapidly evolved 
                        into a market leader, providing cutting-edge services to clients across various industries.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Overview;