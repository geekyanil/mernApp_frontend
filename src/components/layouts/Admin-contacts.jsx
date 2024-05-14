import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
    const [contacts, setContacts] = useState([])
    const { authorizationToken } = useAuth();

    const getAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json();
            setContacts(data)

        } catch (error) {
            console.log(error)
        }

    }

    const deleteContact = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "delete",
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json();
            console.log(`Contacts After Delete: ${data}`)

            if (response.ok) {
                toast.success("Deleted Successfully")
                getAllContacts()
            }
            else {
                toast.error("Not Deleted")
            }

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getAllContacts()
    }, [])



    return (

        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Contacts Data</h1>
                </div>

                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((curcontact, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{curcontact.username}</td>
                                        <td>{curcontact.email}</td>
                                        <td>{curcontact.message}</td>
                                        <td><button onClick={() => deleteContact(curcontact._id)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>




            </section>
        </>
    )
}