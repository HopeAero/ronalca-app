import FAQ from "@/components/faq/faq";
import Clients from "@/components/home-page/clients";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <FAQ />
      <Clients />
    </>
  );
}
