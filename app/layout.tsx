import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equity Split Validator — Fair Equity for Co-Founders",
  description: "Calculate fair equity splits, validate against market standards, and flag red flags before you sign legal docs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f8938592-effb-4693-a936-d025e3a0aa34"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
