import React, { Component } from 'react';
import styled from 'styled-components';
import { api } from '../../api';
import './Subscribers.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const columns = [
  {
    dataField: 'nome',
    text: 'Nome',
    filter: textFilter()
  }
];

const expandRow = {
    renderer: row => (
        <div className="info">
            {row.resposta}
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
                <BootstrapTable 
                    bootstrap4
                    hideSizePerPage={true}
                    sizePerPageespecificar={10}
                    keyField='id' 
                    data={ this.state.subscribers } 
                    columns={ columns } 
                    expandRow={ expandRow }
                    pagination={ paginationFactory() }
                    striped
                    filter={ filterFactory() } 
                />
            </Container>
        );
    }
}