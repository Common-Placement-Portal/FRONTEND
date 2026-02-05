import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api'

export const getStudentsForShortlisting = async (course, minPercentage) => {
  const params = {}
  if (course) params.course = course
  if (minPercentage) params.minPercentage = minPercentage
  
  return await axios.get(`${API_BASE_URL}/students/shortlist`, { params })
}