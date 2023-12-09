import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";
import Swal from "sweetalert2";

const useFetchProductsById = (productId) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "products", productId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        Swal.fire({
          title: { error },
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return { product, loading };
};

export default useFetchProductsById;
