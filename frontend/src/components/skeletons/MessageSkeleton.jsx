const MessageSkeleton = () => {
  // Create an array of 6 items for skeleton messages
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}
        >
          <div className="chat-image avatar">
            <div className="size-10 rounded-full overflow-hidden">
              <div
                className="skeleton w-full h-full rounded-full animate-pulse"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="chat-header mb-1">
            <div
              className="skeleton h-4 w-16 animate-pulse"
              aria-hidden="true"
            />
          </div>

          <div className="chat-bubble bg-transparent p-0">
            <div
              className="skeleton h-16 w-[200px] sm:w-[250px] md:w-[300px] rounded-lg animate-pulse"
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
