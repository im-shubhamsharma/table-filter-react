import React from 'react'
import "./Pagination.scss"

const Pagination = ({postPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for(let i=1; i<=Math.ceil(totalPosts / postPerPage); i++){
     pageNumbers.push(i);
  }

  

  return (
    <div className='pagination-container'>
       {pageNumbers.map(page => (
         <button key={page} onClick={()=>paginate(page)}>
            {page}
         </button>
       ))}
    </div>
  )
}

export default Pagination