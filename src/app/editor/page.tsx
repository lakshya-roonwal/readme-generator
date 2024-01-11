"use client"
import React, { useEffect, useState } from 'react'

// Adding component
import SectionBar from '../../components/editor/SectionBar'
import ReadmeEditor from '../../components/editor/ReadmeEditor'
import MainSection from '../../components/editor/MainSection'
import { ReadMeSection } from '@/types/types'
import {sections} from '@/data/sections'

export default function Component() {
  const [readmeSections, setReadmeSections] = useState<ReadMeSection[]>(
    JSON.parse(localStorage.getItem("readme-sections")) || sections
  );


  // For Saving The Data
  useEffect(() => {
    localStorage.setItem(
      "readme-sections",
      JSON.stringify(readmeSections)
    );
  }, [readmeSections]);

  const handleAddInReadMe = (id: ReadMeSection) => {
    console.log(id);
    setReadmeSections((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? { ...element, ["inReadme"]: true } : element
      )
    );
  };

  const handleSelectSection = (id: ReadMeSection) => {
    console.log("Handle Select Section");
    // For Remvoing selected for other elements
    setReadmeSections((prevElements) =>
      prevElements.map((element) => ({ ...element, selected: false }))
    );

    // For Setting the selected:true for the clicked sections
    setReadmeSections((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? { ...element, ["selected"]: true } : element
      )
    );
  };

  const handleDeleteInReadMe = (id: ReadMeSection) => {
    // If Custom Section then-

    // If Default Section then-
    console.log(id);
    setReadmeSections((prevElements) =>
      prevElements.map((element) =>
        element.id === id
          ? { ...element, ["inReadme"]: false, ["selected"]: false }
          : element
      )
    );
  };

  const addCustomSection=(name:string)=>{
    setReadmeSections((prevElements) =>
      prevElements.map((element) => ({
        ...element,
        inReadme: false,
        selected: false,
        name: name,
      }))
    );
  }

  return (
    <div className="flex w-full min-h-screen-full flex-grow">
      <SectionBar
        readmeSections={readmeSections}
        handleAddInReadMe={handleAddInReadMe}
        handleSelectSection={handleSelectSection}
        handleDeleteInReadMe={handleDeleteInReadMe}
      />
      <ReadmeEditor
        readmeSections={readmeSections}
        setReadmeSections={setReadmeSections}
      />
      <MainSection readmeSections={readmeSections} />
    </div>
  );
}
