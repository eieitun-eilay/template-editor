'use client'
import React, { useState} from 'react'
import Tiptap from './Tiptap'
import { v4 as uuidv4 } from 'uuid'
import Toolbar from './Toolbar'


export default function TemplateForm() {
    const [content, setContent] = useState<string>('')
  //   const handleContentChange = (reason: any) => {
  //     setContent(reason)
  // }
  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   const data = {
  //     id: uuidv4(),
  //     content: content,
  //   }
  //   console.log(data)
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleAdd();
// };
  
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
   }; 

  const handleAdd = () => {
    const data = {
        id: uuidv4(),
        content: content,
    }; 
  
  const existingDataString = localStorage.getItem('myData')
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : []
    const updatedData = [...existingData, data]
    localStorage.setItem('myData', JSON.stringify(updatedData))
    setContent('')
  }
  return (
    <form className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10">
        <div className="text-3xl text-center text-black-300 mb-10">
          Template Editor
        </div>
        <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
        />
         <Toolbar editor={null} content={content} />
         <button onClick={handleAdd} className="px-4 bg-sky-700 text-white py-2 rounded-md mt-4">
        Add
      </button>

    </form>
  )
}
