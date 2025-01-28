import { FC, HTMLAttributes } from 'react';

interface SectionHeadingProps {
  heading: string;
  subHeading: string;
  headingProps?: HTMLAttributes<HTMLHeadingElement>;
  subHeadingProps?: HTMLAttributes<HTMLHeadingElement>;
  highlightedSpanProps?: HTMLAttributes<HTMLSpanElement>;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  heading,
  subHeading,
  headingProps,
  subHeadingProps,
  highlightedSpanProps,
}) => {
  const highlightedText = heading.slice(0, 2);
  const normalText = heading.slice(2);

  return (
    <>
      <h1
        {...headingProps}
        className={`font-poppins text-gray-500 font-medium ${headingProps?.className || ''}`}
      >
        {highlightedText && (
          <span
            {...highlightedSpanProps}
            className={`p-1 pr-0 bg-primary-light h-8 ${highlightedSpanProps?.className || ''}`}
          >
            {highlightedText}
          </span>
        )}
        {normalText}
      </h1>
      <h2
        {...subHeadingProps}
        className={`text-4xl md:text-5xl font-copperplate-gothic-bold font-bold text-black max-w-2xl mt-4 ${subHeadingProps?.className || ''}`}
      >
        {subHeading}
      </h2>
    </>
  );
};
