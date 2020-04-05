import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import AutoSizer from "react-virtualized-auto-sizer";
import { Table, Column } from "react-vt-table";

import "react-vt-table/dist/style.css";
import './TableView.css';

import TableViewProps from "./TableViewProps";
import { AppState } from "../../../../redux/types";
import Sibling from "../../components/Sibling/Sibling";
import { DriveView } from "../../Drive";

export default function TableView(props: TableViewProps) {
	const cwd = useSelector((state: AppState) => {
		return props.path || state.drive.cwd
	});

  const empty = useMemo(() => ["empty"], []);

  const data = useSelector((state: AppState) => {
    const directory = state.drive.fs[cwd];

    if (!directory) {
      return empty;
    }

    return directory.children;
  });

	/**
	 * Prilikom iscrtavanja svakog reda tabele, ova funkcija se poziva kako bi definisala
	 * izgled reda.
	 */
  function rowRenderer(props: any) {
    const { index, style, isScrolling } = props;
    const { getRowWidth, getColumnWidth } = props.data.rowProps;
    const path = `${cwd}/${data[index]}`;

    if (data.length === 0) {
      return (
        <div className="VTRow" style={{ ...props.style, width: "100%" }}>
          <div className="VTCell" style={{ justifyContent: "center" }}>
            <span>This directory is empty.</span>
          </div>
        </div>
      );
    }

    return (
      <Sibling
        path={path}
        index={index}
        style={style}
        isScrolling={isScrolling}
        getRowWidth={getRowWidth}
				getColumnWidth={getColumnWidth}
				view={DriveView.TABLE}
      />
    );
  }

  return (
    <AutoSizer>
      {({ width, height }) => (
        <Table
          data={data.length ? data : ['empty']}
          width={width}
          height={height}
          rowHeight={40}
          headerHeight={40}
          minColumnWidth={30}
          rowRenderer={rowRenderer}
          autoScroll={true}
          listProps={{
            overscanCount: 20,
            useIsScrolling: true
          }}
        >
          <Column label="Name" width={240} />
          <Column label="Last Modified" width={200} />
          <Column label="Type" width={100} />
        </Table>
      )}
    </AutoSizer>
  );
}
