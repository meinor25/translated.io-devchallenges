import { useState } from 'react';

export const TranslationBox = () => {
  const [wordCount, setWordCount] = useState(0);

  return (
    <section className=' bg-primary rounded-xl  text-gray p-4'>
      <div className='text-xs flex font-bold gap-x-2 border-b-[1px] pb-4 pt-3 '>
        <button>Detect Language</button>
        <button>English</button>
        <button>French</button>
        <button>Spanish</button>
      </div>
      <div className='mx-auto pt-2 flex flex-col '>
        <textarea
          name=''
          maxLength={500}
          id=''
          className='bg-transparent outline-none resize-none h-28 w-full text-xs text-textLight'
        />
        <span className='text-gray text-xs self-end'> {wordCount}/500</span>
      </div>

      <div></div>
    </section>
  );
};
