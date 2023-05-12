import "the-new-css-reset/css/reset.css";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarUI from "./NavbarUI";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <NavbarUI></NavbarUI>{children}</body>
    </html>
  );
}