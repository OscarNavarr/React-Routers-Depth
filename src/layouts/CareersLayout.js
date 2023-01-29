import { Outlet } from 'react-router-dom'

export const CareersLayout = () => {
  return (
    <div className='careers-layout'>
        <h2>Careers</h2>
        <p>Magna nulla pariatur duis eiusmod.Velit ipsum deserunt pariatur adipisicing ad.Ad sint nisi incididunt magna veniam in dolor exercitation non consequat.</p>

        <Outlet/>
    </div>
  )
}
