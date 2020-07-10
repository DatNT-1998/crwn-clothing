import styled from 'styled-components';
import {ReactComponent as ShoppingIconSVG } from '../../assets/original.svg';

export const ShoppingIcon = styled(ShoppingIconSVG)`
    width: 24px;
    height: 24px;
`;

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
`;

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    bottom: 10px;
`;
