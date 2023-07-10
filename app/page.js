"use client";

import { useState } from "react";
import { Textarea, Button } from "@material-tailwind/react";
import Comment from "/components/Comment.jsx";
import Reply from "/components/Reply.jsx";
import Image from "next/image";

import data from "./data.json";

const user = data.currentUser;

const comments = data.comments; //array

export default function Home() {
  function formSubmit(event) {
    (event) => event.preventDefault();

    console.log("MESSAGE", message);
  }

  const [message, setMessage] = useState("");

  return (
    <main className="flex max-w-4xl min-h-screen mx-auto flex-col items-center">
      {comments.map((comm, index) => {
        return (
          <Comment
            key={index}
            content={comm.content}
            date={comm.createdAt}
            score={comm.score}
            commenter={comm.user}
          >
            {comm.replies.map((reply, index) => {
              return (
                <Reply
                  key={index}
                  owner={user.username}
                  replyer={reply.user}
                  replyingTo={reply.replyingTo}
                  score={reply.score}
                  date={reply.createdAt}
                  text={reply.content}
                />
              );
            })}
          </Comment>
        );
      })}
      <div className="flex w-full bg-white space-x-5 md:ml-20">
        <Image
          width={20}
          height={20}
          className="w-8 h-8 block"
          src={"/images/avatars/image-juliusomo.png"}
          alt="avatar"
        />

        <form className="w-full">
          <Textarea
            label="Add a comment..."
            variant="outlined"
            className="border-2 w-full"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></Textarea>
        </form>

        <Button size="sm" className="bg-modBlue h-1/2" onClick={formSubmit}>
          SEND
        </Button>
      </div>
    </main>
  );
}
