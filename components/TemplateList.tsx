'use client'
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import EditTemplateModal from './EditTemplateModal';

export default function TemplateList() {
  const [data, setData] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null); // Define setSelectedTemplate here
  const colors = ['#DAF7A6', '#FADBD8', '#D5F5E3', '#D6EAF8', '#FCF3CF'];

  useEffect(() => {
    const existingDataString = localStorage.getItem('myData');
    if (existingDataString) {
      const existingData = JSON.parse(existingDataString);
      setData(existingData);
    }
  }, []);

  const handleEditClick = (content) => {
    setSelectedTemplate(content);
  };

  const handleSaveEdit = (editedContent) => {
    const newData = data.map((item) => {
      if (item.content === selectedTemplate) {
        return { ...item, content: editedContent };
      }
      return item;
    });
    localStorage.setItem('myData', JSON.stringify(newData));
    setData(newData);
    setSelectedTemplate(null);
  };

  const handleCloseModal = () => {
    setSelectedTemplate(null);
  };

  const handleDeleteClick = (id) => {
    const newData = data.filter((item) => item.id !== id);
    localStorage.setItem('myData', JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div className="max-w-6xl mx-auto px-5">
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 1024: 3 }}>
        <Masonry gutter="20px">
          {data.map((item: any, idx: number) => (
            <div key={idx} style={{ backgroundColor: colors[idx % colors.length] }}>
              <div className="border border-slate-700 px-6 py-4 font-bold text-slate-950">
                <span className='pr-11'>Template - {idx + 1}</span>
                <div className="inline-block pl-4 justify-end"> {/* Wrap buttons in a div for alignment */}
                  <button className="px-4 py-2 border border-black rounded-md mr-2" onClick={() => handleEditClick(item.content)}>Edit</button>
                  <button className="px-4 py-2 border border-red-500 rounded-md text-red-500" onClick={() => handleDeleteClick(item.id)}>Delete</button>
                </div>
              </div>
              <div className="ProseMirror whitespace-pre-line border border-slate-700 px-6 py-4 rounded-lg" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {selectedTemplate && (
        <EditTemplateModal
          initialContent={selectedTemplate}
          onSave={handleSaveEdit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}