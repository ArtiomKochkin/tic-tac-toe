import Button from "../../../../UI/button/Button";

const GameButtons = ({ ...props }) => {
    return (
        <div {...props}>
            <Button type="button">
                Играть снова
            </Button>
            <Button type="button">
                Перейти в меню
            </Button>
            
        </div>
    )
}

export default GameButtons;