import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { useFetch, useTheme } from '../../Utils/hooks'
import { Loader } from '../../styles/Attoms'
import { Link } from 'react-router-dom'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat (2, 1fr);
  align-items: center;
  justify-items: center;
`
const PageTitle = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  const freelancersList = data?.freelancersList

  if (error) {
    return <pre>{error}</pre>
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}> 
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
              theme={theme}
            />
            </Link>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
