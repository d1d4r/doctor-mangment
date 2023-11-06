"use server";

import prisma from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPatient = async (formData) => {
  const rawFormData = {
    Name: formData.get("name"),
    ContactInformation: formData.get("contactinfo"),
    MedicalHistory: formData.get("medicalhistory"),
  };
  const { Name, ContactInformation, MedicalHistory } = rawFormData;
  await prisma.Patient.create({
    data: {
      Name,
      ContactInformation,
      MedicalHistory,
    },
  });
  revalidatePath("/dashbord/patient/");
  redirect("/dashbord/patient");
};
