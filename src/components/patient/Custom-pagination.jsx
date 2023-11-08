"use client";
import { Pagination, PaginationItemType } from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const CustomePagination = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  console.log(currentPage);

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <Link
          key={key}
          href={createPageURL(value + 1)}
          className={"gap-2 p-2 bg-white rounded-md"}
        >
          <ChevronRoght />
        </Link>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <Link key={key} href={createPageURL(1- value )}>
          <ChevronLeft />
        </Link>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    return (
      <Link
        key={key}
        href={createPageURL(value)}
        className={"gap-2 p-2 bg-white rounded-md"}
      >
        {value}
      </Link>
    );
  };
  return (
    <Pagination
      classNames={{
        item: " bg-white pl-2",
      }}
      isCompact
      className="gap-2 bg-white rounded-md"
      showControls
      total={totalPages}
      page={currentPage}
      initialPage={1}
      renderItem={renderItem}
      size="lg"
    />
  );
};

export default CustomePagination;

const ChevronLeft = () => {
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
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};

const ChevronRoght = () => {
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
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
