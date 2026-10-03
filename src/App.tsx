import React, { useState } from 'react';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');

  // بيانات وهمية لإدارة المحتوى (تقدر تربطها بـ Database بعدين)
  const [projects, setProjects] = useState([
    { id: 1, title: 'Taskly AI App', category: 'Artificial Intelligence', status: 'Active' },
    { id: 2, title: 'E-commerce Platform', category: 'Web Development', status: 'Pending' }
  ]);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'أحمد محمد', email: 'ahmed@test.com', message: 'مرحباً، أود استفسار عن خدمات الذكاء الاصطناعي.' }
  ]);

  if (auth) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a', color: '#fff', fontFamily: 'sans-serif' }}>
        {/* Sidebar */}
        <div style={{ width: '260px', background: '#1e293b', padding: '20px', borderRight: '1px solid #334155' }}>
          <h2>Taskly Admin</h2>
          <p style={{ color: '#64748b', fontSize: '12px', marginBottom: '30px' }}>لوحة التحكم الرئيسية</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => setActiveTab('projects')} style={{ background: activeTab === 'projects' ? '#3b82f6' : 'transparent', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', textAlign: 'right', cursor: 'pointer', fontWeight: 'bold' }}>📂 إدارة المشاريع</button>
            <button onClick={() => setActiveTab('messages')} style={{ background: activeTab === 'messages' ? '#3b82f6' : 'transparent', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', textAlign: 'right', cursor: 'pointer', fontWeight: 'bold' }}>💬 الرسائل والعملاء</button>
            <button onClick={() => setActiveTab('settings')} style={{ background: activeTab === 'settings' ? '#3b82f6' : 'transparent', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', textAlign: 'right', cursor: 'pointer', fontWeight: 'bold' }}>⚙️ الإعدادات</button>
          </div>

          <button onClick={() => setAuth(false)} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', width: '100%', cursor: 'pointer', marginTop: '50px' }}>تسجيل خروج</button>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
          {activeTab === 'projects' && (
            <div>
              <h2>إدارة المشاريع</h2>
              <p style={{ color: '#94a3b8', marginBottom: '20px' }}>تحكم في عرض وتعديل مشاريعك بكل سهولة.</p>
              <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
                {projects.map(p => (
                  <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #334155' }}>
                    <div>
                      <h4 style={{ margin: 0 }}>{p.title}</h4>
                      <span style={{ color: '#94a3b8', fontSize: '12px' }}>{p.category}</span>
                    </div>
                    <span style={{ background: '#22c55e20', color: '#22c55e', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>{p.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2>رسائل العملاء</h2>
              <p style={{ color: '#94a3b8', marginBottom: '20px' }}>الرسائل الواردة من نموذج الاتصال بالموقع.</p>
              <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
                {messages.map(m => (
                  <div key={m.id} style={{ padding: '15px 0', borderBottom: '1px solid #334155' }}>
                    <h4 style={{ margin: 0 }}>{m.sender} <span style={{ color: '#94a3b8', fontSize: '12px' }}>({m.email})</span></h4>
                    <p style={{ color: '#cbd5e1', marginTop: '8px' }}>{m.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2>الإعدادات العامة</h2>
              <p style={{ color: '#94a3b8', marginBottom: '20px' }}>تعديل بيانات الموقع وكلمة المرور.</p>
              <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8' }}>كلمة مرور لوحة التحكم الحالية:</label>
                <input type="text" value="5471" disabled style={{ padding: '10px', borderRadius: '6px', border: '1px solid #475569', background: '#0f172a', color: '#fff', width: '250px' }} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '50px', background: '#0f172a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', position: 'relative' }}>
      <h1>Taskly AI Portfolio</h1>
      <p>مرحباً بك في موقعك الرسمي.</p>

      {show && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <form onSubmit={(e) => { e.preventDefault(); if(pass === '5471') setAuth(true); else alert('الباسورد غلط!'); }} style={{ background: '#1e293b', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
            <h3>كلمة مرور الأدمن</h3>
            <input type="password" placeholder="اكتب 5471..." value={pass} onChange={e => setPass(e.target.value)} autoFocus style={{ padding: '10px', margin: '15px 0', borderRadius: '6px', border: '1px solid #475569', background: '#0f172a', color: '#fff' }} />
            <div>
              <button type="submit" style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', marginLeft: '10px' }}>دخول</button>
              <button type="button" onClick={() => setShow(false)} style={{ background: '#64748b', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>إلغاء</button>
            </div>
          </form>
        </div>
      )}

      <button onClick={() => setShow(true)} style={{ position: 'fixed', bottom: '15px', left: '15px', background: '#3b82f6', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
        Admin Panel
      </button>
    </div>
  );
}
