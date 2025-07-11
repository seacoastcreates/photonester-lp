import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Rediscover your best memories in beautifully sorted folders."
      subtitle="Visit the App Store."
      button={
        <Link
          href="https://apps.apple.com/app/id6747405112"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
