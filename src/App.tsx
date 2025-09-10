
import Message from './Message'
import NavBar from './NavBar';


function App(){
    return(
        <>  
            <meta name="author" content="Alex Ryan"/>
            <meta name="keywords" content="React, TypeScript, TailwindCSS, html" />
            <title>Alex Ryan Portfolio</title>
            <link rel="icon" type="image/x-icon" href="./src/assets/favicon.ico"></link>
            <div>
                <NavBar />
                <Message />
            </div>
        </>
    );
};

export default App;