# Quick Reference: Essential BI Formulas & Functions

## Google Sheets & Excel Common Functions

### Basic Aggregation
```
=SUM(A1:A10)                    Sum of range
=AVERAGE(A1:A10)                Average of range
=COUNT(A1:A10)                  Count of numbers
=COUNTA(A1:A10)                 Count of non-empty cells
=MAX(A1:A10)                    Maximum value
=MIN(A1:A10)                    Minimum value
```

### Conditional Aggregation
```
=SUMIF(A1:A10, ">100", B1:B10)     Sum B where A > 100
=SUMIFS(C:C, A:A, "Food", B:B, ">50")  Sum C where A="Food" AND B>50
=AVERAGEIF(A1:A10, "Entree", B1:B10)   Average B where A="Entree"
=COUNTIF(A1:A10, "Pizza")               Count cells containing "Pizza"
```

### Lookup Functions
```
=VLOOKUP(A2, Products!A:D, 3, FALSE)    Lookup value in 3rd column
=INDEX(B:B, MATCH(A2, A:A, 0))          More flexible lookup
=XLOOKUP(A2, lookup_array, return_array)  Excel 365 only
```

### Logic
```
=IF(A1>100, "High", "Low")              Basic if-then-else
=IFS(A1>100,"High", A1>50,"Med", TRUE,"Low")  Multiple conditions
=AND(A1>50, B1="Food")                  Both conditions true
=OR(A1>100, B1="Beverage")              Either condition true
```

### Text Functions
```
=CONCATENATE(A1, " ", B1)    or  =A1&" "&B1    Join text
=LEFT(A1, 5)                                    First 5 characters
=RIGHT(A1, 3)                                   Last 3 characters
=LEN(A1)                                        Length of text
=TRIM(A1)                                       Remove extra spaces
=UPPER(A1)                                      Convert to uppercase
=LOWER(A1)                                      Convert to lowercase
```

### Date Functions
```
=TODAY()                        Current date
=NOW()                          Current date and time
=YEAR(A1)                       Extract year
=MONTH(A1)                      Extract month (1-12)
=DAY(A1)                        Extract day
=WEEKDAY(A1)                    Day of week (1=Sunday)
=EOMONTH(A1, 0)                 Last day of month
=DATEDIF(A1, B1, "d")           Days between dates
```

### Error Handling
```
=IFERROR(A1/B1, 0)              If error, return 0
=IFNA(VLOOKUP(...), "Not Found")  If #N/A, return text
```

---

## Google Sheets Exclusive Power Functions

### QUERY (SQL-like analysis)
```
// Basic query
=QUERY(A1:E100, "SELECT A, SUM(E) GROUP BY A")

// With WHERE clause
=QUERY(A1:E100, "SELECT A, B, C WHERE B='Food' AND C>10")

// Order and limit
=QUERY(A1:E100, "SELECT A, SUM(E) GROUP BY A ORDER BY SUM(E) DESC LIMIT 10")

// Column labels
=QUERY(A1:E100, "SELECT A, SUM(E) GROUP BY A LABEL SUM(E) 'Total Sales'", 1)
```

### FILTER
```
// Single condition
=FILTER(A2:E100, B2:B100="Food")

// Multiple conditions (AND)
=FILTER(A2:E100, (B2:B100="Food")*(C2:C100>50))

// Multiple conditions (OR)
=FILTER(A2:E100, (B2:B100="Food")+(B2:B100="Beverage"))
```

### ARRAYFORMULA
```
// Apply formula to entire column
=ARRAYFORMULA(IF(A2:A="",,A2:A*B2:B))

// Multiple operations
=ARRAYFORMULA(IF(A2:A="",,A2:A&" - "&B2:B))
```

### Other Powerful Functions
```
=UNIQUE(A2:A100)                    Unique values
=SORT(A2:E100, 2, TRUE)             Sort by column 2, ascending
=SORTN(A2:E100, 5, 0, 5, FALSE)     Top 5 by column 5
=IMPORTRANGE("url", "Sheet!A:E")    Import from other sheet
```

---

## Excel Power Query (M Language) - Common Patterns

### Basic Transformations
```
// Remove columns
Table.RemoveColumns(Source,{"Column1", "Column2"})

// Rename column
Table.RenameColumns(Source,{{"OldName", "NewName"}})

// Change type
Table.TransformColumnTypes(Source,{{"Column1", type text}})

// Filter rows
Table.SelectRows(Source, each [Sales] > 100)

// Add custom column
Table.AddColumn(Source, "Profit", each [Revenue] - [Cost])
```

---

