import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme';

const StyledKeyword = styled.div`
  background-color: none; 
  border: 1px solid ${theme.colors.primary[100]};   
  border-radius: 10px;     
  padding: 5px 10px;      
  text-align: center;      
  display: inline-block;   
  font-size: 12px;        
  color: ${theme.colors.primary[100]};
  margin-right: 5px;
  margin-bottom: 8px;        
`;


export default function KeywordButton({ keyword }) {
  return (
    <StyledKeyword># {keyword}</StyledKeyword>
  )
}
