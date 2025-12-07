import "./styles.css";

function SendWishesForm({
  senderName,
  wishMessage,
  isLoadingButton,
  onSenderChanged,
  onWishMessageChanged,
  onSubmit,
}) {
  return (
    <div className="bg-white p-8 w-100 rounded-lg shadow-2xl wish-form">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="uname"
            className="block text-red-900 font-medium mb-2 text-center"
          >
            Your Name
          </label>
          <input
            id="uname"
            type="text"
            name="uname"
            className="w-full p-2 border rounded-lg focus:ring-1 focus:outline-none focus:ring-[#7f1d1d] border-gray-400 focus:border-[#7f1d1d] text-red-900 dark:focus:outline-none dark:focus:border-[#7f1d1d]"
            placeholder="Enter your name..."
            value={senderName}
            onChange={(e) => onSenderChanged(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="wish-msg"
            className="block text-red-900 font-medium mb-2 text-center"
          >
            Your Wish
          </label>
          <textarea
            id="wish-msg"
            name="wish-msg"
            className="w-full p-2 border rounded-lg focus:ring-1 focus:outline-none focus:border-[#7f1d1d] focus:ring-[#7f1d1d] resize-none border-gray-400 text-red-900 dark:focus:outline-none dark:focus:border-[#7f1d1d]"
            placeholder="Write your heartfelt wishes..."
            rows="4"
            value={wishMessage}
            onChange={(e) => onWishMessageChanged(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoadingButton}
          className="w-full py-2 text-white rounded-lg bg-[#7f1d1d] transition flex items-center justify-center cursor-pointer hover:bg-[#7f1d1d]"
        >
          {isLoadingButton ? (
            <>
              <svg
                className="animate-spin h-6 w-6 mr-2 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="1"
                ></circle>
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 0116 0h-2a6 6 0 10-12 0H4z"
                ></path>
              </svg>
            </>
          ) : (
            "Send Wish"
          )}
        </button>
      </form>
    </div>
  );
}

export default SendWishesForm;
