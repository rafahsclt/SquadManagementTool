import { renderHook } from '@testing-library/react-hooks'
import { useTeam, TeamProvider } from '../hooks/TeamContext'

describe('Team', () => {
    it('should be able to create a new team', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useTeam(), {
            wrapper: TeamProvider
        })

        const newTeam = {
            teamName: 'Team Test',
            teamWeb: 'http://teamtest.com',
            teamType: 'Real',
            description: 'description test',
            formation: '3 - 4 - 3',
            averageAge: 32,
            tags: ['Attack', 'BR'],
            positions: {
                sectionOne: {
                    age: 23,
                    firstname: "Márcio",
                    lastname: "Ferrari Júnior",
                    nationality: "Brazil",
                    player_id: 119283,
                    player_name: "Márcio Ferrari Júnior",
                },
                sectionTwo: {
                    age: 22,
                    firstname: "César Márcio",
                    lastname: "Teixeira Antunes",
                    nationality: "Portugal",
                    player_id: 141645,
                    player_name: "César Márcio Teixeira Antunes",
                },
                sectionThree: {
                    age: 35,
                    firstname: "Cristiano Ronaldo",
                    lastname: "dos Santos Aveiro",
                    nationality: "Portugal",
                    player_id: 874,
                    player_name: "Cristiano Ronaldo",
                },
                sectionFour: {
                    age: 31,
                    firstname: "Jose Marcio Danilo",
                    lastname: "Pereira da Silva",
                    nationality: "Brazil",
                    player_id: 157675,
                    player_name: "Jose Marcio Danilo Pereira da Silva",
                },
                sectionFive: {
                    age: 28,
                    firstname: "Carlos Luis",
                    lastname: "Suárez Mendoza",
                    nationality: "Venezuela",
                    player_id: 11580,
                    player_name: "Carlos Luis Suárez Mendoza"
                },
                sectionSix: {
                    age: 40,
                    firstname: "Marcio",
                    lastname: "Ferreira",
                    nationality: "Brazil",
                    player_id: 115731,
                    player_name: "Marcio Ferreira"
                },
                sectionSeven: {
                    age: 29,
                    firstname: "Felipe Márcio",
                    lastname: "Dallabrida",
                    nationality: "Brazil",
                    player_id: 197442,
                    player_name: "Felipe Márcio Dallabrida"
                },
                sectionEight: {
                    age: 21,
                    firstname: "Lionel Messi",
                    lastname: "Nyamsi",
                    nationality: "Cameroon",
                    player_id: 249239,
                    player_name: "Lionel Messi Nyamsi"
                },
                sectionNine: {
                    age: 33,
                    firstname: "João Marcio",
                    lastname: "Arrais da Sivia",
                    nationality: "Brazil",
                    player_id: 160687,
                    player_name: "João Marcio Arrais da Sivia",
                },
                sectionTen: {
                    age: 30,
                    firstname: "Marcio",
                    lastname: "Gomes de Souza",
                    nationality: "Brazil",
                    player_id: 234482,
                    player_name: "Marcio Gomes de Souza"
                },
                sectionEleven: {
                    age: 35,
                    firstname: "Lucas Marcio",
                    lastname: "Oliveira Costa",
                    nationality: "Brazil",
                    player_id: 160360,
                    player_name: "Lucas Marcio Oliveira Costa"
                }
            }
        }

        result.current.createTeam({
            teamName: 'Team Test',
            teamWeb: 'http://teamtest.com',
            teamType: 'Real',
            description: 'description test',
            formation: '3 - 4 - 3',
            averageAge: 32,
            tags: ['Attack', 'BR'],
            positions: {
                sectionOne: {
                    age: 23,
                    firstname: "Márcio",
                    lastname: "Ferrari Júnior",
                    nationality: "Brazil",
                    player_id: 119283,
                    player_name: "Márcio Ferrari Júnior",
                },
                sectionTwo: {
                    age: 22,
                    firstname: "César Márcio",
                    lastname: "Teixeira Antunes",
                    nationality: "Portugal",
                    player_id: 141645,
                    player_name: "César Márcio Teixeira Antunes",
                },
                sectionThree: {
                    age: 35,
                    firstname: "Cristiano Ronaldo",
                    lastname: "dos Santos Aveiro",
                    nationality: "Portugal",
                    player_id: 874,
                    player_name: "Cristiano Ronaldo",
                },
                sectionFour: {
                    age: 31,
                    firstname: "Jose Marcio Danilo",
                    lastname: "Pereira da Silva",
                    nationality: "Brazil",
                    player_id: 157675,
                    player_name: "Jose Marcio Danilo Pereira da Silva",
                },
                sectionFive: {
                    age: 28,
                    firstname: "Carlos Luis",
                    lastname: "Suárez Mendoza",
                    nationality: "Venezuela",
                    player_id: 11580,
                    player_name: "Carlos Luis Suárez Mendoza"
                },
                sectionSix: {
                    age: 40,
                    firstname: "Marcio",
                    lastname: "Ferreira",
                    nationality: "Brazil",
                    player_id: 115731,
                    player_name: "Marcio Ferreira"
                },
                sectionSeven: {
                    age: 29,
                    firstname: "Felipe Márcio",
                    lastname: "Dallabrida",
                    nationality: "Brazil",
                    player_id: 197442,
                    player_name: "Felipe Márcio Dallabrida"
                },
                sectionEight: {
                    age: 21,
                    firstname: "Lionel Messi",
                    lastname: "Nyamsi",
                    nationality: "Cameroon",
                    player_id: 249239,
                    player_name: "Lionel Messi Nyamsi"
                },
                sectionNine: {
                    age: 33,
                    firstname: "João Marcio",
                    lastname: "Arrais da Sivia",
                    nationality: "Brazil",
                    player_id: 160687,
                    player_name: "João Marcio Arrais da Sivia",
                },
                sectionTen: {
                    age: 30,
                    firstname: "Marcio",
                    lastname: "Gomes de Souza",
                    nationality: "Brazil",
                    player_id: 234482,
                    player_name: "Marcio Gomes de Souza"
                },
                sectionEleven: {
                    age: 35,
                    firstname: "Lucas Marcio",
                    lastname: "Oliveira Costa",
                    nationality: "Brazil",
                    player_id: 160360,
                    player_name: "Lucas Marcio Oliveira Costa"
                }
            }
        })

        await waitForNextUpdate()

        expect(result.current.teams).toContainEqual(newTeam)
    })

})