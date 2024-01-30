
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='h-full bg-neutral-200 dark:bg-neutral-700'>
      <div className='container mx-auto h-full px-10 py-5'>{children}</div>
    </section>
  );
}
