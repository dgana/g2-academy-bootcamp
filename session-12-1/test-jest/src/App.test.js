import { render, screen } from '@testing-library/react'
import App from './App'
import { tambah } from './app-function'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

describe('test a tambah function in app-function', () => {
  test('cek apakah hasilnya 10', () => {
    const result = tambah(8, 2)
    expect(result).toBe(10)
  })

  test('cek apakah hasilnya lebih dari 8 atau sama', () => {
    const result = tambah(2, 8)
    expect(result).toBeGreaterThanOrEqual(8)
  })
})
