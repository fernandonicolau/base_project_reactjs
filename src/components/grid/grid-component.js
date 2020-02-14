import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment'
import { Link } from 'react-router-dom'

moment.locale('pt');

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  collum: {
    width: 100
  }
});

export default function SimpleTable({ state }) {
  
  const classes = useStyles();

  React.useEffect(() => {
    //console.log("state > ", state );
  }, [state]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="left">Data</TableCell>
            <TableCell align="left">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.catalog.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.owner}</TableCell>
              <TableCell align="left">{row.date ? moment(row.date).format('DD/MM/YYYY hh:mm') : ""}</TableCell>
              <TableCell align="left">
                <IconButton aria-label="editar">
                  <Link to={`/catalog/${row.id}`}>
                    <EditIcon />
                  </Link>
                </IconButton>
                <IconButton aria-label="deletar">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
        {/* <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10]}
              colSpan={3}
              count={state.catalog.length}
              rowsPerPage={9}
              page={state.infoPaginate.page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              // onChangePage={handleChangePage}
              // onChangeRowsPerPage={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter> */}

      </Table>
    </TableContainer>
  );
}