import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

const product = {
  name: "Red Hat",
  image: "https://bundui-images.netlify.app/products/04.jpeg",
  price: "$28",
  category: "Clothing",
};
export default function Product({ productinfo }) {
  return (
    <div className=" xl:w-[300px] group relative space-y-4 shadow-md rounded-md dark:border-2 p-4  rounded-5">
      <figure className="group-hover:opacity-90">
        <Link>
          <img
            className="w-full rounded-lg aspect-square"
            src={
              productinfo
                ? productinfo.image[1]
                : "https://bundui-images.netlify.app/products/04.jpeg"
            }
            alt={productinfo && productinfo.title}
          />
        </Link>
      </figure>
      <div className="flex justify-between">
        <div>
          <h3 className="text-md  lg:text-lg">
            {/* Ami chacchilam sudhu image er opore click korle
            kaj korbe. Shop page er add to card a click kora jacche na
          je kono jaygay click korle singleproduct route a niye jacche.
          add to cart a click korle ekhen theke cart a add korte chai */}
            <Link to={`/singleproduct/${productinfo && productinfo._id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {productinfo && productinfo.title.slice(0, 30)}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">
            {productinfo && productinfo.category}
          </p>
          <div className="flex gap-5">
            <p className="text-lg md:font-semibold">
              ${productinfo && productinfo.discountprice}
            </p>
            <del className="text-lg lg:font-semibold text-gray-500">
              ${productinfo && productinfo.sellingprice}
            </del>
          </div>
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
