import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { createPatient } from "@/action/addPatient";
const Form = () => {
  return (
    <form action={createPatient}>
      <div className="flex flex-col border p-5 gap-3 items-start bg-white rounded-md m-5">
        <Input
          isClearable
          name="name"
          type="text"
          label="name"
          placeholder="patient name"
        />
        <Input
          isClearable
          name="contactinfo"
          type="number"
          label="contact info"
          placeholder="phone or patient@example.com"
        />
        <Input
          isClearable
          type="text"
          name="medicalhistory"
          label="medicalhistory"
          placeholder="type.."
        />
        <div className="flex gap-3">
          <Button type="submit" color="primary">
            SAVE
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
