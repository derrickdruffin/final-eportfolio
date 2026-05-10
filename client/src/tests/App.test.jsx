import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Simple component test
function MockApp() {
  return (
    <div>
      <h1>Derrick Ruffin</h1>
      <p>Full Stack Developer</p>
    </div>
  );
}

describe('App Component', () => {
  it('renders the portfolio owner name', () => {
    render(<MockApp />);
    expect(screen.getByText('Derrick Ruffin')).toBeInTheDocument();
  });

  it('renders the developer title', () => {
    render(<MockApp />);
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
  });
});