// app/profile/Layout.tsx
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Profile Section Layout</h1>
      <main>{children}</main>
    </div>
  );
}
