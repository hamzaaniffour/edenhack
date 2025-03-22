"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Platform from "./components/Platform";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // URL to redirect to
    const targetUrl = 'https://track.mspy.click/aff_c?offer_id=2&aff_id=10682';

    // Perform the redirection
    router.push(targetUrl);
  }, [router]);

  return (
    <main className="mb-14 px-4 lg:px-0">
      <Platform />
    </main>
  );
}
