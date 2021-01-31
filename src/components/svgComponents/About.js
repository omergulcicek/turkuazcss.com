import * as React from "react";

function About(props) {
  return (
    <svg className="prefix__h-6 prefix__w-6" viewBox="0 0 24 24" {...props}>
      <path
        d="M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z"
        fill="#6EE7B7"
      />
      <path
        d="M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z"
        fill="#ECFDF5"
      />
      <path fill="#A7F3D0" d="M8 8h5v4H8zm0 6h5v2H8z" />
    </svg>
  );
}

const MemoAbout = React.memo(About);
export default MemoAbout;