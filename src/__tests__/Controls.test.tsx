import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Controls } from '../components/Controls';

describe("Controls test", () => {

    test("should render Controls", () => {
        render(<Controls onSort={() => { }} onSubmit={() => { }} order="asc" />)
        expect(screen.getByText(/Controls/i)).toBeDefined();
    })
})