import { NavLink, Navigate, Outlet } from "react-router-dom"
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { useAuth } from "../../store/auth";


export const AdminLayout = () => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    if (!user.isAdmin) {
        return <Navigate to="/" />
    }

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><NavLink to='/admin/users'><FaUser />
                                Users </NavLink></li>
                            <li><NavLink to="/admin/contacts" ><RiContactsBook3Fill />
                                Contacts</NavLink></li>
                            <li><NavLink to="/services"><FaRegListAlt />
                                Services</NavLink></li>
                            <li><NavLink to="/home"><FaHome />
                                Home</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />

        </>
    )
}