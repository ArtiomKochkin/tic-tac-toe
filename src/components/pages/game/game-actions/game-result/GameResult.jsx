const GameResult = ({ result, ...props }) => {
    return (
        <div {...props}>
            Победитель - <span>{result}</span>
        </div>
    )
}

export default GameResult;