import Button from "../../../../UI/button/Button";

const GameButtons = ({ resetBoard, goToMenu,  ...props}) => {
    return (
        <div {...props}>
            <Button type="button" onClick={resetBoard}> Играть снова </Button>
            <Button type="button" onClick={goToMenu}>Перейти в меню</Button>
        </div>
    )
}

export default GameButtons;