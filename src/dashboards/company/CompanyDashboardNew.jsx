import React, { useState } from 'react'
import ShortlistingPanel from '../../components/ShortlistingPanel'
import '../../styles/dashboard.css'

const CompanyDashboardNew = () => {
  const [activeSection, setActiveSection] = useState('shortlisting-panel')

  const renderContent = () => {
    switch (activeSection) {
      case 'shortlisting-panel':
        return <ShortlistingPanel />
      default:
        return <div>Select a section</div>
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ width: '250px', background: '#f5f5f5', padding: '20px' }}>
        <h3>Company Dashboard</h3>
        <button
          className={activeSection === 'shortlisting-panel' ? 'active' : ''}
          onClick={() => setActiveSection('shortlisting-panel')}
          style={{ 
            display: 'block', 
            width: '100%', 
            padding: '10px', 
            margin: '5px 0',
            background: activeSection === 'shortlisting-panel' ? '#007bff' : '#fff',
            color: activeSection === 'shortlisting-panel' ? '#fff' : '#000',
            border: '1px solid #ddd',
            cursor: 'pointer'
          }}
        >
          👥 Shortlist Students
        </button>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        {renderContent()}
      </div>
    </div>
  )
}

export default CompanyDashboardNew