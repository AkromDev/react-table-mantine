import { Box } from "@mantine/core";
import { useEffect, useState } from "react";
import { DateFilter, ReactTable } from "./ReactTable";

const AllFetchedOnce = () => {
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
      <ReactTable
        columns={[
          { accessor: "id", Header: "Id" },
          {
            accessor: "postId",
            Header: "Post Id",
            Filter: DateFilter,
            filter: "dateFilter"
          },
          { accessor: "name", Header: "Name" },
          { accessor: "email", Header: "Email Address" }
        ]}
        data={data}
        loading={loading}
        pageCount={pageCount}
        total={total}
        stickyHeader
        sorting
        pagination
        filtering
      />
    </Box>
  );
};

export default AllFetchedOnce;
