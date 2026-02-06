import React, { useState } from 'react'
import { getStudentsForShortlisting } from '../services/apiService'

const ShortlistingPanel = () => {
  const [course, setCourse] = useState('')
  const [minPercentage, setMinPercentage] = useState('')
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    try {
      setLoading(true)
      const res = await getStudentsForShortlisting(
        course || null,
        minPercentage || null
      )
      setStudents(res.data || [])
    } catch (err) {
      alert('Error fetching students')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="dashboard-card">
      <h3>Shortlist Students</h3>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Course (DAC / DBDA)"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Percentage"
          value={minPercentage}
          onChange={(e) => setMinPercentage(e.target.value)}
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <p>Loading students...</p>}

      {students.length > 0 && (
        <div className="students-list">
          {students.map((s) => (
            <div key={s.id} className="student-item">
              <h4>{s.firstName} {s.lastName}</h4>
              <p>Course: {s.course}</p>
              <p>Email: {s.email}</p>
              <p>Percentage: {s.degreePercentage}%</p>
            </div>
          ))}
        </div>
      )}

      {!loading && students.length === 0 && (
        <p>No students found</p>
      )}
    </div>
  )
}

export default ShortlistingPanel