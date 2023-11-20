import { render } from '@testing-library/react';

import Compliance from './compliance';

describe('Compliance', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Compliance />);
    expect(baseElement).toBeTruthy();
  });
});
