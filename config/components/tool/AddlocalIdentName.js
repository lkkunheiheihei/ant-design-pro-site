const postcss = require('postcss');
const fs = require('fs');
const syntax = require('postcss-less');

const LocalIdentNameplugin = postcss.plugin(
  'LocalIdentNameplugin',
  ({ localIdentName }) => {
    return (lessAST) => {
      // loop add localIdentName
      const loop = (nodes) => {
        nodes.forEach((item) => {
          // Not converted :global
          if (item.nodes && item.selector !== ':global') {
            loop(item.nodes);
          }
          // 将global的 节点加到 parents
          if (item.selector === ':global') {
            const parentNodes = item.parent.nodes;
            const childrenNodes = item.nodes;
            const index = parentNodes.findIndex((node) => {
              return node.selector === ':global';
            });
            childrenNodes.unshift(index, 1);
            Array.prototype.splice.apply(parentNodes, item.nodes);
            item.parent.nodes = parentNodes;
            return;
          }
          // 删除 :global(className) 保留 className
          if (item.selector) {
            if (item.selector.includes(':global(')) {
              // converted :global(.className）
              const className = item.selector.match(/:global\((\S*)\)/)[1];
              item.selector = className;
              return;
            }
            const className = item.selector.replace(
              /\./g,
              `.${localIdentName}`
            );
            item.selector = className;
          }
        });
      };
      loop(lessAST.nodes);
    };
  }
);

const AddlocalIdentName = function (lessPath, lessText, localIdentName) {
  postcss([LocalIdentNameplugin({ localIdentName })])
    .process(lessText, { syntax })
    .then((result) => {
      if (fs.existsSync(lessPath)) {
        fs.unlinkSync(lessPath);
      }
      fs.writeFileSync(lessPath, result.content);
    });
};

module.exports = AddlocalIdentName;