## Excel DAX (Power Pivot) - Essential Measures

### Basic Measures
```
Total Sales = SUM(Sales[Amount])

Average Check = AVERAGE(Sales[Amount])

Transaction Count = COUNTROWS(Sales)
```

### Calculated Columns vs Measures
```
// Calculated Column (row context)
Profit = Sales[Revenue] - Sales[Cost]

// Measure (filter context)
Total Profit = SUM(Sales[Revenue]) - SUM(Sales[Cost])
```

### Time Intelligence
```
// Year to date
YTD Sales = TOTALYTD([Total Sales], Calendar[Date])

// Prior year
PY Sales = CALCULATE([Total Sales], SAMEPERIODLASTYEAR(Calendar[Date]))

// Year over year growth
YoY Growth = DIVIDE([Total Sales] - [PY Sales], [PY Sales])

// Moving average
MA 7 Days = CALCULATE([Total Sales], DATESINPERIOD(Calendar[Date], LASTDATE(Calendar[Date]), -7, DAY))
```

### CALCULATE (Most Important!)
```
// Filter within measure
Food Sales = CALCULATE([Total Sales], Products[Category]="Food")

// Multiple filters
Lunch Food Sales = CALCULATE([Total Sales], 
    Products[Category]="Food",
    Times[Daypart]="Lunch"
)

// Remove filters
All Sales = CALCULATE([Total Sales], ALL(Products))
```

---

## Common F&B Calculations

### Food Cost %
```
// Spreadsheet
=SUM(Cost_Range) / SUM(Sales_Range) * 100

// DAX
Food Cost % = DIVIDE(SUM(Sales[Cost]), SUM(Sales[Revenue])) * 100
```

### Labor Cost %
```
// Spreadsheet
=SUM(Labor_Hours * Hourly_Rate) / SUM(Sales) * 100

// DAX
Labor Cost % = DIVIDE(SUM(Labor[TotalCost]), SUM(Sales[Revenue])) * 100
```

### Prime Cost %
```
// Prime Cost = COGS + Labor
=(SUM(Food_Cost) + SUM(Labor_Cost)) / SUM(Revenue) * 100
```

### Average Check
```
=SUM(Revenue) / COUNT(Transactions)

// Or
=AVERAGE(Transaction_Amount_Range)
```

### Table Turnover Rate
```
=Total_Covers / Number_of_Seats / Number_of_Hours
```

### RevPASH (Revenue Per Available Seat Hour)
```
=Total_Revenue / (Number_of_Seats * Hours_Open)
```

### Sales Growth %
```
=(This_Period - Last_Period) / Last_Period * 100
```

### Menu Mix %
```
=Item_Quantity_Sold / Total_Items_Sold * 100
```

---

## Pivot Table Quick Reference

### Creating a Pivot Table

**Excel**: Insert → PivotTable  
**Google Sheets**: Insert → Pivot table

### Common Configurations

**Sales by Category**:
- Rows: Category
- Values: SUM of Sales
- Sort: Descending by Sales

**Sales by Month**:
- Rows: Date (grouped by Month)
- Values: SUM of Sales
- Show as: Running Total (optional)

**Server Performance**:
- Rows: Server Name
- Values: COUNT of Transactions, SUM of Sales, AVERAGE of Check
- Calculated Field: Sales per Transaction

**Menu Engineering Matrix**:
- Rows: Product Name
- Values: COUNT (popularity), SUM of Profit (profitability)
- Then plot on scatter chart

---

## Conditional Formatting for Dashboards

### Traffic Light Colors
```
Rules:
>= 80%: Green
50-79%: Yellow
< 50%: Red
```

### Data Bars
Show value magnitude visually in cells

### Icon Sets
Up/Down arrows for trends, traffic lights for status

### Custom Rules
```
// Highlight weekends
=WEEKDAY(A1,2)>5

// Highlight above average
=A1>AVERAGE($A$1:$A$100)

// Highlight top 10%
=A1>=PERCENTILE($A$1:$A$100, 0.9)
```

---

## Chart Selection Guide

| Goal | Chart Type |
|------|-----------|
| Compare categories | Column/Bar |
| Show trend over time | Line |
| Show composition | Stacked bar, Pie |
| Show distribution | Histogram, Box plot |
| Show relationship | Scatter |
| Show progress toward goal | Bullet chart, Gauge |
| Show part-to-whole | Pie, Treemap |
| Show ranking | Horizontal bar |

---

**Tip**: Bookmark this file! You'll reference it constantly as you learn.

Save to: `/home/adeandza/Desktop/anything-goes-v1/bi-learning/spreadsheet-path/resources/`
