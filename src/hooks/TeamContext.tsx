import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import initialTeam from '../static/InitialTeam'

import Team from '../types/Team'
import Player from '../types/Player'

interface TeamContext {
    teams: Team[]
    players: Player[]
    createTeam(team: Team): void
    removeTeam(team: Team): void
    editTeam(edited: Team, team: Team): void
    sortByName(): void
    sortByDescription(): void
}

const TeamContext = createContext<TeamContext>({} as TeamContext)

const TeamProvider: React.FC = ({ children }) => {
    const [teams, setTeams] = useState<Team[]>(initialTeam)
    const [players, setPlayers] = useState<Player[]>(() => {
        if(!teams) return []
        
        const p: Player[] = []

        teams.map(team => {
            if(team.positions.sectionOne) p.push(team.positions.sectionOne)
            if(team.positions.sectionTwo) p.push(team.positions.sectionTwo)
            if(team.positions.sectionThree) p.push(team.positions.sectionThree)
            if(team.positions.sectionFour) p.push(team.positions.sectionFour)
            if(team.positions.sectionFive) p.push(team.positions.sectionFive)
            if(team.positions.sectionSix) p.push(team.positions.sectionSix)
            if(team.positions.sectionSeven) p.push(team.positions.sectionSeven)
            if(team.positions.sectionEight) p.push(team.positions.sectionEight)
            if(team.positions.sectionNine) p.push(team.positions.sectionNine)
            if(team.positions.sectionTen) p.push(team.positions.sectionTen)
            if(team.positions.sectionEleven) p.push(team.positions.sectionEleven)
        })

        
        return [...p].sort((a, b) => a.player_name.localeCompare(b.player_name))
    })

    const createTeam = useCallback((team: Team) => {
        setTeams(state => [...state, team])
    }, [setTeams])

    const removeTeam = useCallback((team: Team) => {
        setTeams(state => state.filter(st => st !== team))
    }, [setTeams])

    const editTeam = useCallback((editedTeam: Team, team: Team) => {
        setTeams(state => {
            const newArray = state.filter(st => st !== editedTeam)
            newArray.push(team)

            return newArray
        })
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

    useEffect(() => {
        setPlayers(() => {
        if(!teams) return []
        
        const p: Player[] = []

        teams.map(team => {
            if(team.positions.sectionOne) p.push(team.positions.sectionOne)
            if(team.positions.sectionTwo) p.push(team.positions.sectionTwo)
            if(team.positions.sectionThree) p.push(team.positions.sectionThree)
            if(team.positions.sectionFour) p.push(team.positions.sectionFour)
            if(team.positions.sectionFive) p.push(team.positions.sectionFive)
            if(team.positions.sectionSix) p.push(team.positions.sectionSix)
            if(team.positions.sectionSeven) p.push(team.positions.sectionSeven)
            if(team.positions.sectionEight) p.push(team.positions.sectionEight)
            if(team.positions.sectionNine) p.push(team.positions.sectionNine)
            if(team.positions.sectionTen) p.push(team.positions.sectionTen)
            if(team.positions.sectionEleven) p.push(team.positions.sectionEleven)
        })

        
        return [...p].sort((a, b) => a.player_name.localeCompare(b.player_name))
        })
    }, [teams])

    return (
        <TeamContext.Provider value={{ teams, players, createTeam, removeTeam, editTeam, sortByName, sortByDescription }}>
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