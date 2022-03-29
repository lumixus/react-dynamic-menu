import React, { useEffect, useState } from 'react'
import Food from "../Foods";
import axios from "axios"
const Index = () => {

    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState([]);



    const getFoods = async (resolve, reject) => {
        const {data} = await axios.get("http://localhost:8080/food");
        setFoods(data);
      
    }
    
    
    
     const getCategories = async (resolve, reject) => {
        const {data} = await axios.post("http://localhost:8080/category");
        setCategories(data);

    }

    const categoryItemStyle = {
        display : "flex",
        textAlign : "center",
        flexDirection : "column",
        justifyContent : "center"
    }

    const categoryHeaderStyle = {
        fontSize : "36px",
        fontWeight : "bold",
        marginBottom  : "10px"
    }


    const foodWrapperStyle = {
        marginBottom : "10px"
    }



    
    useEffect(() => {
        getCategories();
        getFoods();
    }, [])
  return (
    <>
            {categories ? categories.map((c) =>
                <div style={categoryItemStyle} key={c._id}>
                    <div style={categoryHeaderStyle} className="categoryHeader">{c.name}</div>
                <div style={foodWrapperStyle}>
                   {foods ? foods.map((f) => f.category_id === c._id ? <Food key={f._id} food={f} /> : null) : null } 
                </div>
                
                </div>
            
            ) : console.log("null")}

    </>
  )



}




export default Index