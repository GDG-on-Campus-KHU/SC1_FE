import React from 'react'
import NewsHeader from './components/NewsHeader'
import NewsContent from './components/NewsContent';
import NewsGo from './components/NewsGo';
import * as S from "./NewsDetailPage.style";
import BackHeader from '../../components/header/BackHeader';
import Footer from '../../components/footer';

export default function NewsDetailPage() {
    return (
        <S.App>
            <BackHeader/>
            <S.Container>
                <NewsHeader />
                <NewsContent/>
                <NewsGo/>
            </S.Container>
            <Footer isNews={true}/>
        </S.App>
    )
}