"use client";;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    (<div className="relative  h-52 w-52 md:h36 md:w-36">
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={card.id}
            className="absolute bg-black  h-60 w-60 md:h-52 md:w-70 rounded-3xl p-4 shadow-xl border  border-white/[0.1]   shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>
            <div className="font-normal text-[12px] dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className=" font-medium dark:text-white">
                {card.name}
              </p>
              <p className="font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>)
        );
      })}
    </div>)
  );
};
