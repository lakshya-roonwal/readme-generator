"use client"
import React from 'react'
import SectionBar from '../components/SectionBar'
import ReadmeEditor from '../components/ReadmeEditor'
import MainSection from '../components/MainSection'

const Editor = () => {
    console.log("hello world")
  return (
    <div className="flex h-screen p-2">
        <SectionBar/>
        <ReadmeEditor/>
        <MainSection/>
    </div>
  )
}

export default Editor