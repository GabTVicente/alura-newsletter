import Input from "../Input/Input"

const Form = ({ onSubmit }) => {
    const safeSubmit = event =>{
        event.preventDefault()
        event.stopPropagation()

        const nome = event.target[0].value
        const email =event.target[1].value

        onSubmit({nome,email})

    }

    return <form className="flex flex-col items-center justify-center h-full -mt-20 mx-5 gap-10 outline-none" onSubmit={safeSubmit}>
        <Input required type='text' placeholder="Insira seu nome..." />
        <Input required type='email' placeholder="Insira seu e-mail.." />
        <button className={styles.button} type="submit"> Seguir </button>
    </form>
}

const styles = {
    button: `hover:animate-pulse hover:shadow-sm hover:shadow-gray-500 hover:dark:shadow-black hover:transition-all w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 dark:text-gray-200 py-1 px-5 uppercase outline-none hover:-translate-y-1 hover:delay-200`
}

export default Form
