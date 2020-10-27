import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FiChevronsDown, FiEdit2, FiPlus, FiTrash, FiShare2 } from 'react-icons/fi'

import { useTeam } from '../../hooks/TeamContext'
import Player from '../../types/Player'
import Team from '../../types/Team'

import { Content, MyTeams, Statistics, Top5, PickedPlayer, Actions, TeamSection, Center } from './styles'

interface Picked {
    initials: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
    probability: string
}

const Home: React.FC = () => {
    const history = useHistory()

    const [highestAgeTeams, setHighestAgeTeams] = useState<Team[]>([])
    const [lowestAgeTeams, setLowestAgeTeams] = useState<Team[]>([])

    const { sortByDescription, sortByName, teams, players, removeTeam } = useTeam()

    const navigateToNewTeam = useCallback(() => {
        history.push('/team')
    }, [history])

    const nameInitials = useCallback((name) => {
        const splittedName = name.split(' ')

        const firstName = splittedName[0]
        const lastName = splittedName[splittedName.length - 1]

        const initials = firstName[0] + lastName[0]

        return <h1 style={{ fontSize: 78, color: '#A11861' }}>{initials}</h1>
    }, [])

    const mostPicked = useMemo((): Picked => {
        if (players === []) return {
            initials: <h1 style={{ fontSize: 78, color: '#A11861' }}>-</h1>,
            probability: `${100}%`
        }

        let picked: Player | undefined
        var count: number = 1
        var maxCount: number = 1

        players.forEach((player, index, array) => {
            if (index === 0) picked = player


            else if (player.player_id === array[index - 1].player_id && (index + 1) !== array.length) {
                count = count + 1
            }

            else if (player.player_id === array[index - 1].player_id && (index + 1) === array.length) {
                if (count > maxCount) {
                    maxCount = count
                    picked = player
                }
            }

            else if (player.player_id !== array[index - 1].player_id && (index + 1) !== array.length) {
                if (count > maxCount) {
                    maxCount = count
                    picked = array[index - 1]
                }
                count = 1
            }

            else if (player.player_id !== array[index - 1].player_id && (index + 1) === array.length) {
                if (count > maxCount) {
                    maxCount = count
                    picked = array[index - 1]
                }
            }
        })

        return {
            initials: nameInitials(picked?.player_name),
            probability: `${Math.round((100 * maxCount) / teams.length)}%`
        }
    }, [players, nameInitials, teams.length])

    const lessPicked = useMemo((): Picked => {
        if (players === []) return {
            initials: <h1 style={{ fontSize: 78, color: '#A11861' }}>-</h1>,
            probability: `${100}%`
        }

        let picked: Player | undefined
        let count: number = 1
        let minCount: number = 1
        let countingMinimum: boolean = true

        players.map((player, index, array) => {
            if (index === 0) picked = player

            else if (player.player_id === array[index - 1].player_id && (index + 1) !== array.length) {
                count++
            }

            else if (player.player_id === array[index - 1].player_id && (index + 1) === array.length) {
                if (countingMinimum === true) {
                    minCount = count
                    countingMinimum = false
                }

                if (count < minCount) {
                    minCount = count
                    picked = player
                }
            }

            else if (player.player_id !== array[index - 1].player_id && (index + 1) !== array.length) {
                if (countingMinimum === true) {
                    minCount = count
                    countingMinimum = false
                }

                if (count < minCount) {
                    minCount = count
                    picked = array[index - 1]
                }
                count = 1
            }
            else if (player.player_id !== array[index - 1].player_id && (index + 1) === array.length) {
                if (minCount > 1) {
                    picked = player
                    minCount = 1
                }
            }
        })

        return {
            initials: nameInitials(picked?.player_name),
            probability: `${Math.round((100 * minCount) / teams.length)}%`
        }
    }, [players, nameInitials, teams.length])

    useEffect(() => {
        if (!teams) return

        setLowestAgeTeams([...teams].sort(team => team.averageAge))
        setHighestAgeTeams([...teams].sort(team => team.averageAge).reverse())
    }, [teams.length])

    return (
        <Content>
            <MyTeams>
                <header>
                    <h1> My Teams</h1>
                    <button
                        onClick={navigateToNewTeam}
                    >
                        <FiPlus size={24} color="#fff" />
                    </button>
                </header>
                <main>
                    <Actions>
                        <button
                            onClick={sortByName}
                        >
                            <p>Name</p>
                            <FiChevronsDown size={18} color="#000" />
                        </button>
                        <button
                            onClick={sortByDescription}
                        >
                            <p>Description</p>
                            <FiChevronsDown size={18} color="#000" />
                        </button>
                    </Actions>
                    {teams.map(team => (
                        <TeamSection key={team.teamName}>
                            <div>
                                <span>{team.teamName}</span>
                            </div>
                            <div>
                                <span>{team.description}</span>
                                <div>
                                    <button onClick={() => removeTeam(team)}><FiTrash size={18} color="#9F357F" /></button>
                                    <button><FiShare2 size={18} color="#9F357F" /></button>
                                    <button onClick={() => history.push('/team', team)}><FiEdit2 size={18} color="#9F357F" /></button>
                                </div>
                            </div>
                        </TeamSection>
                    ))}
                </main>
            </MyTeams>
            <Statistics>
                <Top5>
                    <header>Top 5</header>
                    <main>
                        <div>
                            <h3>Highest avg age</h3>
                            <div>
                                {highestAgeTeams.map((team, index) => {
                                    if (index < 5 && team.averageAge) {
                                        return (
                                            <section key={team.teamName} onClick={() => history.push('/team', team)}>
                                                <p>{team.teamName}</p>
                                                <strong>{team.averageAge}</strong>
                                            </section>
                                        )
                                    }
                                    else {
                                        return <p></p>
                                    }
                                })}
                            </div>
                        </div>
                        <div>
                            <h3>Lowest avg age</h3>
                            <div>
                                {lowestAgeTeams.map((team, index) => {
                                    if (index < 5  && team.averageAge) {
                                        return (
                                            <section key={team.teamName} onClick={() => history.push('/team', team)}>
                                                <p>{team.teamName}</p>
                                                <strong>{team.averageAge}</strong>
                                            </section>
                                        )
                                    }
                                    else {
                                        return <p></p>
                                    }
                                })}
                            </div>
                        </div>
                    </main>
                </Top5>
                <PickedPlayer>
                    <div>
                        <h1>Most Picked Player</h1>
                        <main>
                            <section>{mostPicked.initials}</section>
                            <span>{mostPicked.probability}</span>
                        </main>
                    </div>
                    <div>
                        <h1>Less Picked Player</h1>
                        <main>
                            <section>{lessPicked.initials}</section>
                            <span>{lessPicked.probability}</span>
                        </main>
                    </div>
                    <Center />
                </PickedPlayer>
            </Statistics>
        </Content>
    )
}

export default Home