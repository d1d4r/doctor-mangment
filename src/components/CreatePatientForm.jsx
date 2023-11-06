import { Button, Input } from "@nextui-org/react";
import React from "react";

const CreatePatientForm = () => {
  return (
    <form>
      <div className="flex border p-5">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          
        />
        <Input
          type="number"
          label="contact info"
          placeholder="07XXXX or patient@example.com"
          labelPlacement="outside"
        />
        <Input
          type="text"
          label="medicalhistory"
          
          labelPlacement="outside"
        />
        <Button>SAVE</Button>
      </div>
    </form>
  );
};

export default CreatePatientForm;
