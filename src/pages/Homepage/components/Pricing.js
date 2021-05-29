import React from 'react';
import tw, { styled } from 'twin.macro';

const Pricing = () => {
  return (
    <>
      <section tw='bg-gray-200'>
        <div tw='flex flex-col max-w-5xl mx-auto w-full py-20'>
          <h1 tw='mx-auto text-2xl font-medium'>
            Masterpass Plans and Pricing
          </h1>
        </div>
      </section>

      <section>
        <div tw='max-w-5xl mx-auto w-full py-20 '>
          <div tw='grid grid-cols-3 gap-6'>
            <div tw='flex flex-col items-center justify-between border rounded text-center h-64'>
              <h1 tw='bg-blue-800 text-white w-full text-center py-2'>
                Free Organization
              </h1>
              <div tw='p-5'>
                <h1 tw='text-2xl font-bold'>$0/month</h1>
                <p>
                  Start storing and sharing secure passwords with a two-person
                  organization.
                </p>
              </div>
              <h1 tw='w-full text-center py-2 border-t-2 bg-gray-200'>
                Create Free Organization
              </h1>
            </div>

            <div tw='flex flex-col items-center justify-between border rounded text-center h-64'>
              <h1 tw='bg-blue-800 text-white w-full text-center py-2'>
                Teams Organization
              </h1>
              <div tw='p-5'>
                <h1 tw='text-2xl font-bold'>$0/month</h1>
                <p>
                  Share private data safely with your coworkers, department, or
                  entire organization.
                </p>
              </div>
              <h1 tw='w-full text-center py-2 border-t-2 bg-gray-200'>
                Start Teams Free Trial
              </h1>
            </div>

            <div tw='flex flex-col items-center justify-between border rounded text-center h-64'>
              <h1 tw='bg-blue-800 text-white w-full text-center py-2'>
                Enterprise Organization
              </h1>
              <div tw='p-5'>
                <h1 tw='text-2xl font-bold'>$0/month</h1>
                <p>
                  Secure business secrets, enable enterprise policies, SSO
                  authentication, and self-hosting.
                </p>
              </div>
              <h1 tw='w-full text-center py-2 border-t-2 bg-gray-200'>
                Start Enterprise Free Trial
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
