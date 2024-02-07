
const Header = ({title}) =>{
    return(
        <header className='pt-[7rem]'>
            <div className="bg-red-800 ">
                <div className='max-container py-8'>
                    <h2 className="text-white text-center text-[30px] uppercase">{title}</h2>
                </div>
            </div>
        </header>
    )
}

export default Header