import Style from './AddProductForm.module.css'
import CustomWrapper from '../layouts/CustomWrapper'

function AddProductForm() {
    return (
        <CustomWrapper >
            <form className={Style.form}>
                <div className={Style.groups} >
                    <label htmlFor="product_name" >Enter Product Name</label>
                    <input type="text" id="product_name" />
                </div>

                <div className={Style.groups} >
                    <label htmlFor="image" >Image</label>
                    <input type="text" id="image" />
                </div>

                <div className={Style.groups} >
                    <label htmlFor="price" >Price</label>
                    <input type="text" id="price" />
                </div>
                <div className={Style.groups} >
                    <label htmlFor="description" >Descripition</label>
                    <textarea rows="5" id="description" ></textarea>
                </div>
                <div className={Style.btn} >
                    <button>Submit</button>
                </div>
            </form>
        </CustomWrapper>
    )
}

export default AddProductForm