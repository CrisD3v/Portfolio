import React, { memo }  from "react";

interface Props {
  children: React.ReactNode;
  text: string;
  info: string;
  date: string;
}

function TooltipDesc ({children, text, info, date}:Props) {
  return (
    <span className="group relative">
      <span className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-rose-600 px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-rose-600 before:content-[''] group-hover:opacity-100">
        {text}
        <hr />
        <p className="mt-2">{date}</p>
        <p>{info}</p>
      </span>

      {children}
    </span>
  );
}


TooltipDesc.displayName = "Tooltip";
export default memo(TooltipDesc);
