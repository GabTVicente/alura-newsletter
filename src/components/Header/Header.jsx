import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = ({user}) => {
    return (
        <div className="flex h-20 bg-alura-200 dark:transition-colors dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
            <span className="text-gray-100" >Olá, { user?.nome || "Usuário" }</span>
            <h1 className="text-gray-100 trasition-all sm:hover:text-2xl sm:hover:transition-all cursor:pointer">Alura Newsletter</h1>
            <ToggleTheme />
        </div>
    )
}

export default Header;