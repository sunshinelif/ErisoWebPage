export const metadata = {
    title: "Future Outlook",
    description: "",
  };

const FutureOutlook = () =>{
    return(
        <>
        <div className="min-h-screen" style={{ background: 'url("/images/software/future2.jpeg")', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition: 'center', width: '100%', height: '800px' }}>
            <div className='max-container'>
                <div className="flex flex-col w-full h-full justify-center min-h-screen">
                    <div className="flex flex-col max-w-[600px] pt-8">
                        <h1 className="text-5xl mb-8 text-white">Future Outlook</h1>
                        <div className="">
                            <p className='text-white text-xl'>As we look to the future, ETG Software & IT Solutions remains committed to 
                            innovation, quality, and client satisfaction. We are continuously expanding
                                our service offerings and exploring new avenues to stay ahead in the ever-evolving
                                tech landscape.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default FutureOutlook;