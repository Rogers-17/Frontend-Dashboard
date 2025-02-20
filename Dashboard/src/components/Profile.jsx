import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css'
import UserImage from '../assets/pic 3.png'
import { BiBook, BiLogoCss3, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoReact, BiStar } from 'react-icons/bi'

const courses = [
  {
    title: 'HTML',
    duration: '2 Hours',
    icon: <BiLogoHtml5 />,
  },
  {
    title: 'CSS',
    duration: '2 Hours',
    icon: <BiLogoCss3 />,
  },
  {
    title: 'JavaScript',
    duration: '2 Hours',
    icon: <BiLogoJavascript />,
  },
  {
    title: 'React',
    duration: '2 Hours',
    icon: <BiLogoReact />,
  },
];

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader />

      <div className="user-profile">
        <div className="user-detail">
          <img src={UserImage} alt='' />
          <h3 className='username'>Nathaniel Rogers</h3>
          <span className='profession'>Teacher</span>
        </div>

        <div className="user-courses">
          {courses.map((courses) => (
            <div className="course">
              <div className="course-detail">
                <div className="course-cover">{courses.icon}</div>
                <div className="course-name">
                  <h5 className="title">{courses.title}</h5>
                  <span className='duration'>{courses.duration}</span>
                </div>
              </div>

              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
