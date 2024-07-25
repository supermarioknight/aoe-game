import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Controls } from '../components/Controls';

describe("Controls test", () => {

    test('calls onSort with "asc" when Sort Asc button is clicked', () => {
        const onSort = vi.fn();
        render(<Controls onSort={onSort} onSubmit={() => { }} order="asc" />);
        fireEvent.click(screen.getByText('Sort Asc'));
        expect(onSort).toHaveBeenCalledWith('asc');
    });
})