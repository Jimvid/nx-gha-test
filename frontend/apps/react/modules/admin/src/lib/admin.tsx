import styled from 'styled-components';
import { Button } from '@delogue/shared';

/* eslint-disable-next-line */
export interface AdminProps {}

const StyledAdmin = styled.div`
  color: pink;
`;

export function Admin(props: AdminProps) {
  return (
    <StyledAdmin>
      <h1>Welcome to Admin!</h1>
      <Button>Hello</Button>
    </StyledAdmin>
  );
}

export default Admin;
