const githubRepo = 'https://github.com/ansulagrawal/react-big-schedule';

// Example paths
const addMorePath = 'blob/master/src/examples/pages/Add-More/index.jsx';
const basicPath = 'blob/master/src/examples/pages/Basic/index.jsx';
const readOnlyPath = 'blob/master/src/examples/pages/Read-Only/index.jsx';
const dragAndDropPath = 'blob/master/src/examples/pages/Drag-And-Drop/index.jsx';
const customTimePath = 'blob/master/src/examples/pages/Custom-Time/index.jsx';
const resizeParentPath = 'blob/master/src/examples/pages/Resize-By-Parent/index.jsx';
const dependenciesPath = 'blob/master/src/examples/pages/Dependencies/index.jsx';
const dependenciesTimePath = 'blob/master/src/examples/pages/Dependencies-Time/index.jsx';
export const URLS = {
  githubRepo,
  examples: {
    basic: `${githubRepo}/${basicPath}`,
    readOnly: `${githubRepo}/${readOnlyPath}`,
    addMore: `${githubRepo}/${addMorePath}`,
    dragAndDrop: `${githubRepo}/${dragAndDropPath}`,
    customTime: `${githubRepo}/${customTimePath}`,
    resizeByParent: `${githubRepo}/${resizeParentPath}`,
    dependencies: `${githubRepo}/${dependenciesPath}`,
    dependenciesTime: `${githubRepo}/${dependenciesTimePath}`,
  },
};
