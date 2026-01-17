# Spreadsheet-Powered BI Curriculum
## Master Business Intelligence Using Excel & Google Sheets

> [!IMPORTANT]
> **Philosophy**: Why spend months learning SQL and Python when spreadsheets can do 90% of what small to medium F&B businesses need? This curriculum teaches you to build professional-grade BI dashboards using tools the "everyman" already knows and trusts.
> 
> **Goal**: Build beautifully working, easy-to-use, and engaging BI dashboards using ONLY spreadsheets (or primarily spreadsheets with minimal additional tools).
> 
> **Estimated Timeline**: 4-6 months
>
> **🤖 AI-Aided Learning**: Throughout this curriculum, you'll find AI assistance markers showing exactly where and how to use AI to accelerate your learning. Look for these icons:
> - **💡 Ask AI**: Questions to ask AI for explanations
> - **⚡ AI Generate**: Tasks AI can generate for you (data, formulas, code)
> - **🔍 AI Explain**: Concepts AI can explain in different ways
> - **🤖 AI Debug**: When to use AI for debugging
> - **🤖 AI Review**: Have AI review your work
>
> See [AI_LEARNING_GUIDE.md](../AI_LEARNING_GUIDE.md) for full details on effective AI-aided learning.

---

## Why Spreadsheets for BI?

### ✅ Advantages:
- **Universal**: Everyone knows Excel/Sheets basics already
- **No Installation**: Google Sheets is cloud-based and free
- **Familiar**: Lower learning curve = faster deployment
- **Powerful**: Modern spreadsheet features rival dedicated BI tools
- **Accessible**: Stakeholders can edit and explore without special training
- **Cost-Effective**: Excel comes with Office; Sheets is free
- **Self-Contained**: Data + analysis + visualization in one file

### ⚠️ Limitations (and how we'll work around them):
- **Data Size Limits**: Excel (1M rows), Google Sheets (10M cells)
  - *Solution*: Data connections, summarized imports, archiving strategies
- **Performance**: Slower with very large datasets
  - *Solution*: Optimization techniques, caching, smart formulas
- **Collaboration**: Excel is single-user unless using OneDrive/SharePoint
  - *Solution*: Use Google Sheets for collaboration, Excel for power
- **Automation**: Less built-in automation
  - *Solution*: Google Apps Script, Excel VBA/Power Automate

**Bottom Line**: For 80% of F&B businesses, spreadsheets are perfect. This curriculum shows you how.

---

## Curriculum Structure

```mermaid
graph LR
    A[Phase 1: Foundation] --> B[Phase 2: Excel Power Tools]
    B --> C[Phase 3: Google Sheets Advanced]
    C --> D[Phase 4: Dashboard Mastery]
    D --> E[Phase 5: F&B Analytics]
    E --> F[Capstone Project]
```

---

## Phase 1: Spreadsheet Foundations (Weeks 1-3)

### Module 1.1: Data & BI Fundamentals
**Duration**: 3 days

**Learning Objectives**:
- Define Business Intelligence (BI) and its critical role in modern F&B operations.
- Map the value chain from raw POS data to actionable dashboard insights.
- Recognize why spreadsheets are often the optimal "everyman" BI tool for SMBs.

**Topics**:
**Day 1: The BI Concept**:
- **The BI Value Chain**: From raw data (POS exports) to insights (Dashboards).
- **Types of Analytics**: Descriptive (What happened?), Diagnostic (Why?), Predictive (What will happen?), Prescriptive (What to do?).
- **Spreadsheets as BI**: Why Excel/Sheets are the world's most popular BI tools.

**Day 2-3: Context & Application**:
- **KPIs for F&B**: Understanding metrics like RevPASH, COGS, and Prime Cost.
- **The "Everyman" User**: Designing for restaurant owners, not just data scientists.

