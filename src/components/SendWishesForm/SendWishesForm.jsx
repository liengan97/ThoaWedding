import axios from "axios";
import './styles.css';
import React, { useState } from "react";

import { toast } from "react-toastify";

const conf = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  style: { backgroundColor: "#436135", color: "#fff" },
}

const thankYou = (sender) => {
  toast(`Cảm ơn ${sender} nhiều nha 🥳🥳🥳`, conf);
}

const hmm = () => {
  toast("Hmm. Bạn đang làm gì đó 😣 !", { ...conf, ...{ style: { backgroundColor: "#ffb224", color: "#000" } } });
}

const hmmError = () => {
  toast("Có lỗi rồi. Bạn thử lại sau nha. 🥲", { ...conf, ...{ style: { backgroundColor: "red", color: "#000" } } })
}

function SendWishesForm() {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [loading, setLoading] = useState(false);

  const sendWish = (e) => {
    e.preventDefault();

    if (name.trim() && wish.trim()) {
      setLoading(true);
      axios.post("/api/wishes", {
        sender: name,
        message: wish
      }).then(_ => {
        thankYou(name);
        setName("");
        setWish("");
      }).catch(error => {
        if (error.status == 429) {
          hmm();
        } else {
          hmmError();
        }
      }).finally(() => {
        setLoading(false);
      })
    }
  };

  return (
    <div className="bg-white p-8 w-100 rounded-lg shadow-2xl wish-form">
      <form onSubmit={sendWish} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium mb-2 text-center">Your Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-400 border-gray-400"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2 text-center">Your Wish</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-400 resize-none border-gray-400"
            placeholder="Write your heartfelt wishes..."
            rows="4"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2  text-white rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-6 w-6 mr-2 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="1"></circle>
                <path className="opacity-75" fill="white" d="M4 12a8 8 0 0116 0h-2a6 6 0 10-12 0H4z"></path>
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
