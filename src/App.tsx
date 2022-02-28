import React from 'react';
import { PivotViewComponent, PivotView } from '@syncfusion/ej2-react-pivotview';
import {pivotData} from './data';
import './App.css';

function App() {
  let pivotObj: PivotView | null;
  const customizeCell=()=>{
    return(<span className='tempwrap e-pivot-neutral'></span>)
  }
  // const autoFit=()=>{
  //   pivotObj?.grid.autoFitColumns();
  // }
  const columnFit=(props:any)=>{
    for (let i = 0; i < props.columns.length; i++) {
      props.columns[i].autoFit = true;
    }
  }
 return (
    <div id="wrapper">
      <PivotViewComponent ref={pv=>pivotObj=pv}
        height={500} 
        showTooltip={false}
        cellTemplate={customizeCell}
        //dataBound={autoFit}
        gridSettings={{
          rowHeight: 60,
          //columnWidth: 200,
          allowResizing: true,
          allowReordering: true,
          allowSelection: true,
          selectionSettings:{mode:"Cell", type:"Multiple", cellSelectionMode: "Box"},
          gridLines: "Both",
          clipMode: "EllipsisWithTooltip",
          columnRender: columnFit
        }}
        dataSourceSettings={{
          dataSource: pivotData,
          rows: [{ name: 'Country' }, {name: 'Products'}],
          columns: [{ name: 'Year' }],
          values: [
            { name: 'Sold', caption: 'Units Sold' }, 
            { name: 'Amount', caption: 'Total Sold Amount' }
          ],
          excludeFields: ['Products', 'Quarter']
        }}>
      </PivotViewComponent>
    </div>
  );
}

export default App;
