import { useNavigate } from "react-router-dom";
export const Apple = () => {
    const Navigate = useNavigate();
    const onHomepageButtonclick = () => {
        Navigate("/");
    };

    return( 
        <div>
           <div> Apple page 🍎 </div>
           <button onclick={onHomepageButtonclick}>Navigate to Home page </button>
        </div>
    );
};