import React from 'react';
import { useSelector } from 'react-redux';

import DirectoryProps from './DirectoryProps';
import { DriveView } from '../../Drive';
import DirectoryTableView from './view/DirectoryTableView/DirectoryTableView';
import { AppState } from '../../../../redux/types';
import { IDirectory } from '../../../../redux/drive/DriveTypes';
import Path from '../../../../redux/drive/Path';

export default function Directory(props: DirectoryProps) {
    const directory: IDirectory = useSelector((state: AppState) => state.drive.fs[props.path]);

    const basename = Path.basename(directory.path);

    switch (props.view) {
        case DriveView.TABLE:
            return (
                <DirectoryTableView {...props} {...directory} basename={basename} />
            )
        default: return <DirectoryTableView {...props} {...directory} basename={basename} />
    }
}
