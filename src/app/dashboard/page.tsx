import { H2 } from "@/components/h2";
import { getSettings } from "@/lib/settings";

export default async function PageDashBoard() {
  const { theme, lang } = await getSettings();
  return (
    <div>
      <H2>Dashboard</H2>
      <div className="border border-blue-700">
        <H2>Theme: {theme}</H2>
        <H2>Lang: {lang}</H2>
      </div>
    </div>
  );
}
