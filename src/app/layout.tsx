import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {

return (
<html lang="de" suppressHydrationWarning>

<body>

<ThemeProvider attribute="class">

{children}

</ThemeProvider>

</body>

</html>
);
}