import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComplianceProps {}

const StyledCompliance = styled.div`
  color: pink;
`;

export function Compliance(props: ComplianceProps) {
  return (
    <StyledCompliance>
      <h1>Welcome to Compliance!</h1>
    </StyledCompliance>
  );
}

export default Compliance;
