import { FC, SVGProps } from 'react';

export const MailIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill={'currentColor'} />
    </svg>
  );
};
