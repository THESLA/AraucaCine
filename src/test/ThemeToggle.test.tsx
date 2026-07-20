import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import ThemeToggle from '../components/ThemeToggle'

describe('ThemeToggle', () => {
  it('renderiza el botón de tema', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: /cambiar tema/i })).toBeInTheDocument()
  })

  it('cambia de icono al hacer clic', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)
    const btn = screen.getByRole('button', { name: /cambiar tema/i })
    const initialIcon = btn.innerHTML
    await user.click(btn)
    expect(btn.innerHTML).not.toBe(initialIcon)
  })
})
