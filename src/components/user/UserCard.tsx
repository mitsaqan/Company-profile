"use client";

import { Employee } from "@/model/Employee";

export default function UserCard(props: { employee: Employee }) {
  const { employee } = props;
  return (
    <div key={`${employee.login.username}`}>
      <div className="rounded-md bg-white overflow-hidden">
        <img src={`${employee.picture.large}`} alt="foto" />

        <h2 className="mt-[0.4rem] text-[20px] font-semibold">{`${employee.name.title}${employee.name.first} ${employee.name.last}`}</h2>
      </div>
    </div>
  );
}
