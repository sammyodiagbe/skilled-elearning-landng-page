const IconDesign = () => {
  return (
    <svg
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="des">
          <stop stopColor="#FF6F48" offset="0%" />
          <stop stopColor="#F02AA6" offset="100%" />
        </linearGradient>
        <path
          d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 16L9 8v8H2l7-8V2h7v14Z"
          id="big"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle fill="url(#des)" cx="28" cy="28" r="28" />
        <use fill="#FFF" xlinkHref="#big" transform="translate(19 19)" />
      </g>
    </svg>
  );
};

export default IconDesign;
