import Form from "@/components/patient/edit-form-patient";
import { fetchPatientById } from "@/lib/patientData/fetchPatientById";
import React from "react";

const Page = async ({ params }) => {
  const { id } = params;

  const patient = await fetchPatientById(id);

  return <Form patient={patient} />;
};

export default Page;
