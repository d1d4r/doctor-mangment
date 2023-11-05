import CustomButton from "@/components/CustomButton";
import SearchInput from "@/components/CustomeInput";
import { Pagination } from "@nextui-org/react";
import React from "react";

const Page = () => {
  return (
    <div className="m-3 border">
      <div className="flex items-center justify-between p-5 border">
        <h2 className="text-2xl text-white">Patient</h2>
        <CustomButton color="success">Add Patien</CustomButton>
      </div>
      <div className="flex items-center justify-between p-3">
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
    </div>
  );
};

export default Page;
