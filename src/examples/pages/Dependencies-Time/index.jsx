import { Row, Typography } from 'antd';
import SourceCode from '../../components/SourceCode';
import { URLS } from '../../constants';
import TimeBased from './time-based';

function DependenciesTime() {
  return (
    <>
      <Row align="middle" justify="center">
        <Typography.Title level={2} className="m-0">
          Time-labelled Dependencies (Day View)
        </Typography.Title>
      </Row>
      <SourceCode value={URLS.examples.dependenciesTime} />
      <TimeBased />
    </>
  );
}

export default DependenciesTime;
