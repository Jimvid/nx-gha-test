import { act, renderHook } from '@testing-library/react';

import useHookHere from './hook-here';

describe('useHookHere', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useHookHere());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
