import { createPrismaClient } from "../../../lib/prisma";

const requiredFields = ["name", "phone", "serviceType", "airconType", "region"] as const;

export async function POST(request: Request) {
  const prisma = createPrismaClient();

  try {
    const data = await request.formData();

    for (const key of requiredFields) {
      if (!String(data.get(key) || "").trim()) {
        return Response.json({ error: `${key} 항목을 입력해주세요.` }, { status: 400 });
      }
    }

    const images = data
      .getAll("images")
      .filter((value): value is File => value instanceof File && value.size > 0);

    if (images.length > 5) {
      return Response.json({ error: "사진은 최대 5장까지 첨부할 수 있습니다." }, { status: 400 });
    }

    const desiredDateValue = String(data.get("desiredDate") || "").trim();
    const lead = await prisma.lead.create({
      data: {
        name: String(data.get("name")).trim(),
        phone: String(data.get("phone")).trim(),
        serviceType: String(data.get("serviceType")).trim(),
        airconType: String(data.get("airconType")).trim(),
        region: String(data.get("region")).trim(),
        addressDetail: String(data.get("addressDetail") || "").trim() || null,
        desiredDate: desiredDateValue ? new Date(`${desiredDateValue}T00:00:00+09:00`) : null,
        message: [String(data.get("technician") || "").trim(), String(data.get("aptContext") || "").trim(), String(data.get("message") || "").trim()].filter(Boolean).join("\n") || null,
        images: {
          create: images.map((file) => ({ url: `pending-upload://${encodeURIComponent(file.name)}` })),
        },
      },
      select: { id: true },
    });

    return Response.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (error) {
    console.error("Lead creation failed", error);
    return Response.json({ error: "신청 접수 중 오류가 발생했습니다." }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  return Response.json({ error: "허용되지 않은 요청입니다." }, { status: 405 });
}
