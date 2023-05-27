import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {  useState } from "react";


import Textfield from '@mui/material/TextField';
import { purple } from "@mui/material/colors";
import { Avatar,Popover } from "@mui/material";
import { Formik } from "formik";
export const Apple = () => {
    //const[name, setname] = useState("Rutik");
   //const[email, setemail] = useState("rutikbhosale@gmail.com");
    const[open, setopen] =useState(false);
    const[anchorE1 ,setanchorE1]=useState(null);
    const Navigate = useNavigate();
   // useEffect(() =>{

    
    const initialValues = {
        name:"",
        email:"",
    }
    const onFormSubmit = (values) => {
        console.log("on the form submitted",values);
       Navigate("/");
       
    };
    const handleclick = (event) =>{
        setanchorE1 (event.currenttarget);
    setopen(true);
    };
    const handleclose =() =>{
        setanchorE1(null);
        setopen(false);
    };

      return(
        <div
            style={{
                padding:5,
            }}
            >
                <div style={{
                display:"flex",
                justifyContent:"flex-end",
                cursor:"pointer",
            }}
            >
                <div
            onClick={handleclick}
            style={{
                display: "flex",
                justifyContent:"flex-end",
                alignitems: "center",
                columnGap:5,
                
            }}
            >
                <Avatar sx={{ bgcolor: purple[500] }}>RB</Avatar>
                <span>Rutik Bhosale</span>
                </div>
                </div>

           <div
           style={{
            padding:5,
            display: "flex",
            flexDirection:"column",
            rowGap:8,
            columnGap:8,
           }}
           >
            <Formik
            initialValues={initialValues}
            //validationSchema={}
            onSubmit={onFormSubmit}
            >
                {({value,handleChange,handleSubmit }) =>(
                    <form onSubmit={handleSubmit}>
           <Textfield
            variant="outlined" 
            type="text"
            label="Name"
            name="name"
             placeholder="Name"
              onChange={handleChange}
              />
           <Textfield
           variant="outlined"
            type="email"
            label="Email"
            name="email"
            placeholder="email"
             onChange={handleChange}
             />
           <Button variant="contained" type="submit" className="">submit</Button>
        </form>
                )}
            
        </Formik>
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
>
    <div style={{
    padding:5,
}}
>
   <Button variant="contained" type="Logout" className="">Logout</Button>

</div>
</Popover>

 </div>
    );
};
