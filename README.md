# Customize Rows and Columns in Syncfusion React Pivot Table

This sample demonstrates how to **customize the rows and columns** of the Syncfusion **React Pivot Table (PivotView)** component. It includes features like cell templating, column auto-fitting, and interactive grid settings to enhance the user experience.

## 📖 Overview

The **Syncfusion Pivot Table** is a powerful React component used for data analysis and visualization. In this example, we use a sample dataset to display sales information across different countries, products, and years.

Key configurations include:

- **Rows:** `Country`, `Products`
- **Columns:** `Year`
- **Values:** `Sold` (Units Sold), `Amount` (Total Sold Amount)
- **Excluded Fields:** `Products`, `Quarter`

The Pivot Table is customized with:

- A **cell template** for styling individual cells.
- **Auto-fitting columns** using the `columnRender` event.
- Enhanced **grid settings** like resizing, reordering, selection, and tooltip clipping.

## ✅ Features Demonstrated

- **Cell Template Customization:**
  A custom cell template is used to style cells with a neutral appearance.
  ```tsx
  const customizeCell = () => {
    return (<span className='tempwrap e-pivot-neutral'></span>);
  };
  ```

- **Auto-Fit Columns:**
  Automatically adjusts column widths for better readability.
  ```tsx
  const columnFit = (props: any) => {
    for (let i = 0; i < props.columns.length; i++) {
      props.columns[i].autoFit = true;
    }
  };
  ```

- **Grid Settings:**
  Includes features like:
  - Row height customization
  - Column resizing and reordering
  - Cell selection with box mode
  - Grid lines and tooltip clipping

## 🛠 Prerequisites

Before running this project, make sure you have:

- [Node.js](https://nodejs.org/) installed
- [Visual Studio Code](https://code.visualstudio.com/) or any code editor

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SyncfusionExamples/row-and-column-options-in-react-pivot-table
   ```

2. **Navigate to the project folder:**
   ```bash
   cd react-pivot-table-customization
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the Pivot Table.

## 📂 Project Structure

```
react-pivot-table-customization/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.tsx         # Main component with Pivot Table customization
│   ├── data.js         # Sample data used in the Pivot Table
│   ├── App.css         # Custom styles
│   └── ...
├── package.json
├── README.md
└── tsconfig.json
```

## 📊 Sample Data

The Pivot Table uses a sample dataset with the following fields:

```js
[
  {
    'Sold': 31,
    'Amount': 52824,
    'Country': 'France',
    'Products': 'Mountain Bikes',
    'Year': 'FY 2015',
    'Quarter': 'Q1'
  },
  {
    'Sold': 51,
    'Amount': 86904,
    'Country': 'France',
    'Products': 'Mountain Bikes',
    'Year': 'FY 2015',
    'Quarter': 'Q2'
  }
]
```

## 📚 Learn More

- [Syncfusion React Pivot Table Documentation](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started/)
- [Live Demos](https://ej2.syncfusion.com/react/demos/#/bootstrap5/pivot-table/default)

## 💬 Support

For questions or feedback, visit:

- [Syncfusion Support Portal](https://support.syncfusion.com)
- [Syncfusion Community Forums](https://www.syncfusion.com/forums)

## 📜 License

This project uses Syncfusion components, which require a valid license for production use.  
[View Syncfusion License Terms](https://www.syncfusion.com/license/studio/22.2.5/syncfusion_essential_studio_eula.pdf)
