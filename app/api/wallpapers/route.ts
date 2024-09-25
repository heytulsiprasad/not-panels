import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://storage.googleapis.com/panels-api/data/20240916/media-1a-i-p~s'); // Ensure this URL is correct
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();

    const wallpapers = Object.values(data.data).filter((item: any) => item.dhd).map((item: any) => item.dhd);
    
    return NextResponse.json(wallpapers);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
