import React, { useState } from "react";

export function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      const response = await fetch("http://localhost:3333/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Upload successful!");
        // Handle success (e.g., clear form, show message)
      } else {
        console.error("Upload failed.");
        // Handle error
      }
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload File:
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
