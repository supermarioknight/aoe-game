import { beforeEach, describe, expect, Mock, test, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"

import { Player } from "../interfaces/Player.interface";
import { fetchPlayers } from "../services/playerService";
import App from "../App";


vi.mock('../services/playerService');

const mockPlayers: Player[] = [
    { realName: 'John Doe', playerName: 'john', asset: 'Sword' },
    { realName: 'Jane Smith', playerName: 'jane', asset: 'Shield' },
];

vi.mock('../services/playerService', () => ({
    fetchPlayers: vi.fn(),
}));

describe('App Component', () => {
    beforeEach(() => {
        (fetchPlayers as Mock).mockResolvedValue(mockPlayers);
    });

    test('renders player cards after fetching players', async () => {
        render(<App />);
        expect(await screen.findByText('John Doe')).toBeInTheDocument();
        expect(await screen.findByText('Jane Smith')).toBeInTheDocument();
    });

    test('selects a player card on click', async () => {
        render(<App />);
        await waitFor(() => screen.getByText('John Doe'));

        // Click the card to select it
        fireEvent.click(screen.getByText('John Doe').closest('[id="player-card"]') as HTMLDivElement);

        // Check if the card has the active class
        const selectedCard = screen.getAllByText('John Doe').find(card =>
            card.closest('[id="player-card"]')?.classList.contains('bg-gray-100')
        );

        expect(selectedCard).toBeInTheDocument();
    });

    test('sorts player cards in descending order', async () => {
        render(<App />);
        await waitFor(() => screen.getByText('John Doe'));
        fireEvent.click(screen.getByText('Sort Desc'));

        const cards = screen.getAllByText(/Doe|Smith/);
        expect(cards[0]).toHaveTextContent('John Doe');
        expect(cards[1]).toHaveTextContent('Jane Smith');
    });

})