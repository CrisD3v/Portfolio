import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineLink, AiFillHeart } from "react-icons/ai";
import { MdFeedback } from "react-icons/md";
import { Transition } from "@headlessui/react";

interface Props {
  link: string;
  func?: () => void;
}

function FooterCard({ link , func}: Props) {
  const [like, setLike] = useState(false);
  const [feedback, setFeedback] = useState(false);

  const onLike = () => {
    setLike(!like);
  };
  return (
    <div className="p-5 border-t rounded-b-md bg-white">
      <div className="grid grid-cols-12 text-lg">
        <div className="col-start-2">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={onLike}
          >
            <Transition
              show={like}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 rotate-[-120deg] scale-50"
              enterTo="opacity-100 rotate-0 scale-150"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <span className="text-rose-500">
                <AiFillHeart />
              </span>
            </Transition>

            <Transition
              show={!like}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 rotate-[-120deg] scale-150"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <span className="text-rose-700">
                <AiOutlineHeart />
              </span>
            </Transition>

            <div className="">
              <p
                className={like ? "text-rose-500 font-semibold" : "font-normal"}
              >
                Like
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-5">
          <a href={link} target='_blank'>
            <div className="flex items-center gap-2">
              <span className="text-sky-500">
                <AiOutlineLink />
              </span>
              <p>Link</p>
            </div>
          </a>
        </div>
        <div className="col-start-11">
          <div className="flex items-center gap-2 cursor-pointer" onClick={func}>
            <span className="text-green-500">
              <MdFeedback />
            </span>
            <p>Feed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCard;
