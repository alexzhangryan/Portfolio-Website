type FooterProps = {
        isBottom: boolean;
    }

export default function Footer({ isBottom}: FooterProps){
    const currentYear = new Date().getFullYear();
    let bottom = "";
    if(isBottom){
        bottom = "fixed bottom-0 ";
    }
    console.log(isBottom);
    return(
        <footer className = {`footer ${bottom} grid grid-cols-3`}>
                <p className="py-auto px-10">Copyright &copy; {currentYear} Alex Ryan</p>
                <a className="justify-self-center hover:text-accent" href="mailto:alexzhangryan@gmail.com">alexzhangryan@gmail.com</a>
        </footer>
    )
}