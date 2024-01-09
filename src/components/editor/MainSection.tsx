import React from 'react'
import { Button } from "@/components/ui/button";

const MainSection = () => {
  return (
    <section className="w-1/4 bg-white p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Preview</h2>
        <div className="flex space-x-2">
          <Button className="text-sm" variant="ghost">
            Preview
          </Button>
          <Button className="text-sm" variant="ghost">
            Raw
          </Button>
        </div>
      </div>
      <div className="h-[calc(100vh-100px)] overflow-y-auto">
        <h3 className="text-2xl mb-2">Something</h3>
        <p>Hello This</p>
      </div>
    </section>
  );
}

export default MainSection