const Input = props =>{
    return(
        <input className="focus:border-alura-200 focus:dark:border-alura-100 focus:border-2 focus:transition-colors w-full max-w-lg dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full py-1 pl-5 outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:invalid:border-2 focus:invalid:border-red-400 dark:focus:invalid:border-2 dark:focus:invalid:border-red-600  " {...props} />
    )
}

export default Input