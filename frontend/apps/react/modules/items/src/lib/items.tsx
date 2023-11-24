import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ItemsProps {}

const StyledItems = styled.div`
  color: coral;
`;

export function Items() {
  return (
    <StyledItems>
      <h1>Welcome to Items!</h1>
      <p>Hello there matey</p>
    </StyledItems>
  );
}

export default Items;
