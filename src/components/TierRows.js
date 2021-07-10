import React from 'react'
import TierRow from './TierRow'

const TierRows = () => {
    return (
        <div style={{marginBottom:'15px'}}>
            <TierRow color='red' letter='S'/>
            <TierRow color='orange' letter='A'/>
            <TierRow color='blue' letter='B'/>
            <TierRow color='yellow' letter='C'/>
            <TierRow color='green' letter='D'/>
        </div>
    )
}

export default TierRows
