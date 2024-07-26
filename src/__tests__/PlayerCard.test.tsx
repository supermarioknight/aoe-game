import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, expect, test, vi } from 'vitest';

import { Player } from '../interfaces/Player.interface';
import { PlayerCard } from '../components/PlayerCard';

const mockPlayer: Player = {
  realName: 'John Doe',
  playerName: 'john_doe',
  asset: 'Sword',
};

describe('PlayerCard Component', () => {
  test('displays player details', () => {
    render(<PlayerCard player={mockPlayer} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john_doe')).toBeInTheDocument();
    expect(screen.getByText('Sword')).toBeInTheDocument();
  });

  test('applies active class when isActive is true', () => {
    const { container } = render(<PlayerCard player={mockPlayer} isActive={true} />);
    expect(container.firstChild).toHaveClass('bg-gray-100');
  });

  test('does not apply active class when isActive is false', () => {
    const { container } = render(<PlayerCard player={mockPlayer} isActive={false} />);
    expect(container.firstChild).not.toHaveClass('bg-gray-100');
  });

  test('calls onClick when the card is clicked', () => {
    const handleClick = vi.fn();
    render(<PlayerCard player={mockPlayer} onClick={handleClick} />);
    fireEvent.click(screen.getByText('John Doe'));
    expect(handleClick).toHaveBeenCalled();
  });
});
