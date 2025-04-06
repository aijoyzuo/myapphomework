import { useContext } from "react";
import { useState } from "react";
import productData from "../assets/productData";
import { CartContext } from "../store";
import QuantitySelector from "./Quantityselector";



export default function Products() {
    const [state, dispatch] = useContext(CartContext);
    const [quantityMap, setQuantityMap] = useState({}); // { productId: quantity }

    const updateQuantity = (productId, quantity) => {
        setQuantityMap((prev) => ({ ...prev, [productId]: quantity }));
    };
    return (<>
        <div className="row row-cols-3 g-3">
            {productData.map((product) => {
                return (
                    <div className="col" key={product.id}>
                        <div className="card">
                            <img
                                src={product.img}
                                className="card-img-top"
                                alt="..." />
                            <div className="card-body">
                                <h6 className="card-title d-flex justify-content-between">
                                    <span>{product.title}</span>
                                    <span className="">NT${product.price}</span>
                                </h6>
                                <QuantitySelector
                                value={quantityMap[product.id] || 1}
                                setValue={(val) => updateQuantity(product.id, val)}>
                                </QuantitySelector>

                                <button type="button" className="btn btn-outline-primary w-100"
                                    onClick={() => {
                                        const quantity = quantityMap[product.id] || 1;
                                        dispatch({
                                            type: 'ADD_TO_CART',
                                            payload: {
                                                ...product,
                                                quantity,
                                            }
                                        })
                                    }}>加入購物車</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    </>)
}