import { Box } from '@mui/material';
import React from 'react';
import HistoPay from '../HistoPay/HistoPay';
import { ref } from 'firebase/database';
import { db } from '../../../Backend/config/config';

function HistoriquePay(props) {
    return (
        <Box>
            
            <HistoPay dataRef={ref(db, 'payements')}/>
        </Box>
    );
}

export default HistoriquePay;