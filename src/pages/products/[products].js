import { useRouter } from "next/router";

const ProductsDetails = () => {
  const router = useRouter()
  return (
    <div>
      <h1>This is Dynamic Product of pages: {router.query.products}</h1>
    </div>
  );
};

export default ProductsDetails;