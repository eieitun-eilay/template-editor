'use client'
import React, { useState } from 'react';
import Tiptap from './Tiptap';

interface EditTemplateModalProps {
  initialContent: any; 
  onSave: (content: any) => void; 
  onClose: () => void; 
}

export default function EditTemplateModal({ initialContent, onSave, onClose }: EditTemplateModalProps) {
  const [editedContent, setEditedContent] = useState(initialContent);

  const handleContentChange = (newContent: any) => {
    setEditedContent(newContent);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedContent);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Edit Template</h2>
        <form onSubmit={handleSubmit}>
          <Tiptap
            // value={editedContent}
            onChange={handleContentChange}
            content={editedContent}
          />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 mr-2 bg-gray-300 text-gray-800 rounded-md">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}