"use client";

import { Employee } from "@/model/Employee";

import UserCard from "./UserCard";

export default function UserList(props: {
  employees: Employee[];
  title: String;
}) {
  const { employees, title } = props;
  return (
    <div className="pt-[5rem] pb-[4rem]" key={`${employees}`}>
      <h1 className="font-bold font-Oswald text-[36px] text-center justify-center items-center">
        {title}
      </h1>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-[3rem] items-center w-[80%]  mt-[4rem]  mx-auto ">
        {employees.map((employee: Employee) => (
          <UserCard employee={employee} />
        ))}
      </div>
    </div>
  );
}
