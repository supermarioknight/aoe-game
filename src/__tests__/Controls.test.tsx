import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Controls } from '../components/Controls';
import '@testing-library/jest-dom/vitest';

describe('Controls test', () => {
  test('calls onSort with "asc" when Sort Asc button is clicked', () => {
    const onSort = vi.fn();
    render(<Controls onSort={onSort} onSubmit={() => {}} order="asc" />);
    fireEvent.click(screen.getByText('Sort Asc'));
    expect(onSort).toHaveBeenCalledWith('asc');
  });

  test('calls onSort with "desc" when Sort Desc button is clicked', () => {
    const onSort = vi.fn();
    render(<Controls onSort={onSort} onSubmit={() => {}} order="desc" />);
    fireEvent.click(screen.getByText('Sort Desc'));
    expect(onSort).toHaveBeenCalledWith('desc');
  });

  test('calls onSubmit when Submit button is clicked', () => {
    const onSubmit = vi.fn();
    render(<Controls onSort={() => {}} onSubmit={onSubmit} order="asc" />);
    fireEvent.click(screen.getByText('Submit'));
    expect(onSubmit).toHaveBeenCalled();
  });

  test('Sort Asc button has primary type when order is "asc"', () => {
    render(<Controls onSort={() => {}} onSubmit={() => {}} order="asc" />);
    const sortAscButton = screen.getByRole('button', { name: 'Sort Asc' });
    expect(sortAscButton).toHaveClass('ant-btn-primary');
  });

  test('Sort Desc button has primary type when order is "desc"', () => {
    render(<Controls onSort={() => {}} onSubmit={() => {}} order="desc" />);
    const sortDescButton = screen.getByRole('button', { name: 'Sort Desc' });
    expect(sortDescButton).toHaveClass('ant-btn-primary');
  });
});
