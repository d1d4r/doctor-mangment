import CustomButton from "@/components/CustomButton";
import SearchInput from "@/components/CustomeInput";
import PatientTabel from "@/components/PatientTabel";
import { fetchAllPatient } from "@/lib/patientData/fetchAllPatient";
import { BreadcrumbItem, Breadcrumbs, Pagination } from "@nextui-org/react";
import React from "react";

const Page = async () => {
  const patient = await fetchAllPatient();

  return (
    <div className="m-3   p-5">
      <div className="flex items-center justify-between p-5  ">
        <h2 className="text-2xl text-white">Breadcrumbs</h2>
        <CustomButton color="success">Add Patien</CustomButton>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between p-3    -b-large  -black">
        <SearchInput />
        <Pagination
          classNames={{
            item: " bg-transparent",
          }}
          className="h-full bg-white rounded-md"
          isCompact
          showControls
          total={20}
          initialPage={1}
          size="lg"
        />
      </div>
      <PatientTabel patient={patient} />
    </div>
  );
};

export default Page;
