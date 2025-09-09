export default function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className = "footer grid grid-cols-3">
                <p className="py-8 px-10">Copyright &copy; {currentYear} Alex Ryan</p>
                <a className="justify-self-center hover:text-accent" href="mailto:alexzhangryan@gmail.com">alexzhangryan@gmail.com</a>
            </footer>
    )
}