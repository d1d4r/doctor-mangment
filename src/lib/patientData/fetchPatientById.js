import prisma from "../db/prisma";

export const fetchPatientById = async (id) => {
  const patientByid = await prisma.Patient.findUnique({
    where: {
      PatientID: +id,
    },
  });
  return patientByid;
};
