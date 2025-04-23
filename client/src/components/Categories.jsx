import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Categories = () => {
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
    <section className="mt-10">
      <div className="container">
        <h2 className=" text-lg lg:text-xl font-bold text-center mb-4">ALL CATEGORIES</h2>
        <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
          {allcategories.map((item) => (

            <Card className=" w-[120px]  md:w-[200px]  lg:w-[200px] text-center">
              <CardHeader>
                <img className="mx-auto" src={item.image} />
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
