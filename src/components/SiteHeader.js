import React from 'react';
import { Link } from 'react-route-dom';

export default function SiteHeader() {
  return (
    <div className='site-header'>
        <Link to="/"><h1>Cheboi's Reviews</h1></Link>
    </div>
  )
}
