import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../services/firebase';
import Swal from "sweetalert2";

const useFetchProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const collectionRef = categoryId
          ? query(collection(db, "products"), where("category", "==", categoryId))
          : collection(db, "products");

        const response = await getDocs(collectionRef);
        const productsAdapted = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        setProducts(productsAdapted);
      } catch (error) {
        Swal.fire({
          title: { error },
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return { products, loading };
};

export default useFetchProducts;
