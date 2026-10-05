import { type Metadata } from "next";
import AppLayout from "@/layouts/app-layout";
import { Toaster } from "@/components/ui/sonner";
import { BreadcrumbProvider } from "@/hooks/use-breadcrumb";

export const metadata: Metadata = {
  title: "Dashboard | Fabis",
  description: "Fabis admin page",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <BreadcrumbProvider>
      <AppLayout>
        <Toaster
          position='top-right'
          theme='light'
        />
        {children}
      </AppLayout>
    </BreadcrumbProvider>
  );
}