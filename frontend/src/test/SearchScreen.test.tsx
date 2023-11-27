import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchScreen from '../pages/SearchScreen';

describe('SearchScreen', () => {
    test('renders component', () => {
      render(
        <BrowserRouter>
          <SearchScreen />
        </BrowserRouter>
      );
      expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    });
   
});
   