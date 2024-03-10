const NextMove = ({ player, ...props }) => {
    return (
        <div {...props}>
            Следующий ход - <span>{player}</span>
        </div>
    )
}

export default NextMove;