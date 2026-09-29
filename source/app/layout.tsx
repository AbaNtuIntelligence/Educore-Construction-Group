import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'EDUCORE Construction Group | Building with discipline',description:'Johannesburg-based construction, refurbishment, maintenance and infrastructure coordination for commercial, public and institutional clients. Discuss your project with EDUCORE.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en-ZA"><body>{children}</body></html>}
