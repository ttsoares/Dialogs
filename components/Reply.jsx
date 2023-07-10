"use client";

import Image from "next/image";
import reply from "/images/icon-reply.svg";
import plus from "/images/icon-plus.svg";
import minus from "/images/icon-minus.svg";
import iconDel from "/images/icon-delete.svg";
import iconEdit from "/images/icon-edit.svg";
import { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Reply = ({ owner, replyer, replyingTo, score, date, text }) => {
  const [editReply, setEditReply] = useState(false);
  const [showing, setShowing] = useState(true);
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(text);
  const [cngScore, setCngScore] = useState(Number(score));

  const [delModal, setDelModal] = useState(false);

  function edit() {
    setShowing(false);
    setEditing(true);
  }

  function saveEdit(ev) {
    ev.preventDefault();
    setShowing(true);
    setEditing(false);
  }

  function incrementa() {
    setCngScore(cngScore + 1);
  }

  function decrementa() {
    setCngScore(cngScore - 1);
    if (cngScore === 0) setCngScore(0);
  }

  function startDel() {
    if (editing) return;
    setDelModal(!delModal);
  }

  function cancelDel() {
    setDelModal(!delModal);
  }

  function confirmDel() {
    setDelModal(!delModal);
  }

  return (
    <>
      <div className="w-full relative xl:ml-20 p-2 xl:flex xl:flex-col xl:justify-around bg-white">
        <div className="w-full p-2 xl:flex xl:ml-20 xl:justify-around bg-white">
          <div className="xl:order-2 xl:w-full">
            <div className="flex mb-4 space-x-4 w-11/12 xl:justify-between">
              <div className="flex justify-between w-full">
                <div className="flex place-items-center space-x-3">
                  <Image
                    width={20}
                    height={20}
                    className="w-8 h-8 block"
                    src={replyer.image.png.substring(1)}
                    alt="avatar"
                  />
                  <h1 className="font-bold text-sm">{replyer.username}</h1>
                  {owner === replyer.username && (
                    <h2 className=" bg-darkBlue text-white px-1 text-sm">
                      you
                    </h2>
                  )}
                  <p className="text-grayBlue text-sm">{date}</p>
                </div>
                {owner === replyer.username && (
                  <div className="hidden xl:flex place-items-center">
                    <Image className="w-3 m-3" src={iconDel} alt="reply" />
                    <span
                      onClick={startDel}
                      className="text-softRed font-bold hover:cursor-pointer "
                    >
                      Delete
                    </span>
                    <Image className="w-3 m-3" src={iconEdit} alt="reply" />
                    <span
                      onClick={edit}
                      className="text-grayBlue hover:cursor-pointer font-bold"
                    >
                      Edit
                    </span>
                  </div>
                )}
              </div>
              {!(owner === replyer.username) && (
                <div className="hidden xl:flex">
                  <Image className="w-3 m-3" src={reply} alt="reply" />
                  <button
                    onClick={() => setEditReply(!editReply)}
                    className="text-grayBlue font-bold"
                  >
                    Reply
                  </button>
                </div>
              )}
            </div>
            {showing && (
              <p className="text-grayBlue">
                <span className="font-bold text-grayBlue mr-2">
                  {replyingTo}
                </span>
                {content}
              </p>
            )}
            {editing && (
              <div className="flex flex-col w-full items-end border-2">
                <form className="border-2 w-full">
                  <textarea
                    className="resize-none w-full"
                    name="postContent"
                    defaultValue={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={5}
                    spellcheck={false}
                    autocorrect={false}
                    autofocus={true}
                  />
                </form>
                <Button
                  size="sm"
                  className=" bg-modBlue w-24"
                  onClick={saveEdit}
                >
                  UPDATE
                </Button>
              </div>
            )}
          </div>

          <div className="flex justify-between m-auto w-11/12 xl:order-1 xl:flex-col xl:w-28 xl:m-5">
            <div className="flex w-full justify-between xl:flex-col place-items-center ">
              <div className="flex xl:flex-col -m-3 place-items-center bg-lightGray">
                <span className="mr-1 text-lightGB xl:mr-0">
                  <Image
                    onClick={incrementa}
                    className="w-3 m-3"
                    src={plus}
                    alt=""
                  />
                </span>
                <p className="text-grayBlue font-bold">{cngScore}</p>
                <span className="ml-1 text-lightGB xl:ml-0">
                  <Image
                    onClick={decrementa}
                    className="w-3 m-3"
                    src={minus}
                    alt=""
                  />
                </span>
              </div>
              {owner === replyer.username && (
                <div className="flex ml-3 xl:hidden place-items-center">
                  <Image className="w-3 m-3" src={iconDel} alt="reply" />
                  <span
                    onClick={startDel}
                    className="text-softRed hover:cursor-pointer font-bold"
                  >
                    Delete
                  </span>
                  <Image className="w-3 m-3" src={iconEdit} alt="reply" />
                  <span
                    onClick={edit}
                    className="text-grayBlue hover:cursor-pointer font-bold"
                  >
                    Edit
                  </span>
                </div>
              )}
            </div>

            {!(owner === replyer.username) && (
              <div className="flex xl:hidden">
                <Image className="w-3 m-3" src={reply} alt="reply" />
                <button
                  onClick={() => setEditReply(!editReply)}
                  className="text-grayBlue font-bold"
                >
                  Reply
                </button>
              </div>
            )}
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

      <Dialog open={delModal}>
        <DialogHeader>Delete comment</DialogHeader>
        <DialogBody divider className="text-gray-900 text-lg">
          Are you sure you want to delete this comment? <br /> This will remove
          the comment and can not be undone.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={cancelDel}
            className="mr-1 bg-gray-700 hover:bg-darkBlue text-white"
          >
            <span>NO, CANCEL</span>
          </Button>
          <Button
            variant="text"
            color="white"
            onClick={confirmDel}
            className="bg-red-800 hover:bg-softRed"
          >
            <span>YES, DELETE</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Reply;
