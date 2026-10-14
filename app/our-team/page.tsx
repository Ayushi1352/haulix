import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import TeamGrid from "@/components/TeamGrid";

const { title } = data.pages.ourTeam;

export const metadata: Metadata = { title: pageTitle(title) };

export default function OurTeamPage() {
  return (
    <>
      <PageBanner title={title} />
      <TeamGrid />
    </>
  );
}
