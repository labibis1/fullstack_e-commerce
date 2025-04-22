import React from "react";
import Product from "./Product";

const Featuresproduct = () => {
  const featureproductlist = [
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
    {
      name: "Red Hat",
      href: "#",
      image: "https://bundui-images.netlify.app/products/04.jpeg",
      price: "$28",
      category: "Clothing",
    },
  ];
  return (
    <section className="mt-10">
      <div className="container ">
        <h2 className="text-lg lg:text-xl font-bold text-center mb-10 ">
          FEATURE PRODUCTS
        </h2>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 ">
{featureproductlist.map((item) => (
          <Product />
        ))}
</div>
      
      </div>
    </section>
  );
};

export default Featuresproduct;
