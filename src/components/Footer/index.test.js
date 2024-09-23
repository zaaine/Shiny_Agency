// import { render } from 'react-dom'
import Footer from './'
import { ThemeProvider } from '../../Utils/context/index'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
  test('Crash test Footer', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
  })
})
// test('Change theme', async () => {
//   render(
//     <ThemeProvider>
//       <Footer />
//     </ThemeProvider>
//   )
//   const nightModeButton = screen.getByRole('button')
// })

test('Change theme', async () => {
  render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  )
  screen.debug()
//   const nightModeButton = screen.getByRole('button')
//   expect(nightModeButton.textContent).toBe('Changer de mode : mode-jour ☀️')
//   fireEvent.click(nightModeButton)
//   expect(nightModeButton.textContent).toBe('Changer de mode : mode-nuit 🌙')
})
