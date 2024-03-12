import Button from "../../../../UI/button/Button";
import { useNavigate } from "react-router-dom";

const GameButtons = ({ ...props }) => {
    const nav = useNavigate();
    return (
        <div {...props}>
            <Button type="button"> Играть снова </Button>
            <Button type="button" onClick={() => nav("/")}>Перейти в меню</Button>
            
        </div>
    )
}

export default GameButtons;