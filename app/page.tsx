'use client';

import React, { useEffect, useState } from 'react';
import WallpaperGallery from './components/Gallery';

interface WallpaperData {
  dhd: string;
}

export default function Home() {
  const [wallpapers, setWallpapers] = useState<string[]>([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      const res = await fetch('/api/wallpapers');
      const data = await res.json();
      setWallpapers(data); // Adjust based on the structure of your API response
    };

    fetchWallpapers();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <WallpaperGallery images={wallpapers} />
    </main>
  );
}