import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import { FileText } from 'lucide-react'
import React, { useState } from 'react'

function NoteSection() {

  const [note,setNote] = useState("");
  const handleNote = (e) =>{
    setNote(e.target.value)
  }

  return (
    <div className='p-4 border-b'>
      <h2 className="text-lg font-semibold mb-3 flex items-center">
  <FileText className="w-5 h-5 mr-2" /> Order Note
</h2>

<div className="space-y-3">
  <Textarea
   className='w-full p-2 border rounded-md text-sm resize-none'
    placeholder="Enter Order Note"
    value={note}
    onChange={handleNote}
  />
</div>

    </div>
  )
}

export default NoteSection