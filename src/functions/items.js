
  /*
      Trae Document Item por id,
      recibe por @param el id, el useState de product y useState de load
  */
  export const getItemById = async (id, setProduct, setLoad) => {
    try {
      // Realiza alguna lógica para obtener el ítem por id
      const item = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json());

      if (!item) {
        console.log('No item');
        return;
      }

      setProduct(item);
      setLoad(false);
    } catch (error) {
      console.log("Error getItemById: ", error);
    }
  };
