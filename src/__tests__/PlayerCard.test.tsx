import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Player } from '../interfaces/Player.interface';
import { describe, expect, test } from 'vitest';
import { PlayerCard } from '../components/PlayerCard';
import "@testing-library/jest-dom/vitest"



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

})