"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { developers } from "../../data/developers";
import { useAuth } from "../../contexts/AuthContext";
import UserHeader from "../../components/UserHeader";
import Image from "next/image";
import jsQR from "jsqr";

function ScanModal({ onClose, onResult }: { onClose: () => void; onResult: (result: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    let stream: MediaStream;
    let animationId: number;
    let canvas: HTMLCanvasElement | null = null;
    let ctx: CanvasRenderingContext2D | null = null;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        scanFrame();
      } catch {
        setError("Could not access camera");
      }
    }

    function scanFrame() {
      if (!videoRef.current || !ctx || !canvas) return;
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);
      if (code && code.data) {
        setScanning(false);
        onResult(code.data);
        return;
      }
      if (scanning) {
        animationId = requestAnimationFrame(scanFrame);
      }
    }

    startCamera();
    return () => {
      setScanning(false);
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [onResult, scanning]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 flex flex-col items-center max-w-xs w-full mx-2">
        <h3 className="text-lg font-semibold mb-2 text-center">Scan a QR Code</h3>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <video ref={videoRef} className="w-full max-w-xs aspect-square bg-black" playsInline muted />
        <button
          className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function UserPortal() {
  const { user, logout } = useAuth();
  const [showQR, setShowQR] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const router = useRouter();

  const developer = user ? developers.find((dev) => dev.email === user.email) : null;
  const point = developer ? developer.availableBounty : 0;

  function handleScanClick() {
    if (!user) {
      router.push("/user/auth");
    } else {
      setShowQR(true);
      setScanResult(null);
    }
  }

  function handleLogout() {
    logout();
    setShowQR(false);
    setScanResult(null);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <UserHeader />
      <div className="flex-1 flex flex-col items-center justify-center px-2 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-center text-black">Your Point</h2>
            <div className="text-4xl font-bold text-indigo-600">{user ? point : 0}</div>
          </div>
          {/* QR code icon */}
          <div className="flex justify-center mb-4">
            <Image src="/qr-scan-icon.png" alt="QR Scan Icon" width={400} height={400} />
          </div>
          <button
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 mb-6"
            onClick={handleScanClick}
          >
            Scan Bank QR Code & Make Payment
          </button>
          {scanResult && (
            <div className="mt-4 w-full break-all text-center text-green-700">
              <div className="font-semibold">QR Code Result:</div>
              <div>{scanResult}</div>
            </div>
          )}
          {user && (
            <button
              className="w-full py-2 px-4 bg-gray-300 text-gray-800 rounded-md font-semibold hover:bg-gray-400"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
          {/* QR Scanner Modal */}
          {showQR && (
            <ScanModal
              onClose={() => setShowQR(false)}
              onResult={(result) => {
                setScanResult(result);
                setShowQR(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
} 