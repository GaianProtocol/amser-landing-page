"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { developers } from "../../data/developers";
import dynamic from "next/dynamic";
import { useAuth } from "../../contexts/AuthContext";
import UserHeader from "../../components/UserHeader";
import Image from "next/image";

const QrReader = dynamic(
  () => import("react-qr-reader").then((mod) => mod.QrReader),
  { ssr: false }
);

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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-lg p-6 flex flex-col items-center max-w-xs w-full mx-2">
                <h3 className="text-lg font-semibold mb-2 text-center">Scan a QR Code</h3>
                <div className="w-full flex flex-col items-center">
                  <div className="w-full max-w-xs aspect-square">
                    <QrReader
                      onResult={(result: unknown) => {
                        if (result && typeof result === 'object' && 'getText' in result && typeof (result as { getText: () => string }).getText === 'function') {
                          setScanResult((result as { getText: () => string }).getText());
                        }
                      }}
                      constraints={{ facingMode: "environment" }}
                    />
                  </div>
                  {scanResult && (
                    <div className="mt-4 w-full break-all text-center text-green-700">
                      <div className="font-semibold">QR Code Result:</div>
                      <div>{scanResult}</div>
                    </div>
                  )}
                </div>
                <button
                  className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700"
                  onClick={() => setShowQR(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 