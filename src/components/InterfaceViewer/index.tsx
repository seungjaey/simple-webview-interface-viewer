import { useEffect, useState } from 'react';
import { styled } from '@stitches/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Wrap = styled('section', {
  padding: '8px',
});

const ListWrap = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const ListItem = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flext-start',
  marginBottom: '8px',
  '&:last-child': {
    marginBottom: '0',
  },
  '> p': {
    paddingLeft: '8px',
  },
});

const stringify = (o: any) => JSON.stringify(o, (k, v) => (typeof v === 'function' ? v.toString() : v));

declare global {
  interface Window {
    webkit?: {};
    Android?: {};
  }
}

const DEFAULT_INTERFACE_TEXT = 'No Interface Detected';

export const InterfaceViewer = () => {
  const { pathname } = useRouter();
  const [aosInterface, setAosInterface] = useState(DEFAULT_INTERFACE_TEXT);
  const [iosInterface, setIosInterface] = useState(DEFAULT_INTERFACE_TEXT);
  useEffect(() => {
    setAosInterface(stringify(window?.Android) || DEFAULT_INTERFACE_TEXT);
    setIosInterface(stringify(window?.webkit) || DEFAULT_INTERFACE_TEXT);
  }, [pathname]);
  return (
    <Wrap>
      <ListWrap>
        <ListItem>
          <h2>Android</h2>
          <p>{aosInterface}</p>
        </ListItem>
        <ListItem>
          <h2>IOS</h2>
          <p>{iosInterface}</p>
        </ListItem>
      </ListWrap>
    </Wrap>
  );
};
