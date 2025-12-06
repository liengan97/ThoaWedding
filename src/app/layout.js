import "./globals.css";

export const metadata = {
  title: "Tiến & Thoa Wedding",
  description: "Save the Date - Tiến & Thoa",
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
