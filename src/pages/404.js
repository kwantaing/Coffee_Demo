import React from 'react';
import Header from '../components/Header/Header'
import {Link} from 'gatsby'

const NotFoundPage = () => (
    <div>
        <p>Oops not found :(</p>
        <Link to="/">click to go back hom</Link>
    </div>
)

export default NotFoundPage;