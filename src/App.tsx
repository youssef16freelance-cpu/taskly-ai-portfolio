import React, { useState, useEffect } from 'react';
import { Lock, Key, LayoutDashboard, Briefcase, CheckSquare, Sparkles, Send, RefreshCw } from 'lucide-react';

export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'tasks' | 'ai'>('overview');

  const [projects] = useState([
    { id: 1, title: 'Taskly AI Assistant', category: 'ذكاء اصطناعي وتطبيقات', desc: 'تطبيق ذكي لإدارة المهام وتنظيم الوقت باستخدام الذكاء الاصطناعي.' },
    { id: 2, title: 'Smart Portfolio Dashboard', category: 'تطوير ويب', desc: 'لوحة تحكم تفاعلية متكاملة لعرض الأعمال والمشاريع البرمجية.' }
  ]);

  const [tasks] = useState([
    { id: 1, text: 'إطلاق النسخة التجريبية للمشروع', completed: false },
    { id: 2, text: 'ربط لوحة التحكم بكلمة المرور الآمنة', completed: true }
  ]);

  const [aiMessage, setAiMessage] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'ai', text: 'أهلاً بك يا يوسف في لوحة التحكم! أنا مساعدك الذكي.' }
  ]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsAdminRoute(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === '5471') {
      setIsAuthenticated(true);
    } else {
      alert('كلمة المرور غير صحيحة! (الباسورد هو: 5471)');
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiMessage.trim()) return;
    
    setChatLog(prev => [...prev, { sender: 'user', text: aiMessage }]);
    const query = aiMessage;
    setAiMessage('');

    setTimeout(() => {
      setChatLog(prev => [
        ...prev, 
        { sender: 'ai', text: `تم استلام استفسارك بشأن "${query}" بنجاح!` }
      ]);
    }, 1000);
  };

  if (isAdminRoute) {
    if (!isAuthenticated) {
      return (
        <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
          <div style={{ background: '#1e293b', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', width: '100%', maxWidth: '400px', textAlign: 'center', border: '1px solid #334155' }}>
            <div style={{ background: '#3b82f6', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#fff' }}>
              <Lock size={30} />
            </div>
            <h2 style={{ color: '#fff', marginBottom: '10px', fontSize: '24px' }}>لوحة تحكم المدير</h2>
            <p style={{ color: '#94a3b8', marginBottom: '25px', fontSize: '14px' }}>أدخل كلمة المرور السرية للوصول (5471)</p>
            <form onSubmit={handleLogin}>
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <Key style={{ position: 'absolute', right: '15px', top: '15px', color: '#64748b' }} size={20} />
                <input 
                  type="password" 
                  placeholder="كلمة المرور" 
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  style={{ width: '100%', padding: '14px 45px 14px 15px', background: '#0f172a', border: '1px solid #475569', borderRadius: '8px', color: '#fff', fontSize: '16px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <button type="submit" style={{ width: '100%', padding: '14px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
                دخول
              </button>
            </form>
            <div style={{ marginTop: '20px' }}>
              <a href="?" style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}>العودة للموقع الرئيسي</a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ minHeight: '100vh', background: '#0f172a', color: '#f8fafc', fontFamily: 'Cairo, sans-serif', direction: 'rtl', display: 'flex' }}>
        <div style={{ width: '260px', background: '#1e293b', borderLeft: '1px solid #334155', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px', paddingBottom: '15px', borderBottom: '1px solid #334155' }}>
            <Sparkles color="#3b82f6" size={28} />
            <h2 style={{ fontSize: '18px', margin: 0 }}>Taskly Admin</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
            <button onClick={() => setActiveTab('overview')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: activeTab === 'overview' ? '#3b82f6' : 'transparent', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'right', fontWeight: 'bold' }}>
              <LayoutDashboard size={20} /> نظرة عامة
            </button>
            <button onClick={() => setActiveTab('projects')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: activeTab === 'projects' ? '#3b82f6' : 'transparent', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'right', fontWeight: 'bold' }}>
              <Briefcase size={20} /> إدارة المشاريع
            </button>
            <button onClick={() => setActiveTab('tasks')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: activeTab === 'tasks' ? '#3b82f6' : 'transparent', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'right', fontWeight: 'bold' }}>
              <CheckSquare size={20} /> إدارة المهام
            </button>
            <button onClick={() => setActiveTab('ai')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: activeTab === 'ai' ? '#3b82f6' : 'transparent', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'right', fontWeight: 'bold' }}>
              <Sparkles size={20} /> المساعد الذكي
            </button>
          </div>
          <div style={{ borderTop: '1px solid #334155', paddingTop: '15px' }}>
            <a href="?" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ef4444', textDecoration: 'none', fontWeight: 'bold' }}>
              <RefreshCw size={18} /> خروج للموقع
            </a>
          </div>
        </div>

        <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
          {activeTab === 'overview' && (
            <div>
              <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>مرحباً بك يا يوسف في لوحة التحكم 👋</h1>
              <p style={{ color: '#94a3b8', marginBottom: '30px' }}>هنا يمكنك متابعة إحصائيات ومشاريع موقعك.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '10px' }}>المشاريع</h3>
                  <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>{projects.length}</p>
                </div>
                <div style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '10px' }}>المهام</h3>
                  <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981', margin: 0 }}>{tasks.length}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <h2 style={{ marginBottom: '20px' }}>المشاريع</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {projects.map(p => (
                  <div key={p.id} style={{ background: '#1e293b', padding: '20px', borderRadius: '10px', border: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ margin: '0 0 5px 0' }}>{p.title}</h3>
                      <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px' }}>{p.desc}</p>
                    </div>
                    <span style={{ background: '#3b82f6', padding: '5px 12px', borderRadius: '20px', fontSize: '12px' }}>{p.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div>
              <h2 style={{ marginBottom: '20px' }}>المهام</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {tasks.map(t => (
                  <div key={t.id} style={{ background: '#1e293b', padding: '15px 20px', borderRadius: '10px', border: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ textDecoration: t.completed ? 'line-through' : 'none', color: t.completed ? '#64748b' : '#fff' }}>{t.text}</span>
                    <span style={{ color: t.completed ? '#10b981' : '#f59e0b', fontSize: '14px' }}>{t.completed ? 'مكتملة' : 'قيد التنفيذ'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div>
              <h2 style={{ marginBottom: '20px' }}>المساعد الذكي</h2>
              <div style={{ background: '#1e293b', height: '400px', borderRadius: '12px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', padding: '20px' }}>
                <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
                  {chatLog.map((c, i) => (
                    <div key={i} style={{ alignSelf: c.sender === 'user' ? 'flex-start' : 'flex-end', background: c.sender === 'user' ? '#3b82f6' : '#334155', color: '#fff', padding: '10px 15px', borderRadius: '8px', maxWidth: '70%' }}>
                      {c.text}
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px' }}>
                  <input 
                    type="text" 
                    placeholder="اكتب رسالتك..." 
                    value={aiMessage} 
                    onChange={e => setAiMessage(e.target.value)}
                    style={{ flex: 1, padding: '12px', background: '#0f172a', border: '1px solid #475569', borderRadius: '8px', color: '#fff', outline: 'none' }}
                  />
                  <button type="submit" style={{ background: '#3b82f6', border: 'none', padding: '0 20px', borderRadius: '8px', color: '#fff', cursor: 'pointer' }}>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#f8fafc', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles color="#3b82f6" size={28} />
          <h1 style={{ fontSize: '20px', margin: 0 }}>Taskly AI Portfolio</h1>
        </div>
        <a href="?admin=true" style={{ background: '#3b82f6', color: '#fff', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
          لوحة التحكم (Admin)
        </a>
      </header>

      <main style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', marginBottom: '20px' }}>مرحباً بك في محفظتي الرقمية الذكية 🚀</h2>
        <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px' }}>منصة احترافية مدعومة بالذكاء الاصطناعي لإدارة المهام واستعراض الأعمال البرمجية بطريقة عصرية.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', textAlign: 'right', marginTop: '40px' }}>
          {projects.map(p => (
            <div key={p.id} style={{ background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
              <span style={{ color: '#3b82f6', fontSize: '12px', fontWeight: 'bold' }}>{p.category}</span>
              <h3 style={{ margin: '10px 0', fontSize: '20px' }}>{p.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
