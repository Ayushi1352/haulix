import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Paginated } from "@/components/ui/Pagination";
import { Highlight, SectionLabel } from "@/components/ui/SectionHeading";
import type { GlobalUIData, TeamData } from "@/types/templates.types";
import { fill } from "@/components/ui/text";

export const Team = ({ data: team, ui }: { data?: TeamData; ui: GlobalUIData }) => {
  if (!team) return null;
  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-[var(--color-white)] px-20 sm:px-40 lg:px-64 xl:px-0 [[data-white-section]+&]:!pt-0">
      <div className="text-center">
        <SectionLabel
          text={team.label}
          lineClass="h-3 w-44 bg-brand xl:h-4 xl:w-55"
          className="gap-10 font-heading text-[0.875rem] font-bold tracking-[0.08em] text-ink xl:gap-12 xl:text-[0.9375rem]"
        />
        <h2 data-reveal="up" data-reveal-delay="100" className="mt-8 font-heading text-[2.125rem] leading-42 font-extrabold tracking-[-0.025em] text-ink sm:text-[2.875rem] sm:leading-54 xl:mt-4 xl:text-[3.4375rem] xl:leading-58">
          <Highlight text={team.title} highlight={team.titleHighlight} highlightClass="text-brand" />
        </h2>
        <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-10 max-w-760 font-heading text-[0.9375rem] leading-24 font-medium text-steel xl:mt-8 xl:max-w-none xl:text-[1.0625rem] xl:leading-23 xl:tracking-[0.01em] xl:whitespace-pre-line">
          {team.description}
        </p>
      </div>

      <Paginated perPage={team.perPage} ui={ui} className="mx-auto mt-32 grid max-w-1542 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:mt-30 xl:grid-cols-4 xl:gap-x-30 xl:gap-y-20">
        {team.members.map((member) => (
          <li
            key={member.name}
            className="group overflow-hidden rounded-[0.25rem] bg-cloud pb-22 text-center shadow-[0_6px_18px_var(--color-shadow-ink-7)] transition-[transform,box-shadow] duration-300 hover:-translate-y-6 hover:shadow-[0_18px_40px_var(--color-shadow-ink-14)] xl:h-316 xl:pb-0"
          >
            <div className="relative h-220 overflow-hidden sm:h-200 xl:h-180">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-18 font-heading text-[1.125rem] font-extrabold text-ink xl:mt-15 xl:text-[1.1875rem] xl:leading-24">{member.name}</h3>
            <p className="mt-2 font-body text-[0.9375rem] text-graphite xl:mt-1 xl:text-[0.9375rem] xl:leading-22">{member.role}</p>
            <span className="mx-auto mt-12 block h-3 w-43 bg-brand transition-[width] duration-300 group-hover:w-80 xl:mt-8" />
            <ul className="mt-14 flex items-center justify-center gap-12 xl:mt-15 xl:gap-13">
              {team.socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={fill(ui.socialProfile, { name: member.name, network: social.label })}
                    className="flex size-34 items-center justify-center rounded-full border-[1.5px] border-line-strong bg-[var(--color-white)] text-ink transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-3 hover:border-brand hover:bg-brand hover:text-[var(--color-white)] xl:size-36"
                  >
                    <Icon name={social.icon} className="size-15 xl:size-19" />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </Paginated>
    </section>
  );
};
