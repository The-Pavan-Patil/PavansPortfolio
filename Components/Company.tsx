"use client";

import React from "react";

import { companies } from "@/data";

const Clients = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-4 max-lg:mt-10">
      {companies.map((company) => (
        <React.Fragment key={company.id}>
          <div className="flex md:max-w-60 gap-x-8 max-w-12">
            <img
              src={company.nameImg}
              alt={company.name}
              width={company.id === 1 || company.id === 2 ? 100 : 150}
              className="md:w-24 w-20 rounded-full bg-white-100"
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Clients;
