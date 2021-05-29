import React from 'react';
import tw, { styled } from 'twin.macro';

const Anchor = styled.a.attrs({
  href: '!#',
})`
  ${tw`inline-block py-5`}
`;

const ListItem = tw.li`px-2`;

const Nav = () => {
  return (
    <nav tw='flex bg-blue-600 text-lg sticky top-0'>
      <div tw='flex max-w-5xl mx-auto text-white w-full'>
        <a href="!#" tw='uppercase text-xl py-5 pr-3' >
          <strong>Master</strong>
          <span>Pass</span>
        </a>

        <div tw='flex justify-between w-full'>
          <ul tw='flex list-none pl-0'>
            <ListItem>
              <Anchor>Download</Anchor>
            </ListItem>
            <ListItem>
              <Anchor>Help</Anchor>
            </ListItem>
            <ListItem>
              <Anchor >Contact</Anchor>
            </ListItem>
          </ul>

          <ul tw='flex list-none pl-0'>
            <ListItem>
              <Anchor tw='font-bold' >
                Get Started
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor >Log In</Anchor>
            </ListItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
