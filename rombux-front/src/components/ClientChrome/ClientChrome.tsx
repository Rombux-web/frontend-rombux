'use client';

import { usePathname } from 'next/navigation';
import NavbarPrueba from '@/components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import { JOTFORM_AI_AGENT_URL } from '@/config/urls';

interface Props {
  goLive: boolean;
}

export default function ClientChrome({ goLive }: Props) {
  const pathname = usePathname();
  const isCampaign = pathname.startsWith('/campaigns');

  if (isCampaign) {
    return null;
  }

  return (
    <>
      {goLive && <NavbarPrueba />}
      {goLive && <Toaster position='bottom-left' />}
      <Script
        src={JOTFORM_AI_AGENT_URL}
        strategy='afterInteractive'
      />
    </>
  );
}
