const Root = () => {
    const [contador, setContador] = React.useState(0)
    
    return (
        <div className = "juego">
            <h1>Lab 6: React Memory Game</h1>
            <button>New</button>
            <h2 onClick = {() =>setContador(contador+1)}>Turns: {contador} </h2>    
            <div className = "container">
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
                <div id = "prueba">
                    <img src="./images/sins2.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
)