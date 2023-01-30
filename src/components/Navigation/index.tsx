import { styled } from '@stitches/react';
import Link from 'next/link';

const Wrap = styled('nav', {
  marginBottom: '30px',
});

const ListWrap = styled('ul', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const ListItem = styled('li', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '~ li': {
    marginLeft: '16px',
  },
});

export const Navigation = () => (
  <Wrap>
    <ListWrap>
      <ListItem>
        <Link href="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="/page1">page1</Link>
      </ListItem>
      <ListItem>
        <Link href="/page2">page2</Link>
      </ListItem>
    </ListWrap>
  </Wrap>
);
