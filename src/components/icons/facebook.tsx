import { FC, SVGProps } from 'react';

export const FacebookIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99997 0C12.4182 0 15.9999 3.58171 15.9999 7.99999C15.9999 11.993 13.0745 15.3026 9.24998 15.9028V10.3125H11.114L11.4687 8.00005H11.4687L11.4687 7.99999H9.24997L9.24998 6.49938C9.24998 5.86673 9.5599 5.25005 10.5537 5.25005H11.5625V3.28131C11.5625 3.28131 11.5625 3.28131 11.5625 3.2813V3.28124C11.5625 3.28124 10.6469 3.125 9.77168 3.125C7.94431 3.125 6.74998 4.23249 6.74998 6.23749V7.99999H4.71874V10.3125H4.71875V10.3125H6.74998V15.9028C2.92547 15.3026 0 11.993 0 7.99999C0 3.58171 3.58171 0 7.99997 0Z"
        fill={props.color ? 'currentColor' : 'white'}
      />
    </svg>
  );
};
