export default function AuthLayout({
  children,
}: {
  childred: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}
