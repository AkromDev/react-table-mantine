import { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mantine/core";
import { ReactTable, DateFilter } from "./Components";

const App = () => {
  const [data, setData] = useState([]);

  const [loading, toggleLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [total, setTotal] = useState(0);
  const fetchIdRef = useRef(0);

  useEffect(() => {
    // Comment out below line for Server Side Pagination
    getDataSource();
  }, []);

  const getDataSource = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTotal(data.length);
        setPageCount(Math.ceil(data.length / 10));
      });
  };

  const fetchData = useCallback(({ pageSize, pageIndex, sortBy, filter }) => {
    console.log({ filter });
    const fetchId = ++fetchIdRef.current;
    toggleLoading(true);

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((serverData) => {
        if (fetchId === fetchIdRef.current) {
          const startRow = pageSize * pageIndex;
          const endRow = startRow + pageSize;
          if (sortBy.length === 0) {
            setData(serverData.sort().slice(startRow, endRow));
          } else {
            setData(
              serverData
                .sort((a, b) => {
                  const field = sortBy[0].id;
                  const desc = sortBy[0].desc;
                  if (a[field] < b[field]) return desc ? 1 : -1;
                  if (a[field] > b[field]) return desc ? -1 : 1;
                  return 0;
                })
                .slice(startRow, endRow)
            );
          }
          setTotal(serverData.length);
          setPageCount(Math.ceil(serverData.length / pageSize));
          toggleLoading(false);
        }
      });
  }, []);

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
        // fetchData={fetchData}
        // serverSideDataSource
        // selection
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

export default App;
