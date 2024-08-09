"use client";

import UserList from "@/components/user/UserList";
import { Employee } from "@/model/Employee";
import React, { useState, useEffect } from "react";

export default function Team() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=50");
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setEmployees(json.results);
        } else {
          console.error("Failed to fetch employees");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEmployees();
  }, []);

  if (!employees) return <div>Loading...</div>;
  return (
    <div>
      <UserList employees={employees.slice(0, 8)} title="Leadership" />
      <UserList employees={employees.slice(8, 16)} title="Creative" />
      <UserList employees={employees.slice(16, 24)} title="Development" />
    </div>
  );
}
