import Image from "next/image";
import NextImage from "../assests/images/nextjspng.png";

const Album = () => {
  return (
    <div>
      <h1>This image using img tag</h1>
      <img src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" width="100%" alt="" />

      <h1>This image using image component</h1>
      <Image src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp"
      width={500} height={500} layout="responsive" alt="" />

      <h1>This image using image component locally</h1>
      <Image src={NextImage}
      width={500} height={500} layout="responsive" alt="" />
    </div>
  );
};

export default Album;