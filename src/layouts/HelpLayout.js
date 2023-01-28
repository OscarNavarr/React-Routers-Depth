import { NavLink, Outlet } from "react-router-dom"

export const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>Website help</h2>
        <p>Laboris culpa ad eiusmod tempor est duis pariatur est enim excepteur consectetur velit est.</p>
        
        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
        
        <Outlet />
    </div>
  )
}
