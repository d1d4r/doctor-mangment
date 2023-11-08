import EditButton from "./edit-button";
import DeleteButton from "./delete-button-patient";
import { fetchAllPatient } from "@/lib/patientData/fetchAllPatient";

const columns = [
  { name: "PatientID", uid: "PatientID" },
  { name: "Name", uid: "Name" },
  { name: "ContactInformation", uid: "ContactInformation" },
  { name: "MedicalHistory", uid: "MedicalHistory" },
  { name: "ACTIONS", uid: "actions" },
];

const PatientTabel = async ({ query, currentPage }) => {
  const patients = await fetchAllPatient(query, currentPage);

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
            <tr key={patient.PatientID}>
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
                      <DeleteButton id={patient.PatientID} />
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

export default PatientTabel;

const EyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};
