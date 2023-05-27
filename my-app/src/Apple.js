import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {  useState } from "react";
import React from "react";


import Textfield from '@mui/material/TextField';
import { purple } from "@mui/material/colors";
import { Avatar,Popover } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
export const Apple = () => {
    //const[name, setname] = useState("Rutik");
   //const[email, setemail] = useState("rutikbhosale@gmail.com");
    const[open, setopen] =useState(false);
    const[anchorE1 ,setanchorE1]=useState(null);
    const Navigate = useNavigate();
   // useEffect(() =>{
    const validationSchema = Yup.object().shape({
        name : Yup.string().min(3,"make sure that you have entered your name with atleat 3 characters."),
        email:Yup.string().email("please enter a valid email address"),
    })

    
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
        <div 
                style={{
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
            validationSchema={validationSchema}
            onSubmit={onFormSubmit}
            >
                {({value,errors,touched,handleChange,handleBlur,handleSubmit }) =>(
                    <form onSubmit={handleSubmit}>
           <Textfield
            variant="outlined" 
            type="text"
            label="Name"
            id="name"
            name="name"
             placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {console.log("The error handler:",touched,errors)}
             <span>{touched.name}</span>  && <span>{errors.name}</span>
           <Textfield
           variant="outlined"
            type="email"
            label="Email"
            id="email"
            name="email"
            placeholder="email"
             onChange={handleChange}
             onBlur={handleBlur}
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
