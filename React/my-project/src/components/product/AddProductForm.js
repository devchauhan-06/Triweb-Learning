import { useRef } from 'react';  //hook

import Style from './AddProductForm.module.css'
import CustomWrapper from '../layouts/CustomWrapper'

function AddProductForm() {

    const product_name_ref = useRef();
    const image_ref = useRef();
    const price_ref = useRef();
    const desription_ref = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const product_name = product_name_ref.current.value;
        const image = image_ref.current.value;
        const price = price_ref.current.value;
        const description = desription_ref.current.value;

        const product = {
            product_name,
            image,
            price,
            description
        }

        console.log(product);
    }

    return (
        <CustomWrapper >
            <form className={Style.form} onSubmit={submitHandler}>
                <div className={Style.groups} >
                    <label htmlFor="product_name" >Enter Product Name</label>
                    <input type="text" id="product_name" ref={product_name_ref} />
                </div>

                <div className={Style.groups} >
                    <label htmlFor="image" >Image</label>
                    <input type="text" id="image" ref={image_ref} />
                </div>

                <div className={Style.groups} >
                    <label htmlFor="price" >Price</label>
                    <input type="text" id="price" ref={price_ref} />
                </div>
                <div className={Style.groups} >
                    <label htmlFor="description" >Descripition</label>
                    <textarea rows="5" id="description" ref={desription_ref}></textarea>
                </div>
                <div className={Style.btn} >
                    <button>Submit</button>
                </div>
            </form>
        </CustomWrapper>
    )
}

export default AddProductForm