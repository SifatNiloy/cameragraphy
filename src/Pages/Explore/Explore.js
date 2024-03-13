import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Product";
import Loading from "../Shared/Loading";

const Explore = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //     fetch('https://cameragraphy-server.onrender.com/explore')
  //         .then(res => res.json())
  //         .then(data => setProducts(data));
  // }, []);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("https://cameragraphy-server.onrender.com/explore").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-12 ">
      {/* <h2 className='text-5xl mb-10'>This is explore</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Explore;
