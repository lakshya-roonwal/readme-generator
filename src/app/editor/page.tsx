"use client"
import React, { useState } from 'react'

// Adding component
import SectionBar from '../../components/editor/SectionBar'
import ReadmeEditor from '../../components/editor/ReadmeEditor'
import MainSection from '../../components/editor/MainSection'

export default function Component() {
  const [readme, setReadme] = useState(`# This is perfect!
  A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

- Lists
- todo
- done

1. Hello
2. Second

- [Introduction](#introduction)

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |


`);

  return (
    <div className="flex min-h-screen">
      <SectionBar />
      <ReadmeEditor readme={readme} setReadme={setReadme} />
      <MainSection readme={readme} />
    </div>
  );
}
