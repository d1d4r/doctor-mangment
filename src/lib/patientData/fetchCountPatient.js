import prisma from "../db/prisma";

export const fetchCountPatient = async () => {
  const totalPages = await prisma.Patient.count();
  return  Math.ceil(totalPages / 5);
};
