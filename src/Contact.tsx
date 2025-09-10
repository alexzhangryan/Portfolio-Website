type ContactProps = {
    onClose: () => void;
};

export default function Contact({ onClose }: ContactProps){
    return(
        <div className="fixed w-full h-full bg-black/50 z-10" onClick={onClose}>
            <div className="contactBox" onClick={(e) => e.stopPropagation()}>
                <form  action="https://api.web3forms.com/submit" method="POST">
                    <div className="flex flex-col justify-stretch h-auto py-5 px-8">
                        <div className="flex justify-between items-start">
                            <h1 className="text-[36px] font-bold">Contact Me</h1>
                            <button className="text-[24px] font-bold font-[arial] hover:text-accent hover:cursor-pointer" onClick={onClose}>X</button>
                        </div>
                        <input type="hidden" name="access_key" value="52a51680-35c9-4c77-a501-c96bb65c3c14" />
                        <div className="flex justify-between">
                            <input className="nameBox" type="text" name="firstName" placeholder="First Name" />
                            <input className="nameBox" type="text" name="lastName" placeholder="Last Name" />
                        </div>
                        <input className="emailBox" type="text" name="email" placeholder="Email" />
                        <textarea className="messageBox resize-y" rows={2} name="message" placeholder="Message"/>
                        <button className="self-center p-4 mt-5 w-1/3 rounded-full bg-accent text-background hover:scale-110 transition-all duration-300" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}