import Image from "next/image";
import Icon from "@/components/Icon";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { team } = data;

export default function TeamGrid() {
  return (
    <section className="bg-white px-20 pt-64 pb-72 sm:px-40 sm:pt-80 lg:px-64 xl:px-0 xl:pt-122 xl:pb-93">
      <div className="text-center">
        <SectionLabel
          text={team.label}
          lineClass="h-3 w-44 bg-crimson xl:h-4 xl:w-55"
          className="gap-10 font-jakarta fs-14 font-bold tracking-[0.1em] text-ink xl:gap-12 xl:fs-16"
        />
        <h2 className="mt-8 font-jakarta fs-34 leading-42 font-extrabold tracking-[-0.025em] text-ink sm:fs-46 sm:leading-54 xl:mt-6 xl:fs-59 xl:leading-68">
          <Highlight text={team.title} highlight={team.titleHighlight} highlightClass="text-[#b3141e]" />
        </h2>
        <p className="mx-auto mt-10 max-w-760 font-jakarta fs-15 leading-24 font-medium text-[#5f6b78] xl:mt-10 xl:max-w-none xl:fs-19 xl:leading-24 xl:whitespace-pre-line">
          {team.description}
        </p>
      </div>

      <ul className="mx-auto mt-32 grid max-w-1360 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:mt-30 xl:grid-cols-4 xl:gap-x-33 xl:gap-y-20">
        {team.members.map((member) => (
          <li
            key={member.name}
            className="overflow-hidden rd-4 bg-[#f6f7f8] pb-22 text-center shadow-[0_6px_18px_rgba(10,40,50,0.07)] xl:h-315 xl:pb-0"
          >
            <div className="relative h-220 overflow-hidden sm:h-200 xl:h-180">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <h3 className="mt-18 font-jakarta fs-18 font-bold text-ink xl:mt-20 xl:fs-19 xl:leading-24">{member.name}</h3>
            <p className="mt-2 font-poppins fs-15 text-[#3e4c54] xl:mt-3 xl:fs-17">{member.role}</p>
            <span className="mx-auto mt-12 block h-3 w-43 bg-crimson xl:mt-12" />
            <ul className="mt-14 flex items-center justify-center gap-12 xl:mt-16 xl:gap-13">
              {team.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${social.name}`}
                    className="flex size-34 items-center justify-center rounded-full border-[1.5px] border-[#cfd5d9] bg-white text-ink transition-colors hover:border-crimson hover:bg-crimson hover:text-white xl:size-36"
                  >
                    <Icon name={social.icon} className="size-15 xl:size-17" />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
