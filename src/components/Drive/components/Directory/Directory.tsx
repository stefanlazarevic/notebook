import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Directory.css';

import DirectoryProps from './DirectoryProps';
import { DriveView } from '../../Drive';
import DirectoryTableView from './view/DirectoryTableView/DirectoryTableView';
import { AppState } from '../../../../redux/types';
import { IDirectory } from '../../../../redux/drive/DriveTypes';
import Path from '../../../../redux/drive/Path';
import { openDirectory } from '../../../../redux/drive/DriveActions';

export default function Directory(props: DirectoryProps) {
    const dispatch = useDispatch();

    const directory: IDirectory = useSelector((state: AppState) => state.drive.fs[props.path]);

    const basename = Path.basename(directory.path);

    function open() {
        dispatch(openDirectory(directory.path));
    }

    switch (props.view) {
        case DriveView.TABLE:
            return (
                <DirectoryTableView {...props} {...directory} basename={basename} open={open} />
            )
        default: return <DirectoryTableView {...props} {...directory} basename={basename} open={open} />
    }
}
