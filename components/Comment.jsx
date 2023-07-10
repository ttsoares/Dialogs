"use client";

import Image from "next/image";
import reply from "/images/icon-reply.svg";
import plus from "/images/icon-plus.svg";
import minus from "/images/icon-minus.svg";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const Comment = ({ children, content, date, score, commenter }) => {
  const [editReply, setEditReply] = useState(false);
  const [cngScore, setCngScore] = useState(Number(score));

  function incrementa() {
    setCngScore(cngScore + 1);
  }

  function decrementa() {
    setCngScore(cngScore - 1);
    if (cngScore === 0) setCngScore(0);
  }

  return (
    <>
      <div className="pl-1 xl:flex xl:flex-col xl:justify-around bg-white">
        <div className="p-5 xl:flex xl:justify-around bg-white">
          <div className="xl:order-2">
            <div className="flex mb-4 space-x-4 w-11/12 xl:justify-between">
              <div className="flex place-items-center space-x-4">
                <Image
                  width={20}
                  height={20}
                  className="w-8 h-8 block"
                  src={commenter.image.png.substring(1)}
                  alt="avatar"
                />
                <h1 className="font-bold text-sm">{commenter.username}</h1>
                <p className="text-grayBlue text-sm">{date}</p>
              </div>
              <div className="hidden xl:flex">
                <Image className="w-3 m-3" src={reply} alt="reply" />
                <button
                  onClick={() => setEditReply(!editReply)}
                  className="text-grayBlue font-bold"
                >
                  Reply
                </button>
              </div>
            </div>
            <p className="text-grayBlue">{content}</p>
          </div>

          <div className="flex justify-between m-auto w-11/12 xl:order-1 xl:flex-col xl:w-28 xl:m-3">
            <div className="flex w-full justify-between xl:flex-col place-items-center ">
              <div className="flex xl:flex-col place-items-center bg-lightGray">
                <span className="mr-1 text-lightGB xl:mr-0">
                  <Image
                    onClick={incrementa}
                    className="w-3 m-3"
                    src={plus}
                    alt=""
                  />
                </span>
                <p className="text-grayBlue font-bold">{cngScore}</p>
                <span
                  onClick={decrementa}
                  className="ml-1 text-lightGB xl:ml-0"
                >
                  <Image className="w-3 m-3" src={minus} alt="" />
                </span>
              </div>

              <div className="flex xl:hidden">
                <Image className="w-3 m-3" src={reply} alt="reply" />
                <Button
                  onClick={() => setEditReply(!editReply)}
                  className="text-grayBlue font-bold"
                >
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </div>

        {editReply && (
          <div className="flex space-x-2 place-content-end order-3">
            <div className="w-3/4  h-24 border-2 border-darkBlue"></div>
            <Button
              size="sm"
              className="pr-5 h-1/2 bg-modBlue"
              onClick={() => setEditReply(!editReply)}
            >
              SEND
            </Button>
          </div>
        )}
      </div>

      {children}
    </>
  );
};

export default Comment;
