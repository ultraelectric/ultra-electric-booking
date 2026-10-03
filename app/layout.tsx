import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ultra Electric | Professional Home Services",
  description: "Electrical, plumbing, woodworking, and landscaping services with online booking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
