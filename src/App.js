import { useRef } from 'react';

function App() {
  const filesElement = useRef(null);

  const sendFile = async () => {
    const dataForm = new FormData();
    for (const file of filesElement.current.files) {
      dataForm.append('file', file);
    }
    const res = await fetch(`http://localhost:5000/upload`, {
      method: 'POST',
      body: dataForm,
    });
    console.log(res)
  };

  return (
    <div>
      <input type="file" multiple ref={filesElement} />
      <button onClick={sendFile}>Send file</button>
    </div>
  );
}

export default App;