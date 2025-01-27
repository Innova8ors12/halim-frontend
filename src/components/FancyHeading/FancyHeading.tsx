import { FC } from 'react';

interface FancyHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  heading: string;
  highlightedSpanProps: React.HTMLAttributes<HTMLSpanElement>;
}

export const FancyHeading: FC<FancyHeadingProps> = ({
  heading,
  highlightedSpanProps,
  ...props
}) => {
  const highlightedText = heading.slice(0, 2);
  const normalText = heading.slice(2);

  return (
    <h2 {...props} className={`font-robot text-gray-500 font-medium ${props.className}`}>
      {highlightedText && (
        <span
          {...highlightedSpanProps}
          className={`p-1 pr-0 bg-primary-light h-8 ${highlightedSpanProps.className}`}
        >
          {highlightedText}
        </span>
      )}
      {normalText}
    </h2>
  );
};
