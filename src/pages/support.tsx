import Head from 'next/head';
import React from 'react';

const SupportPage = () => {
  return (
    <>
      <Head>
        <title>PhotoNest Support</title>
        <meta name="description" content="Support page for PhotoNest App" />
      </Head>
      <main className="mx-auto max-w-3xl px-4 py-12 font-sans text-base leading-relaxed text-gray-800">
        <h1 className="mb-4 text-3xl font-bold">PhotoNest Support</h1>

        <p className="mb-4">
          <strong>App Version:</strong> 1.0.0
        </p>

        <p className="mb-6">
          <strong>PhotoNest</strong> uses AI to organize your iPhone photos into
          albums by visual content. Everything happens securely on your device
          &mdash; fast, private, and offline.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">Need Help?</h2>
        <p className="mb-4">
          If you&rsquo;re experiencing issues with the app, feel free to reach
          out via email:
        </p>
        <p className="mb-6">
          <a
            href="mailto:support@photonest.app"
            className="text-blue-600 underline hover:text-blue-800"
          >
            support@photonest.app
          </a>
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          Frequently Asked Questions
        </h2>
        <ul className="list-inside list-disc space-y-4">
          <li>
            <strong>
              Q: Why can&rsquo;t I start the photo classification?
            </strong>
            <br />
            A: Make sure you&rsquo;ve granted PhotoNest permission to access
            your photo library in Settings &gt; Privacy &gt; Photos.
          </li>
          <li>
            <strong>Q: Does PhotoNest upload my photos?</strong>
            <br />
            A: No. All processing is done on your iPhone. Your images never
            leave your device.
          </li>
          <li>
            <strong>Q: How can I reset the albums?</strong>
            <br />
            A: You can delete the auto-created &quot;Nest&quot; albums from the
            Photos app manually.
          </li>
        </ul>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">Privacy Policy</h2>
        <p>
          View our privacy policy here:{' '}
          <a
            href="https://photonest.app/privacy"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://photonest.app/privacy
          </a>
        </p>
      </main>
    </>
  );
};

export default SupportPage;
