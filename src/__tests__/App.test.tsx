import { beforeEach, describe, expect, Mock, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
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

})