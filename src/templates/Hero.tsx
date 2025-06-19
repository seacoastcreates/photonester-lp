import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link
            href="https://github.com/seacoastcreates/PhotoNest"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Effortless Photo Organization\n'}
            <span className="text-primary-500">Powered by AI</span>
          </>
        }
        description="PhotoNester is your smart photo assistant — using cutting-edge AI."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download in the App Store</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
