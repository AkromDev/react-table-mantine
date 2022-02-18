import { Box, Menu } from "@mantine/core";
import { PinRightIcon, TrashIcon } from '@modulz/radix-icons';
import { useEffect, useState } from "react";
import { DataTable, DateFilter } from "./DataTable";


const AllFetchedOnceMore = () => {
  const [data, setData] = useState([]);

  const [loading, toggleLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getDataSource();
  }, []);

  const getDataSource = () => {
    toggleLoading(true)
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
        setData(data);
        setTotal(data.length);
        setPageCount(Math.ceil(data.length / 10));
    })
    .finally(() => {
        toggleLoading(false)
    })
  };

  return (
    <Box sx={(t) => ({ height: "100%", padding: t.spacing.lg })}>
      <DataTable
        columns={[
          { accessor: "id", Header: "Id", Filter: () => null },
          {
            accessor: "postId",
            Header: "Post Id",
            Filter: DateFilter,
            filter: "dateFilter"
          },
          { accessor: "name", Header: "Name" },
          { accessor: "email", Header: "Email Address" },
          {
        Header: "Actions",
        accessor: "progress",
        Cell: ({ cell }) => <ActionMenu row={cell.row}/>
      }
        ]}
        data={data}
        loading={loading}
        pageCount={pageCount}
        total={total}
        selection
        stickyHeader
        sorting
        pagination
        filtering
      />
    </Box>
  );
};

export default AllFetchedOnceMore;

function ActionMenu({row}) {
  return (
    <Menu sx={{zIndex: 999}} onClick={(e) => e.stopPropagation()} size='xl'>
      <Menu.Item icon={<PinRightIcon />} onClick={() => alert('Edit ' + row.id)}>Edit</Menu.Item>,
      <Menu.Item color="red" icon={<TrashIcon />}>Delete</Menu.Item>
    </Menu>
  );
}
