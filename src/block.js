const { PlainText, InspectorControls, InnerBlocks } = wp.editor;
const { PanelBody, RangeControl } = wp.components;
const { registerBlockType } = wp.blocks;
const { Fragment, createElement } = wp.element;
const { __ } = wp.i18n;

const iconEl = createElement('svg', { width: 20, height: 20, viewBox: "0 0 241.95 283.46" },
  createElement('path', { d: "M41.51,41.51,61.56,61.56a113.38,113.38,0,0,1,160.35,0l20-20.05A141.73,141.73,0,0,0,41.51,41.51 M41.51,41.51,61.56,61.56a113.38,113.38,0,0,0,0,160.35L41.51,242A141.73,141.73,0,0,1,41.51,41.51Z M242,242l-20-20a113.38,113.38,0,0,1-160.35,0L41.51,242A141.73,141.73,0,0,0,242,242Z", fill: "#303030"})
);

//import column-block
import './column.js';

import './style.scss';
import './editor.scss';

const ALLOWED_BLOCKS = [ 'chrisf/column-block' ];

const getColumnsTemplate = (numCols) => {
  let els = [];
  for( let x = 0; x<numCols; x++ ){
    els.push([ 'chrisf/column-block' ])
  }
  return els;
}

registerBlockType('chrisf/columns-block', {
  title: 'Columns Block',
  icon: iconEl,
  category: 'layout',
  attributes: {
    numCols: {
      type: 'text',
      default: '2'
    }
  },
  supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},

  edit( {attributes, className, setAttributes} ) {

    const { numCols } = attributes;
    const classes = 'columns-wrapper columns-' + numCols;

    return[
      <InspectorControls>
        <PanelBody>
          <div>
            <strong>Select number of columns:</strong>
            <RangeControl
  						label="columns"
  						value={ attributes.numCols }
  						onChange={ ( nextColumns ) => {
  							setAttributes( {
  								numCols: nextColumns,
  							} );
  						} }
  						min={ 2 }
  						max={ 4 }
  					/>
          </div>
        </PanelBody>
      </InspectorControls>,
      <section className={classes}>
        <InnerBlocks
          template={ getColumnsTemplate( numCols ) }
          templateLock="all"
          allowedBlocks={ ALLOWED_BLOCKS } />
      </section>
    ];
  },


  save( { attributes } ) {

    const { numCols } = attributes;
    const classes = 'columns columns-' + numCols;

    return (
      <section className="columns">
        <InnerBlocks.Content />
      </section>
    );
  }


});
