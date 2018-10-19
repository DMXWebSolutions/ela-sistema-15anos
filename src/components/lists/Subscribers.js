import React, { Component } from 'react';
import styled from 'styled-components';
import { api } from '../../api';
import './Subscribers.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import moment from 'moment'
import 'moment/locale/pt-br'

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
`;

const { SearchBar } = Search;

const columns = [
  {
    dataField: 'nome',
    text: 'Nome',
  },{
    dataField: 'created_at',
    text: 'Data de Inscrição',
    formatter: dateFormatter,
}];

function dateFormatter(cell, row){
    return (
        <span>
            {moment(cell).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
        </span>
    )
}

const expandRow = {
    renderer: row => (
      <div className="info">
        <div className="info-box">
            <p><strong>Nome: </strong> {row.nome}</p>
            <p><strong>Escola: </strong>{row.escola} -<strong> Série: </strong>{row.serie}</p>
            <p><strong>Responsavel: </strong>{row.responsavel}</p>
            <p><strong>Endereço: </strong>{row.endereco}</p>
        </div>
        <div className="info-box">
            <p><strong>Data de Nascimento: </strong>{moment(row.data).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}</p>
            <p><strong>Data de Inscrição: </strong>{moment(row.created_at).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}</p>
            <p><strong>E-mail: </strong>{row.email}</p>
            <p><strong>Telefone: </strong>{row.telefone}</p>
        </div>
    </div>

    ),
    onlyOneExpanding: true,
  };


export default class Subscribers extends Component {
    state = { 
        subscribers: []
    }

    async componentDidMount() {
        try {
            const response = await api.get('/subscribers')
            const subscribers = response.data.subscribers
            this.setState({ subscribers })
            console.log(this.state.subscribers)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <Container>
                <ToolkitProvider
                    keyField="id"
                    data={ this.state.subscribers }
                    columns={ columns }
                    search
                    filter={ filterFactory() } 
                >
                {
                    props => (
                        <TableContainer>
                            <h3>Listagem de Inscritos</h3>
                            <SearchBar { ...props.searchProps }
                                style={{ maxWidth: "800px", margin: "0 auto"}} 
                                placeholder="Pesquisar"

                            />
                            <hr />
                            <BootstrapTable
                            { ...props.baseProps }
                            bootstrap4
                            hideSizePerPage={true}
                            sizePerPageespecificar={10}
                            pagination={ paginationFactory() }
                            striped
                            expandRow={ expandRow }
                            />
                        </TableContainer>
                    )
                }

                </ToolkitProvider>
            </Container>
        );
    }
}