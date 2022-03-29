import axios from "axios";




export const getFoods = async (setFoods) => {
    const {data} = await axios.get("http://localhost:8080/food");
    return data;
}



export const getCategories = async (setCategories) => {
    const {data} = await axios.post("http://localhost:8080/category");
    return data;
}