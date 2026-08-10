import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function canAccessStudent(studentId: string) {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const role = (session.user as any).role;
  const userId = (session.user as any).id;

  if (role === "ADMIN") return session;

  const link = await prisma.parentStudent.findFirst({
    where: { studentId, parentId: userId },
  });
  return link ? session : null;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await canAccessStudent(params.id);
  if (!session) return NextResponse.json({ error: "წვდომა აკრძალულია." }, { status: 403 });

  const activities = await prisma.dailyActivity.findMany({
    where: { studentId: params.id },
    orderBy: { date: "desc" },
    take: 50,
  });

  return NextResponse.json(activities);
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "წვდომა აკრძალულია." }, { status: 403 });
  }

  const { subject, description, date } = await req.json();
  if (!subject || !description) {
    return NextResponse.json({ error: "შეავსეთ საგანი და აღწერა." }, { status: 400 });
  }

  const activity = await prisma.dailyActivity.create({
    data: {
      studentId: params.id,
      subject,
      description,
      date: date ? new Date(date) : new Date(),
    },
  });

  return NextResponse.json(activity);
}
