'use client';

import { useState } from 'react';
import { CVEditor } from '@/components/CVEditor';
import { CVPreview } from '@/components/CVPreview';
import { defaultCVData } from '@/types/cv';

export default function Home() {
  const [cvData, setCvData] = useState(defaultCVData);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-blue-900">CV Maker</h1>
            <div className="lg:hidden flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('edit')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'edit'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Edit
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6">
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:px-4">
          {/* Desktop: Side by side layout */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Edit CV</h2>
            </div>
            <CVEditor data={cvData} onChange={setCvData} />
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
            </div>
            <div className="p-4 overflow-auto max-h-[calc(100vh-200px)]">
              <CVPreview data={cvData} />
            </div>
          </div>
        </div>

        {/* Mobile: Tabbed layout */}
        <div className="lg:hidden px-4">
          <div className="bg-white rounded-lg shadow-sm">
            {activeTab === 'edit' ? (
              <>
                <div className="p-4 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">Edit CV</h2>
                </div>
                <CVEditor data={cvData} onChange={setCvData} />
              </>
            ) : (
              <>
                <div className="p-4 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
                </div>
                <div className="p-4">
                  <CVPreview data={cvData} />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
