import { useState } from 'react'

function App() {

  return (
    <div className='text-blue-400 font-bold'>
      <h1>Hello</h1>

      <div className="">
            <langflow-chat
                chat_input_field="message"
                flow_id="2316cbad-39e6-478c-bbdb-ffbf541b6624"
                host_url="http://127.0.0.1:7862"
            ></langflow-chat>
        </div>

    </div>
  )
}

export default App
