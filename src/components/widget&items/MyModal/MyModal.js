import { Box, Container, Modal, Slide } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyModal({user , children}) {

    const [open , setOpen] = useState(true)
    const navigate = useNavigate()
    const handleCloseModal = ()=>{
        setOpen(false)
         navigate(-1)
    }
    useEffect(()=>{
        setOpen(true)
        return ()=>{
            setOpen(false)
        }
    }, [])
    return (
        <Box>
             <Modal open={open} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Container  maxWidth="sm" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '20px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
   
  }} className='container'>
    {children}
  </Container>
  </Slide>
  </Modal>
</Box>
    );
}

export default MyModal;