"use client";
import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
import { Container } from "../common/Container";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Banner = ({ img }: { img: string }) => {
  const [largeImage, setLargeImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLargeImage(true);
    }, 1000);
  }, []);

  return (
    <div className="bg-black">
      <Container>
        <div className="relative flex justify-center">
          <Image
            loader={() => myLoader(img)}
            src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${img}`}
            width={300}
            height={500}
            alt="banner"
            className={twMerge(
              "transition-all duration-500 ease-in-out w-[85%]",
               
            )}
          />
        </div>
      </Container>
    </div>
  );
};
