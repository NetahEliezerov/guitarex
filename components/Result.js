const Result = (props) => {
    
    const onClicked = () => {
        window.location.href = `/guitar?title=${props.result.title}`;
    };

    return (
        <div className='resultContainer' onClick={onClicked}>
            <p className='resultTitle'>{props.result.title}</p>
            <p className='resultPrice'>Retail price: {props.result.price}€</p>
        </div>
    )
}

export default Result