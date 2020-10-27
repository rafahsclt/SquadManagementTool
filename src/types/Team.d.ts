import Player from './Player'

export default interface Team {
    teamName: string
    teamWeb: string
    teamType: 'Real' | 'Fantasy'
    formation: string
    description: string
    averageAge: number
    positions: {
        sectionOne: Player
        sectionTwo: Player
        sectionThree: Player
        sectionFour: Player
        sectionFive: Player
        sectionSix: Player
        sectionSeven: Player
        sectionEight: Player
        sectionNine: Player
        sectionTen: Player
        sectionEleven: Player
    },
    tags: string[]
}