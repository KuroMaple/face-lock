'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const lockOpen = "M40.316 3.297c-6.609 0-12.984 4.547-12.984 14.226v7.383H7.246c-3.117 0-4.57 1.477-4.57 4.828v18.141c0 3.352 1.453 4.828 4.57 4.828h23.578c3.117 0 4.57-1.476 4.57-4.828v-18.14c0-3.235-1.359-4.712-4.289-4.805V17.03c0-6.656 4.313-10.148 9.211-10.148 4.922 0 9.234 3.492 9.234 10.148v5.39c0 1.665.82 2.368 1.899 2.368 1.031 0 1.875-.633 1.875-2.297v-4.969c0-9.68-6.398-14.226-13.008-14.226Z";
const lockClosed = "M28 4.258c-6.54 0-12.516 4.664-12.516 14.25v5.625c-2.53.305-3.773 1.828-3.773 4.828v17.883c0 3.375 1.547 4.898 4.664 4.898h23.25c3.117 0 4.664-1.523 4.664-4.898V28.937c0-3-1.242-4.593-3.773-4.875v-5.554c0-9.586-5.977-14.25-12.516-14.25Zm-8.742 13.734c0-6.539 3.89-10.125 8.742-10.125s8.742 3.586 8.742 10.125v6.047l-17.484.023Z";

export default function Lock() {
  const [locked, setLocked] = useState(true);

  const handleToggle = () => {
    const sound = !locked ? "/click.wav" : "/SciFiSound.wav";
    const audio = new Audio(sound);
    audio.currentTime = 0;
    audio.play().catch(err => console.error("Audio play failed:", err));

    setLocked(!locked);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        width={200}
        height={200}
        fill="currentColor"
      >
        <path
          d={locked ? lockClosed : lockOpen}
        />
      </motion.svg>

      <button
        className="mt-6 px-4 py-2 rounded bg-blue-500 text-white"
        onClick={handleToggle}
      >
        {locked ? "Unlock" : "Lock"}
      </button>
    </div>
  );
}
