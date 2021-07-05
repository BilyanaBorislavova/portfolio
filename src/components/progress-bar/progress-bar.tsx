import React from 'react';
import { Line } from 'rc-progress';

interface ProgressBarProps {
    percent: number,
    props?: {},
}

const ProgressBar = ({ percent, props }: ProgressBarProps) => <Line percent={percent} {...props} />;

export default ProgressBar;
