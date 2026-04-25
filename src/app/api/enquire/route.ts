import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongo";

type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  courseDomain: string;
  candidates: number;
  mode: string;
  location: string;
};

const requiredFields: Array<keyof EnquiryPayload> = [
  "name",
  "email",
  "phone",
  "company",
  "courseDomain",
  "candidates",
  "mode",
  "location",
];

const hasRequiredValues = (body: Partial<EnquiryPayload>) => {
  return requiredFields.every((field) => {
    const value = body[field];
    if (field === "candidates") {
      return typeof value === "number" && value > 0;
    }
    return typeof value === "string" && value.trim().length > 0;
  });
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<EnquiryPayload>;

    if (!hasRequiredValues(body)) {
      return NextResponse.json(
        { message: "Please fill all required fields correctly." },
        { status: 400 },
      );
    }

    const db = await getDb();

    const enquiryToSave: EnquiryPayload & { createdAt: Date } = {
      name: body.name!.trim(),
      email: body.email!.trim(),
      phone: body.phone!.trim(),
      company: body.company!.trim(),
      courseDomain: body.courseDomain!.trim(),
      candidates: body.candidates!,
      mode: body.mode!.trim(),
      location: body.location!.trim(),
      createdAt: new Date(),
    };

    const result = await db.collection("enquiries").insertOne(enquiryToSave);

    return NextResponse.json(
      {
        message: "Enquiry submitted successfully.",
        id: result.insertedId,
      },
      { status: 201 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to submit enquiry.";

    return NextResponse.json({ message }, { status: 500 });
  }
}
