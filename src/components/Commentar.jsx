import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Commentar() {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("comments")
      .insert([{ text: comment }]);

    setLoading(false);

    if (error) {
      console.error("Error:", error.message);
      alert("Failed to post comment. Please try again.");
    } else {
      alert("Comment posted successfully!");
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="اكتب تعليقك هنا..."
        className="p-2 border rounded-md"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "جاري الإرسال..." : "إرسال"}
      </button>
    </form>
  );
}
