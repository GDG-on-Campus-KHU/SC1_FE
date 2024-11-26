import React from 'react'
import NewsComponent from '../../../components/NewsComponent'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 */
  gap: 18px; /* 아이템 간 간격 */
  width: 100%;
`;

export default function NewsSection() {
    const newsData = [
        { id: 1, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },
        { id: 2, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },
        { id: 3, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },
        { id: 4, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },
        { id: 5, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },
        { id: 6, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },
        { id: 7, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },
        { id: 8, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },
        { id: 9, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },
        { id: 10, title: '고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라', tag: '화재사고' },

    ];

    return (
        <Container>
            {newsData.map((news) => (
                <NewsComponent
                    key={news.id} // 고유 키
                    title={news.title}
                    tag={news.tag}
                />
            ))}
        </Container>
    )
}
