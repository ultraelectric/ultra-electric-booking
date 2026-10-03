import Link from "next/link";

const dashboardStats = [
  { label: "Total bookings", value: "128" },
  { label: "Revenue", value: "$18.4K" },
  { label: "Pending requests", value: "12" },
  { label: "Completed jobs", value: "94" },
];

const bookings = [
  { customer: "Sara Thompson", service: "Electrical Repair", date: "2026-10-05", status: "Confirmed" },
  { customer: "Mason Lee", service: "Plumbing Maintenance", date: "2026-10-06", status: "Pending" },
  { customer: "Alicia James", service: "Landscaping", date: "2026-10-07", status: "In Progress" },
  { customer: "Daniel Cruz", service: "Woodworking", date: "2026-10-09", status: "Completed" },
];

export default function AdminDashboardPage() {
  return (
    <main className="admin-shell">
      <div className="container admin-wrap">
        <aside className="sidebar">
          <div className="brand-wrap sidebar-brand">
            <div className="brand-badge">U</div>
            <div>
              <div className="brand-name">Ultra Electric</div>
              <div className="brand-subtitle">Admin</div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <a href="#">Dashboard</a>
            <a href="#">Bookings</a>
            <a href="#">Customers</a>
            <a href="#">Services</a>
            <a href="#">Technicians</a>
          </nav>

          <Link href="/book" className="primary-btn sidebar-btn">
            New booking
          </Link>
        </aside>

        <section className="content-panel">
          <header className="panel-header">
            <div>
              <p className="small-label">Overview</p>
              <h1>Operations dashboard</h1>
            </div>
            <button className="secondary-btn small-btn">Export report</button>
          </header>

          <div className="stats-row admin-stats">
            {dashboardStats.map((item) => (
              <div key={item.label} className="stat-box admin-stat-box">
                <div className="stat-value">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="table-card">
            <div className="table-header">
              <h2>Recent bookings</h2>
              <button className="secondary-btn small-btn">View all</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.customer}>
                    <td>{booking.customer}</td>
                    <td>{booking.service}</td>
                    <td>{booking.date}</td>
                    <td>
                      <span className={`status-badge ${booking.status.toLowerCase().replace(/\s+/g, "-")}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
