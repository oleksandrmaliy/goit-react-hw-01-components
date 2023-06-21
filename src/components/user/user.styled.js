import styled from 'styled-components';

export const UserCard = styled.div`
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;
  width: 600px;
  border: 1px solid grey;
`;

export const Info = styled.div`
  padding: 50px 0;
  background-color: white;
  text-align: center;
`;

export const Avatar = styled.img`
  background-color: lightskyblue;
  width: 300px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const Username = styled.p`
  margin: 0 0 10px 0;
  font-size: 45px;
  font-weight: 700;
  line-height: 1.15;
`;

export const Tag = styled.p`
  margin: 0 0 10px 0;
  font-size: 34px;
  font-weight: 400;
  line-height: 1.15;
`;

export const Location = styled.p`
  margin: 0;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.15;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  background-color: lightgray;
`;

export const ListItem = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  width: calc(100% / 3);
  text-align: center;
  border-top: 1px solid grey;
  border-right: 1px solid grey;
`;

export const Label = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 400;
`;

export const Value = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
