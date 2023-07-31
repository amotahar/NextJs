import { Button } from "antd";
import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h1>New Home Page </h1>
      <Button type="primary">
            <Link href="/"> Home </Link>
          </Button>
    </div>
  );
};

export default NewsPage;