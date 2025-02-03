import { NextResponse } from "next/server";

const CONFIG = {
  BASE_URL: "https://img.logo.dev/ticker",
  HEADERS: {
    PNG: {
      "Content-Type": "image/png",
      "Cache-Control":
        "public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400",
    },
  },
  STATUS: {
    BAD_REQUEST: 400,
    SERVER_ERROR: 500,
  },
} as const;

type APIError = {
  error: string;
  details?: string;
};

function validateTicker(ticker: string | null): ticker is string {
  return Boolean(ticker);
}

function createImageUrl(ticker: string, apiKey: string): string {
  return `${CONFIG.BASE_URL}/${ticker}?token=${apiKey}&format=png&retina=true`;
}

function handleError(error: unknown): NextResponse<APIError> {
  if (error instanceof Error) {
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: CONFIG.STATUS.SERVER_ERROR },
    );
  }
  return NextResponse.json(
    { error: "An unexpected error occurred" },
    { status: CONFIG.STATUS.SERVER_ERROR },
  );
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ticker = searchParams.get("ticker");
  const apiKey = process.env.IMAGE_PUBLIC_API_KEY;

  if (!validateTicker(ticker)) {
    return NextResponse.json(
      { error: "Ticker is required" },
      { status: CONFIG.STATUS.BAD_REQUEST },
    );
  }

  try {
    const imageUrl = createImageUrl(ticker, apiKey!);
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image from Logo.dev" },
        { status: response.status },
      );
    }

    const imageBuffer = await response.arrayBuffer();
    return new Response(Buffer.from(imageBuffer), {
      headers: CONFIG.HEADERS.PNG,
    });
  } catch (error) {
    return handleError(error);
  }
}
