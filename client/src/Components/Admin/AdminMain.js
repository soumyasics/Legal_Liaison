import React from 'react'
import '../Admin/AdminMain.css'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminLogin from './AdminLogin'
import ViewAllAdvocates from './ViewAllAdvocates'

function AdminMain({data}) {
  return (
    <div>
        <div className="adminmain-container">
        <div className="adminmain-sidebar">
            <AdminSidebar/>
        </div>
        <div className="adminmain-content">
        {data==="admindashboard" ?(<AdminDashboard/>
        ):data==="adminviewalladvocates" ?(<ViewAllAdvocates/>
        ):<AdminLogin/>}
        </div>

        </div>
    </div>
  )
}

export default AdminMain