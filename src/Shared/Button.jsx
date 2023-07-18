
const Button = (props) => {
    return (
        <button className='bg-indigo-600 md:ml-6 mt-6 md:mt-0 text-white px-6 py-2 hover:bg-indigo-400 rounded-md mt-2 active:scale-105  transition-all'>
            {props.children}
        </button>
    );
};

export default Button;