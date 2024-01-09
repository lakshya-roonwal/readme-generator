"use client"
import React from 'react'

// Adding component
import SectionBar from '../../components/editor/SectionBar'
import ReadmeEditor from '../../components/editor/ReadmeEditor'
import MainSection from '../../components/editor/MainSection'

export default function Component() {
  return (
    <div className="flex min-h-screen">
        <SectionBar/>
        <ReadmeEditor/>
        <MainSection/>
    </div>
  );
}
