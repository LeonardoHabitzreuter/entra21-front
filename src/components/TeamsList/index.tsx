import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { get } from '../../api'
import { TD, TH, UL } from './styles'

type Team = {
  id: string
  name: string
  players: {
    id: string
    name: string
  }[]
}

// orderedList
const TeamsOl = ({ teams }: { teams: Team[] }) => (
  <ol>
    {teams.map(team => (
      // linha
      <li key={team.id}>{team.name}</li>
    ))}
  </ol>
)

// unorderedList
const TeamsUl = ({ teams }: { teams: Team[] }) => (
  <UL>
    {teams.map(team => (
      // linha
      <li key={team.id}>{team.name}</li>
    ))}
  </UL>
)

// unorderedList
const TeamsTable = ({ teams }: { teams: Team[] }) => (
  <table>
    <thead>
      {/* table row */}
      <tr>
        {/* table head */}
        <TH>Nome</TH>
        <TH>Jogadores</TH>
      </tr>
    </thead>
    <tbody>
      {teams.map(team => (
        // linha
        <tr>
          {/* table data */}
          <TD>{team.name}</TD>
          <TD>{team.players.map(player => player.name).join(', ')}</TD>
        </tr>
      ))}
    </tbody>
  </table>
)

const TeamsList = () => {
  const [teams, setTeams] = useState<Team[]>([])
  console.log(teams)

  useEffectOnce(() => {
    get<Team[]>('teams').then(resp => setTeams(resp.data))
  })

  return (
    <>
      <h3>Times</h3>
      <TeamsOl teams={teams} />
      <TeamsUl teams={teams} />
      <TeamsTable teams={teams} />
    </>
  )
}

export default TeamsList
