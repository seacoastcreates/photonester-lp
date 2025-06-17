import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Sponsors"
    description="Produced by 36 Dunes, crafting AI solutions for your business."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://36dunes.com" target="_blank">
              <Image
                src="/assets/images/36Dunes-brown-logo-transparent.png"
                alt="Custom AI Solutions by 36 Dunes"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
