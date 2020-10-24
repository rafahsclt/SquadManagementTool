import React, { useCallback, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import api from '../../services/api'

import Input from '../../components/Input'
import TextArea from '../../components/TextArea'

import {
    Content,
    TeamInformation,
    ConfigureSquad,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
    Section10,
    Section11,
    PlayerList,
    Label
} from './styles'

interface Player {
    player_id: number
    player_name: string
    firstname: string
    lastname: string
    age: number
    nationality: string
}

const NewTeam: React.FC = () => {
    const [teamType, setTeamType] = useState<'Real' | 'Fantasy'>('Fantasy')
    const [formation, setFormation] = useState<string>("5 - 4 - 1")
    const [findPlayers, setFindPlayers] = useState<Player[]>([])
    const [playerDragging, setPlayerDragging] = useState<Player>()

    const [searching, setSearching] = useState(false)

    const [sectionOne, setSectionOne] = useState<Player | undefined>(undefined)
    const [sectionTwo, setSectionTwo] = useState<Player | undefined>(undefined)
    const [sectionThree, setSectionThree] = useState<Player | undefined>(undefined)
    const [sectionFour, setSectionFour] = useState<Player | undefined>(undefined)
    const [sectionFive, setSectionFive] = useState<Player | undefined>(undefined)
    const [sectionSix, setSectionSix] = useState<Player | undefined>(undefined)
    const [sectionSeven, setSectionSeven] = useState<Player | undefined>(undefined)
    const [sectionEight, setSectionEight] = useState<Player | undefined>(undefined)
    const [sectionNine, setSectionNine] = useState<Player | undefined>(undefined)
    const [sectionTen, setSectionTen] = useState<Player | undefined>(undefined)
    const [sectionEleven, setSectionEleven] = useState<Player | undefined>(undefined)


    const searchPlayers = useCallback(async (target) => {
        setSearching(true)
        const filter = target.value.replace(' ', '_')
        const response = await api.get(`/${filter}`)
        const players: Player[] = response.data.api.players

        setSearching(false)
        setFindPlayers(players)
    }, [])

    const nameInitials = useCallback((name) => {
        const splittedName = name.split(' ')
        
        const firstName = splittedName[0] 
        const lastName = splittedName[splittedName.length - 1]

        const initials = firstName[0] + lastName[0]

        return (
            <h1
                style={{ color: '#fff', fontSize: 34}}
            >
                {initials}
            </h1>
        )
    }, [])

    const removeFromPlayers = useCallback((player) => {
        const index = findPlayers.indexOf(player)

        const newArray = [...findPlayers]

        newArray.splice(index, 1)

        setFindPlayers(newArray)
    }, [setFindPlayers, findPlayers])

    return (
        <Content>
            <header>Create your team</header>
            <h2>TEAM INFORMATION</h2>
            <TeamInformation>
                <div>
                    <Input
                        name='Team Name'
                        placeholder="Insert team name"
                    />
                    <TextArea
                        name="Description"
                        size='big'
                    />
                </div>
                <div>
                    <Input
                        name='Team website'
                        placeholder="http://myteam.com"
                    />

                    <h4>Team type</h4>
                    <section>
                        <Label teamType={teamType} optionName="Real">
                            <input type="radio"
                                readOnly
                                checked={teamType === 'Real'}
                                onClick={() => setTeamType('Real')}
                            />
                            Real
                        </Label>
                        <Label teamType={teamType} optionName="Fantasy">
                            <input type="radio"
                                readOnly
                                checked={teamType === 'Fantasy'}
                                onClick={() => setTeamType('Fantasy')}
                            />
                            Fantasy
                        </Label>
                    </section>
                    <TextArea
                        name="Tags"
                        size="normal"
                    />
                </div>
            </TeamInformation>
            <h2>CONFIGURE SQUAD</h2>
            <ConfigureSquad>
                <div>
                    <label>
                        Formation
                        <select value={formation} onChange={(e) => setFormation(e.target.value)}>
                            <option value="3 - 2 - 2 - 3">3 - 2 - 2 - 3</option>
                            <option value="3 - 2 - 3 - 1">3 - 2 - 3 - 1</option>
                            <option value="3 - 4 - 3">3 - 4 - 3</option>
                            <option value="3 - 5 - 2">3 - 5 - 2</option>
                            <option value="4 - 2 - 3 - 1">4 - 2 - 3 - 1</option>
                            <option value="4 - 3 - 1 - 1">4 - 3 - 1 - 1</option>
                            <option value="4 - 3 - 2">4 - 3 - 2</option>
                            <option value="4 - 4 - 2">4 - 4 - 2</option>
                            <option value="4 - 5 - 1">4 - 5 - 1</option>
                            <option value="5 - 4 - 1">5 - 4 - 1</option>
                        </select>
                    </label>
                    <main>
                        <Section1 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionOne(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionOne ? 
                                    nameInitials(sectionOne.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                        </Section1>
                        <Section2 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionTwo(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionTwo ? 
                                    nameInitials(sectionTwo.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                        </Section2>
                        <Section3 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionThree(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionThree ? 
                                    nameInitials(sectionThree.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                        </Section3>
                        <Section4 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionFour(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionFour ? 
                                    nameInitials(sectionFour.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                        </Section4>
                        <Section5 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionFive(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionFive ? 
                                    nameInitials(sectionFive.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                        </Section5>
                        <Section6 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionSix(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionSix ? 
                                    nameInitials(sectionSix.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                        </Section6>
                        <Section7 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionSeven(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionSeven ? 
                                    nameInitials(sectionSeven.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                        </Section7>
                        <Section8 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionEight(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionEight ? 
                                    nameInitials(sectionEight.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                        </Section8>
                        <Section9 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionNine(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionNine ? 
                                    nameInitials(sectionNine.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div></Section9>
                        <Section10 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionTen(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionTen ? 
                                    nameInitials(sectionTen.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                            </Section10>
                        <Section11 formation={formation}>
                            <div 
                                onDrop={() => {
                                    if(playerDragging) {
                                        setSectionEleven(playerDragging)
                                        removeFromPlayers(playerDragging)
                                    }
                                }} 
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {sectionEleven ? 
                                    nameInitials(sectionEleven.player_name)
                                    : 
                                    <FiPlus size={32} color="#fff" />
                                }
                            </div>
                        </Section11>
                    </main>
                    <button onClick={() => console.log(sectionOne, sectionTwo, sectionThree)}>Save</button>
                </div>
                <div>
                    <Input
                        name="Search Players"
                        onKeyPress={e => e.key === 'Enter' && searchPlayers(e.target)}
                    />
                    <PlayerList>
                        {searching ? <p>Carregando...</p>
                            :
                        findPlayers.map(player => (
                            <section 
                                key={player.player_id} 
                                draggable 
                                onDragStart={() => setPlayerDragging(player)} 
                                onDragEnd={() => setPlayerDragging(undefined)}>
                                <div>
                                    <strong>Name:</strong>
                                    <p>{player.player_name}</p>
                                </div>
                                <div>
                                    <strong>Nacionality:</strong>
                                    <p>{player.nationality}</p>
                                </div>
                                <aside>
                                    <strong>Age:</strong>
                                    <p>{player.age}</p>
                                </aside>
                            </section>
                        ))
                        }
                    </PlayerList>
                </div>
            </ConfigureSquad>
        </Content >
    )
}

export default NewTeam