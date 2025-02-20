const CenteredLoader = () => {
    return (
      <div className="flex items-center justify-center absolute top-0 left-0 right-0 ">
        <div className="flex flex-col items-center space-y-4">
          <div
            className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
          />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
  
  export default CenteredLoader;