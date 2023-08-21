import React, {useState} from "react";
import { Button } from "reactstrap";


const AddProductForm= () => {


    const INITIAL_STATE = {
        name: '',
        category: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The productname is ${formData.name} the category is ${formData.category}`)
    }
    

    return(
        <form>
            <label htmlFor="product-name">Product Name:</label>
            <input 
            id="product-name"
            name="name"
            type="text" 
            placeholder="Add product Name" 
            value={formData.name} 
            onChange={handleChange}/>
            
            <label htmlFor="category-name"></label>
            <input 
            id="category-name"
            name="category"
            type="text" 
            placeholder="Add Category Name" 
            value={formData.category} 
            onChange={handleChange}/>


            <Button onClick={handleSubmit}>Add Product</Button>
        </form>



    )
}

export default AddProductForm;