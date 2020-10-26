import React, { useCallback, useState, useRef, useMemo } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { useHistory, useLocation } from 'react-router-dom'

import Player from '../../types/Player'
import Team from '../../types/Team'

import { useTeam } from '../../hooks/TeamContext'
import api from '../../services/api'
import getValidationError from '../../utils/getValidationErrors'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import TagInput from '../../components/TagInput'

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

const NewTeam: React.FC = () => {
    const history = useHistory()
    const location = useLocation()
    const formRef = useRef<FormHandles>(null)

    const selectedTeam = location.state as Team

    const { createTeam } = useTeam()

    const [teamType, setTeamType] = useState<'Real' | 'Fantasy'>(() => selectedTeam ? selectedTeam.teamType : 'Fantasy')
    const [formation, setFormation] = useState<string>(() => selectedTeam ? selectedTeam.formation : "5 - 4 - 1")
    const [findPlayers, setFindPlayers] = useState<Player[]>([])
    const [playerDragging, setPlayerDragging] = useState<Player>()
    const [tags, setTags] = useState<string[]>(() => selectedTeam ? selectedTeam.tags : [])

    const [searching, setSearching] = useState(false)

    const [sectionOne, setSectionOne] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionOne : undefined)
    const [sectionTwo, setSectionTwo] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionTwo : undefined)
    const [sectionThree, setSectionThree] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionThree : undefined)
    const [sectionFour, setSectionFour] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionFour : undefined)
    const [sectionFive, setSectionFive] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionFive : undefined)
    const [sectionSix, setSectionSix] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionSix : undefined)
    const [sectionSeven, setSectionSeven] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionSeven : undefined)
    const [sectionEight, setSectionEight] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionEight : undefined)
    const [sectionNine, setSectionNine] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionNine : undefined)
    const [sectionTen, setSectionTen] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionTen : undefined)
    const [sectionEleven, setSectionEleven] = useState<Player | undefined>(() => selectedTeam ? selectedTeam.positions.sectionEleven : undefined)

    const teamMemo = useMemo(() => {   
        return location.state as Team
    }, [location])


    const searchPlayers = useCallback(async (event) => {
        if(event) event.preventDefault()
        setSearching(true)
        const filter = event.target.value.replace(' ', '_')
        const response = await api.get(`/${filter}`)
        const players: Player[] = response.data.api.players

        const filteredPlayers = players.filter((player) => {
            if (
                player.player_id === sectionOne?.player_id ||
                player.player_id === sectionTwo?.player_id ||
                player.player_id === sectionThree?.player_id ||
                player.player_id === sectionFour?.player_id ||
                player.player_id === sectionFive?.player_id ||
                player.player_id === sectionSix?.player_id ||
                player.player_id === sectionSeven?.player_id ||
                player.player_id === sectionEight?.player_id ||
                player.player_id === sectionNine?.player_id ||
                player.player_id === sectionTen?.player_id ||
                player.player_id === sectionEleven?.player_id
            ) {
                return
            }

            return player
        })
        setSearching(false)
        setFindPlayers(filteredPlayers)
    }, [sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix, sectionSeven, sectionEight, sectionNine, sectionTen, sectionEleven, setSearching, setFindPlayers])

    const nameInitials = useCallback((name) => {
        const splittedName = name.split(' ')

        const firstName = splittedName[0]
        const lastName = splittedName[splittedName.length - 1]

        const initials = firstName[0] + lastName[0]

        return (
            <h1
                style={{ color: '#fff', fontSize: 34 }}
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

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                teamName: Yup.string().required('Name is required'),
                teamWeb: Yup.string().required('WebSite is required').url('URL must be valid') 
            })

            await schema.validate(data, {
                abortEarly: false
            })

            const newTeam = Object.assign(data, {
                teamType,
                formation,
                positions: {
                    sectionOne,
                    sectionTwo,
                    sectionThree,
                    sectionFour,
                    sectionFive,
                    sectionSix,
                    sectionSeven,
                    sectionEight,
                    sectionNine,
                    sectionTen,
                    sectionEleven,
                },
                tags
            })

            createTeam(newTeam as Team)

            console.log(newTeam)

            history.push('/')
        } catch(err) {
            const errors = getValidationError(err)

            formRef.current?.setErrors(errors)
        }
    }, [sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix, sectionSeven, sectionEight, sectionNine, sectionTen, sectionEleven, formation, tags, teamType, createTeam, history])

    const handleChangeFormation = useCallback((event) => {
        setFormation(event.target.value)

        setSectionOne(undefined)
        setSectionTwo(undefined)
        setSectionThree(undefined)
        setSectionFour(undefined)
        setSectionFive(undefined)
        setSectionSix(undefined)
        setSectionSeven(undefined)
        setSectionEight(undefined)
        setSectionNine(undefined)
        setSectionTen(undefined)
        setSectionEleven(undefined)
    }, [])

    return (
        <Content>
            <header>{selectedTeam ? 'Edit' : 'Create'} your team</header>
            <Form onSubmit={handleSubmit} ref={formRef}>
                <h2>TEAM INFORMATION</h2>
                <TeamInformation>
                    <div>
                        <Input
                            name='teamName'
                            visibleName='Team Name'
                            placeholder="Insert team name"
                            defaultValue={teamMemo ? teamMemo.teamName : ''}
                        />
                        <TextArea
                            visibleName="Description"
                            name="description"
                            defaultValue={teamMemo ? teamMemo.description : ''}
                        />
                    </div>
                    <div>
                        <Input
                            name='teamWeb'
                            visibleName='Team Web'
                            placeholder="http://myteam.com"
                            defaultValue={teamMemo ? teamMemo.teamWeb : ''}
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
                        <TagInput
                            name="Tags"
                            tags={tags}
                            setTags={setTags}
                        />
                    </div>
                </TeamInformation>

                <h2>CONFIGURE SQUAD</h2>
                <ConfigureSquad>
                    <div>
                        <label>
                            Formation
                        <select value={formation} onChange={(e) => handleChangeFormation(e)}>
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                                        if (playerDragging) {
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
                        <button type="submit">Save</button>
                    </div>
                    <div>
                        <Input
                            name="searchPlayers"
                            visibleName="Search Players"
                            onKeyPress={e => e.key === 'Enter' && searchPlayers(e)}
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
            </Form>
        </Content >
    )
}

export default NewTeam