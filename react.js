const Title = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}

const Root = () => {
    const [contador, setContador] = React.useState(1)
    return (
        <div className = "juego">
            <Title text = "Lab 6: React Memory Game"/>
            <h1 onClick = {() =>setContador(contador+1)}>Yo soy un contador: {contador} </h1>    
        </div>
    )
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
)