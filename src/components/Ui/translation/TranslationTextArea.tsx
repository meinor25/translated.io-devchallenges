import React, { FormEvent } from 'react';
interface Props {
  wordCount: number;
  wordLimit: number;
  handleTextAreaChange: (event: FormEvent<HTMLTextAreaElement>) => void;
}

export const TranslationTextArea = ({
  wordCount,
  wordLimit,
  handleTextAreaChange,
}: Props) => {
  return (
    <>
      <textarea
        name=''
        onInput={(event) => handleTextAreaChange(event)}
        id=''
        className='bg-transparent outline-none resize-none h-28 w-full text-xs text-textLight'
      />
      <span
        className={`text-gray text-xs self-end ${
          wordCount > wordLimit && 'text-red-500'
        } transition-colors duration-200`}
      >
        {wordCount}/{wordLimit}
      </span>
    </>
  );
};
