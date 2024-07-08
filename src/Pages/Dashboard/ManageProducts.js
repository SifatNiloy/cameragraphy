import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  // const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://camapi.sifatniloy.top/explore').then(res => res.json()));
  // console.log(products)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://camapi.sifatniloy.top/explore`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  const handleDelete = (id) => {
    // event.preventDefault();
    const proceed = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (proceed) {
      console.log("deleting order with id", id);
      const url = `https://camapi.sifatniloy.top/explore/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div className="">
      <h1>All Products : {products.length} </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{order.name}</th>
                <td>{order.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-xs"
                  >
                    Delete Product
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
