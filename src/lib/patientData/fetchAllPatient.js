import prisma from "../db/prisma";

export const fetchAllPatient = async () => {
  const allPatient = await prisma.Patient.findMany();
  return allPatient;
};
