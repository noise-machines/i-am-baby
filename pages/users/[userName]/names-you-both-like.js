import React from 'react'
import * as database from '../../../library/database'
import { capitalize, parseDateString } from '../../../library/helpers'
import TimeAgo from '../../../configured-libraries/react-time-ago'
import NameTable from '../../../components/name-table'
import ChangeVoteLink from '../../../components/change-vote-link'

export async function getServerSideProps (context) {
  const { userName } = context.params
  const mutualVotes = await database.getNamesBothParentsLike(userName)

  return {
    props: {
      userName,
      mutualVotes
    }
  }
}

function getNameTableRow (vote) {
  const kristinVotedAt = parseDateString(vote.kristinVotedAt)
  const paulVotedAt = parseDateString(vote.paulVotedAt)

  return [
    capitalize(vote.name),
    <TimeAgo date={kristinVotedAt} />,
    <TimeAgo date={paulVotedAt} />,
    <ChangeVoteLink name={vote.name} />
  ]
}

export default function (props) {
  const columns = ['name', 'Kristin Voted At', 'Paul Voted At', '']
  if (props.userName === 'kristin') {
    columns[1] = 'You Voted At'
  } else {
    columns[2] = 'You Voted At'
  }

  const rows = props.mutualVotes.map(getNameTableRow)

  return (
    <>
      <NameTable columns={columns} rows={rows} />
    </>
  )
}
