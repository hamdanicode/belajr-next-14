import { getServerSession } from "next-auth";
import NavbarHome from "../components/home/navbarHome";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session= await getServerSession();
  console.log("Session");
  console.log(!session);
  
  return (
    <>
        <div className='relative h-screen'>
          <NavbarHome isSession={!session} />
          <div className='mx-20 pt-14 pb-10'>
          
            {children}</div>
        </div>
    </>
  );
}
