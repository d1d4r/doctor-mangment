import CustomePagination from "@/components/patient/Custom-pagination";
import CustomButton from "@/components/patient/CustomButton";
import SearchInput from "@/components/CustomeInput";
import PatientTabel from "@/components/patient/PatientTabel";
import { fetchCountPatient } from "@/lib/patientData/fetchCountPatient";

import React, { Suspense } from "react";

const Page = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCountPatient();

  return (
    <div className="p-5 m-3 overflow-auto border ">
      <div className="flex items-center justify-between p-5 ">
        <h2 className="text-2xl text-white">Breadcrumbs</h2>
        <CustomButton color="success">Add patient</CustomButton>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 p-3 md:flex-row -b-large -black">
        <SearchInput />
        <CustomePagination totalPages={totalPages} />
      </div>
      <Suspense key={query + currentPage} fallback={<div>loading..</div>}>
        <PatientTabel query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default Page;
