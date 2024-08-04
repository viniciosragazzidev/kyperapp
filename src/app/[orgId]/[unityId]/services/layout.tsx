import NavbarTabs from "./components/Navbar_Tabs";
export default function ServicesLayout({
  children, // will be a page or nested layout
  params,
}: {
  children: React.ReactNode;
  params: { orgId: string; unityId: string };
}) {
  return (
    <div className="w-full h-full ">
      <NavbarTabs />
      {children}
    </div>
  );
}
