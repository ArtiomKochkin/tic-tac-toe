const GameResult = ({ winner, ...props }) => {
    return (
        <div {...props}>
            Победитель - <span>{winner}</span>
        </div>
    )
}

export default GameResult;