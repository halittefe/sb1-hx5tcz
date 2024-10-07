import React, { useState } from 'react'
import { Upload, Download, FileSpreadsheet } from 'lucide-react'

const DataEnrichment: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      // For demonstration, we'll just show the file name as a preview
      setPreview(uploadedFile.name)
    }
  }

  const handleEnrichData = () => {
    // Implement data enrichment logic here
    console.log('Enriching data...')
  }

  const handleDownload = () => {
    // Implement download logic here
    console.log('Downloading enriched data...')
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Data Enrichment</h2>
      <div className="bg-neutral-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="file-upload" className="block mb-2 font-semibold">
            Upload CSV or Excel File
          </label>
          <div className="flex items-center">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-primary text-neutral-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center"
            >
              <Upload size={20} className="mr-2" />
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileUpload}
              className="hidden"
            />
            {file && <span className="ml-4">{file.name}</span>}
          </div>
        </div>
        {preview && (
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Preview</h3>
            <div className="bg-neutral-lightGray p-4 rounded-md">
              <FileSpreadsheet size={24} className="mb-2" />
              <p>{preview}</p>
            </div>
          </div>
        )}
        <div className="flex space-x-4">
          <button
            onClick={handleEnrichData}
            className="bg-accent-blue text-neutral-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
            disabled={!file}
          >
            Enrich Data
          </button>
          <button
            onClick={handleDownload}
            className="bg-secondary text-neutral-black py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center"
            disabled={!file}
          >
            <Download size={20} className="mr-2" />
            Download Enriched Data
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataEnrichment