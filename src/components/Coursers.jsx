import coursers from '../data/coursers'
import queryString from 'query-string'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCoursers(coursers, key) {
  const sortedCoursers = [...coursers]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCoursers
  }
  sortedCoursers.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCoursers
}

const Coursers = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  sortCoursers(coursers, sortKey)
  console.log(setSortKey)
  const [sortedCoursers, setSortedCoursers] = useState(
    sortCoursers(coursers, sortKey)
  )

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
    }
  }, [sortKey, navigate])
  console.log(sortKey)

  return (
    <>
      <h1>{sortKey ? `coursers sorted by ${sortKey}` : 'Coursers'}</h1>
      {sortedCoursers.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Coursers
