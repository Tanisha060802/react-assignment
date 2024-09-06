import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-table';
import { Link } from 'react-router-dom';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    // fetch users data from API or database
    const usersData = [
      { id: 1, first_name: 'John', last_name: 'Doe', age: 30, web: 'https://johndoe.com', email: 'john.doe@example.com' },
      { id: 2, first_name: 'Jane', last_name: 'Doe', age: 25, web: 'https://janedoe.com', email: 'jane.doe@example.com' },
      // ...
    ];
    setUsers(usersData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (column) => {
    if (sortedColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortDirection('asc');
    }
  };

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  const handlePageSizeChange = (pageSize) => {
    setPageSize(pageSize);
  };

  const filteredUsers = users.filter((user) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      user.first_name.toLowerCase().includes(searchTermLower) ||
      user.last_name.toLowerCase().includes(searchTermLower)
    );
  });

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortedColumn === 'first_name') {
      return sortDirection === 'asc'
        ? a.first_name.localeCompare(b.first_name)
        : b.first_name.localeCompare(a.first_name);
    } else if (sortedColumn === 'last_name') {
      return sortDirection === 'asc'
        ? a.last_name.localeCompare(b.last_name)
        : b.last_name.localeCompare(a.last_name);
    } else if (sortedColumn === 'age') {
      return sortDirection === 'asc' ? a.age - b.age : b.age - a.age;
    } else if (sortedColumn === 'web') {
      return sortDirection === 'asc'
        ? a.web.localeCompare(b.web)
        : b.web.localeCompare(a.web);
    } else if (sortedColumn === 'email') {
      return sortDirection === 'asc'
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email);
    }
    return 0;
  });

  const paginatedUsers = sortedUsers.slice(
    pageNumber * pageSize,
    (pageNumber + 1) * pageSize
  );

  return (
    <div>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by first name or last name"
      />
      <Table>
        <Thead>
          <Tr>
            <Th>
              <Link to="#" onClick={() => handleSort('first_name')}>
                First Name
              </Link>
            </Th>
            <Th>
              <Link to="#" onClick={() => handleSort('last_name')}>
                Last Name
              </Link>
            </Th>
            <Th>
              <Link to="#" onClick={() => handleSort('age')}>
                Age
              </Link>
            </Th>
            <Th>
              <Link to="#" onClick={() => handleSort('web')}>
                Web
              </Link>
            </Th>
            <Th>
              <Link to="#" onClick={() => handleSort('email')}>
                Email
              </Link>
              </Th>
              </Tr>
              </Thead>
              </Table>
              </div>
);
};

export default User;
