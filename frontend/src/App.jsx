import { useState } from "react";
import axios from "axios";

export default function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) return alert("Upload an image first!");

    const formData = new FormData();
    formData.append("file", image);

    try {
      setLoading(true);
      setResult(null);

      const res = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData
      );

      setResult(res.data.prediction);
      setConfidence(res.data.confidence);
    } catch (err) {
      alert("Backend error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-600 via-indigo-500 to-teal-400 p-4">

      {/* Glass Card */}
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 
        rounded-2xl shadow-2xl p-6 w-full max-w-md text-white
        transition-all duration-500 hover:scale-105">

        <h1 className="text-2xl font-bold text-center mb-4 tracking-wide">
          🧠 Brain Tumor Detection
        </h1>

        {/* Upload Box */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          className={`border-2 border-dashed rounded-xl p-4 text-center 
          transition-all duration-300 cursor-pointer
          ${dragActive ? "border-white bg-white/20 scale-105" : "border-white/50"}`}
        >
          <input
            type="file"
            onChange={(e) => handleFile(e.target.files[0])}
            className="hidden"
            id="fileUpload"
          />

          <label htmlFor="fileUpload" className="cursor-pointer">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="mx-auto rounded-lg max-h-48 shadow-lg transition-all duration-300"
              />
            ) : (
              <p className="text-sm opacity-80">
                Drag & Drop or Click to Upload MRI
              </p>
            )}
          </label>
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-4 py-2 rounded-lg font-semibold
          bg-gradient-to-r from-blue-400 to-teal-400
          hover:from-blue-500 hover:to-teal-500
          transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
        >
          Predict
        </button>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-8 h-8 border-4 border-white border-t-transparent 
              rounded-full animate-spin"></div>
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="mt-5 p-4 rounded-xl bg-white/20 backdrop-blur-md
            text-center animate-fadeIn">

            <p className="text-lg font-bold">{result}</p>

            <p className="text-sm opacity-80 mb-2">
              Confidence: {(confidence * 100).toFixed(2)}%
            </p>

            {/* Animated Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-green-300 to-green-500 transition-all duration-700"
                style={{ width: `${confidence * 100}%` }}
              ></div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}