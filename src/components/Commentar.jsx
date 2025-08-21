import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// دخل الـ URL و ANON KEY بتوعك
const supabase = createClient(
  "https://YOUR_PROJECT_ID.supabase.co",
  "YOUR_ANON_KEY"
);

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  // جلب التعليقات
  useEffect(() => {
    fetchComments();

    // استماع للتعليقات الجديدة live
    const subscription = supabase
      .channel("comments")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "comments" },
        (payload) => {
          setComments((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchComments = async () => {
    const { data } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    setComments(data || []);
  };

  const addComment = async () => {
    if (!text.trim()) return;
    await supabase.from("comments").insert([{ text }]);
    setText("");
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">💬 التعليقات</h1>

      <div className="mb-4 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="اكتب تعليق..."
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={addComment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          ارسال
        </button>
      </div>

      <ul>
        {comments.map((c) => (
          <li key={c.id} className="border-b py-2">
            {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
