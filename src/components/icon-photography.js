const IconPhotography = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 56 56"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="photo">
          <stop stopColor="#FF6F48" offset="0%" />
          <stop stopColor="#F02AA6" offset="100%" />
        </linearGradient>
        <path
          d="m31 18 1.83 2H36c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h3.17L25 18h6Zm-3 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z"
          id="photography"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle fill="url(#photo)" cx="28" cy="28" r="28" />
        <use fill="#FFF" xlinkHref="#photography" />
      </g>
    </svg>
  );
};

export default IconPhotography;
