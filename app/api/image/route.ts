import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ticker = searchParams.get("ticker");
  const apiKey = process.env.IMAGE_PUBLIC_API_KEY; 

  if (!ticker) {
    return NextResponse.json({ error: "Ticker is required" }, { status: 400 });
  }

  const imageUrl = `https://img.logo.dev/ticker/${ticker}?token=${apiKey}&retina=true`;

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image from Logo.dev" },
        { status: response.status }
      );
    }

    const imageBuffer = await response.arrayBuffer();

    return new Response(Buffer.from(imageBuffer), {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
        return NextResponse.json(
          { error: "Internal server error", details: error.message },
          { status: 500 }
        );
      }
  
    // Fallback for unknown error types
    return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
    );
  }
}