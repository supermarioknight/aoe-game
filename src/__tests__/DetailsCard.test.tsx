import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { DetailsCard } from '../components/DetailsCard';
import { Player } from '../interfaces/Player.interface';

const mockPlayer: Player = {
  realName: 'John Doe',
  playerName: 'john_doe',
  asset: 'Sword',
};
describe('DetailsCard test', () => {
  test('displays player details when player is provided', () => {
    render(<DetailsCard player={mockPlayer} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john_doe')).toBeInTheDocument();
    expect(screen.getByText('Sword')).toBeInTheDocument();
  });

  test('renders empty card when no player is provided', () => {
    const { container } = render(<DetailsCard player={null} />);
    const cardBody = container.getElementsByClassName('ant-card-body')[0];
    expect(cardBody).toBeEmptyDOMElement();
  });
});
