import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ItemsProps {}

const StyledItems = styled.div`
  color: pink;
`;

export function Items(props: ItemsProps) {
  return (
    <StyledItems>
      <h1>Welcome to Items!</h1>
    </StyledItems>
  );
}

export default Items;
