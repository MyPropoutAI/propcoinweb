"use client";
//  MAKE THE COMPONENT REUSEABLE FOR EACH SBT i.e Medical, Education and Game collections
import React, { useState } from "react";
import { Jost } from "next/font/google";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Define the types for the component state
interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [selectedImages, setSelectedImages] = useState<(string | null)[]>([
    null,
    null,
    null,
  ]);

  const handleImageChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const newImages = [...selectedImages];
        newImages[index] = URL.createObjectURL(file);
        setSelectedImages(newImages);
      }
    };

  const cardData = [0, 1, 2]; // Array to represent the three cards

  return (
    <div
      className={`${jost.className} text-3xl font-bold flex flex-col gap-5 px-5`}
    >
      <section className="grid grid-cols-3 gap-5">
        {cardData.map((_, index) => (
          <Card
            key={index}
            className="p-5 bg-stake-cards border-none flex flex-col gap-1"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange(index)}
              className="mb-4 hidden"
              id={`image-upload-${index}`}
            />

            <label htmlFor={`image-upload-${index}`} className="cursor-pointer">
              <Image
                src={selectedImages[index] || "/images/sbt_upload.svg"}
                alt="Uploaded Preview"
                className="mb-4 w-full h-auto max-h-[300px] max-w-[300px] object-cover"
                width={300}
                height={300}
              />
            </label>
            <input
              type="text"
              placeholder="Enter Image Description"
              className="mb-4 text-xl text-gray-500 bg-transparent border-none outline-none"
              maxLength={200}
            />
            <Button className="bg-indigo-600 px-5 py-5 hover:bg-indigo-700">
              View
            </Button>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Page;
