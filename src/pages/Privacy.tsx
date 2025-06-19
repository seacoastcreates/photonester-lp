import Head from 'next/head';
import React from 'react';

const PrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | PhotoNest</title>
        <meta
          name="description"
          content="Privacy Policy for the PhotoNest app"
        />
      </Head>
      <main className="mx-auto max-w-3xl px-4 py-12 font-sans text-base leading-relaxed text-gray-800">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

        <p className="mb-4">Last updated: June 19, 2025</p>

        <p className="mb-6">
          At <strong>PhotoNest</strong>, your privacy is extremely important to
          us. This Privacy Policy explains how we handle information when you
          use our app.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          1. Information We Do Not Collect
        </h2>
        <p className="mb-6">
          PhotoNest does <strong>not</strong> collect, store, or transmit any
          personal data or images. All processing happens entirely on your
          device.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          2. On-Device Processing
        </h2>
        <p className="mb-6">
          All photo classification and clustering is performed locally on your
          iPhone using on-device machine learning models. Your photos never
          leave your device, and we do not transmit any photo data to external
          servers.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">3. Photo Access</h2>
        <p className="mb-6">
          The app requires access to your photo library solely to organize your
          images into albums. This permission is used only for the intended
          purpose and nothing else.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          4. No Third-Party Tracking
        </h2>
        <p className="mb-6">
          We do not use any third-party analytics tools, ad networks, or
          tracking technologies.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          5. Children’s Privacy
        </h2>
        <p className="mb-6">
          PhotoNest is not directed toward children under the age of 13. We do
          not knowingly collect personal information from anyone.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          6. Changes to This Policy
        </h2>
        <p className="mb-6">
          We may update this policy from time to time. Any changes will be
          posted here with the updated date at the top of the page.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">7. Contact</h2>
        <p className="mb-6">
          If you have any questions about this policy, feel free to reach us at:{' '}
          <a
            href="mailto:support@photonest.app"
            className="text-blue-600 underline hover:text-blue-800"
          >
            support@photonest.app
          </a>
        </p>
      </main>
    </>
  );
};

export default PrivacyPage;
