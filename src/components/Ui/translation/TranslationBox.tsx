import { FormEvent, useState } from 'react';
import { TranslationTextArea } from './TranslationTextArea';
const WORD_LIMIT = 500;

export const TranslationBox = () => {
  const [wordCount, setWordCount] = useState(0);
  const handleTextAreaChange = (event: FormEvent<HTMLTextAreaElement>) => {
    setWordCount((event.target as HTMLTextAreaElement).value.length);
  };

  return (
    <section className=' bg-primary rounded-xl  text-gray p-4'>
      <div className='text-xs flex font-bold gap-x-2 border-b-[1px] pb-4 pt-3 '>
        <button>Detect Language</button>
        <button>English</button>
        <button>French</button>
        <button>Spanish</button>
      </div>
      <div className='mx-auto pt-2 flex flex-col '>
        <TranslationTextArea
          wordCount={wordCount}
          wordLimit={WORD_LIMIT}
          handleTextAreaChange={handleTextAreaChange}
        />
      </div>

      <div></div>
    </section>
  );
};
