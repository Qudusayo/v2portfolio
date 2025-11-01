import { env } from "@/lib/env";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    revalidatePath("/projects");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
