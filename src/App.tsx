import React, { useState, useEffect } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // بيقرأ الـ ?admin=true من اللينك بذكاء
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('admin') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '5471') {
      setIsAuthenticated(true);
    } else {
      alert('الباسورد غلط يا بطل!');
    }
  };

  // لو ضغط ?admin=true ولسه ماكتبش الباسورد، تظهر شاشة الباسورد
  if (isAdmin && !isAuthenticated) {
    return (
      <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#0f172a', color: '#fff', fontFamily: 'sans-serif' }}>
        <form onSubmit={handleLogin} style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
          <h2>لوحة تحكم Taskly AI</h2>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>أدخل كلمة المرور للمتابعة</p>
          <input 
            type="password" 
            placeholder="الباسورد..." 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #475569', background: '#0f172a', color: '#fff', width: '200px', display: 'block', margin: '15px auto' }}
          />
          <button type="submit" style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>دخول</button>
        </form>
      </div>
    );
  }

  // لو كتب الباسورد صح، تفتح لوحة التحكم
  if (isAuthenticated) {
    return (
      <div style={{ padding: '40px', background: '#0f172a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        <h1>🎉 أهلاً بك في لوحة تحكم الأدمن!</h1>
        <p>تم تسجيل الدخول بنجاح وصلاحياتك كاملة يا فنان.</p>
      </div>
    );
  }

  // ده الموقع العادي لو مفيش ?admin=true
  return (
    <div style={{ padding: '40px', background: '#0f172a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1>Taskly AI Portfolio (الموقع العادي)</h1>
      <p>أهلاً بك في موقعك الرسمي.</p>
    </div>
  );
}
