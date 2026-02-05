import { Row, Typography } from 'antd';
import SourceCode from '../../components/SourceCode';
import { URLS } from '../../constants';
import ClassBased from './class-based';
import TasksBased from './tasks-based';

function Dependencies() {
  return (
    <>
      <Row align="middle" justify="center">
        <Typography.Title level={2} className="m-0">
          Dependencies Example
        </Typography.Title>
      </Row>
      <SourceCode value={URLS.examples.dependencies} />
      <ClassBased />
      <Row align="middle" justify="center" style={{ marginTop: 32 }}>
        <Typography.Title level={3} className="m-0">
          Task (Event Perspective) Dependencies
        </Typography.Title>
      </Row>
      <TasksBased />
    </>
  );
}
export default Dependencies;
