import React from 'react'
import KeywordButton from '../../../components/KeywordButton'
import styled from 'styled-components'
import theme from '../../../styles/theme';
import WaringIcon from "../../../assets/warning.svg"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20%;
`

const SuggestText = styled.div`
  display: flex;
  gap: 7px;
  font-size: 13px;
  font-weight: 500;        
  color: ${theme.colors.text[200]};
  margin-bottom: 15px
`;

const HashtagSection = styled.div`
  width: 100%;
  text-align: left;
  gap: 5px
`;

const AllButton = styled.button`
  background-color: ${theme.colors.primary[100]};    
  border-radius: 10px;     
  padding: 5px 12px;      
  text-align: center;      
  display: inline-block;     
  font-size: 12px;        
  color: white;
  margin-right: 5px;   
`

const AddButton = styled.button`
  background-color: ${theme.colors.primary[200]};    
  border-radius: 10px;     
  padding: 5px 12px;      
  text-align: center;      
  display: inline-block;     
  font-size: 12px;        
  color: white;    
`



export default function HashtagHeader() {
    const keywords = ["화재사고", "지진", "코로나", "홍수", "폭설", "감염병", "태풍"];

    return (
        <MainContainer>
            <SuggestText>
                <img src={WaringIcon}/>
                확인할 재난 뉴스 키워드를 선택해보세요!
            </SuggestText>
            <HashtagSection>
                <AllButton>전체보기</AllButton>
                {keywords.map((keyword, index) => (
                    <KeywordButton key={index} keyword={keyword} />
                ))}
                <AddButton>+추가</AddButton>
            </HashtagSection>
        </MainContainer>
    )
}
