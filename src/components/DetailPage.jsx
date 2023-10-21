import {React} from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'

import Hero from './Hero'
import ProjectDescription from './ProjectDescription'
import {pro} from '../assets/projects'


export default function DetailPage(props) {

  const {postId} = useParams()
  const text = pro[postId - 1]
  console
  return (
    <div>
        <ProjectDescription text={text} id={postId}/>
    </div>
  )
}
