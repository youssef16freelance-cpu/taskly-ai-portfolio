import { useState } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    if (password === "5471") {
      setLoggedIn(true);
    } else {
      alert("كلمة المرور غير صحيحة");
    }
  };

  if (!loggedIn) {
    return (
      <div
        dir="rtl"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f3f4f6",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "340px",
            padding: "35px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "45px" }}>🔐</div>

          <h1>لوحة تحكم Taskly</h1>

          <p style={{ color: "#666" }}>
            تسجيل دخول المسؤول
          </p>

          <input
            type="password"
            value={password}
            placeholder="كلمة المرور"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                login();
              }
            }}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              margin: "15px 0",
              border: "1px solid #ddd",
              borderRadius: "10px",
              fontSize: "16px",
              textAlign: "center",
            }}
          />

          <button
            onClick={login}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background: "#111827",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            دخول
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <h1>لوحة تحكم Taskly 🚀</h1>

        <p style={{ color: "#666" }}>
          أهلاً بك يا Admin، من هنا تقدر تدير موقعك.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "35px" }}>📁</div>
            <h2>المشاريع</h2>
            <p>إدارة مشاريع الموقع</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "35px" }}>🎨</div>
            <h2>أعمالي</h2>
            <p>إدارة معرض أعمالك</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "35px" }}>🛠️</div>
            <h2>الخدمات</h2>
            <p>إضافة وتعديل الخدمات</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "35px" }}>📢</div>
            <h2>التحديثات</h2>
            <p>نشر تحديثات الموقع</p>
          </div>
        </div>

        <button
          onClick={() => {
            setLoggedIn(false);
            setPassword("");
          }}
          style={{
            marginTop: "30px",
            padding: "13px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#dc2626",
            color: "white",
            cursor: "pointer",
          }}
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}
