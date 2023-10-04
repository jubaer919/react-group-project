import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Missions() {
  return (
    <div className="px-3 container">
      <Table responsive="md" className="my-5" striped>
        <thead className="p-5">
          <tr className="border">
            <th className="border">Mission</th>
            <th className="border">Description</th>
            <th className="border">Status</th>
            <th className="border"> </th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}
