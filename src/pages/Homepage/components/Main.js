import React from 'react';
import tw, { styled } from 'twin.macro';

import global from '../../../assets/home-global-icon.png';
import openSource from '../../../assets/home-open-source-icon.png';
import security from '../../../assets/home-security-icon.png';
import home from '../../../assets/home-safety.png';
import connected from '../../../assets/connected_2x.png';

const Main = () => {
  return (
    <section tw='flex flex-col max-w-5xl mx-auto text-black w-full py-5 mt-20'>
      <h1 tw='font-semibold text-2xl mt-10 mx-auto'>
        Why choose Masterpass for password management?
      </h1>

      <div tw='grid grid-cols-3 gap-2 mt-10'>
        <div tw='flex flex-col items-center text-center'>
          <img tw='my-2 w-2/6' src={security} alt='' />
          <h1 tw='font-bold mb-2'>Trusted Security</h1>
          <p tw='font-light text-sm'>
            Your private information is protected with end-to-end encryption
            before it ever leaves your device.
          </p>
        </div>
        <div tw='flex flex-col items-center text-center'>
          <img tw='my-2 w-2/6' src={openSource} alt='' />
          <h1 tw='font-bold mb-2'>Open Source Transparency</h1>
          <p tw='font-light text-sm'>
            Masterpass source code, features, and infrastructure security are
            vetted and improved by our global community.
          </p>
        </div>
        <div tw='flex flex-col items-center text-center'>
          <img tw='my-2 w-2/6' src={global} alt='' />
          <h1 tw='font-bold mb-2'>Global Access</h1>
          <p tw='font-light text-sm'>
            Access Masterpass from anywhere, with any platform, in 40 languages.
          </p>
        </div>
      </div>

      <div tw='py-5 grid grid-cols-2 gap-3 items-center mt-20'>
        <div tw='flex flex-col'>
          <h1 tw='font-bold mb-2'>
            Secure Your Passwords From Any Location or Device
          </h1>
          <p tw='font-light text-sm'>
            Masterpass gives you power to create and manage unique passwords, so
            you can strengthen privacy and boost productivity online from any
            device or location.
          </p>
        </div>

        <img tw='w-8/12 mx-auto' src={connected} alt='' />
        <img tw='w-8/12 mx-auto' src={home} alt='' />

        <div tw='flex flex-col'>
          <h1 tw='font-bold mb-2'>Enterprise-Grade Security and Compliance</h1>
          <p tw='font-light text-sm'>
            Protect your online data using a password manager you can trust.
            Masterpass conducts regular third-party security audits and is
            compliant with Privacy Shield, HIPAA, GDPR, CCPA, and SOC 2 security
            standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
