import React from 'react';
import {withRouter} from 'react-router-dom'

import {ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer, BackgroundImageContainer} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size,history, linkUrl, match }) => (
    <MenuItemContainer  size={size} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>
        <ContentContainer>
            <ContentTitle> {title.toUpperCase()}</ContentTitle>
            <ContentSubtitle className='subtitle'> SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem) ;