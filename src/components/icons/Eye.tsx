import { SVGAttributes } from "react";

function EyeIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      color="#362F0C"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 4a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-6.25A5.913 5.913 0 00.5 6c.865 2.195 3 3.75 5.5 3.75S10.635 8.195 11.5 6A5.913 5.913 0 006 2.25z"
      ></path>
    </svg>
  );
}

export default EyeIcon;
