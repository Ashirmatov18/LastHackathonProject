import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default function ProductsPagination({onChange, page, count}) {
    return (
        <Pagination 
            onChange={onChange}
            page={page}
            style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}} 
            count={count} 
            color="secondary" 
        />
    )
}