import { H2 } from "@/components/h2";
type DashboardProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: DashboardProps) {
  return (
    <div>
      <H2>Layout</H2>
      <div>{children}</div>
    </div>
  );
}
