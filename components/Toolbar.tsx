import React from 'react'

import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    Underline,
    Quote,
    Undo,
    Redo,
    Code,
  } from "lucide-react";
import { Editor } from '@tiptap/react';
 
type Props = {
    editor: Editor | null;
    content: string;
  };
export default function Toolbar({ editor, content }: Props) {
  if (!editor) {
        return null;
      }
  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-700"
    >
        <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
        {/* Bold Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400"
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400"
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400"
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400"
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400"
          }
        >
          <Heading2 className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400"
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400"
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400"
          }
        >
          <Quote className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400"
          }
        >
          <Code className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400 hover:bg-black-700 hover:text-black p-1 hover:rounded-lg"
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-black-700 text-black p-2 rounded-lg"
              : "text-black-400 hover:bg-sky-700 hover:text-black p-1 hover:rounded-lg"
          }
        >
          <Redo className="w-5 h-5" />
        </button>
        </div>
       
    </div>
  )
}
