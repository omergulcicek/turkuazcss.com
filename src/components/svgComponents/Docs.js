import * as React from "react";

function Docs(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6c1.093 0 2.117.292 3 .803v10A5.972 5.972 0 009 16a5.973 5.973 0 00-3 .803v-10A5.972 5.972 0 019 6z"
        fill="#FFF1F2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6c1.093 0 2.117.292 3 .803v10A5.972 5.972 0 0015 16a5.972 5.972 0 00-3 .803v-10A5.972 5.972 0 0115 6z"
        fill="#FECDD3"
      />
    </svg>
  );
}

const MemoDocs = React.memo(Docs);
export default MemoDocs;
