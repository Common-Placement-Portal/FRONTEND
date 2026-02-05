import React, { useState } from 'react'
import CompanyDashboardNew from './CompanyDashboardNew'

const CompanyDashboardEntry = () => {
  const [ready, setReady] = useState(true)

  if (!ready) {
    return <div>Initializing Company Dashboard...</div>
  }

  return <CompanyDashboardNew />
}

export default CompanyDashboardEntry