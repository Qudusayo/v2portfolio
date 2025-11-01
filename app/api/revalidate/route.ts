import { env } from "@/lib/env";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("🔔 Revalidation webhook called");

  const secret = request.nextUrl.searchParams.get("secret");
  console.log("Secret provided:", secret ? "Yes" : "No");

  if (secret !== process.env.REVALIDATE_SECRET) {
    console.log("❌ Invalid secret");
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    console.log("🔄 Attempting to revalidate /projects");
    revalidatePath("/projects");
    console.log("✅ Revalidation successful");
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path: "/projects",
    });
  } catch (err) {
    console.error("❌ Revalidation error:", err);
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: err,
      },
      { status: 500 }
    );
  }
}
