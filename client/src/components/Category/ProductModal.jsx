import React, { useRef, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export default function ProductModal(props) {
  const ref = useRef(null) 
  const cardContainer = useRef(null)
  const { product, isModalOpen, closeModal, addToCart } = props;
  const { addCart } = useContext(CartContext);

    useEffect(() => {

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeModal();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  

  return (
    <div id="modal-container" className="custom-modal" >
      
    <div className="card card-compact w-96 bg-base-100 shadow-xl" ref={ref} >
      <figure>
        <img
          src={product.image_url}
          alt={product.model}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button onClick={() => addCart(product)} className="btn btn-primary">Buy Now</button>
        </div>
        <div className="card-actions justify-start">
          <button onClick={closeModal} className="btn btn-primary">X</button>
        </div>
      </div>
    </div>

    </div>
  );
}