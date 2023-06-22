import styled from 'styled-components';

export const StatSection = styled.section`
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
  width: 600px;
  border: 1px solid grey;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 15px auto;
  font-size: 45px;
  font-weight: 700;
  line-height: 1.15;
`;

export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.15;
`;

export const StatItem = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  width: calc(100% / 3);
  text-align: center;
  color: white;
 `;

export const StatLabel = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 400;
`;

export const Value = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
