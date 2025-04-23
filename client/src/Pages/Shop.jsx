import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Product from "../components/Product";
import { ArrowDownIcon, FilterIcon } from "lucide-react";

const Shop = () => {
  const [categoryShow, setCategoryShow] = useState(false);
  const allcategories = [
    {
      name: "Laptop",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/a2a65a358d9025938077b52f7263512a.jpg_720x720q80.jpg_.webp",
    },
    {
      name: "Desktop",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/a2a65a358d9025938077b52f7263512a.jpg_720x720q80.jpg_.webp",
    },
    {
      name: "Monitor",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/a2a65a358d9025938077b52f7263512a.jpg_720x720q80.jpg_.webp",
    },
    {
      name: "Processor",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/a2a65a358d9025938077b52f7263512a.jpg_720x720q80.jpg_.webp",
    },
    {
      name: "Mobile",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/a2a65a358d9025938077b52f7263512a.jpg_720x720q80.jpg_.webp",
    },
    {
      name: "Headphones",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/a2a65a358d9025938077b52f7263512a.jpg_720x720q80.jpg_.webp",
    },
  ];
  return (
    <main className="mt-10">
      <div className="container">
        <aside className="grid grid-cols-12 gap-y-5 lg:gap-8">
          <div className="col-span-12  lg:col-span-2">
            {" "}
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle className="text-xl">Categories</CardTitle>
                  <ArrowDownIcon
                    onClick={() => setCategoryShow(!categoryShow)}
                    className="w-10  lg:hidden"
                  />
                  
                </div>
              </CardHeader>

              <CardContent
                className={`${categoryShow ? "block" : "hidden"} lg:block`}
              >
                <ul>
                  {allcategories.map((item) => (
                    <li className="mt-5 cursor-pointer">{item.name}</li>
                  ))}
                </ul>{" "}
              </CardContent>
            </Card>
          </div>

          {/* ............... category part  ............... */}
          <div className="col-span-12 lg:col-span-10">
            <div className="grid  grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 100 }, (v, i) => (
                <Product />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Shop;
