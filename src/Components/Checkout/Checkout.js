import "./Checkout.css";
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {addDoc, collection,writeBatch,getDocs, query,where,documentId,} from "firebase/firestore";
import { db } from "../../services/firebase/index";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import Formulary from "../Form/Form";
import { NotificationContext } from "../../notification/NotificationService";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useContext(NotificationContext);

  const navigate = useNavigate();
  const [dataBuyer, setDataBuyer] = useState({});
  const [data, setData] = useState(false);

  const dataForm = (name, address, phone, email) => {
    setDataBuyer({ name, address, phone, email });
    setData(true);
  };

  const createOrder = async () => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: dataBuyer,
        items: cart,
        total: total,
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        clearCart();

        setTimeout(() => {
          navigate("/");
        }, 3000);
        Swal.fire({
          title: "Orden Creada.",
          text: `El id de su orden es: ${orderAdded.id}`,
          icon: "success"
      })
        
      } else {
        setNotification("error", "hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <Loading />
        <h1>Se esta generando su orden...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Ingrese sus datos para generar la orden.</h1>
      <Formulary dataForm={dataForm} />
      {data ? (<button className="submit" onClick={createOrder}>Generar Pedido</button>) : ("")}
    </div>
  );
};

export default Checkout;
