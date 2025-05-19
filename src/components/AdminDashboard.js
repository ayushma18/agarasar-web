import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const founders = [
    { name: 'ANJAN PRAJAPATI', title: 'FOUNDER' },
    { name: 'DIPEN SHRESTHA', title: 'CO-FOUNDER' },
    { name: 'BIJAY SHRESTHA', title: 'CO-FOUNDER' },
    { name: 'RAMESH MAHARJAN', title: 'CO-FOUNDER' }
  ];

  const customers = [
    {
      accountNo: '02023',
      firstName: 'Anjan',
      middleName: '',
      lastName: 'Prajapati',
      phone: '9841234567',
      email: 'anjan@example.com'
    },
    {
      accountNo: '02024',
      firstName: 'Dipen',
      middleName: '',
      lastName: 'Shrestha',
      phone: '9847654321',
      email: 'dipen@example.com'
    },
    {
      accountNo: '02025',
      firstName: 'Bijay',
      middleName: '',
      lastName: 'Shrestha',
      phone: '9845678901',
      email: 'bijay@example.com'
    }
  ];

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>AGARASAR</h2>
        </div>
        <nav className="sidebar-nav">
          <Link to="/admin" className="nav-item active">
            <span className="icon">📊</span> Dashboard
          </Link>
          <Link to="/admin/customers" className="nav-item">
            <span className="icon">👥</span> Manage Customer
          </Link>
          <Link to="/admin/cashiers" className="nav-item">
            <span className="icon">💼</span> Manage Cashier
          </Link>
          <Link to="/admin/pending" className="nav-item">
            <span className="icon">📝</span> Form Pending
          </Link>
          <Link to="/login" className="nav-item logout">
            <span className="icon">🚪</span> Log out
          </Link>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>ADMIN</h1>
          <div className="header-icons">
            <button className="icon-button">⚙️</button>
            <button className="icon-button">👤</button>
          </div>
        </header>

        <section className="founders-section">
          <h2>Founders</h2>
          <div className="founders-grid">
            {founders.map((founder, index) => (
              <div key={index} className="founder-card">
                <div className="founder-image">
                  👤
                </div>
                <h3>{founder.name}</h3>
                <p>{founder.title}</p>
                <button className="profile-button">Profile</button>
              </div>
            ))}
          </div>
        </section>

        <section className="customer-section">
          <h2>Customer List</h2>
          <div className="table-container">
            <table className="customer-table">
              <thead>
                <tr>
                  <th>Account No</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Customize</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.accountNo}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.middleName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td className="action-buttons">
                      <button className="update-button">Update</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;