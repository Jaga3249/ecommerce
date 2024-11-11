import { CircleX, MessageSquareX, Minus, Plus } from "lucide-react";
import { products } from "../../../data";
import Layout from "../../layout/Layout";
import { useState } from "react";

// Assuming the `products` array contains these properties
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  discountedPrice: number;
}

const CartItem = ({ item }: { item: Product }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center border shadow-sm p-2">
      <div className="flex-1 flex items-center gap-2">
        <MessageSquareX className="cursor-pointer" />
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-12 select-none pointer-events-none"
        />
        <span>{item.name}</span>
      </div>
      <span className="flex-1 flex items-center">₹{item.discountedPrice}</span>
      <span className="flex-1 flex gap-4  items-center font-bold">
        <span
          className="px-2 py-1 bg-[rgba(112,138,183,1)] text-white cursor-pointer rounded-sm"
          onClick={() => setQuantity(quantity === 1 ? quantity : quantity - 1)}
        >
          <Minus />{" "}
        </span>
        {quantity}
        <span
          className="px-2 py-1 bg-[rgba(112,138,183,1)] text-white cursor-pointer rounded-sm"
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus />{" "}
        </span>
      </span>
      <span className="flex-1 flex items-center">₹{item.discountedPrice}</span>
    </div>
  );
};

const CartSummary = () => (
  <div className="w-[40%] p-4 border rounded-md">
    <div className="flex flex-col">
      <h1 className="font-semibold mb-2">Cart Total</h1>
      <div className="flex justify-between items-center border-b-2 p-2">
        <span>Subtotal</span>
        <span>₹100</span>
      </div>
      <div className="flex justify-between items-center border-b-2 p-2">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between items-center border-b-2 p-2">
        <span>Total</span>
        <span>₹100</span>
      </div>
      <div className="flex justify-center mt-3">
        <button className="bg-[#db4444] px-10 py-3 text-white rounded-md">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
);

const CartPage = () => {
  return (
    <Layout>
      <div className="px-28 py-10">
        <div className="h-[750px] flex flex-col justify-between">
          <div className="h-[436px] flex flex-col gap-4">
            <div className="flex flex-col gap-6 h-full overflow-y-auto">
              <div className="flex bg-white shadow-sm rounded-sm border p-2">
                <span className="flex-1 font-semibold">Product</span>
                <span className="flex-1 font-semibold">Price</span>
                <span className="flex-1 font-semibold">Quantity</span>
                <span className="flex-1 font-semibold">Subtotal</span>
              </div>
              {products.slice(0, 5).map((item: any, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button className="px-10 py-3 border">Return To Shop</button>
              <button className="px-12 py-3 border">Update Cart</button>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-[60%] flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="outline-none border px-10 py-3 rounded-md"
              />
              <button className="bg-[#db4444] px-10 py-3 text-white rounded-md">
                Apply Coupon
              </button>
            </div>
            <CartSummary />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
