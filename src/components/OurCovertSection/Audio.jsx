import React, { useState } from "react";

const AudioPreviewAndDownload = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("/path/to/audio/file.mp3"));

  // Toggle play/pause
  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Audio Preview</h1>

      <div className="w-full max-w-md p-4 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 rounded-lg shadow-lg mb-6">
        <p className="text-lg font-medium mb-4">
          Listen to the preview of the audio. You can also download it.
        </p>

        {/* Audio Player */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={toggleAudio}
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <audio
            id="audio-player"
            src="/path/to/audio/file.mp3"
            preload="auto"
            hidden
          />
        </div>

        {/* Download Audio Button */}
        <a
          href="/path/to/audio/file.mp3"
          download="audio-file.mp3"
          className="mt-6 inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:from-green-300 hover:to-blue-400 transition duration-300"
        >
          Download Audio
        </a>
      </div>
    </div>
  );
};

export default AudioPreviewAndDownload;
