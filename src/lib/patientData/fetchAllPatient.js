import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";

export const fetchAllPatient = async (query, currentPage) => {
  console.log(currentPage)
  try {
    const pageSize = 5;
    const allPatient = await prisma.Patient.findMany({
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
      where: {
        Name: {
          contains: query,
        },
      },
      orderBy: {
        PatientID: "desc",
      },
    });
    return allPatient;
  } catch (error) {
    return error.code;
  }
};

