import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function generateInviteCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // გამორიცხულია მსგავსი სიმბოლოები
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "ADMIN") return null;
  return session;
}

export async function GET() {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "წვდომა აკრძალულია." }, { status: 403 });

  const students = await prisma.student.findMany({
    orderBy: { createdAt: "desc" },
    include: { parents: { include: { parent: true } } },
  });

  return NextResponse.json(students);
}

export async function POST(req: Request) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "წვდომა აკრძალულია." }, { status: 403 });

  const { fullName, grade } = await req.json();
  if (!fullName || !grade) {
    return NextResponse.json({ error: "შეავსეთ სახელი და კლასი." }, { status: 400 });
  }

  let inviteCode = generateInviteCode();
  // იშვიათი კოლიზიის შემთხვევაში ვცდით ხელახლა
  for (let i = 0; i < 5; i++) {
    const clash = await prisma.student.findUnique({ where: { inviteCode } });
    if (!clash) break;
    inviteCode = generateInviteCode();
  }

  const student = await prisma.student.create({
    data: { fullName, grade: Number(grade), inviteCode },
  });

  return NextResponse.json(student);
}
