import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";

const product = {
  name: "Red Hat",
  href: "#",
  image: "https://bundui-images.netlify.app/products/04.jpeg",
  price: "$28",
  category: "Clothing",
};
export default function Product({ productinfo }) {
  console.log(productinfo);
  return (
    <div className=" xl:w-[300px] group relative space-y-4 shadow-md rounded-md dark:border-2 p-4  rounded-5">
      <figure className="group-hover:opacity-90">
        <img
          className="w-full rounded-lg aspect-square"
          src={
            productinfo
              ? productinfo.thumbnail
              : "https://bundui-images.netlify.app/products/04.jpeg"
          }
        />
      </figure>
      <div className="flex justify-between">
        <div>
          <h3 className="text-md  lg:text-lg">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {productinfo && productinfo.title.slice(0,29)}
            </a>
          </h3>
          <p className="text-sm text-muted-foreground">
            {productinfo && productinfo.category}
          </p>
          <p className="text-lg font-semibold">
            ${productinfo && productinfo.price}
          </p>
        </div>
        {/* <p className="text-lg font-semibold">{productinfo.price}</p> */}
      </div>
      <div className="flex gap-4">
        <Button variant="outline" className="w-full">
          <PlusIcon className="size-4 me-1" /> Add to Card
        </Button>
      </div>
    </div>
  );
}
