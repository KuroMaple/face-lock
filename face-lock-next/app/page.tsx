'use client';

import Lock from '@/components/Lock'
import WebcamFeed from '@/components/WebcamFeed'
import { useState } from 'react'

export default function Home() {
  const [faceDetected, setFaceDetected] = useState(false);
  const [canPlaySound, setCanPlaySound] = useState(false);
  const handleClick = () => setCanPlaySound(true);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <WebcamFeed faceDetected={faceDetected} setFaceDetected={setFaceDetected} />
      <Lock locked={!faceDetected} canPlaySound={canPlaySound} />
      {!canPlaySound && (
        <button onClick={handleClick} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">Allow Sound</button>
      )}
    </div>
  );
}
