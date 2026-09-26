import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f8f8f8] font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-[4.4rem]">{children}</main>
      <Footer />
    </div>
  );
}
