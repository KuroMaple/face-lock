'use client';

import Lock from '@/components/Lock'
import WebcamFeed from '@/components/WebcamFeed'
import { useState } from 'react'

export default function Home() {
  const [faceDetected, setFaceDetected] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <WebcamFeed faceDetected={faceDetected} setFaceDetected={setFaceDetected} />
      <Lock locked={!faceDetected} />
    </div>
  );
}
