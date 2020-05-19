import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  const { getAllByText } = render(<BrowserRouter>
    <App/>
  </BrowserRouter>);
  const linkElement = getAllByText(/Home/i);
  expect(linkElement[0]).toBeInTheDocument();
});

test('snapshot', () => {
  const component = renderer.create(<BrowserRouter>
    <App/>
  </BrowserRouter>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
