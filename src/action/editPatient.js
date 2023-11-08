"use server";

import prisma from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const editPatient = async (id, formData) => {
  console.log(formData);
  const rawFormData = {
    Name: formData.get("name"),
    ContactInformation: formData.get("contactinfo"),
    MedicalHistory: formData.get("medicalhistory"),
  };
  const { Name, ContactInformation, MedicalHistory } = rawFormData;
  const editedPatient = await prisma.Patient.update({
    where: {
      PatientID: id,
    },
    data: {
      Name,
      ContactInformation,
      MedicalHistory,
    },
  });
  revalidatePath("/dashbord/patient/");
  redirect("/dashbord/patient");
};
