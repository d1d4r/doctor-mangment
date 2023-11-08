"use server";

import prisma from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export const deletePatient = async (id) => {
  await prisma.Patient.delete({
    where: {
      PatientID: id,
    },
  });
  revalidatePath("/dashbord/patient");
};
