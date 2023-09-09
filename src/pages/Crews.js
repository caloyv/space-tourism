import React from "react";
import "./css/Crews.css";
import Header from "../components/Header";
import CrewList from "../components/CrewList";

export default function Crews() {
  const isCrewPage = true;
  return (
  <>
      <main className="crew">
        <Header 
          isCrew = {isCrewPage}
        />
        <CrewList />
      </main>
    </>
  );
}
