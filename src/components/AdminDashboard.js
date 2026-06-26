import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../config';

const TABS = [
  { key: 'contact', label: 'Contact Messages', icon: '✉️' },
  { key: 'registrations', label: 'Registrations', icon: '📝' },
  { key: 'logins', label: 'Login Activity', icon: '🔑' }
];

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [activeTab, setActiveTab] = useState('contact');
  const [data, setData] = useState({ contact: [], registrations: [], logins: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadAll = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [statsRes, contactRes, regRes, loginRes] = await Promise.all([
        fetch(apiUrl('/admin')),
        fetch(apiUrl('/api/submissions/contact')),
        fetch(apiUrl('/api/submissions/registrations')),
        fetch(apiUrl('/api/submissions/logins'))
      ]);
      const [statsJson, contactJson, regJson, loginJson] = await Promise.all([
        statsRes.json(), contactRes.json(), regRes.json(), loginRes.json()
      ]);
      setStats(statsJson);
      setData({
        contact: contactJson.items || [],
        registrations: regJson.items || [],
        logins: loginJson.items || []
      });
    } catch (err) {
      console.error('Dashboard load error:', err);
      setError('Could not reach the backend. Make sure it is running on port 5000.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadAll(); }, [loadAll]);

  const statCards = [
    { label: 'Contact Messages', value: stats?.stats?.total_messages ?? 0, tone: 'from-blue-500 to-blue-600' },
    { label: 'Registrations', value: stats?.stats?.pending_registrations ?? 0, tone: 'from-emerald-500 to-teal-600' },
    { label: 'Login Events', value: stats?.stats?.total_logins_today ?? 0, tone: 'from-sky-500 to-blue-600' },
    {
      label: 'Email Delivery',
      value: stats?.email_configured ? 'On' : 'Off',
      tone: stats?.email_configured ? 'from-emerald-500 to-green-600' : 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 font-bold text-white">अ</div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-xs text-slate-400 font-devanagari">अग्रसर सहकारी</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={loadAll}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
            <button
              onClick={() => navigate('/login')}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
            <p className="font-semibold">⚠️ {error}</p>
            <p className="mt-1 text-sm">Start it with: <code className="rounded bg-red-100 px-1.5 py-0.5">cd backend &amp;&amp; ./venv/bin/uvicorn main:app --port 5000</code></p>
          </div>
        )}

        {/* Stat cards */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((c) => (
            <div key={c.label} className={`rounded-2xl bg-gradient-to-br ${c.tone} p-6 text-white shadow-lg`}>
              <div className="text-sm opacity-90">{c.label}</div>
              <div className="mt-2 text-4xl font-bold">{loading ? '…' : c.value}</div>
            </div>
          ))}
        </section>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`flex items-center gap-2 rounded-t-lg px-5 py-3 text-sm font-semibold transition-colors ${
                activeTab === t.key
                  ? 'border-b-2 border-blue-600 text-blue-700'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>{t.icon}</span> {t.label}
              <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                {data[t.key].length}
              </span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <section className="mt-6">
          {loading ? (
            <div className="py-20 text-center text-slate-400">
              <svg className="mx-auto h-10 w-10 animate-spin text-blue-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="mt-3">Loading…</p>
            </div>
          ) : data[activeTab].length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-20 text-center">
              <div className="text-4xl">{TABS.find((t) => t.key === activeTab)?.icon}</div>
              <p className="mt-3 font-medium text-slate-600">No {activeTab === 'logins' ? 'login activity' : activeTab + ' entries'} yet</p>
              <p className="mt-1 text-sm text-slate-400">New submissions from the website will appear here.</p>
            </div>
          ) : (
            <>
              {activeTab === 'contact' && <ContactTable rows={data.contact} />}
              {activeTab === 'registrations' && <RegistrationsTable rows={data.registrations} />}
              {activeTab === 'logins' && <LoginsTable rows={data.logins} />}
            </>
          )}
        </section>
      </main>
    </div>
  );
}

const Th = ({ children }) => (
  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">{children}</th>
);
const Td = ({ children }) => <td className="px-4 py-3 text-sm text-slate-700 align-top">{children}</td>;

const TableShell = ({ headers, children }) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
    <table className="min-w-full divide-y divide-slate-100">
      <thead className="bg-slate-50">
        <tr>{headers.map((h) => <Th key={h}>{h}</Th>)}</tr>
      </thead>
      <tbody className="divide-y divide-slate-100">{children}</tbody>
    </table>
  </div>
);

function ContactTable({ rows }) {
  return (
    <TableShell headers={['Received', 'Name', 'Email', 'Phone', 'Subject', 'Message']}>
      {rows.map((r, i) => (
        <tr key={i} className="hover:bg-slate-50">
          <Td>{formatDate(r.received_at)}</Td>
          <Td>{r.firstName} {r.lastName}</Td>
          <Td><a className="text-blue-600 hover:underline" href={`mailto:${r.email}`}>{r.email}</a></Td>
          <Td>{r.phone || '—'}</Td>
          <Td>{r.subject || '—'}</Td>
          <Td><span className="block max-w-md whitespace-pre-wrap">{r.message}</span></Td>
        </tr>
      ))}
    </TableShell>
  );
}

function RegistrationsTable({ rows }) {
  return (
    <TableShell headers={['Received', 'Name', 'Email', 'Mobile', 'Account Type', 'Address']}>
      {rows.map((r, i) => (
        <tr key={i} className="hover:bg-slate-50">
          <Td>{formatDate(r.received_at)}</Td>
          <Td>{[r.firstName, r.middleName, r.lastName].filter(Boolean).join(' ')}</Td>
          <Td><a className="text-blue-600 hover:underline" href={`mailto:${r.email}`}>{r.email}</a></Td>
          <Td>{r.mobileNumber || '—'}</Td>
          <Td>{r.accountType || '—'}</Td>
          <Td>{[r.tole, r.localMunicipality, r.district, r.province].filter(Boolean).join(', ') || '—'}</Td>
        </tr>
      ))}
    </TableShell>
  );
}

function LoginsTable({ rows }) {
  return (
    <TableShell headers={['Time', 'Account', 'Status']}>
      {rows.map((r, i) => (
        <tr key={i} className="hover:bg-slate-50">
          <Td>{formatDate(r.received_at)}</Td>
          <Td>{r.accountNumber || '—'}</Td>
          <Td>
            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              r.status === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
            }`}>
              {r.status === 'success' ? 'Success' : 'Failed'}
            </span>
          </Td>
        </tr>
      ))}
    </TableShell>
  );
}

export default AdminDashboard;
