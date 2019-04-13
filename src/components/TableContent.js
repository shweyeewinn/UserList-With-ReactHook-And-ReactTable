import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
// import * as moment from 'moment';

const API_URL = process.env.REACT_APP_API_URL;

export default function TableContent() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await axios.get(`${API_URL}/v1/televery-logs`);
      setLogs(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const columns = [
    {
      Header: 'Created Time',
      accessor: 'createdTime'
      // Cell: row => {
      //   console.log(row.original.createdTime);
      //   return (
      //     <span>
      //       {moment
      //         .unix(row.original.createdTime / 1000)
      //         .format('DD MMM YYYY hh:mm A')}
      //     </span>
      //   );
      // }
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ];
  return (
    <React.Fragment>
      <section className="table-content">
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12" style={{ paddingBottom: 20 }}>
              <Button className="download-btn" size="lg">
                Download
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <ReactTable
                data={logs}
                columns={columns}
                defaultPageSize={10}
                loading={loading}
                loadingText="Loading Logs..."
                filterable
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
