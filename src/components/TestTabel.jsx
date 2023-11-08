import { fetchAllPatient } from "@/lib/patientData/fetchAllPatient";
import React from "react";
import EditButton from "./patient/edit-button";
import DeleteButton from "./patient/delete-button-patient";

const columns = [
  { name: "PatientID", uid: "PatientID" },
  { name: "Name", uid: "Name" },
  { name: "ContactInformation", uid: "ContactInformation" },
  { name: "MedicalHistory", uid: "MedicalHistory" },
  { name: "ACTIONS", uid: "actions" },
];

const Table = async () => {
  const patients = await fetchAllPatient();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.uid}
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-600 uppercase bg-gray-900"
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients?.map((patient) => (
            <tr key={patient.id}>
              {columns.map((column) => (
                <td
                  key={column.uid}
                  className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap bg-gray-100"
                >
                  {column.uid !== "actions" ? (
                    patient[column.uid]
                  ) : (
                    <div className="space-x-2 flex items-center justify-center">
                      <EditButton id={patient.PatientID} />
                      <DeleteButton />
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
