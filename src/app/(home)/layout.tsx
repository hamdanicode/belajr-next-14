import NavbarHome from "../components/home/navbarHome";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <div className='relative h-screen'>
          <NavbarHome />
          <div className='mx-20 pt-14 pb-10'>
            {children}</div>
        </div>
    </>
  );
}
