import { TbHandFinger } from "react-icons/tb";

const DropdopwnButton = (props) =>{
    return(
        <button
        type='button'
        className='w-full bg-secondary-150 text-white text-[20px] py-2 flex justify-center items-center mt-4 gap-x-8 text-center cursor-pointer relative'
        onClick={props.toggleDetailsVisibility}
      >
        <TbHandFinger className={`${props.isDetailsVisible ? 'rotate-[180deg]'  : 'rotate-90' } absolute lg:left-[450px] left-8 sm:left-[250px]`}  /> 
        <h3>{props.title}</h3>
      </button>
    )
}

export default DropdopwnButton;