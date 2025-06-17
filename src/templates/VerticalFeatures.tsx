import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Organize photos with AI"
    description="PhotoNester automatically analyzes and organizes your photos into visual albums based on content, people, and moments."
  >
    <VerticalFeatureRow
      title="🔍 Smart Categorization"
      description="AI analyzes your photos and clusters them by content — travel, pets, food, nature, selfies, documents, and more."
      image="/assets/images/ChatGPT1.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="🧠 On-Device Intelligence"
      description="All processing happens securely on your iPhone. Your photos never leave your device."
      image="/assets/images/ChatGPT2.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="📂 Automatic Albums"
      description="Photos are grouped into clean, scrollable albums for quick access and sharing."
      image="/assets/images/ChatGPT3.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="⚡ Fast & Private"
      description="No internet connection required. Instant results with complete privacy."
      image="/assets/images/ChatGPT4.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="📅 Batch Mode"
      description="Organize your entire photo library in minutes, or focus on specific time periods."
      image="/assets/images/ChatGPT5.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="📸 Optimized for iOS"
      description="Built to take full advantage of your device’s performance, with smooth and responsive interaction."
      image="/assets/images/ChatGPT6.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
