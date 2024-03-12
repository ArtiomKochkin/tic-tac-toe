import Button from "../../../../UI/button/Button";
import { Link } from "react-router-dom";

const GameButtons = ({ ...props }) => {
    return (
        <div {...props}>
            <Button type="button">
                Играть снова
            </Button>
            <Button type="button">
               <Link to="/">Перейти в меню</Link>
            </Button>
            
        </div>
    )
}

export default GameButtons;