import React from 'react'
import { Table ,ButtonToggle} from 'reactstrap';
import {Link} from 'react-router-dom'

export default function ListCard({user}) {
    return (
        <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom et Prénom</th>
            <th>Pseudo</th>
            <th>E-mail</th>
            <th>N° de télephone</th>
            <th>Site Web</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td><ButtonToggle color="danger">
             <Link className="text-light" to={`/profile/${user.id}`}>
                Profil
             </Link></ButtonToggle>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
