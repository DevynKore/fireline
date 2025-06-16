import { useState, useEffect } from 'react';

export default function useOpenCV() {
  const [opencv, setOpencv] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function will be called when OpenCV is ready
    window.onOpenCvReady = () => {
      setOpencv(window.cv);
      setLoading(false);
    };
  }, []);

  return { opencv, loading };
}