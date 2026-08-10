import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, password, inviteCode } = body;

    if (!name || !password || (!email && !phone) || !inviteCode) {
      return NextResponse.json(
        { error: "გთხოვთ შეავსოთ სახელი, პაროლი, ემაილი ან ტელეფონი, და მოსწავლის კოდი." },
        { status: 400 }
      );
    }

    const student = await prisma.student.findUnique({
      where: { inviteCode: String(inviteCode).trim().toUpperCase() },
    });

    if (!student) {
      return NextResponse.json(
        { error: "მოსწავლის კოდი ვერ მოიძებნა. გადაამოწმეთ კოდი ან დაუკავშირდით ცენტრს." },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findFirst({
      where: {
        OR: [email ? { email } : undefined, phone ? { phone } : undefined].filter(
          Boolean
        ) as any,
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "ეს ემაილი/ტელეფონი უკვე რეგისტრირებულია." },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email: email || null,
        phone: phone || null,
        password: hashed,
        role: "PARENT",
        students: {
          create: {
            studentId: student.id,
          },
        },
      },
    });

    return NextResponse.json({ id: user.id, name: user.name });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "სერვერის შეცდომა." }, { status: 500 });
  }
}
