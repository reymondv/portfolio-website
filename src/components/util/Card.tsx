import React from "react";
import RenderIcon from "../RenderIcon";

interface Card {
  img?: string;
  value?: string;
  title: string;
  icon?: boolean;
  size: number;
  className?: string;
  contents?: Stack[];
  link?: string;
  description?: boolean;
}

interface Stack {
  name: string;
  value: string;
}

const Card = ({
  img,
  value,
  title,
  icon = false,
  size,
  className,
  contents,
  link,
  description = false,
}: Card) => {
  if (icon) {
    return (
      <>
        <div className={`${className}`} title={title}>
          <div className="m-auto">
            <div className="text-cyan-700/70 flex justify-center flex-col">
              <RenderIcon name={value} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-2">
          <p>{title}</p>
        </div>
      </>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="m-auto">
        <a href={link} rel="noopener noreferrer" target="_blank" title={title}>
          <img
            src={img}
            alt={title}
            title={title}
            height={size}
            width={size}
            className="hover:scale-110 transition-transform ease-in duration-300"
          />
        </a>
      </div>
      {description && contents ? (
        ""
      ) : (
        <span className="md:hidden m-auto text-black">{title}</span>
      )}
      {description && contents && (
        <div className="flex flex-col">
          <span className="m-auto text-xl py-2 text-white text-center">
            {title}
          </span>
          <div className="text-black flex flex-wrap justify-center">
            {contents.map((content, index) => (
              <div
                title={content.name}
                key={index}
                className="flex flex-col justify-center items-center m-1 p-2 rounded-md bg-[#ffffff] shadow-inner shadow-[#aaaaaa] max-w-32"
              >
                {/* <img
                  src={content.img}
                  alt="content-image"
                  height={45}
                  width={45}
                /> */}
                <RenderIcon name={content.value} />
                <span className="md:hidden">{content.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
