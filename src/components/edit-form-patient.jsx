import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { editPatient } from "@/action/editPatient";
const Form = ({ patient }) => {
  const updatePatientId = editPatient.bind(null, patient.PatientID);
  return (
    <form action={updatePatientId}>
      <div className="flex flex-col items-start gap-3 p-5 m-5 bg-white border rounded-md">
        <input
          type="hidden"
          name="patient.PatientID"
          value={patient.PatientID}
        />
        <Input
          isClearable
          name="name"
          type="text"
          label="name"
          placeholder="patient name"
          defaultValue={patient.Name}
        />
        <Input
          isClearable
          name="contactinfo"
          type="number"
          label="contact info"
          placeholder="phone or patient@example.com"
          defaultValue={patient.ContactInformation}
        />
        <Input
          isClearable
          type="text"
          name="medicalhistory"
          label="medicalhistory"
          placeholder="type.."
          defaultValue={patient.MedicalHistory}
        />
        <div className="flex gap-3">
          <Button type="submit" color="primary">
            EDIT
          </Button>
          <Button color="danger">
            <Link href="/dashbord/patient">CANCEL</Link>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
