type ContactProps = {
    onClose: () => void;
};

export default function Contact({ onClose }: ContactProps){
    return(
        <div className="absolute w-full h-full bg-black/50">
            <button onClick={onClose}>click me</button>
        </div>
    )
}