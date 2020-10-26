import React, { useCallback, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { FiChevronsDown, FiEdit2, FiPlus, FiTrash, FiShare2 } from 'react-icons/fi'

import { useTeam } from '../../hooks/TeamContext'

import userImg from '../../assets/user.jpg'
import { Content, MyTeams, Statistics, Top5, PickedPlayer, Actions, TeamSection } from './styles'

const Home: React.FC = () => {
    const history = useHistory()
    const location = useLocation()

    const { sortByDescription, sortByName, teams, removeTeam } = useTeam()

    const navigateToNewTeam = useCallback(() => {
        history.push('/team')
    }, [history])

    useEffect(() => {
        console.log(location.state)
    }, [location])


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
                                <section>
                                    <p>Inter Milan</p>
                                    <strong>31.9</strong>
                                </section>
                                <section>
                                    <p>Apoel Nicosia</p>
                                    <strong>31.7</strong>
                                </section>
                                <section>
                                    <p>AC Milan</p>
                                    <strong>31.6</strong>
                                </section>
                                <section>
                                    <p>Besiktas JK</p>
                                    <strong>31.4</strong>
                                </section>
                                <section>
                                    <p>Olympiacos Piraeus</p>
                                    <strong>31.3</strong>
                                </section>
                            </div>
                        </div>
                        <div>
                            <h3>Lowest avg age</h3>
                            <div>
                                <section>
                                    <p>Zalgiris Vilnius</p>
                                    <strong>21.1</strong>
                                </section>
                                <section>
                                    <p>Arsenal FC</p>
                                    <strong>21.6</strong>
                                </section>
                                <section>
                                    <p>Ajax Amsterdam</p>
                                    <strong>22.0</strong>
                                </section>
                                <section>
                                    <p>FC Nantes</p>
                                    <strong>22.1</strong>
                                </section>
                                <section>
                                    <p>CSKA Moscow</p>
                                    <strong>22.5</strong>
                                </section>
                            </div>
                        </div>
                    </main>
                </Top5>
                <PickedPlayer>
                    <div>
                        <h1>Most Picked Player</h1>
                        <main>
                            <img src={userImg} alt="Most Picked Player" />
                            <span>75%</span>
                        </main>
                    </div>
                    <div>
                        <h1>Less Picked Player</h1>
                        <main>
                            <img src={userImg} alt="Less Picked Player" />
                            <span>25%</span>
                        </main>
                    </div>
                    <section />
                </PickedPlayer>
            </Statistics>
        </Content>
    )
}

export default Home