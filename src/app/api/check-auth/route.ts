import { AuthOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const session = await getServerSession(AuthOptions);
  return NextResponse.json({authenticated:!!session});
}