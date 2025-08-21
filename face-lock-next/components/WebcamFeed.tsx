"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import * as faceapi from 'face-api.js';

export default function WebcamFeed({ faceDetected, setFaceDetected }: { faceDetected: boolean; setFaceDetected: Dispatch<SetStateAction<boolean>> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  

  useEffect(() => {
    // Ask for webcam access
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing webcam:", err);
      })
  }, [])

  useEffect(() => {
    const loadModelsAndDetect = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      const video = videoRef.current
      if (!video) return
      video.addEventListener('play', async () => {
        const interval = setInterval(async () => {
          const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          setFaceDetected(detections.length > 0)
        }, 100)
      })
    }
    loadModelsAndDetect().catch(err => console.error("Error loading models:", err));
  }, [])

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className={`
          rounded-lg shadow-lg w-[400px] h-[300px] object-cover border-4
          transition-colors duration-500
          ${faceDetected ? "border-green-500" : "border-red-500"}
        `}
      />
    </div>
  )
}
