import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
     text-align: center;
`;

const Image = styled.div`
     display: flex;
     width: 100%;
     height:200px;
     background-color: #E8E8E8; 
`;

export default function NewsContent() {
  return (
    <Container>
        <Image/>
    </Container>
  )
}
