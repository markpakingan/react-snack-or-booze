import React, {useState} from "react";
import { Button } from "reactstrap";


const AddProductForm= () => {

    const [productName, setProductName] = useState();

    const handleChange = (e) => {
        setProductName(e.target.value)}


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The productname is ${productName}`)
    }
    

    return(
        <form>
            <label htmlFor="productname"></label>
            <input 
            type="text" placeholder="Add product Name" value={productName} onChange={handleChange}/>
            <Button onClick={handleSubmit}>Add Product</Button>
        </form>
    )
}

export default AddProductForm;