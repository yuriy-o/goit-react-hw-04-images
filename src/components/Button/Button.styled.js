import styled from '@emotion/styled';

export const OnLoadMoreButton = styled.button`
  display: block;
  width: 150px;
  height: 40px;

  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
    transform: scale(1.05);
  }
`;
/* export const OnLoadMoreButton = styled.button`
    padding: 8px 16px;
    border-radius: 2px;
    background-color: #3d858e;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    &:hover,
    &:focus {
        background-color: #1bcde4;
`; */

export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;
