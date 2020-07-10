import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 90px;
    right: 40px;
    padding: 20px;
    background-color: white;
    border: 1px solid black;
    z-index: 5;
`;

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 240px;
    overflow: scroll; 
`;

export const EmptyMessgageContainer = styled.div`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;