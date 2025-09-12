import { NextResponse } from "next/server";

import test from "@/app/database";

export async function GET() {
  return NextResponse.json({ tickets: test });
}

export async function POST(request: Request) {
  const body = await request.json();
  test.push({ id: test.length + 1, ...body });
  return NextResponse.json({ test });
}
