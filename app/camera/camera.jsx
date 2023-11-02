'use client'
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const CameraComponent = () => {
  const videoRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    let mediaStream = null;

    const enableCamera = async () => {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    enableCamera();

    // Matikan kamera saat komponen dibongkar (unmounted)
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [pathname]);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline className="w-full" />
    </div>
  );
};

export default CameraComponent;
