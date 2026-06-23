import './globals.css';

export const metadata = {
  title: 'DevenDesigns | Custom Logos & Wallpapers',
  description: 'Country-modern custom logo and wallpaper design by DevenDesigns.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
