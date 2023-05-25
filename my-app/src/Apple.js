import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useRef, useState } from "react";


import Textfield from '@mui/material/TextField';
import { purple } from "@mui/material/colors";
import { Avatar,Popover } from "@mui/material";
export const Apple = () => {
    const[name, setname] = useState("Rutik");
    const[email, setemail] = useState("rutikbhosale@gmail.com");
    const[open, setopen] =useState(false);
    const[anchorE1 ,setanchorE1]=useState(null);
    const Navigate = useNavigate();
    const onHomepageButtonclick = () => {
        console.log("Name:" ,name);
        console.log("Email:",email);
       Navigate("/");
       
    };
    const handleclick = (event) =>{
        setanchorE1 (event.currenttarget);
    setopen(true);
    };
    const handleclose =() =>{
        setanchorE1(null);
        setopen(false);
    }

    return( 
        <div
            style={{
                padding:5,
            }}
            ><div style={{
                display:"flex",
                justifyContent:"flex-end",
                columnGap:5,
            }}
            >
                <div
            onClick={handleclick}
            style={{
                display: "flex",
                justifyContent:"flex-end",
                alignitems: "center",
                
            }}
            >
                <Avatar sx={{ bgcolor: purple[500] }}>RB</Avatar>
                <span>Rutik Bhosale</span>
                </div>
                </div>
           {/*<div>Apple page 🍎</div>*/}
           <div
           style={{
            padding:5,
            display: "flex",
            flexDirection:"column",
            rowGap:8,
            columnGap:8,
           }}
           >
           <Textfield
            variant="outlined" 
            type="text"
            value={name}
             label="name"
             placeholder="Name"
              onChange={(e) => { setname(e.target.value); }}
              />
           <Textfield
           variant="outlined"
            type="email"
            value={email}
            label="Email"
            placeholder="email"
             onChange={(e) => { setemail(e.target.value);}}
             />
           <Button variant="contained"onClick={onHomepageButtonclick}>SUBMIT</Button>
        {  /* <button onclick={onHomepageButtonclick}>Navigate to Home page</button>*/}
        </div>
        
<Popover 
open={open}
  anchorOrigin={{
    vertical: 'Top',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  anchorEl={anchorE1}
  onClose={handleclose}
><div style={{
    padding:5,
}}
>
   <Button variant="contained"onclick={onHomepageButtonclick}>Logout</Button>

</div>
</Popover>

 </div>
    );
};