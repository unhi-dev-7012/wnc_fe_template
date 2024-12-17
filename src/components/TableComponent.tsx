import { Table, type TableProps } from "antd";

interface TableDataProps<T> {
  data: T[];
  columns: TableProps<T>["columns"];
  rowKey?: string;
}

const TableComponent: React.FC<TableDataProps<any>> = ({
  data,
  columns,
  rowKey = "id",
}) => {
  return <Table bordered dataSource={data} columns={columns} rowKey={rowKey} />;
};

export default TableComponent;
