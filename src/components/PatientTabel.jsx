"use client";
import { fetchAllPatient } from "@/lib/patientData/fetchAllPatient";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";

import { useCallback } from "react";
import EditButton from "./edit-button";
import DeleteButton from "./delete-button-patient";

const columns = [
  { name: "PatientID", uid: "PatientID" },
  { name: "Name", uid: "Name" },
  { name: "ContactInformation", uid: "ContactInformation" },
  { name: "MedicalHistory", uid: "MedicalHistory" },
  { name: "ACTIONS", uid: "actions" },
];

const PatientTabel = ({ patient }) => {
  const renderCell = useCallback((patient, columnKey) => {
    const cellValue = patient[columnKey];

    switch (columnKey) {
      case "name":
        return <p>{cellValue}</p>;
      case "PatientID":
        return (
          <div className="flex flex-col">
            <p className="text-sm capitalize text-bold">{cellValue}</p>
          </div>
        );
      case "PatientID":
        return <p>{cellValue}</p>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg cursor-pointer text-default-400 active:opacity-50">
                <EditButton id={patient.PatientID} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg cursor-pointer text-danger active:opacity-50">
                <DeleteButton id={patient.PatientID} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={patient}>
        {(item) => (
          <TableRow key={item.PatientID}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
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
