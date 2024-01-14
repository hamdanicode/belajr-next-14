import Link from 'next/link';
import React from 'react';

const Settings = () => {
  return (
    <div>
      Settings
      <Link href='/dashboard'>Goto Dashboars</Link>
      <br />
    </div>
  );
};

export default Settings;
