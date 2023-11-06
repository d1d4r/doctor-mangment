import { TableRow, getKeyValue } from '@nextui-org/react'
import React from 'react'

const TabelCellPatient = ({item}) => {
  return (
    <>
        {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{ getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
    </>
  )
}

export default TabelCellPatient