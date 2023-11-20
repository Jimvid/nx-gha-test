import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: JSX.Element | string;
}

const StyledButton = styled.div`
  color: pink;
`;

export function Button(props: ButtonProps) {
  return <StyledButton>{props.children}</StyledButton>;
}

export default Button;
