import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "soumyapramanik1010@gmail.com";

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        window.prompt("Copy this email:", email);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative inline-flex min-w-48 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-black px-6 py-3 text-center font-semibold text-white transition hover:scale-105"
    >
      <span className="flex items-center gap-2">
        {copied ? <Check size={16} /> : <Copy size={16} />}
        <span>{copied ? "Email copied!" : "Copy email"}</span>
      </span>
    </button>
  );
};

export default CopyEmailButton;
