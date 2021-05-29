import React from 'react';
import tw, { styled } from 'twin.macro';

const Head = styled.header({
  minHeight: '350px',
});

const Header = () => {
  return (
    <Head tw='bg-blue-600 pt-2'>
      <div tw='max-w-5xl mx-auto text-white w-full'>
        <div tw='flex flex-col w-6/12'>
          <h1 tw='font-semibold text-3xl mt-10'>
            The Most Trusted Open Source Password Manager for Business
          </h1>
          <p tw='font-light leading-6 mt-3 text-lg'>
            Masterpass offers the easiest and safest way for teams and
            individuals to store and share sensitive data from any device.
          </p>
          <div tw='flex justify-between w-8/12 mt-5'>
            <button tw='py-2 px-3 font-normal bg-white text-black rounded-md'>
              Start an Enterprise Trial
            </button>
            <button tw='py-2 px-3 border rounded-md'>Plans & Pricing</button>
          </div>
        </div>
      </div>
    </Head>
  );
};

export default Header;
