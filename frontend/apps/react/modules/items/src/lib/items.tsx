import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ItemsProps {}

const StyledItems = styled.div`
  color: yellow;
`;

export function Items(props: ItemsProps) {
  return (
    <StyledItems>
      <h1>Welcome to Items!</h1>
      <p>Hello there matey</p>
    </StyledItems>
  );
}

export default Items;
