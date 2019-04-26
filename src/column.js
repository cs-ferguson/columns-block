const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;
const { createElement } = wp.element;

const iconEl = createElement('svg', { width: 20, height: 20, viewBox: "0 0 241.95 283.46" },
  createElement('path', { d: "M41.51,41.51,61.56,61.56a113.38,113.38,0,0,1,160.35,0l20-20.05A141.73,141.73,0,0,0,41.51,41.51 M41.51,41.51,61.56,61.56a113.38,113.38,0,0,0,0,160.35L41.51,242A141.73,141.73,0,0,1,41.51,41.51Z M242,242l-20-20a113.38,113.38,0,0,1-160.35,0L41.51,242A141.73,141.73,0,0,0,242,242Z", fill: "#303030"})
);

export default registerBlockType('chrisf/column-block', {
  title: 'Single Column Block',
  parent: 'chrisf/columns-block',
  icon: iconEl,
  category: 'common',


  edit() {
    return <InnerBlocks templateLock={ false } />;
  },


  save( ) {
    return <div><InnerBlocks.Content /></div>
  }


});
