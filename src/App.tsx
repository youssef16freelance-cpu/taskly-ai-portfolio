import React, { useState, useEffect } from 'react';
import { Lock, Key, LayoutDashboard, Briefcase, CheckSquare, Sparkles, Send, RefreshCw, FolderGit2, CheckCircle2, Circle } from 'lucide-react';

export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'tasks' | 'ai'>('overview');

  // الكود المسؤول عن فتح لوحة التحكم لما تكتب ?admin=true في الرابط
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsAdminRoute(true);
    }
  }, []);

  const [projects, setProjects] = useState([
    { id: 1, title: 'Taskly AI Assistant', category: 'ذكاء اصطناعي وتطبيقات', desc: 'مساعد ذكي لإدارة المهام والمشاريع باحترافية.' },
    { id: 2, title: 'Smart Portfolio Dashboard', category: 'تطوير ويب', desc: 'لوحة تحكم متكاملة لإدارة أعمال ومحتوى البراند.' }
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, text: 'إطلاق النسخة التجريبية للمشروع', completed: false },
    { id: 2, text: 'ربط لوحة تحكم كلمة المرور الآمنة', completed: true }
  ]);

  const [aiMessage, setAiMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'ai', text: 'أهلاً بك يا يوسف! أنا مساعد الذكاء الاصطناعي الخاص بك، كيف يمكنني مساعدتك اليوم؟' }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === '5471') {
      setIsAuthenticated(true);
    } else {
      alert('كلمة المرور غير صحيحة! (الباسورد هو: 5471)');
    }
  };

  const handleSendAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiMessage.trim()) return;
    setChatHistory([...chatHistory, { sender: 'user', text: aiMessage }, { sender: 'ai', text: 'تم استلام رسالتك وتحديث النظام بنجاح! ✨' }]);
    setAiMessage('');
  };

  // 1. لو المستخدم داخل على رابط الأدمن
  if (isAdminRoute) {
    // أ. لو لسه مكاتبش الباسورد الصح
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

    // ب. لو سجل دخول صح (تفتح لوحة التحكم بالكامل)
    return (
      <div style={{ minHeight: '100vh', background: '#0f172a', color: '#f8fafc', fontFamily: 'Cairo, sans-serif', direction: 'rtl', display: 'flex' }}>
        {/* Sidebar */}
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
              <CheckSquare size={20} /> المهام
            </button>
            <button onClick={() => setActiveTab('ai')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: activeTab === 'ai' ? '#3b82f6' : 'transparent', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'right', fontWeight: 'bold' }}>
              <Sparkles size={20} /> مساعد الذكاء الاصطناعي
            </button>
          </div>
          <div style={{ borderTop: '1px solid #334155', paddingTop: '15px' }}>
            <a href="?" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ef4444', textDecoration: 'none', fontWeight: 'bold' }}>
              <RefreshCw size={18} /> خروج للموقع
            </a>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
          {activeTab === 'overview' && (
            <div>
              <h1 style={{ fontSize: '26px', marginBottom: '10px' }}>أهلاً بك يا يوسف في لوحة التحكم 👋</h1>
              <p style={{ color: '#94a3b8', marginBottom: '30px' }}>مرحباً بك في لوحة تحكم Taskly AI & Vexlume.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '10px' }}>إجمالي المشاريع</h3>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{projects.length}</p>
                </div>
                <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
                  <h3 style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '10px' }}>المهام النشطة</h3>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{tasks.filter(t => !t.completed).length}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <h2 style={{ marginBottom: '20px' }}>إدارة المشاريع</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {projects.map((p) => (
                  <div key={p.id} style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
                    <h3 style={{ margin: '0 0 8px 0', color: '#3b82f6' }}>{p.title}</h3>
                    <span style={{ background: '#0f172a', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', color: '#94a3b8' }}>{p.category}</span>
                    <p style={{ margin: '10px 0 0 0', color: '#cbd5e1' }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div>
              <h2 style={{ marginBottom: '20px' }}>قائمة المهام</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {tasks.map((t) => (
                  <div key={t.id} style={{ background: '#1e293b', padding: '15px 20px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #334155' }}>
                    {t.completed ? <CheckCircle2 color="#22c55e" size={20} /> : <Circle color="#64748b" size={20} />}
                    <span style={{ textDecoration: t.completed ? 'line-through' : 'none', color: t.completed ? '#64748b' : '#fff' }}>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
              <h2 style={{ marginBottom: '20px' }}>مساعد الذكاء الاصطناعي</h2>
              <div style={{ flex: 1, background: '#1e293b', borderRadius: '12px', padding: '20px', overflowY: 'auto', border: '1px solid #334155', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {chatHistory.map((msg, index) => (
                  <div key={index} style={{ alignSelf: msg.sender === 'user' ? 'flex-start' : 'flex-end', background: msg.sender === 'user' ? '#3b82f6' : '#334155', color: '#fff', padding: '12px 18px', borderRadius: '12px', maxWidth: '75%' }}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendAi} style={{ display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  placeholder="اكتب رسالتك للمساعد..." 
                  value={aiMessage}
                  onChange={(e) => setAiMessage(e.target.value)}
                  style={{ flex: 1, padding: '14px', background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff', outline: 'none' }}
                />
                <button type="submit" style={{ padding: '0 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Send size={18} />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. الموقع الرئيسي العادي (Taskly AI Portfolio)
  return (
    <div style={{ minHeight: '100vh', background: '#070b19', color: '#f8fafc', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles color="#3b82f6" size={28} />
          <h1 style={{ fontSize: '20px', margin: 0 }}>Taskly AI <span style={{ fontSize: '12px', color: '#94a3b8' }}>BY VEXLUME</span></h1>
        </div>
      </header>

      <main style={{ maxWidth: '900px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', marginBottom: '20px' }}>نخلّي براندك يلفت الأنظار من أول نظرة. ✨</h2>
        <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px' }}>
          أهلاً، أنا Vexlume. استوديو إبداعي Taskly AI هو مساحتي المتخصصة في بناء الهويات البصرية، صناعة المحتوى الجذاب، والكتابة الإعلانية والتسويق الرقمي.
        </p>
      </main>
    </div>
  );
}
