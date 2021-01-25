import React from 'react'
import { TD, TH } from './styles'

const TableData = ({ children }: { children: React.ReactNode }) => (
  <TD>{children}</TD>
)

const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr>{children}</tr>
)

const Table = ({ titles, children }: { titles: string[], children: React.ReactNode }) => (
  <table>
    <thead>
      <tr>
        {titles.map((title, index) => <TH key={index}>{title}</TH>)}
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
)

// compound component
Table.Row = TableRow
Table.Data = TableData
export default Table
