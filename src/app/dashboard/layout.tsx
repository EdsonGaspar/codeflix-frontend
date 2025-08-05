import { H2 } from "@/components/h2";
type DashboardProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: DashboardProps) {
  return (
    <div>
      <H2>Layout</H2>
      <div className="border border-red-500 h-60">{children}</div>
    </div>
  );
}
