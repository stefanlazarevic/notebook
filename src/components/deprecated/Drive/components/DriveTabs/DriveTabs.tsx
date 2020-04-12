import React from 'react';
import DriveTab from './components/DriveTab/DriveTab';

export default function DriveTabs(props: any) {
    return (
        props.tabs.map((path: string) => {
            return <DriveTab path={path} />
        })
    )
}
