
import React from 'react';
import SEO from '../components/SEO';

const TermsPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SEO title="Terms of Service" description="Read the Firehouse Labs terms of service." />
      <div className="flex flex-col gap-4 pb-16 sm:pb-20 text-center">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Terms of Service</h1>
        <p className="text-base text-neutral-400">Last update: March 6, 2026</p>
      </div>
      <div className="text-neutral-300">
        <p className="mb-4">
          Please read these Terms of Service carefully before using the digital services provided
          by fireHouse Labs Pty Ltd. By accessing or using our services, you agree to be bound
          by these terms.
        </p>

        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By engaging fireHouse Labs Pty Ltd for any services, you confirm that you have read,
          understood, and agree to these Terms of Service. If you do not agree, please refrain
          from using our services.
        </p>

        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          2. Services
        </h2>
        <p className="mb-4">
          fireHouse Labs provides digital services including, but not limited to, web development,
          software development, and digital consulting. The scope of services for each engagement
          will be agreed upon in writing prior to commencement of work.
        </p>

        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          3. Payment Terms
        </h2>
        <p className="mb-4">
          Invoices are due and payable by the date specified on each invoice. fireHouse Labs
          reserves the right to suspend or withhold delivery of services for any overdue accounts.
        </p>
        <p className="mb-4">
          Any unpaid accounts may be referred to a third-party collections agency. fireHouse Labs
          reserves the right to pass on all reasonable costs of debt collection — including agency
          fees, legal costs, and any other associated expenses — to the client.
        </p>

        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          4. Intellectual Property
        </h2>
        <p className="mb-4">
          Upon receipt of full payment, all deliverables produced by fireHouse Labs for a client
          engagement become the property of the client, unless otherwise agreed in writing. Any
          pre-existing tools, frameworks, or intellectual property owned by fireHouse Labs remain
          the property of fireHouse Labs.
        </p>

        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          5. Confidentiality
        </h2>
        <p className="mb-4">
          Both parties agree to keep confidential any proprietary or sensitive information shared
          during the course of an engagement and not to disclose it to any third party without
          prior written consent.
        </p>

        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          To the extent permitted by law, fireHouse Labs shall not be liable for any indirect,
          incidental, or consequential damages arising from the use of, or inability to use, our
          services. Our total liability in any matter arising under these terms is limited to the
          amount paid by the client for the specific service giving rise to the claim.
        </p>

        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          7. Governing Law
        </h2>
        <p className="mb-4">
          These Terms of Service are governed by the laws of Australia. Any disputes arising under
          these terms shall be subject to the exclusive jurisdiction of the courts of Australia.
        </p>

        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">
          8. Changes to These Terms
        </h2>
        <p className="mb-4">
          fireHouse Labs reserves the right to update these Terms of Service at any time. Changes
          will be effective upon posting to our website. Continued use of our services following
          any changes constitutes acceptance of the revised terms.
        </p>

        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl text-white">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about these Terms of Service, please contact us at{' '}
          <a href="mailto:hello@firehouselabs.com.au" className="text-brand hover:underline">
            hello@firehouselabs.com.au
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
