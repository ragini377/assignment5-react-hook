import React from "react";
import useFetch from  "./useFetch";

function Products() {
  const { data, loading } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2 className="text-center mt-10 text-xl">Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-white text-3xl text-center mb-8 font-bold">
        Photos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-40 w-full object-cover rounded-md"
            />

            <p className="text-white mt-2 text-sm text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;