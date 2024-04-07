import { useTheme } from '../../Utils/hooks/index'
import styled from 'styled-components'
import colors from '../../styles/colors'
import EmailInput from '../EmailInput'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  gap:60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const { toggleTheme, theme } = useTheme()

  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        {' '}
        Changer de mode :{' '}
        {theme === 'light' ? 'mode-jour  🌞' : ' mode-nuit 🌙'}
      </NightModeButton>
      <EmailInput theme={theme} />
    </FooterContainer>
  )
}

export default Footer
