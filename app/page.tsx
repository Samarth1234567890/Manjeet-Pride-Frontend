import { SiteShell } from '@/components/site/SiteShell';
import { Hero } from '@/components/home/Hero';
import { Reveal, Stagger, StaggerItem } from '@/components/site/Reveal';
import { SectionTitle } from '@/components/site/SectionTitle';
import { ImageReveal } from '@/components/site/ImageReveal';
import { ProjectCard } from '@/components/site/ProjectCard';
import { CTASection } from '@/components/site/CTASection';
import { MagneticButton } from '@/components/site/MagneticButton';
import { STATS, PROJECTS, VALUES, TESTIMONIALS, SITE } from '@/lib/content';
import LegacyProjects from "@/components/home/LegacyProjects";
import { CountUp } from '@/components/site/CountUp';

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <SiteShell>
      <Hero />

      {/* Stats bar */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <Stagger className="grid grid-cols-2 gap-y-12 sm:gap-8 lg:grid-cols-4" stagger={0.1}>
            {STATS.map((stat) => (
              <StaggerItem key={stat.label} className="text-center sm:text-left">
                <div className="font-serif text-5xl font-light text-primary sm:text-6xl">
                  <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} value={0} />
                </div>
                <div className="mt-3 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
                  {stat.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <LegacyProjects />
        </div>
      </section>

      {/* Intro / philosophy */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <SectionTitle
                  eyebrow="The Practice"
                  title={
                    <>
                      Homes drawn for <br />
                      the next century, <br />
                      not the next quarter.
                    </>
                  }
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    For twenty-five years, Manjeet Pride Group has built residences across Pune — each one an exercise in restraint, proportion, and materials chosen for how they age.
                  </p>
                  <p>
                    We do not chase the spectacular. We chase the inevitable: homes that feel as though they could not have been drawn any other way, and that read as well in their second decade as in their first week.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10">
                  <MagneticButton href="/about" variant="outline">
                    Our Story
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="relative">
              <ImageReveal
                src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop"
                alt="A Manjeet Pride development"
                ratio="portrait"
                priority
              />
              <div className="absolute -bottom-8 -left-8 hidden glass-card p-6 sm:block">
                <div className="font-serif text-4xl font-light text-primary">1998</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  Year founded
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <SectionTitle
              eyebrow="What Guides Us"
              title="Four convictions, held quietly."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {VALUES.map((value, i) => (
              <StaggerItem key={value.title}>
                <div className="group h-full border border-border/60 bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_24px_60px_-24px_rgba(29,58,95,0.25)]">
                  <div className="font-serif text-5xl font-light text-accent/40 transition-colors duration-500 group-hover:text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionTitle
                eyebrow="Selected Work"
                title="Three of our current developments."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <MagneticButton href="/projects" variant="outline">
                All Projects
              </MagneticButton>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.1}>
                <ProjectCard project={project as any} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <SectionTitle
              eyebrow="In Their Words"
              title="What our residents say."
              light
            />
          </Reveal>
          <Stagger className="mt-16 grid gap-8 lg:grid-cols-3" stagger={0.12}>
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <figure className="flex h-full flex-col border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur-sm">
                  <div className="font-serif text-5xl leading-none text-accent">&ldquo;</div>
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-primary-foreground/90">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-primary-foreground/15 pt-6">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    <div>
                      <div className="font-serif text-lg">{t.name}</div>
                      <div className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/60">
                        {t.location}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection title={''} description={''} buttonText={''} href={''} />
    </SiteShell>
  );
}
