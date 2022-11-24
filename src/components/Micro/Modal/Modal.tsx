import React, { useState } from "react";
import Caja from "../../Items/Feed/Caja";
import Comenta from "../../Items/Feed/Comenta";

interface Props {
  children: React.ReactNode;
  onDismiss?: () => void;
}

function Modal({ children, onDismiss }: Props) {
  const [feed, setFeed] = useState(false);
  const activeFeed = () => {
    setFeed(true);
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {onDismiss && (
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                onClick={onDismiss}
                type="button"
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                aria-label="Close"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                 
                  
                
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
          <div className="mb-2">
            <h2>PROYECTO VIDEO GAMES</h2>
          </div>
          <hr className="w-96" />
          <div className="mt-5">
            <Caja />
          </div>
          <div className="mt-5">
            {feed ? (
              <Comenta />
            ): (
              <div
              className="border border-green-200  w-box bg-green-50 rounded-md p-2 cursor-pointer"
              onClick={activeFeed}
            >
              <div className="flex justify-center">
                <p className="font-bold text-dark text-opacity-50">FEED BACK</p>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
