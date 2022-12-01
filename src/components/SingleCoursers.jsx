import {useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import coursers from '../data/coursers'

const SingleCoursers = () => {
  const params = useParams()
  const course = coursers.find((course) => course.slug === params.coursersSlug)
  const navigate = useNavigate()

  useEffect(() => {
    if (!course) {
      navigate('..', {relative: 'path'})
    }
  }, [course, navigate])

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All coursers
      </Link>
    </>
  )
}

export default SingleCoursers
