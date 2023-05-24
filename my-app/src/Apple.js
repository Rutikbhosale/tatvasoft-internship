import { useNavigate } from "react-router-dom";
import  Button from "@mui/material/Button";
export const Apple = () => {
    const Navigate = useNavigate();
    const onHomepageButtonclick = () => {
       // Navigate("/");
       alert("The button has been clicked");
    };

    return( 
        <div>
           <div>Apple page 🍎</div>
           <Button variant="contained"onClick={onHomepageButtonclick}>Hello World</Button>
        {  /* <button onclick={onHomepageButtonclick}>Navigate to Home page</button>*/}
        </div>
    );
};