import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 500;
`;

export const List = styled.ul`
  font-weight: 500;
  display: flex;
`;

export const Item = styled.li`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding: 10px 15px;
  width: calc((100% - 20px)/ 5);
`;

export const StatisticsSection = styled.section`
  padding: 10px;
  border-radius: 5px;
  margin: 10px auto;
  width: 500px;
  background-color: white;
`;
