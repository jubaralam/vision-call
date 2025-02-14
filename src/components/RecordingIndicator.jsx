const RecordingIndicator = () => {
    return (
      <div className="flex items-center space-x-1 bg-gray-700 px-2 py-1 rounded">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-xs text-gray-300">REC</span>
        <span className="text-xs text-gray-300">00:12:36</span>
      </div>
    );
  };

  export default RecordingIndicator