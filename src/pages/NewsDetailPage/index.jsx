import React from 'react'
import NewsHeader from './components/NewsHeader'
import NewsContent from './components/NewsContent';
import NewsGo from './components/NewsGo';
import * as S from "./NewsDetailPage.style";

export default function NewsDetailPage() {
    return (
        <S.App>
            <S.Container>
                <NewsHeader />
                <NewsContent/>
                <NewsGo/>
            </S.Container>
        </S.App>
    )
}