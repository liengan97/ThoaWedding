import "./globals.css";

export const metadata = {
  title: "Save the Date - Tài & Ngân",
  description: "Save the Date - Tài & Ngân",
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
