import React, {useState} from "react";
import { Button } from "reactstrap";
import axios from "axios";


const AddProductForm= ({onAddSnack}) => {


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
        }));

        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The productname is ${formData.name} the category is ${formData.category}`)

        const newSnack = {
            name: formData.name,
            category: formData.category
        };

        onAddSnack(newSnack);
        setFormData(INITIAL_STATE);
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="product-name"></label>
            <input 
            id="product-name"
            name="name"
            type="text" 
            placeholder="Add product Name" 
            value={formData.name} 
            onChange={handleChange}/>
            
            <label htmlFor="category-name"></label>
            <select
            id="category-name"
            name="category"
            placeholder="Add Category Name" 
            value={formData.category} 
            onChange={handleChange}>

                <option value="snacks">Snacks</option>
                <option value="drinks">Drinks</option>

            </select>


            <Button>Add Product</Button>
        </form>



    )
}

export default AddProductForm;