import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 10px;
    width: 80px;
`;

export const Content = styled.div`
    display:flex;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50px;
    padding: 10px;
    border-radius: 16px;
    background-color: #54346a;
    margin-right: 30px;    
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
`;
export const Home = styled.img`
    filter: invert(100%);
    width: 25px;
    height: 25px;
`;
export const DateTime = styled.div`
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #FFFFFF;
    padding-bottom: 20px;
    
    label {
        align-self: center;
    }

    label.label-date {
        opacity: 30%;
    }
`;