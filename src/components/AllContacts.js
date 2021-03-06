import { Link } from 'react-router-dom'
import React from 'react'

const AllContacts = ({ contacts }) => (
    <div>
        <ul>
            {
                contacts.map(p => (
                    <li key={p.id}>
                        <Link to={`/${p.name}`}>{p.phone}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

AllContacts.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  };

export default AllContacts

