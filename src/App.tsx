
import Card from './Card/Card';
import Message from './Message'

function App(){
    return(
        <>
            <div>
                <Message />
                <Card title = "Java" text = "Proficient in Java" src = "java.png"/>
                <Card title = "Python" text = "Proficient in Python" src = "python.png"/>
                <Card title = "TypeScript" text = "Proficient in TypeScript" src = "ts.png"/>
            </div>
        </>
    );
};

export default App;