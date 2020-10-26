import React, { createContext, useCallback, useContext, useState } from 'react'
import initialTeam from '../static/InitialTeam'

import Team from '../types/Team'

interface TeamContext {
    teams: Team[]
    createTeam(team: Team): void
    removeTeam(team: Team): void
    sortByName(): void
    sortByDescription(): void
}

const TeamContext = createContext<TeamContext>({} as TeamContext)

const TeamProvider: React.FC = ({ children }) => {
    const [teams, setTeams] = useState<Team[]>(initialTeam)

    const createTeam = useCallback((team: Team) => {
        setTeams(state => [...state, team])
    }, [setTeams])

    const removeTeam = useCallback((team: Team) => {
        setTeams(state => state.filter(st => st !== team))
    }, [setTeams])

    const sortByName = useCallback(() => {
        const sorttedTeams = [...teams].sort((a, b) => a.teamName.localeCompare(b.teamName))
        setTeams(sorttedTeams)

        console.log(sorttedTeams)
    }, [teams, setTeams])

    const sortByDescription = useCallback(() => {
        const sorttedTeams = [...teams].sort((a, b) => a.description.localeCompare(b.description))
        setTeams(sorttedTeams)

        console.log(sorttedTeams)
    }, [teams, setTeams])

    return (
        <TeamContext.Provider value={{ teams, createTeam, removeTeam, sortByName, sortByDescription }}>
            {children}
        </TeamContext.Provider>
    )
}

function useTeam(): TeamContext {
    const context = useContext(TeamContext)

    if(!context) {
        throw new Error('useTeam must be used within a TeamProvider')
    }

    return context
}

export { TeamContext, TeamProvider, useTeam }