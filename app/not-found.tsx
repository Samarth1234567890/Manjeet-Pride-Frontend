import Link from 'next/link';
import { SiteShell } from '@/components/site/SiteShell';
import { MagneticButton } from '@/components/site/MagneticButton';

export default function NotFound() {
  return (
    <SiteShell>
      <section className="relative flex h-[80svh] min-h-[480px] w-full items-center justify-center overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="relative z-10 px-5 text-center">
          <div className="font-serif text-[8rem] font-light leading-none text-accent sm:text-[12rem]">404</div>
          <h1 className="mt-4 font-serif text-3xl font-light sm:text-4xl">This page could not be found.</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-primary-foreground/75">
            The page you were looking for may have moved, been renamed, or never existed.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/" variant="primary" className="px-6 py-3 text-lg font-medium">
              Return Home
            </MagneticButton>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
