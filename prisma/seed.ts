import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@iqacademy.ge";
  const password = process.env.ADMIN_PASSWORD || "ChangeMe123!";
  const name = process.env.ADMIN_NAME || "IQ აკადემია ადმინი";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("ადმინი უკვე არსებობს:", email);
    return;
  }

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
      role: "ADMIN",
    },
  });

  console.log("ადმინი შეიქმნა:");
  console.log("  ემაილი:  ", email);
  console.log("  პაროლი:  ", password);
  console.log("გთხოვთ, პირველივე შესვლისთანავე შეცვალოთ პაროლი.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
