
import React from 'react';
import SEO from '../components/SEO';

const PrivacyPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SEO title="Privacy Policy" description="Read the Firehouse Labs privacy policy." />
      <div className="flex flex-col gap-4 pb-16 sm:pb-20 text-center">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="text-base text-neutral-400">Last update: July 31, 2023</p>
      </div>
      <div className="text-neutral-300">
        <p className="mb-4">
          At fireHouse Labs Pty Ltd, we are committed to safeguarding your privacy. This Privacy
          Policy outlines how we collect, use, and protect your personal information when you use
          our digital services, including but not limited to our website and any other software
          developed by fireHouse Labs. Please take a moment to read through this document to
          understand our practices.
        </p>
        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          1. Information We Collect
        </h2>
        <p className="mb-6">
          We may collect the following types of personal information when you interact with our
          digital services:
        </p>
        <ul className="list-inside list-disc space-y-4">
          <li>
            Information you provide: When you sign up, create an account, or use certain features,
            we may ask for your name, email address, contact details, and other relevant
            information.
          </li>
          <li>
            Usage data: We may collect data about how you use our digital services, including but
            not limited to your IP address, browser type, device information, pages visited, and
            interactions with the content.
          </li>
          <li>
            Cookies and similar technologies: We use cookies and similar technologies to enhance
            your experience, understand usage patterns, and improve our digital services.
          </li>
        </ul>
        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We may use your personal information for the following purposes:</p>
        <ul className="list-inside list-disc space-y-4">
          <li>
            To provide and improve our digital services: Your information helps us offer a
            personalized and user-friendly experience.
          </li>
          <li>
            Communication: We may use your email address or contact details to send you important
            updates, newsletters, and promotional content. You can opt-out of these communications
            at any time.
          </li>
          <li>
            Analytics: We use aggregated and anonymized data to analyze user behavior and improve
            our digital services.
          </li>
        </ul>
        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
          <a
            href="mailto:hello@firehouselabs.com.au"
            className="text-brand hover:underline"
          >
            hello@firehouselabs.com.au
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
