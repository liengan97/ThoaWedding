import "./globals.css";

export const metadata = {
  title: "TIẾN & THOA WEDDING",
  description: "SAVE THE DATE - TIẾN & THOA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
