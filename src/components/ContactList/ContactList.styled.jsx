

import styled from 'styled-components'

export const ContactItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactName = styled.span`
  font-size: 25px;
  margin-right: 10px;
`;

export const ContactNumber = styled.span`
  font-size: 20px;
  
`;

export const Button = styled.button`
  padding: 5px 20px;
  margin-left: 20px;  
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
  
`;