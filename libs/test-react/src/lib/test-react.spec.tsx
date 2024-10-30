import { render } from '@testing-library/react';

import TestReact from './test-react';

describe('TestReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestReact />);
    expect(baseElement).toBeTruthy();
  });
});
