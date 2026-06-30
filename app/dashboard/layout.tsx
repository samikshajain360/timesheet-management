import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 pb-[60px] md:pb-[90px]">
      <Header />

      <div className="mx-auto max-w-[1200px] py-8">
        <main>
          {children}
        </main>

        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}