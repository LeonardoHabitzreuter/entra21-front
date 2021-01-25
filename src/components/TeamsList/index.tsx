import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { get } from '/api'
import { UL } from './styles'
import Table from '/ui/Table'

type Team = {
  id: string
  name: string
  players: {
    id: string
    name: string
  }[]
}

const TABLE_TITLES = ['Nome', 'Jogadores']

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

const TeamsTable = ({ teams }: { teams: Team[] }) => (
  <Table titles={TABLE_TITLES}>
    {teams.map(team => (
      <Table.Row key={team.id}>
        <Table.Data>{team.name}</Table.Data>
        <Table.Data>{team.players.map(player => player.name).join(', ')}</Table.Data>
      </Table.Row>
    ))}
  </Table>
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
