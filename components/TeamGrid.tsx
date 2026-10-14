import Image from "next/image";
import Icon from "@/components/Icon";
import Paginated from "@/components/Paginated";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { label, site as data } from "@/data";

const { team } = data;

export default function TeamGrid() {
  return (
    <section className="section-y bg-white px-20 sm:px-40 lg:px-64 xl:px-0">
      <div className="text-center">
        <SectionLabel
          text={team.label}
          lineClass="h-3 w-44 bg-brand xl:h-4 xl:w-55"
          className="gap-10 font-heading fs-14 font-bold tracking-[0.08em] text-ink xl:gap-12 xl:fs-15"
        />
        <h2 className="mt-8 font-heading fs-34 leading-42 font-extrabold tracking-[-0.025em] text-ink sm:fs-46 sm:leading-54 xl:mt-4 xl:fs-55 xl:leading-58">
          <Highlight text={team.title} highlight={team.titleHighlight} highlightClass="text-brand" />
        </h2>
        <p className="mx-auto mt-10 max-w-760 font-heading fs-15 leading-24 font-medium text-steel xl:mt-8 xl:max-w-none xl:fs-17 xl:leading-23 xl:tracking-[0.01em] xl:whitespace-pre-line">
          {team.description}
        </p>
      </div>

      <Paginated perPage={team.perPage} className="mx-auto mt-32 grid max-w-1542 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:mt-30 xl:grid-cols-4 xl:gap-x-30 xl:gap-y-20">
        {team.members.map((member) => (
          <li
            key={member.name}
            className="overflow-hidden rd-4 bg-cloud pb-22 text-center shadow-[0_6px_18px_rgba(10,40,50,0.07)] xl:h-316 xl:pb-0"
          >
            <div className="relative h-220 overflow-hidden sm:h-200 xl:h-180">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <h3 className="mt-18 font-heading fs-18 font-extrabold text-ink xl:mt-15 xl:fs-19 xl:leading-24">{member.name}</h3>
            <p className="mt-2 font-body fs-15 text-graphite xl:mt-1 xl:fs-15 xl:leading-22">{member.role}</p>
            <span className="mx-auto mt-12 block h-3 w-43 bg-brand xl:mt-8" />
            <ul className="mt-14 flex items-center justify-center gap-12 xl:mt-15 xl:gap-13">
              {team.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label("socialProfile", { name: member.name, network: social.name })}
                    className="flex size-34 items-center justify-center rounded-full border-[1.5px] border-line-strong bg-white text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white xl:size-36"
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
}