**Reading**: Review [BI Curriculum Module 1.1](./bi_curriculum.md#module-11-understanding-data--business-intelligence) for deep theory.

**Hands-on Project**:
- **BI Audit**: Look at a sample restaurant's current reporting (or imagine one).
- **Identify Gaps**: What questions can't they answer right now?
- **Sketch a Solution**: Draw a simple dashboard concept on paper that would solve a specific problem.

> **🤖 AI Assistance**:
> - **💡 Ask AI**: "Explain the difference between data analysis, data analytics, and business intelligence in simple terms"
> - **💡 Ask AI**: "Give me 5 real-world examples of how BI helps F&B businesses"
> - **🔍 AI Explain**: Have AI explain KPIs with F&B-specific examples: "Explain what KPIs are and give 5 examples for restaurants"

**Resources**:
- **Books**:
  - "Business Intelligence For Dummies" by Swain, Alexander, and Alexander
- **Articles & Reports**:
  - Harvard Business Review articles on data-driven decision making
  - Industry reports on BI trends in hospitality
- **Reference**:
  - Investopedia: Business Intelligence, Data Analytics definitions
- **Courses**:
  - Online courses on BI fundamentals (Coursera, edX)

---

### Module 1.2: Spreadsheet Mastery Fundamentals
**Duration**: 1.5 weeks

**Excel or Google Sheets?** You'll learn BOTH, but pick your primary platform:
- **Excel**: More powerful features, better for heavy analysis
- **Google Sheets**: Better collaboration, free, cloud-based
- **Recommendation**: Learn Google Sheets first (accessible), then Excel power features

#### Week 1: Core Skills

**Essential Formulas**:
- `SUM`, `AVERAGE`, `COUNT`, `COUNTA`, `COUNTBLANK`
- `MIN`, `MAX`, `MEDIAN`, `MODE`
- `IF`, `IFS`, `AND`, `OR`, `NOT`
- `SUMIF`, `SUMIFS`, `AVERAGEIF`, `AVERAGEIFS`, `COUNTIF`, `COUNTIFS`
- Date/Time: `TODAY()`, `NOW()`, `DATE()`, `YEAR()`, `MONTH()`, `DAY()`, `WEEKDAY()`, `EOMONTH()`
- Text: `CONCATENATE`/`&`, `LEFT`, `RIGHT`, `MID`, `LEN`, `TRIM`, `UPPER`, `LOWER`, `SUBSTITUTE`

**References**:
- Relative (`A1`), Absolute (`$A$1`), Mixed (`$A1`, `A$1`)
- Named ranges for readability
- Structured references (Excel Tables)

**Data Management**:
- Sorting and filtering
- Data validation (dropdowns, rules)
- Conditional formatting (color scales, data bars, icon sets, rules)
- Find & Replace (including wildcards and regex in Sheets)

#### Week 2: Intermediate Skills

**Lookup Functions** (CRITICAL for BI):
- `VLOOKUP` (vertical lookup - the workhorse)
- `HLOOKUP` (horizontal lookup - rarely used)
- `INDEX` + `MATCH` (more flexible than VLOOKUP)
- `XLOOKUP` (Excel 365 - the new standard)
- `LOOKUP` (for sorted data)

**Array Formulas**:
- **Google Sheets**: `ARRAYFORMULA()` for applying formulas to ranges
- **Excel**: `Ctrl+Shift+Enter` arrays (legacy) or dynamic arrays (365)

**Pivot Tables** (YOUR BEST FRIEND):
- Creating pivot tables
- Rows, columns, values, filters
- Grouping data (dates, numbers)
- Calculated fields in pivot tables
- Pivot table design and formatting
- **Pivot Charts**: Automatic visualizations from pivots
- Slicers for interactive filtering
- Timelines (Excel) for date filtering

**Data Cleaning**:
- Removing duplicates
- Text-to-columns
- Flash Fill (Excel)
- Handling blanks and errors: `IFERROR()`, `IFNA()`, `ISBLANK()`

**Hands-on Project**:
1. Build a sales analysis: revenue by product, by region, by month
2. Customer analysis: repeat customers, average order value
3. Create your first interactive pivot table dashboard
4. Sales data cleanup and basic analysis

> **🤖 AI Assistance**:
> - **⚡ AI Generate**: "Create a practice CSV with 100 sales transactions (date, product, category, amount, payment_method)"
> - **💡 Ask AI**: "Show me 5 examples of using SUMIFS with different conditions"
> - **💡 Ask AI**: "Explain absolute vs relative cell references like I'm new to spreadsheets"
> - **🤖 AI Debug**: "When formulas error, paste: 'Why does this formula return #N/A? Formula: [paste]. Data: [describe]'"
> - **🔍 AI Explain**: "Explain VLOOKUP step-by-step with a restaurant menu price lookup example"
> - **💡 Ask AI**: "What's the difference between VLOOKUP and INDEX/MATCH? When should I use each?"
> - **⚡ AI Generate**: "Create practice data: Products table (id, name, price) and Sales table (product_id, quantity) for VLOOKUP practice"
> - **🔍 AI Explain**: "Explain pivot tables like I'm 10, then show me an F&B example"
> - **⚡ AI Generate**: "Give me 20 beginner-level VLOOKUP practice problems"

**Resources**:
- **Documentation**:
  - Excel/Google Sheets official documentation
- **Tutorials**:
  - Chandoo.org spreadsheet tutorials
  - freeCodeCamp spreadsheet courses
  - YouTube: ExcelIsFun and Learn Google Sheets channels
- **Reference**:
  - ExcelJet formulas and shortcuts guide
- **Practice**:
  - Kaggle spreadsheet exercises

**Common Pitfalls**:

❌ **Formula Mistakes**:
- Using VLOOKUP with unsorted data when approximate match is on
- Forgetting to lock references with $ in formulas
- Not handling errors (#N/A, #REF!, #DIV/0!)
- Circular references in formulas

❌ **Pivot Table Issues**:
- Data not formatted as table (causes refresh issues)
- Blank rows/columns in source data
- Not refreshing pivot after data changes
- Too many row/column fields (slow performance)

❌ **Data Quality**:
- Inconsistent date formats
- Leading/trailing spaces in text
- Numbers stored as text
- Duplicate entries not identified

**Assessment Checklist**:

Before moving to Phase 2, you should be able to:
- [ ] Write complex formulas using SUMIFS, COUNTIFS, and nested IFs
- [ ] Use VLOOKUP or INDEX/MATCH to join data from multiple tables
- [ ] Create and customize pivot tables
- [ ] Apply conditional formatting for visual insights
- [ ] Clean messy data efficiently
- [ ] Build a basic dashboard with charts and slicers

---

### Module 1.3: Data Thinking for F&B
**Duration**: 4 days

**Learning Objectives**:
- Adopt the "Data Thinking" mindset to move from observation to action.
- Master the three pillar processes: Supply Chain, Production, and Service.
- Internalize the definition and target benchmarks for Prime Cost (COGS + Labor).

**Topics**:
**Day 1-2: The Mindset**:
- **Data Thinking Framework**:
  - Asking the right questions ("Why is food cost up?")
  - Moving from "What happened" to "What to do about it"
  - Correlation vs. Causation
- **Key F&B Business Processes**:
  - Supply Chain (Ordering -> Receiving -> Inventory)
  - Production (Prep -> Cooking -> Waste)
  - Service (Ordering -> Serving -> Payment)

**Day 3-4: The Metrics**:
- **Core F&B Metrics (The Big 3)**:
  - **Prime Cost**: COGS + Labor (Target: 55-60%)
  - **RevPASH**: Revenue Per Available Seat Hour (Efficiency)
  - **Contribution Margin**: Profit per item (Menu Engineering)
- **Review**: [BI Curriculum Module 1.3](./bi_curriculum.md#module-13-data-thinking--business-metrics) for deep dive.

**Hands-on Project**: Create a KPI calculator in a spreadsheet:
- Input fields for sales, costs, labor hours
- Calculated fields for all major F&B KPIs
- Visual indicators (conditional formatting) for targets

> **🤖 AI Assistance**:
> - **💡 Ask AI**: "Why is food cost % more important than absolute food cost dollars?"
> - **💡 Ask AI**: "What are typical target ranges for food cost %, labor cost %, and prime cost % in restaurants?"
> - **⚡ AI Generate**: "Create formulas for a complete F&B KPI calculator (food cost %, labor cost %, prime cost %, RevPASH)"
> - **🤖 AI Review**: "I think these are the top 5 KPIs for a restaurant: [list]. Am I missing critical ones?"

**Resources**:
- **Guides**:
  - F&B Business Processes guide (`fb_business_processes.md`)
- **Books**:
  - "Restaurant Financial Basics" by Raymond S. Schmidgall
  - "The Goal" by Eliyahu M. Goldratt
- **Industry Insight**:
  - National Restaurant Association benchmarks
  - Restaurant Business Online, Nation's Restaurant News
  - Local F&B Associations
- **Tools**:
  - KPI dashboard templates

**Common Pitfalls**:

❌ **KPI Mistakes**:
- Tracking too many metrics (analysis paralysis)
- Using vanity metrics (revenue without costs)
- Not benchmarking against industry standards
- Calculating percentages wrong (base amount errors)
- Focusing on lagging indicators without considering leading indicators
- Not defining KPIs clearly or consistently across the organization

❌ **Business Understanding**:
- Not understanding the "why" behind metrics
- Ignoring context (seasonality, events)
- Comparing incomparable businesses (fine dining vs QSR)
- Not validating with actual F&B operators
- Lack of domain knowledge leading to irrelevant analysis
- Failing to connect data insights to operational changes

❌ **Data Thinking Errors**:
- Not asking "why" multiple times (5 whys technique)
- Accepting data at face value without validation
- Missing the context behind numbers
- Confusing correlation with causation immediately
- Not considering alternative explanations for trends
- Ignoring qualitative insights from stakeholders
- Presenting data without a clear recommendation or call to action

**Assessment Checklist**:

Before moving to Phase 2, you should be able to:
- [ ] Define and calculate 10+ F&B KPIs (e.g., food cost %, labor cost %, prime cost %, RevPASH, average check, table turnover)
- [ ] Explain why each metric matters for decision-making in an F&B context
- [ ] Identify good vs bad metric values and typical industry benchmarks
- [ ] Build a functional KPI calculator in spreadsheets with clear inputs and outputs
- [ ] Ask the right analytical questions for F&B businesses to uncover insights
- [ ] Understand stakeholder needs (owner vs manager vs staff) and tailor insights accordingly
- [ ] Translate business questions into data analysis problems
- [ ] Critically evaluate data for potential biases or limitations
- [ ] Formulate actionable recommendations based on F&B KPIs

---

## Phase 2: Excel Power Tools (Weeks 4-7)

> [!NOTE]
> These modules focus on Excel's advanced features. If you're Google Sheets-only, you can skip to Phase 3, but I recommend learning these concepts anyway - they're incredibly powerful.

### Module 2.1: Power Query (Get & Transform Data)
**Duration**: 1.5 weeks

**What is Power Query?**
- Excel's ETL (Extract, Transform, Load) tool
- Visual interface for data cleaning and transformation
- Refreshable data connections
- **Game-changer for BI**: Automate data prep!

**Access**: Data tab → Get Data (Excel 2016+) or Power Query tab (2013)

**Topics**:

**Week 1 - Basics**:
- **Importing Data**:
  - From files: CSV, Excel, text
  - From folders (combine multiple files!)
  - From web (scraping tables)
  - From databases (if available)
- **Basic Transformations**:
  - Remove/rename columns
  - Change data types
  - Filter rows
  - Sort data
  - Remove duplicates
  - Fill down/up
  - Replace values
- **Text Transformations**:
  - Split columns
  - Extract text
  - Clean text
  - Merge columns
- **Number Transformations**:
  - Math operations
  - Rounding
  - Statistics (group by)

**Week 2 - Advanced**:
- **Append Queries**: Stack data from multiple sources
- **Merge Queries**: JOIN data (like SQL!)
  - Left/Right/Inner/Full Outer/Cross joins
  - Understanding relationships
- **Grouping & Aggregation**: Like SQL GROUP BY
- **Conditional Columns**: Custom logic
- **Custom Columns**: M language formulas (basic)
- **Parameters**: Dynamic data sources
- **Refresh**: Update data with one click

**Why This Matters**:
- Your POS exports CSV daily → Power Query automatically imports and cleans
- Multiple locations? Combine all files automatically
- Data messy? Clean it once, apply to all future imports
- **Repeatable, automated data pipeline**

**Hands-on Project**:
- Import sample POS data (CSV)
- Clean and transform it with Power Query
- Set up automatic refresh
- Create a pivot table on the query result
- **Simulate daily data update** - see it refresh automatically

> **🤖 AI Assistance**:
> - **🔍 AI Explain**: "Explain what Power Query does and why it's better than manual data cleaning"
> - **💡 Ask AI**: "What's the difference between Append and Merge in Power Query? Give F&B examples"
> - **⚡ AI Generate**: "Create a messy CSV file with wrong date formats, duplicates, and missing values for Power Query practice"
> - **🤖 AI Debug**: "This Power Query M code gives error: [paste code]. What's wrong?"
> - **💡 Ask AI**: "Walk me through merging two tables in Power Query: Sales (product_id, amount) and Products (product_id, name, cost)"

**Resources**:
- **Documentation**:
  - Microsoft Power Query documentation
- **Books**:
  - "M is for (Data) Monkey" by Ken Puls and Miguel Escobar
- **Tutorials**:
  - ExcelIsFun Power Query tutorials
  - MyOnlineTrainingHub tutorials
- **Guides**:
  - Data transformation best practices guides
  - ETL concepts for analysts articles
  - Power Query formula reference

**Common Pitfalls**:

❌ **Power Query Mistakes**:
- Not promoting headers correctly (first row as data)
- Changing source data location without updating query
- Too many steps (slows refresh)
- Not understanding query dependencies (breaking merge operations)

❌ **Data Type Errors**:
- Dates imported as text
- Numbers with currency symbols not converting properly
- Inconsistent decimal separators (1,000 vs 1.000)

❌ **Performance Issues**:
- Loading huge datasets directly into Excel (use filtering first)
- Not folding query steps (forces local processing)
- Refreshing all queries when only one needs update

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Import data from multiple file types (CSV, Excel, folders)
- [ ] Clean and transform messy data with Power Query
- [ ] Combine data from multiple sources (Append and Merge)
- [ ] Set up automated refresh workflows
- [ ] Understand M language basics
- [ ] Debug common Power Query errors

---

### Module 2.2: Power Pivot & Data Modeling
**Duration**: 1.5 weeks

**What is Power Pivot?**
- Excel's in-memory data engine
- Handle millions of rows (beyond Excel's 1M limit)
- Create relationships between tables
- DAX formulas for advanced calculations
- **True BI capabilities in Excel**

**Access**: Power Pivot tab (may need to enable in Excel Options → Add-ins)

**Requirements**: Excel 2013+ (Windows), not available on Mac

**Topics**:

**Week 1 - Data Modeling**:
- **Importing Data into Data Model**:
  - Add to Data Model option
  - From Power Query to Data Model
- **Creating Relationships**:
  - Primary key / Foreign key concepts
  - One-to-many relationships
  - Star schema design (fact & dimension tables)
  - Review: [Data Modeling from main curriculum](./bi_curriculum.md#module-43-data-modeling-for-bi)
- **Calculated Columns**:
  - DAX formulas for column calculations
  - Row context
- **Hierarchies**:
  - Date hierarchies (Year → Quarter → Month → Day)
  - Product hierarchies (Category → Subcategory → Item)
  - Drill-down in pivot tables

**Week 2 - DAX (Data Analysis Expressions)**:
- **Measures** (calculated fields that aggregate):
  - `SUM()`, `AVERAGE()`, `COUNT()`, etc.
  - `CALCULATE()` - the most powerful DAX function
  - Filter context
- **Time Intelligence**:
  - `TOTALYTD()`, `TOTALMTD()`, `TOTALQTD()`
  - `SAMEPERIODLASTYEAR()`
  - `DATEADD()` for custom periods
  - Year-over-year comparisons
  - Month-over-month growth
- **Common Patterns**:
  - Sales = `SUM(Transactions[Amount])`
  - Prior Year Sales = `CALCULATE([Sales], SAMEPERIODLASTYEAR(Calendar[Date]))`
  - YoY Growth = `DIVIDE([Sales] - [Prior Year Sales], [Prior Year Sales])`
  - Food Cost % = `DIVIDE([Total Food Cost], [Food Sales])`

**Why This Matters**:
- POS data (millions of transactions) → Power Pivot handles it
- Proper data model → easier analysis, better performance
- DAX measures → sophisticated calculations in pivot tables
- **Professional-grade BI in Excel**

**Hands-on Project**:
- Build a data model for F&B:
  - Sales fact table (transactions)
  - Products dimension (menu items)
  - Dates dimension (calendar)
  - Servers dimension (staff)
- Create relationships
- Build 10 DAX measures (sales, food cost %, YoY growth, etc.)
- Create pivot tables using the model

> **🤖 AI Assistance**:
> - **🔍 AI Explain**: "Explain DAX CALCULATE function in simple terms with an F&B example"
> - **💡 Ask AI**: "What's the difference between calculated column and measure in DAX? When do I use each?" or "Explain filter context vs row context in DAX like I'm new to this"
> - **⚡ AI Generate**: "Write DAX measures for: YoY sales growth, food cost %, and MTD revenue" or "Give me 10 common DAX patterns for F&B analytics"
> - **🤖 AI Debug**: "This DAX measure returns wrong value: [paste DAX]. Expected: X, Got: Y. Why?" 

**Resources**:
- **Documentation**:
  - Microsoft DAX function reference
- **Books**:
  - "The Definitive Guide to DAX" by Marco Russo & Alberto Ferrari
- **Communities & Blogs**:
  - SQLBI.com (DAX patterns)
  - PowerPivotPro blog
- **Tools**:
  - DAX Studio
  - DAX Formatter tool

**Common Pitfalls**:

❌ **DAX Mistakes**:
- Using calculated columns when measures are more appropriate (slow performance)
- Not understanding filter context (measures returning unexpected totals)
- Overusing CALCULATE with too many filters (hard to maintain)
- Circular dependency errors in measures

❌ **Relationship Issues**:
- Creating many-to-many relationships (causes ambiguity)
- Missing relationships between fact and dimension tables
- Wrong relationship directions (one-to-many backwards)
- Inactive relationships not properly activated in DAX

❌ **Performance Problems**:
- Too many calculated columns (bloats model size)
- Not using time intelligence properly (slow custom calculations)
- Importing unnecessary columns
- Not compressing strings with value encoding

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Design star schema data models
- [ ] Create relationships between tables correctly
- [ ] Write DAX measures for common calculations
- [ ] Implement time intelligence (YoY, MoM, YTD)
- [ ] Understand when to use calculated columns vs measures
- [ ] Build pivot tables using Power Pivot data model
- [ ] Handle millions of rows of data efficiently

---

### Module 2.3: Advanced Excel Visualization
**Duration**: 1 week

**Beyond Basic Charts**: Creating dashboard-worthy visuals in Excel

**Learning Objectives**:
- Select the most effective chart type for specific data scenarios (e.g., Waterfall for P&L).
- Master dynamic chart techniques using Named Ranges and localized filtering.
- Apply conditional formatting as a visualization layer to enhance data readability.

**Topics**:

**Day 1-3: Chart Selection & Design**:
- **Chart Types**:
  - Column/Bar charts (with data labels, colors)
  - Line charts (multiple series, trendlines)
  - Combo charts (column + line)
  - Area charts (stacked for composition)
  - Scatter plots (for correlation)
  - Waterfall charts (great for P&L visualization!)
  - Funnel charts
  - Treemaps and Sunburst (hierarchy visualization)
  - **Sparklines**: Mini charts in cells

**Day 4-5: Dynamic Features**:
- **Advanced Techniques**:
  - **Dynamic Charts**: Charts that update based on selections
  - **Conditional Formatting as Visualization**: Data bars, Color scales, Icon sets
  - **Custom Chart Formatting**: Removing chartjunk, Branding, Annotations
- **Interactivity**:
  - **Slicers**: Visual filters for pivot tables
  - **Form Controls**: Buttons, dropdowns, scroll bars
  - **Timeline** (Excel 2013+): Date range selector

**Hands-on Project**:
- Create 5 different chart types from your F&B data
- Make one fully interactive chart (dropdown changes what's displayed)
- Design a chart following visualization best practices

> **🤖 AI Assistance**:
> - **💡 Ask AI**: "What is a waterfall chart and why is it useful for P&L analysis?"
> - **⚡ AI Generate**: "Create a sample dataset for a restaurant P&L waterfall chart (Revenue, COGS, Labor, Rent, Net Profit)"
> - **🤖 AI Debug**: "My conditional formatting icon set isn't showing correct values. Here is my rule: [describe rule]"
> - **🔍 AI Explain**: "Explain how to create a dynamic chart in Excel using Named Ranges"

**Resources**:

**Resources**:
- **Books**:
  - "Good Charts" by Scott Berinato
- **Guides & Tutorials**:
  - Excel charting best practices guides
  - Excel Dashboard School tutorials
  - Chandoo.org advanced charting techniques
- **Tools**:
  - ColorBrewer (color palettes)
  - Peltier Tech Charts (add-in)
- **galleries**:
  - Tableau Public, Excel dashboards
  - Jon Peltier's Chart Blog

**Common Pitfalls**:

❌ **Chart Mistakes**:
- Using 3D charts (harder to read accurately)
- Too many colors or data series
- Wrong chart type for the data (pie chart for trends!)
- Missing or unclear labels

❌ **Design Errors**:
- Chartjunk (unnecessary decorations)
- Poor color choices (not accessible)
- Inconsistent formatting across charts
- Not removing default gridlines and borders

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Create 5+ different chart types effectively
- [ ] Choose the right chart for different data scenarios
- [ ] Apply professional styling and formatting
- [ ] Make charts interactive with form controls
- [ ] Remove chartjunk and follow best practices
- [ ] Use conditional formatting creatively for visualization

---

### Module 2.4: Excel Dashboard Design & Build
**Duration**: 1.5 weeks

**Creating Professional Dashboards in Excel**

**Learning Objectives**:
- Design clean, grid-based dashboard layouts optimized for user experience.
- Implement interactivity using Slicers, Timelines, and Form Controls.
- Protect dashboard structures to prevent user errors while maintaining refresh capabilities.

**Topics**:

**Week 1: Layout & Design**:
- **Dashboard Design Principles**:
  - Review: [Dashboard Design from main curriculum](./bi_curriculum.md#module-32-dashboard-design-principles)
  - Excel-specific considerations: Sheet as canvas, Grid-based layout
- **Layout Techniques**:
  - **Sheet Setup**: Zoom level, Gridlines off
  - **Positioning**: Using cells as grid, Alignment
  - **Color Schemes**: Custom palette, consistency
- **Components**:
  - **KPI Cards**: Large numbers, Conditional formatting
  - **Charts** & **Tables**
  - **Headers/Titles**

**Week 2: Functionality & Security**:
- **Interactivity**:
  - **Slicers**: Connect to all pivot tables
  - **Timelines**: Date filtering
  - **Form Controls**: Dropdowns, Option buttons
  - **Hyperlinks**: Navigation
- **Data Refresh**:
  - Manual vs Automatic vs VBA
- **Protection**:
  - Lock dashboard cells, Unlock filters, Protect sheet

**Hands-on Project**:
- **Build Your First Excel Dashboard**:
  - One-page overview: 4-6 KPIs, 4-6 charts
  - Slicers for date range and category
  - Professional design
  - Data refreshes with one click
  - Protected (can't be broken by user)

> **🤖 AI Assistance**:
> - **💡 Ask AI**: "Give me 5 layout ideas for a restaurant executive dashboard on a single screen"
> - **⚡ AI Generate**: "Create a checklist for Excel dashboard usability testing"
> - **🤖 AI Debug**: "My Slicer isn't filtering all my pivot tables. How do I fix this connection?"
> - **🔍 AI Explain**: "Explain the best practices for arranging KPI cards vs charts on a dashboard"

**Resources**:
**Resources**:
- **Courses**:
  - Chandoo.org Excel Dashboards course
- **Books**:
  - "Dashboarding and Reporting with Power Pivot and Excel" by Kasper de Jonge
- **Templates**:
  - Excel dashboard templates

**Common Pitfalls**:

❌ **Dashboard Design Mistakes**:
- Cramming too much information (cognitive overload)
- Inconsistent formatting across components
- No clear visual hierarchy
- Not testing with actual users

❌ **Technical Issues**:
- Broken links when moving files
- Slow performance (too many volatile formulas)
- Not protecting the dashboard structure
- Refresh button not obvious to users

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Design professional dashboard layouts
- [ ] Create interactive elements (slicers, form controls)
- [ ] Build KPI cards with conditional formatting
- [ ] Set up one-click data refresh
- [ ] Protect dashboards from accidental changes
- [ ] Follow dashboard design best practices

---

## Phase 3: Google Sheets Advanced (Weeks 8-10)

> [!NOTE]
> Google Sheets has different strengths than Excel. This phase focuses on Sheets-specific features that make it excellent for collaborative BI.

### Module 3.1: Google Sheets Power Features
**Duration**: 1.5 weeks

**Why Google Sheets for BI?**
- Free and cloud-based
- Real-time collaboration (multiple users)
- Automatic save and version history
- Share with permissions (view/comment/edit)
- Access anywhere (mobile, tablet, web)
- Apps Script for automation
- Built-in integrations (Google Analytics, Forms, etc.)

**Learning Objectives**:
- Master the `QUERY()` function to perform SQL-like analysis directly in Sheets.
- Utilize massive array operations with `ARRAYFORMULA()` and `FILTER()`.
- Connect disparate data sources using `IMPORTRANGE()` for centralized reporting.

**Topics**:

#### Week 1: Advanced Functions

**Google Sheets Exclusive Functions**:

1.  **QUERY()** - SQL-like querying in Sheets!
    ```
    =QUERY(A1:E100, "SELECT A, SUM(E) WHERE B='Food' GROUP BY A ORDER BY SUM(E) DESC", 1)
    ```
    - SELECT, WHERE, GROUP BY, ORDER BY, LIMIT
    - Pivot-like aggregation without pivot tables
    - Dynamic data analysis

2.  **ARRAYFORMULA()** - Apply formula to entire column
    ```
    =ARRAYFORMULA(IF(A2:A="",,A2:A*B2:B))
    ```
    - No more dragging formulas down
    - Automatic expansion
    - Faster calculation

3.  **FILTER()** - Dynamic filtering
    ```
    =FILTER(A2:E100, B2:B100="Food", E2:E100>100)
    ```
    - Multiple conditions
    - Returns array of matching rows
    - Refreshes automatically

4.  **UNIQUE()** - Extract unique values
    ```
    =UNIQUE(A2:A100)
    ```
    - Automatic deduplication
    - Great for creating filter lists

5.  **SORT()** and **SORTN()**
    ```
    =SORT(A2:E100, 5, FALSE)  // Sort by column 5, descending
    =SORTN(A2:E100, 10, 0, 5, FALSE)  // Top 10 by column 5
    ```

6.  **IMPORTRANGE()** - Pull data from other Sheets
    ```
    =IMPORTRANGE("spreadsheet_url", "Sheet1!A1:E100")
    ```
    - Centralize data from multiple files
    - Auto-updates when source changes

7.  **IMPORTDATA()**, **IMPORTHTML()**, **IMPORTXML()**, **IMPORTFEED()**
    - Pull data from web sources
    - CSV URLs, HTML tables, XML, RSS

8.  **GOOGLETRANSLATE()**, **GOOGLEFINANCE()** - Google service integrations

**Combining Functions** (The Magic):
```
// Top 10 food items by sales, formatted as table
=QUERY(
  FILTER(Sales!A:E, Sales!B:B="Food"),
  "SELECT A, SUM(E) GROUP BY A ORDER BY SUM(E) DESC LIMIT 10",
  1
)
```

#### Week 2: Data Connections & Automation

**Connected Sheets** (Google Workspace):
- Connect to BigQuery databases
- Analyze billions of rows in Sheets interface
- Enterprise feature but good to know

**Google Forms Integration**:
- Forms → Sheets (automatic data collection)
- Build custom feedback forms
- Survey data directly into your dashboard

**Apps Script Basics** (Google's JavaScript):
- Automate repetitive tasks
- Custom functions
- Triggered scripts (time-based, on edit, etc.)
- Connect to external APIs
- Email reports automatically

**Simple Apps Script Examples**:
```javascript
// Custom function: Calculate food cost %
function foodCostPercent(cost, sales) {
  return (cost / sales) * 100;
}

// Auto-timestamp when row is edited
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var range = e.range;
  if(range.getColumn() == 2) {
    sheet.getRange(range.getRow(), 1).setValue(new Date());
  }
}

// Send email report every Monday
function sendWeeklyReport() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dashboard");
  var data = sheet.getRange("A1:E10").getValues();
  // Format email with data...
  MailApp.sendEmail("manager@restaurant.com", "Weekly Sales Report", emailBody);
}
```

**Add-ons**:
- Supermetrics (import marketing data)
- Data Connector (various sources)
- Power Tools (enhanced data manipulation)

**Hands-on Projects**:
1.  Build a sales analysis using `QUERY()` - no pivot tables!
2.  Create a dynamic dropdown filter using `UNIQUE()` and `FILTER()`
3.  Import data from a CSV URL with `IMPORTDATA()`
4.  Write a simple Apps Script to auto-timestamp entries
5.  Create a Google Form that feeds into your analysis sheet

> **🤖 AI Assistance**:
> - **🔍 AI Explain**: "Explain Google Sheets QUERY function syntax with examples"
> - **⚡ AI Generate**: "Write QUERY formula: Get all items where category='Food' and price>10, sorted by price descending"
> - **🤖 AI Debug**: "My QUERY formula has syntax error: [paste formula]. What's wrong?"

**Resources**:

**Resources**:
- **Experts**:
  - Ben Collins (benlcollins.com)
- **Documentation**:
  - Google Sheets function reference
  - Apps Script documentation
  - Google Workspace Learning Center

**Common Pitfalls**:

❌ **Google Sheets Mistakes**:
- IMPORTRANGE permission errors
- QUERY syntax errors (SQL-like but different)
- Not optimizing for mobile
- Over-complicated formulas

❌ **Collaboration Issues**:
- Too many editors causing conflicts
- Not using protected ranges
- Poor permission management
- Missing version control

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Use QUERY function for data analysis
- [ ] Implement IMPORTRANGE connections
- [ ] Create FILTER and array formulas
- [ ] Set up Google Sheets permissions
- [ ] Use Apps Script for automation
- [ ] Leverage Google Sheets collaborative features

---

### Module 3.2: Google Sheets Dashboard Design
**Duration**: 1 week

**Building Dashboards in Google Sheets**

**Learning Objectives**:
- Adapt dashboard design principles for web-based, mobile-friendly interfaces.
- Implement dynamic interactivity using data validation and `FILTER()` view logic.
- Manage sharing permissions to securely distribute live dashboards to stakeholders.

**Topics**:

**Day 1-2: Layout & Concepts**:
- **Similarities to Excel**: Grid-based layout, Charts, Conditional formatting.
- **Differences**: Collaboration, Web Publishing, Embeds, Mobile-Friendly, Native Checkboxes.
- **Dashboard Components**:
  - **KPI Cards**: Using merged cells, large fonts.
  - **Charts**: Google Charts specific features.
  - **Tables**: Formatted ranges or QUERY() results.
  - **Slicers**: Interactive visual filters for pivot tables.

**Day 3-5: Interaction & Sharing**:
- **Interactivity Techniques**:
  - **Data Validation Dropdowns** linked to `FILTER()` formulas.
  - **Checkboxes** for show/hide sections.
  - **Filter Views**: Different users can have different views.
- **Sharing & Permissions**:
  - **Viewer**: Read-only (stakeholders).
  - **Editor**: Full access (builders).
  - **Protected Ranges**: Lock dashboard structure but allow filter inputs.

**Hands-on Project**:
- **Build a Google Sheets Dashboard**:
  - Sales overview with KPIs
  - Interactive charts with dropdown filters
  - Uses `QUERY()` and `FILTER()` for dynamic data
  - Share with "view-only" link (simulate stakeholder access)
  - Test on mobile device

> **🤖 AI Assistance**:
> - **⚡ AI Generate**: "Write a Google Sheets FILTER formula to show rows where Column A matches cell B1 (dropdown value)"
> - **💡 Ask AI**: "How do I optimize a Google Sheets dashboard for mobile viewing?"
> - **🤖 AI Debug**: "My dropdown validation list isn't updating with new items. How can I make it dynamic?"
> - **🔍 AI Explain**: "Explain how Google Sheets permissions work for dashboards shared with different stakeholders"

**Resources**:
**Resources**:
- **Templates**:
  - Google Sheets dashboard templates
  - Template Gallery in Google Sheets
- **Tutorials**:
  - Ben Collins dashboard tutorials

**Common Pitfalls**:

❌ **Google Sheets Specific**:
- Not optimizing for mobile (stakeholders view on phone)
- IMPORTRANGE pulling too much data (slow)
- Over-complicated formulas (hard to maintain)
- Not setting proper sharing permissions

❌ **Collaboration Issues**:
- Too many editors (accidental changes)
- No version history usage
- Not using protected ranges
- Unclear ownership/maintenance

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Build Google Sheets dashboards with QUERY and FILTER
- [ ] Create interactive dropdowns linked to formulas
- [ ] Set up proper sharing and permissions
- [ ] Design mobile-friendly layouts
- [ ] Use filter views for different user types
- [ ] Test dashboard performance with large datasets

---

### Module 3.3: Spreadsheet Integration & Automation
**Duration**: 1 week

**Making Your Spreadsheet BI System Work Like a Real BI Tool**

**Learning Objectives**:
- Architect automated data pipelines using Apps Script or Power Automate.
- Implement robust multi-user workflows connecting data entry to master dashboards.
- Design fail-safe error handling and notification systems for automated refreshes.

**Topics**:

**Day 1-2: Pipeline Architecture**:
- **Architecture Options**:
  - **Manual**: Weekly CSV export from POS -> Import to Drive.
  - **Semi-Automated**: Apps Script triggers (fetch from Gmail) or Power Query (folder watch).
  - **Fully Automated**: API (Zapier/Make) -> Cloud storage -> Sheets.
- **Connecting to Data Sources**:
  - CSV/Excel Files, Google Forms, APIs, `IMPORTRANGE()`.

**Day 3-5: Implementation**:
- **Automation Logic**:
  - **Google Apps Script**: Scheduled triggers for refresh/email.
  - **Error Handling**: Notifications when updates fail.
- **Multi-User Workflows**:
  - Viewer dashboard (stakeholders) vs Editor inputs.
  - **Version Control**: Built-in history handling.
  - **Backup Strategy**: Monthly exports/templates.

**Hands-on Project**:
- Set up a mini automated pipeline:
  - Create a "Data Entry" sheet (simulates POS export)
  - Create a "Dashboard" sheet that pulls from Data Entry
  - Add new data to Data Entry → Dashboard updates automatically
  - Write an Apps Script that emails you when a KPI threshold is hit
  - Schedule a weekly "refresh" script

> **🤖 AI Assistance**:
> - **⚡ AI Generate**: "Write a detailed Google Apps Script to email a daily sales summary from Sheet 'Dashboard' to 'manager@email.com'"
> - **🤖 AI Debug**: "I'm getting 'You do not have permission to call ImportRange' error. How do I authorize it inside a formula?"
> - **💡 Ask AI**: "Design a data pipeline architecture for a multi-location restaurant using Google Sheets"
> - **🔍 AI Explain**: "Explain the pros and cons of using Apps Script vs Zapier for F&B data automation"

**Resources**:
**Resources**:
- **Documentation**:
  - Power Automate documentation
- **Tutorials**:
  - Apps Script tutorials
  - Zapier University

**Common Pitfalls**:

❌ **Automation Mistakes**:
- Over-engineering (complex solution for simple problem)
- Not handling errors gracefully (scripts crash)
- Hardcoding values (not flexible)
- No monitoring/logging (can't debug when fails)

❌ **Integration Issues**:
- API rate limits exceeded
- Authentication problems
- Data format mismatches
- No fallback when automation fails

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Set up automated data imports
- [ ] Write basic Apps Script functions
- [ ] Create scheduled triggers
- [ ] Connect spreadsheets with IMPORTRANGE
- [ ] Design multi-user workflows
- [ ] Implement basic error handling in automation

---

## Phase 4: Dashboard Mastery (Weeks 11-13)

### Module 4.1: Data Storytelling with Spreadsheets
**Duration**: 1 week

**Learning Objectives**:
- Construct a narrative arc (Situation, Complication, Resolution) using data.
- Tailor data presentations for distinct audiences (Owners vs. Staff).
- Master "progressive disclosure" techniques to avoid overwhelming stakeholders.

**Topics**:
**Day 1-2: Narrative Structure**:
- **The Data Story Arc**: Setting, Conflict, Climax, Resolution (Recommendation).
- **Structuring the Narrative**: "So What?", "What Now?", and anticipating questions.
- **Audience Adaptation**: Tailoring for Owners vs. GMs vs. Staff.
- **Visual Storytelling**: Using color, annotations, and layout to guide the eye.

**Day 3-5: Spreadsheet Presentation**:
- **Techniques**:
  - **Chaptalization**: Executive Summary -> Deep Dive -> Recommendations sheets.
  - **Navigation**: Hyperlinks, Table of Contents.
  - **Progressive Disclosure**: Start broad, drill down.
  - **Annotations**: Text boxes, callouts.
- **Delivery**:
  - Full-screen mode (View → Full Screen).
  - Print to PDF vs Publish to Web.

**Hands-on Project**:
- Take your dashboard and create a 5-minute data story
- Multiple sheets telling a cohesive narrative
- Present to someone and get feedback

> **🤖 AI Assistance**:
> - **💡 Ask AI**: "I have this data: [describe]. What story could I tell with it?" or "How do I structure a dashboard presentation for non-technical restaurant owners?" or "What makes a spreadsheet BI dashboard portfolio-worthy vs just functional?"
> - **🤖 AI Review**: "Review my data story flow: [describe sequence]. Is it compelling?" or "Review my capstone project scope. Is it achievable in 4 weeks and impressive for portfolio?"
> - **⚡ AI Generate**: "Create realistic F&B dataset for capstone: 3 months transactions, 50 menu items, 3 locations"
> - **🤖 AI Debug**: "My dashboard is slow with 10k rows. Optimization strategies?"

**Resources**:

**Resources**:
- **Books**:
  - "Storytelling with Data" by Cole Nussbaumer Knaflic
  - "Resonate" by Nancy Duarte
  - "Made to Stick" by Chip and Dan Heath
  - "Presentation Zen" by Garr Reynolds
- **Inspiration**:
  - F&B dashboard inspiration
  - Data journalism examples (FiveThirtyEight, The Pudding)
  - TED Talks on data communication
- **Tools & Templates**:
  - Capstone project templates
  - Real F&B datasets (Kaggle)
- **Guides**:
  - Portfolio presentation guides

**Common Pitfalls**:

❌ **Capstone Mistakes**:
- Scope too large (can't finish)
- No clear business problem solved
- Over-engineering for spreadsheets
- Missing documentation

❌ **Presentation & Storytelling Issues**:
- Too technical for audience
- No business impact shown
- Poor visual design
- Not demonstrating skills learned
- No clear narrative (just showing data)
- Too much detail (drowning in numbers)
- Burying the insight (not obvious)
- Technical jargon for non-technical audience
- Reading directly from the dashboard
- Not tailoring to audience
- No call to action
- Defensive when questioned

#### Final Assessment Criteria

Capstone project complete when you can demonstrate:
- [ ] Professional-quality spreadsheet BI dashboard
- [ ] F&B-specific insights and metrics
- [ ] Clean, maintainable formulas and structure
- [ ] User-friendly interface for non-technical users
- [ ] Documentation and user guide
- [ ] Portfolio-ready presentation
- [ ] Ability to explain design decisions
- [ ] Real business value delivered

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Craft compelling data narratives
- [ ] Design multi-sheet story flows
- [ ] Present insights effectively
- [ ] Tailor message to different audiences
- [ ] Handle questions and objections
- [ ] Make data memorable with storytelling techniques

---

### Module 4.2: Advanced Dashboard Techniques
**Duration**: 1.5 weeks

**Taking Your Dashboards to the Next Level**

**Learning Objectives**:
- Create dynamic Named Ranges and advanced lookup systems for flexible reporting.
- Implement sophisticated visual components like Sparklines, Heatmaps, and localized progress bars.
- Optimize spreadsheet performance by reducing volatile functions and efficient formula structuring.

**Topics**:

**Week 1: Advanced Logic & Ranges**:
- **Excel Power Features**:
  - **Dynamic Named Ranges**: `OFFSET()`, `INDEX()`
  - **Advanced Lookups**: `INDEX-MATCH-MATCH`, `INDIRECT`
  - **Controls**: Combo Boxes, List Boxes, VBA Buttons
- **Google Sheets Power Features**:
  - **Nested QUERY()** & **FILTER()** chains
  - **Checkboxes** logic
  - **Apps Script Custom Menus**

**Week 2: Visuals & Optimization**:
- **Visual Enhancements**:
  - **Sparklines**: Excel & Google Sheets syntax
  - **KPI Cards**: Shapes, Icons, Heatmaps
  - **Progress Bars**: `REPT()` formulas
- **Performance**:
  - Reducing volatile functions (`INDIRECT`, `NOW`)
  - Using Helper columns vs Mega-formulas
  - Calculation Options (Manual)
- **Mobile Optimization**: Vertical layouts, Font sizing.

**Hands-on Projects**:
1. Add advanced interactivity to your dashboard:
   - Multi-select capabilities
   - Dynamic chart switching
   - Drill-down functionality
2. Create a mobile-friendly version
3. Optimize a slow dashboard for performance

> **🤖 AI Assistance**:
> - **⚡ AI Generate**: "Create formula for dynamic chart that switches metrics based on dropdown value"
> - **💡 Ask AI**: "My dashboard is slow with 50k rows. What optimization strategies work best?" or "How do I create drill-down functionality in Excel/Google Sheets?"
> - **🤖 AI Review**: "Review my dashboard for performance issues: [describe setup]"

**Resources**:

**Resources**:
- **Tutorials & Courses**:
  - Advanced Excel dashboard tutorials
- **Documentation**:
  - Dynamic named ranges documentation
  - Dashboard interactivity best practices
  - Performance optimization best practices
- **Guides**:
  - Excel advanced charting techniques
  - Form controls and VBA basics
- **Templates**:
  - Excel dashboard templates

**Common Pitfalls**:

❌ **Complexity Issues**:
- Over-complicating with too many features
- Complex formulas hard to maintain
- Volatile functions causing slow performance
- No documentation

❌ **User Experience**:
- Not testing with real users
- Missing usage instructions
- Not mobile-friendly
- Breaking with data updates

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Create advanced interactive dashboards
- [ ] Implement dynamic formulas and charts
- [ ] Optimize dashboard performance
- [ ] Build mobile-friendly layouts
- [ ] Test and validate complex dashboards
- [ ] Document advanced techniques used

---

### Module 4.3: Multi-Workbook BI Systems
**Duration**: 1 week

**Scaling Beyond a Single File**

**Learning Objectives**:
- Design scalable multi-workbook architectures separating Data, Logic, and Presentation layers.
- Manage external references and connections to minimize breakage and maximize speed.
- Implement best practices for version control and system maintenance in a decentralized environment.

**Topics**:

**Day 1-2: Architecture Strategy**:
- **System Design**:
  - Raw Data -> ETL/Cleaning -> Analysis -> Dashboard.
  - Separation of Concerns: Data (Storage) vs Logic (Formulas) vs Presentation (UI).
- **Cross-Workbook Connections**:
  - Excel: External references (`=[Book]Sheet!Cell`) vs Power Query.
  - Google Sheets: `IMPORTRANGE()` best practices.

**Day 3-5: Implementation & Stability**:
- **Best Practices**:
  - Documentation of data flow.
  - Naming conventions.
  - Error handling (`IFERROR` on links).
- **Challenges**:
  - Managing broken links.
  - Circular references.
  - Performance latency testing.

**Hands-on Project**:
- Create a 3-file system:
  1. Raw data file (simulated POS exports)
  2. Processing file (cleans and aggregates)
  3. Dashboard file (pretty & user-friendly)
- Simulate a data update flowing through the system

> **🤖 AI Assistance**:
> - **💡 Ask AI**: "What are the risks of linking Excel workbooks across a network drive?"
> - **🤖 AI Debug**: "My external links return #REF! when I move the source file. How do I fix or prevent this?"
> - **⚡ AI Generate**: "Create a folder structure and naming convention for a multi-file BI system"
> - **🔍 AI Explain**: "Explain the 'Data vs Logic vs Presentation' separation of concerns in spreadsheet modeling"

**Resources**:

**Resources**:
- **Books**:
  - "Information Dashboard Design" by Stephen Few
- **Templates**:
  - Excel dashboard design templates
  - Dashboard layout pattern libraries
- **Guides**:
  - User experience (UX) design principles
  - Excel Dashboard best practices
  - Google Sheets IMPORTRANGE tutorials
  - Excel linking best practices
- **Courses**:
  - Excel Dynamic Dashboard course materials

**Common Pitfalls**:

❌ **Architecture Issues**:
- Poor file organization
- Too many dependencies
- No documentation of connections
- Circular references

❌ **Technical Problems**:
- Broken links when files move
- Slow performance with many links
- No error handling
- Version control challenges

**Assessment Checklist**:

Before moving to Phase 5, you should be able to:
- [ ] Design multi-workbook architectures
- [ ] Connect files effectively
- [ ] Manage external references
- [ ] Handle broken links
- [ ] Document dependencies
- [ ] Apply separation of concerns

---

## Phase 5: F&B Analytics in Spreadsheets (Weeks 14-17)

### Module 5.1: F&B Industry Deep Dive (Applied Modeling)
**Duration**: 1 week

**Learning Objectives**:
- **Translate** operational differences (QSR vs Fine Dining) into distinct data table structures.
- **Model** the "Front of House" vs "Back of House" data flow using spreadsheet lineage.
- **Map** revenue streams to specific spreadsheet column schemas.

**Topics**:
**Day 1-2: Data Modeling**:
- **Data Modeling**: Structuring tables for different business models (e.g., standardizing `order_type` for Ghosts Kitchens).
- **Flow Logic**: tracing data lineage from POS export → Clean Data → Reporting Table.
- **Schema Design**: Designing the master "Transactions" table to handle Dine-in, Takeout, and Delivery rows.

**Day 3-5: Applied Schema Design**:
- **Schema Builder Project**:
  - Create the "perfect" blank data entry template.
  - Handle Modifier normalization (e.g. "No Sugar" columns).
  - Map physical flow to digital schema.

**Reading**: *Prerequisite Theory*: [F&B Mastery Module 1](../fnb-domain/fb_mastery_curriculum.md#module-1-foundation-week-1) (Business Models).

**Hands-on Project**:
- **Schema Builder**: create the "perfect" blank data entry template for:
  - A high-volume Coffeeshop (speed focus).
  - A Fine Dining Restaurant (detail/check-average focus).
- **Flow Diagram**: Draw how data moves from a receipt to your "Daily Sales" sheet.

> **🤖 AI Assistance**:
> - **💡 Ask AI**: "What columns do I need in a raw data table to track both 'Dine-in' and 'Third-party Delivery' orders effectively?"
> - **⚡ AI Generate**: "Create a CSV header row for a restaurant transaction table that covers all revenue streams"
> - **🔍 AI Explain**: "Explain how to normalize 'Modifier' data (like 'No Sugar') in a flat spreadsheet table"

**Resources**:
**Resources**:
- **Guides**:
  - F&B Business Processes guide (`fb_business_processes.md`)
  - Database Normalization for Spreadsheets guides

**Common Pitfalls**:
❌ **Modeling Mistakes**:
- Creating "Reports" manually instead of building a raw data "Table" first.
- Mixing data grain (e.g., daily totals mixed with per-receipt rows).

**Assessment Checklist**:
Before moving forward, you should be able to:
- [ ] Design a data schema that fits different F&B models.
- [ ] Explain why "Flat Data" is better than "Formatted Reports" for input.
- [ ] Map a physical operational flow to a digital data flow.

---

### Module 5.2: F&B Specific Metrics & KPIs (Calculator Build)
**Duration**: 1 week

**Learning Objectives**:
- **Construct** complex formulas for composite F&B metrics (e.g., Prime Cost).
- **Build** dynamic calculators that adjust for variables (like Tax & Gratuity settings).
- **Implement** conditional logic to flag "off-track" metrics automatically.

**Topics**:
**Day 1-2: Formula Logic**:
- **Complex Formulas**: using `SUMIFS`, `GETPIVOTDATA`, and `LET` for readable KPI logic.
- **Cost Modeling**: Building a "Recipe Costing" template that feeds into Food Cost %.

**Day 3-5: User Experience**:
- **Calculator UX**: Designing input cells vs protected calculation cells.
- **Benchmarking Logic**: Writing formulas that compare `Actual` vs `Target` dynamically.

**Reading**: *Prerequisite Theory*: [F&B Mastery Module 3](../fnb-domain/fb_mastery_curriculum.md#module-3-financial--metrics-mastery-week-3-4) (Financial Metrics).

**Hands-on Project**:
- **Build a "Prime Cost" Dashboard Element**:
  - Inputs: Weekly Sales, Purchases, Labor Logs.
  - Logic: Formula to sum Cost categories and divide by Net Sales.
  - Viz: Dynamic conditional formatting (Green if <60%, Red if >60%).

**Make it Reusable**: Use "Named Ranges" (e.g., `Range_Sales`) so formulas read like English (`=SUM(Range_Cost)/SUM(Range_Sales)`).

> **🤖 AI Assistance**:
> - **⚡ AI Generate**: "Write an Excel formula to calculate RevPASH given separate ranges for 'Revenue' and 'OpenHours'"
> - **🤖 AI Debug**: "My Food Cost % formula is including tax. How do I subtract tax from the 'Gross Sales' column inside the SUMIF?"
> - **� Ask AI**: "How do I create a toggle switch in Excel to swap between 'Daily' and 'Weekly' views?"

**Resources**:
**Resources**:
- **Guides**:
  - F&B Mastery Module 3 (Metric Definitions)
  - Spreadsheet UX design patterns
- **Documentation**:
  - Excel "LET" function documentation

**Common Pitfalls**:
❌ **Logic Errors**:
- Hardcoding tax rates (put them in a "Settings" cell!).
- Calculating based on Gross Sales instead of Net Sales (Pre-Tax).

**Assessment Checklist**:
Before moving forward, you should be able to:
- [ ] Write robust formulas for multi-variable KPIs.
- [ ] Use Named Ranges to make complex models readable.
- [ ] Build a tool that separates "Inputs" from "Calculations".

---

### Module 5.3: F&B Dashboards in Spreadsheets
**Duration**: 2 weeks

**Building Real F&B Dashboards**

**Learning Objectives**:
- Build role-specific dashboards tailored for Executives, Kitchen Staff, and Servers.
- Integrate diverse data streams (Sales, Labor, Inventory) into cohesive operational views.
- Design highly interactive interfaces that allow rapid filtering by time, location, or menu category.

**Topics**:

**Week 1: Strategic & Sales Dashboards**:
- **1. Executive Dashboard (Owner/GM)**:
  - Revenue (WTD, MTD, YTD) vs Variance.
  - Prime Cost % & Net Profit %.
  - Top 5 items & Labor budget.
- **2. Sales Analysis Dashboard (Mgmt)**:
  - Trends (30-day, Day-part, Day-of-week).
  - Product Mix (Food vs Bev).
  - Server Performance logic.

**Week 2: Operational Dashboards**:
- **3. Kitchen/Chef Dashboard**:
  - Food Cost % (Actual vs Target).
  - Waste Tracking & Recipe Profitability.
  - Inventory Turn & Menu Engineering Matrix.
- **4. Labor Dashboard**:
  - Labor % vs Budget.
  - OT Warning & Sales per Labor Hour.
  - Labor Cost % (current vs. target)
  - Sales per Labor Hour
  - Scheduled vs. actual hours
  - Overtime hours
  - Labor cost by role (FOH vs. BOH)
  - Staff productivity (sales per person)
- **Interactivity**: Date range, role filter
- **Refresh**: Weekly (after payroll)

**5. Customer Dashboard**
- **Audience**: Management, marketing
- **Contents**:
  - Cover count trends
  - Average check trend
  - Repeat customer %
  - Customer acquisition (new vs. returning)
  - Review scores (Yelp, Google)
  - Sentiment analysis (if you have review text)
  - Loyalty program stats
- **Interactivity**: Date range
- **Refresh**: Weekly

#### Implementation Workflow:
1. **Get Sample Data**:
   - Use provided F&B datasets or create realistic synthetic data
   - POS exports (transactions)
   - Inventory data
   - Labor data
2. **Build Data Model** (if using Excel Power Pivot) or data tables (Sheets)
3. **Create Calculations**: All KPIs and metrics
4. **Design Layout**: Sketch on paper first
5. **Build Dashboard**: Charts, tables, KPIs
6. **Add Interactivity**: Slicers, filters
7. **Test with Users**: Get feedback from someone in F&B if possible
8. **Iterate**: Refine based on feedback

**Hands-on Project**:
Choose 2-3 dashboards from the gallery and build them completely.

> **🤖 AI Assistance**:
> - **⚡ AI Generate**: "Create realistic POS transaction CSV: 500 records, 3 months, weekend peaks, lunch/dinner rushes"
> - **💡 Ask AI**: "What KPIs should go on executive vs kitchen vs server dashboards?"
> - **⚡ AI Generate**: "Generate realistic menu data with costs for 30 F&B items (burgers, pizza, salads, drinks)"
> - **🤖 AI Review**: "Review my F&B dashboard layout: [describe all components]. What's missing?"
> - **⚡ AI Generate**: "Create comprehensive F&B dashboard template with 5 key views (Executive, Sales, Kitchen, Labor, Customer)"
> - **🤖 AI Review**: "Review my F&B dashboard structure for completeness"
> - **💡 Ask AI**: "What interactive features are most valuable in F&B dashboards?"

**Resources**:

**Resources**:
- **Templates**:
  - F&B dashboard templates (Tableau Public, Google Sheets)
- **Case Studies**:
  - Restaurant analytics platforms (Toast, Square)
  - Real F&B analytics case studies
- **Guides**:
  - F&B-specific BI best practices
  - Dashboard design for F&B operators
  - F&B Business Processes guide
- **Data**:
  - Sample F&B data (Kaggle)

**Common Pitfalls**:

❌ **F&B Dashboard Mistakes**:
- Generic dashboards not F&B-tailored
- Missing critical operational metrics
- Too complex for operators
- Not mobile-friendly

❌ **Implementation Issues**:
- Poor data integration
- Slow refresh/performance
- No user guidance
- Missing benchmarks

**Assessment Checklist**:

Before moving forward, you should be able to:
- [ ] Build complete F&B dashboard suites
- [ ] Design for different F&B roles
- [ ] Integrate real F&B data
- [ ] Create operator-friendly interfaces
- [ ] Apply F&B domain expertise
- [ ] Deliver actionable insights

---

### Module 5.4: Advanced F&B Analytics
**Duration**: 1 week

**Sophisticated Analysis in Spreadsheets**

**Learning Objectives**:
- Construct advanced analytical models including Menu Engineering Matrices and Market Basket Analysis.
- Implement predictive techniques like Sales Forecasting using moving averages and seasonality.
- Perform Break-Even and What-If scenario analysis to guide financial decision-making.

**Topics**:

**1. Menu Engineering Matrix**
- **Concept**: Classify items by popularity AND profitability
- **Categories**:
  - **Stars**: High popularity, high profit (promote!)
  - **Plow Horses**: High popularity, low profit (raise price or improve cost)
  - **Puzzles**: Low popularity, high profit (market better)
  - **Dogs**: Low popularity, low profit (remove from menu)
- **In Spreadsheet**:
  - Calculate popularity (% of items sold)
  - Calculate profitability (contribution margin)
  - Use scatter plot to visualize
  - Quadrants with conditional formatting or manual classification

**2. Forecasting**
- **Simple Moving Average**: `=AVERAGE(last 7 days)`
- **Weighted Moving Average**: More weight to recent data
- **Excel**: Forecast Sheet (Data → Forecast Sheet) - automatic time series forecasting
- **Google Sheets**: `=FORECAST()` function or trendline in charts
- **Seasonal Adjustment**: Account for patterns (weekend vs. weekday)

**3. Market Basket Analysis** (What Sells Together?)
- Pivot table: Rows = Item A, Columns = Item B, Values = Count of transactions with both
- Identify combos (e.g., "people who order steak often order wine")
- **Action**: Create combo deals, train servers to upsell

**4. ABC Analysis** (Inventory Prioritization)
- **A Items**: High value, tight control needed (20% of items, 80% of value)
- **B Items**: Moderate value
- **C Items**: Low value (track loosely)
- In Spreadsheet:
  - Sort items by annual usage value
  - Calculate cumulative % of total value
  - Classify: 0-80% = A, 80-95% = B, 95-100% = C

**5.Cohort Analysis** (Customer Retention)
- Group customers by first visit date
- Track return behavior over time
- In Spreadsheet: Pivot table with customer cohorts vs. months since first visit

**6. Break-Even Analysis**
- Fixed Costs: Rent, salaries, etc.
- Variable Costs: Food, hourly labor
- Break-Even Point = Fixed Costs / (Average Check - Variable Cost per Customer)
- **What-If**: Scenario analysis with data tables

**Hands-on Projects**:
1. Build a menu engineering matrix with visual classification
2. Create a sales forecast (next 30 days) using historical data
3. Perform market basket analysis - find top 5 product pairs
4. Build a break-even calculator with scenario analysis

> **🤖 AI Assistance**:
> - **⚡ AI Generate**: "Create formulas for menu engineering matrix (popularity vs profitability quadrants)" or "Create formula for simple moving average sales forecast in spreadsheets" or "Write formula for sales forecast using historical average with seasonal adjustment"
> - **💡 Ask AI**: "How do I calculate 7-day moving average for sales forecasting in spreadsheets?" or "Explain market basket analysis for restaurants. How do I find item pairs that sell together?" or "Build break-even calculator: inputs (fixed costs, variable cost per customer, avg check), output (break-even covers)" or "How to implement ABC analysis for inventory in Google Sheets?"
> - **🔍 AI Explain**: "Explain market basket analysis for menu optimization"

**Resources**:

**Resources**:
- **Tutorials**:
  - Forecasting in spreadsheets tutorials
  - Excel forecasting tutorials
- **Guides**:
  - Market basket analysis guides
  - Advanced spreadsheet formulas
  - Menu engineering guides
- **Case Studies**:
  - F&B analytics case studies
- **Books**:
  - "Restaurant Financial Basics" by Raymond Goodman

**Common Pitfalls**:

❌ **Advanced Analytics Mistakes**:
- Over-complicating with unnecessary complexity
- Insufficient data for reliable forecasts
- Not validating model outputs
- Ignoring F&B seasonality

❌ **Implementation Issues**:
- Complex formulas too slow
- No error handling
- Results not actionable
- Missing business context

**Assessment Checklist**:

Before moving to Capstone, you should be able to:
- [ ] Implement sales forecasting in spreadsheets
- [ ] Conduct inventory ABC analysis
- [ ] Build menu optimization models
- [ ] Apply predictive analytics to F&B
- [ ] Communicate advanced insights simply
- [ ] Validate analytical models

---

## Phase 6: Capstone Project (Weeks 18-20)

### The Ultimate Project: Complete F&B BI System in Spreadsheets

**Learning Objectives**:
- Architect a robust multi-file BI system (Data, Processing, Dashboard layers).
- Synthesize 20+ KPIs into a cohesive, user-friendly visualization suite.
- Deliver a portfolio-ready asset that answers real-world business questions.

**Project Specifications**:

#### 1. Choose Your Platform
- **Excel + Power Tools** (Power Query, Power Pivot, DAX)
- **Google Sheets + Apps Script**
- **Hybrid**: Excel for heavy lifting, Google Sheets for sharing

#### 2. Data Requirements
- **Option A**: Use realistic synthetic F&B data (you create or generate)
- **Option B**: Use actual data from a restaurant (anonymized, with permission)
- **Option C**: Use public F&B datasets (Kaggle, etc.)

**Minimum Data**:
- 6+ months of sales transactions
- Product/menu data with costs
- Inventory data
- Labor data (hours, wages)

#### 3. Build Multi-File System

**File 1: Data Layer**
- Raw data imports
- Power Query cleaning (Excel) or QUERY() processing (Sheets)
- Data model setup (if using Power Pivot)
- Automated refresh capability

**File 2: Analytics Layer** (Optional, can combine with File 3)
- All calculations and KPIs
- Advanced analysis (forecasts, menu engineering, etc.)
- Hidden from end users

**File 3: Dashboard Layer**
- **Executive Summary Dashboard**: One-page overview
- **Sales Dashboard**: Deep-dive on revenue
- **Operations Dashboard**: Food cost, labor, efficiency
- **Customer Dashboard**: Behavior and satisfaction

**Requirements**:
- Minimum 4 dashboards (or 4 pages in one file)
- 20+ KPIs calculated
- 15+ visualizations
- Full interactivity (date filters, category filters minimum)
- Mobile-friendly (at least one dashboard)
- Auto-refresh or easy refresh process
- Designed for "everyman" - no BI expertise needed to use

#### 4. Deliverables

**Technical**:
- Complete working file(s)
- Sample data (if not using real data)
- Refresh instructions (step-by-step)
- Formula documentation (what each key formula does)
- Data dictionary (what each field means)

**User-Facing**:
- **User Guide** (1-2 pages):
  - How to refresh data
  - How to use filters
  - What each dashboard shows
  - How to interpret KPIs
- **Quick Reference Card**: Key metrics definitions
- **Video Walkthrough** (5-10 minutes):
  - Demo of dashboard
  - Show interactivity
  - Explain key insights
  - Show refresh process

**Presentation**:
- **10-minute presentation** covering:
  - Problem you're solving
  - Who this is for
  - Tour of the dashboards
  - Key features
  - Sample insights from the data
  - Why spreadsheets vs. traditional BI
  - Lessons learned

#### 5. Evaluation Criteria

**Functionality** (30%):
- [ ] Calculations are correct
- [ ] Dashboards refresh without breaking
- [ ] Filters work properly
- [ ] No errors visible to user

**Design** (25%):
- [ ] Professional appearance
- [ ] Clear hierarchy and layout
- [ ] Appropriate chart types
- [ ] Consistent color scheme
- [ ] Readable fonts and labels

**Usability** (25%):
- [ ] Non-technical person can use it
- [ ] Intuitive navigation
- [ ] Clear instructions
- [ ] Obvious what to do
- [ ] Context provided (benchmarks, targets)

**Business Value** (20%):
- [ ] Answers real F&B questions
- [ ] Insights are actionable
- [ ] Metrics matter to stakeholders
- [ ] Solves actual pain points

**Bonus Points**:
- [ ] Automated data pipeline
- [ ] Mobile optimization
- [ ] Advanced analytics (forecasting, etc.)
- [ ] Outstanding design
- [ ] Tested with real F&B users

#### 6. Timeline

**Week 1: Planning & Setup**
- [ ] Define scope and users
- [ ] Gather/create data
- [ ] Sketch wireframes
- [ ] Set up file structure
- [ ] Build data model/connections

**Week 2: Building**
- [ ] All calculations and KPIs
- [ ] Build visualizations
- [ ] Create dashboard layouts
- [ ] Add interactivity
- [ ] Initial testing

**Week 3: Polish & Present**
- [ ] Refine design
- [ ] User testing (if possible)
- [ ] Bug fixes
- [ ] Documentation
- [ ] Video walkthrough
- [ ] Final presentation prep
- [ ] Present!

---

## Comparison: Spreadsheets vs. Traditional BI Stack

| Feature | Spreadsheets | SQL + Python + BI Tool |
|---------|-------------|------------------------|
| **Learning Curve** | Low (familiar) | High (3 tools to learn) |
| **Setup Time** | Minutes | Days to weeks |
| **Cost** | $0-150/year | $100-1000s/year |
| **Data Size Limit** | 1-10M rows | Billions of rows |
| **Speed** | Good for small data | Fast for any size |
| **Collaboration** | Good (especially Sheets) | Varies |
| **Customization** | High | Very High |
| **Automation** | Moderate | High |
| **User Accessibility** | Anyone | Requires training |
| **Mobile** | Good (Sheets), OK (Excel) | Varies |
| **Best For** | SMB, departmental, rapid prototyping | Enterprise, big data, complex modeling |

**Bottom Line**: For 80% of small to medium F&B businesses, spreadsheets are perfect. They're accessible, powerful enough, and cost-effective. You can always graduate to traditional BI later if you outgrow spreadsheets.

---

## When to Graduate Beyond Spreadsheets

**Signs You Need a Traditional BI Tool**:
- [ ] Data exceeds 500K rows regularly
- [ ] Performance is too slow
- [ ] Need complex ETL from many sources
- [ ] Real-time dashboards required (second-by-second)
- [ ] Machine learning / advanced predictive analytics needed
- [ ] Dozens of users need different dashboards
- [ ] Enterprise security requirements
- [ ] Integration with data warehouse

**Graduation Path**:
1. Continue using spreadsheets for prototyping and personal analysis
2. Move to **Power BI** (natural extension of Excel + Power tools)
3. Or **Google Data Studio/Looker** (extends Google Sheets)
4. Or **Tableau** (if budget allows)
5. Keep spreadsheets for ad-hoc analysis even after adopting BI tools

---

## Additional Resources

**Resources**:
- **Communities**:
  - **Reddit**: r/excel, r/googlesheets
  - **YouTube**: ExcelIsFun, Learn Google Sheets
- **Reference**:
  - **ExcelJet**: Quick reference
  - **Google Sheets Help**: Official documentation
- **Books**:
  - "Excel Dashboards and Reports" by Michael Alexander
  - "Dashboarding and Reporting with Power Pivot and Excel" by Kasper de Jonge
  - "Google Sheets for Marketers" by Nico Prins
- **Templates**:
  - **Better Sheets**: Community and templates (Google Sheets)
- **Experts**:
  - **Chandoo.org**: Excel dashboards
  - **Ben Collins**: Google Sheets
  - **Mr. Excel**: Forums
  - **Power Pivot Pro**: Advanced BI

---

## Your Learning Path Checklist

- [ ] Complete Phase 1: Foundations (3 weeks)
- [ ] Complete Phase 2: Excel Power Tools (4 weeks) OR skip to Phase 3 if Sheets-only
- [ ] Complete Phase 3: Google Sheets Advanced (3 weeks)
- [ ] Complete Phase 4: Dashboard Mastery (3 weeks)
- [ ] Complete Phase 5: F&B Analytics (4 weeks)
- [ ] Complete Phase 6: Capstone Project (3 weeks)
- [ ] **Total: 4-5 months** (faster than the sql/python track!)

---

## Final Thoughts

**You don't need fancy tools to do professional BI work.** Spreadsheets, when used expertly, can deliver 90% of the value at 10% of the cost and complexity. For the "everyman" running a restaurant, a beautiful, working spreadsheet dashboard they can actually use is infinitely better than a sophisticated Tableau dashboard they don't understand.

**Your competitive advantage**: You'll bridge the gap between technical BI and business users. You speak both languages. That's incredibly valuable.

Now... are you ready to start? 🚀

---

*This curriculum is your roadmap. Adapt it to your pace, your context, and your goals. The best way to learn is by doing. Start building!*
