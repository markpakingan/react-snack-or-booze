import React, {useState} from "react";
import { Button } from "reactstrap";
import axios from "axios";
import "./addProductForm.css"


const AddProductForm= ({onAddSnack, onAddDrink}) => {


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

        const newProduct = {
            name: formData.name,
            category: formData.category
        };

        
        if(formData.category === "snacks")
         {
            onAddSnack(newProduct) 
        } else {
            onAddDrink(newProduct)
        }

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

                <option value="snacks" className="dropdown">snacks</option>
                <option value="drinks" className="dropdown">drinks</option>

            </select>


            <Button className="add-product-button">Add Product</Button>
        </form>



    )
}

export default AddProductForm;