import './SingleCard.css'

function SingleCard({card, handleChoice}){
const handleClick = () => {
    handleChoice(card)
}

    return (
        <div>
            <div className='card' key={card.id}>
                <div>
                    <img className='front' src={card.src} alt="card front" />
                    <img className='back' src='./img/cover.png' onClick={handleClick} alt="card back" />
                </div>
            </div>

        </div>
    )
}

export default SingleCard