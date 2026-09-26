import { skills, tools } from '@/lib/content';

export function Skills() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Skills */}
          <div>
            <h2 className="text-5xl leading-[0.9] md:text-6xl lg:text-8xl xl:text-9xl">
              МОИ НАВЫКИ
            </h2>
            <ul className="mt-8 space-y-4">
              {skills.map((skill) => (
                <li key={skill.id} className="text-sm leading-relaxed text-foreground/70 md:text-base">
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-5xl leading-[0.9] md:text-6xl lg:text-8xl xl:text-9xl">
              МОИ ИНСТРУМЕНТЫ
            </h2>
            <ul className="mt-8 space-y-4">
              {tools.map((tool) => (
                <li key={tool.id} className="text-sm leading-relaxed text-foreground/70 md:text-base">
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
