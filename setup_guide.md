# Complete BI Learning Environment Setup Guide
## For All Three Learning Paths

> [!IMPORTANT]
> This guide will set up everything you need to start your BI learning journey across all three paths:
> 1. **F&B Domain Knowledge** - Understanding the business
> 2. **Spreadsheet BI Path** - Excel & Google Sheets mastery
> 3. **Traditional BI Path** - SQL, Python, and BI tools
>
> You can set up all three simultaneously, or pick just the path(s) you want to start with.

---

## 📁 Directory Structure

Your learning workspace has been organized as follows:

```
/home/adeandza/Desktop/anything-goes-v1/bi-learning/
│
├── spreadsheet-path/          # Excel & Google Sheets track
│   ├── datasets/              # Practice data files (CSV, Excel)
│   ├── projects/              # Your dashboards and projects
│   ├── notes/                 # Learning notes and formulas
│   └── resources/             # Templates, references
│
├── traditional-path/          # SQL, Python, BI tools track
│   ├── datasets/              # Database files, CSVs
│   ├── projects/              # Python scripts, SQL queries, dashboards
│   ├── notes/                 # Code snippets, concepts
│   └── resources/             # Database schemas, docs
│
├── fb-domain/                 # F&B business knowledge
│   ├── datasets/              # F&B specific sample data
│   ├── projects/              # Business analysis projects
│   ├── notes/                 # Industry research notes
│   └── resources/             # F&B guides, benchmarks
│
└── shared/                    # Resources used across paths
    ├── curricula/             # Your curriculum documents
    ├── progress/              # Progress tracking
    └── datasets/              # Common practice datasets

```

---

## 🛠️ Software Installation Guide

### Path 1: Spreadsheet BI (Recommended to Start)

#### Option A: Google Sheets (Free, Cloud-Based)
**✅ No installation needed!**

**Setup Steps**:
1. **Create Google Account** (if you don't have one):
   - Go to: https://accounts.google.com/signup
   
2. **Access Google Sheets**:
   - Go to: https://sheets.google.com
   - Click "Blank" to create new sheet
   
3. **Install Mobile App** (optional):
   - Android: Google Play Store → "Google Sheets"
   - iOS: App Store → "Google Sheets"

4. **Enable Offline Mode**:
   - Open Google Drive: https://drive.google.com
   - Click Settings ⚙️ → Settings → Enable offline
   - Now you can work without internet!

**Recommended Add-ons** (install later as needed):
- Power Tools (data manipulation)
- Supermetrics (import marketing data)
- Data Connector

---

#### Option B: Microsoft Excel

**Free Options**:
1. **Excel for the Web** (Free, limited features):
   - Requires Microsoft account
   - Go to: https://office.com → Excel
   - Good for basics, lacks Power Pivot/Query

2. **Office 365 Trial** (1 month free):
   - https://www.microsoft.com/en-us/microsoft-365/try
   - Full features including Power tools

3. **LibreOffice Calc** (Free, open-source alternative):
   - Download: https://www.libreoffice.org/download
   - Compatible with Excel files
   - Lacks Power Pivot/Query/DAX

**Paid Options**:
1. **Microsoft 365 Personal** (~$70/year):
   - Full Excel with all Power tools
   - OneDrive cloud storage
   - **Best for serious learning**

2. **One-time Purchase** (Excel 2021):
   - ~$160 one-time
   - No Power Query/Pivot on Mac version!

**Installation (Linux - via Wine)**:
```bash
# Note: Excel runs best on Windows/Mac
# For Linux, use Google Sheets or LibreOffice

# LibreOffice Calc installation:
sudo apt update
sudo apt install libreoffice-calc

# Or download .deb from libreoffice.org
```

**Installation (Windows)**:
- Download from Microsoft Store or office.com
- Run installer
- Sign in with Microsoft account

**Installation (Mac)**:
- Download from office.com or Mac App Store
- Install .pkg file
- **Note**: Mac version lacks Power Query/Pivot!

**Enabling Power Tools (Windows Excel 2013+)**:
```
1. File → Options → Add-ins
2. At bottom, select "COM Add-ins" → Go
3. Check boxes for:
   - Microsoft Power Pivot for Excel
   - Microsoft Power Query for Excel (2013-2016)
   (Excel 2016+ has Power Query built-in: Data → Get Data)
4. Click OK
5. You should see "Power Pivot" tab in ribbon
```

---

### Path 2: Traditional BI Tools

#### 1. Python Setup

**Installation (Linux)**:
```bash
# Check if Python is already installed
python3 --version

# If not installed:
sudo apt update
sudo apt install python3 python3-pip python3-venv

# Verify installation
python3 --version
pip3 --version
```

**Create Virtual Environment for BI Projects**:
```bash
cd /home/adeandza/Desktop/anything-goes-v1/bi-learning/traditional-path

# Create virtual environment
python3 -m venv bi-env

# Activate it
source bi-env/bin/activate

# Your prompt should now show (bi-env)

# Install essential data analysis libraries
pip install pandas numpy matplotlib seaborn jupyter openpyxl

# Install database libraries
pip install sqlalchemy psycopg2-binary

# Install visualization libraries
pip install plotly

# Save installed packages
pip freeze > requirements.txt
```

**Future sessions**: Activate environment with:
```bash
source /home/adeandza/Desktop/anything-goes-v1/bi-learning/traditional-path/bi-env/bin/activate
```

**Jupyter Notebook Setup**:
```bash
# With virtual environment activated
pip install jupyter

# Launch Jupyter
jupyter notebook

# This opens in browser - create notebooks here
# Save them in traditional-path/projects/
```

---

#### 2. SQL Database Setup

**Option A: SQLite (Easiest - File-based, No Server)**

**Installation (Linux)**:
```bash
sudo apt update
sudo apt install sqlite3

# Verify
sqlite3 --version
```

**GUI Tool - DB Browser for SQLite**:
```bash
sudo apt install sqlitebrowser

# Or download from: https://sqlitebrowser.org/dl/
```

**Create Your First Database**:
```bash
cd /home/adeandza/Desktop/anything-goes-v1/bi-learning/traditional-path/datasets

# Create a database
sqlite3 restaurant.db

# You're now in SQLite prompt
# Try:
.help
.tables
.quit
```

---

**Option B: PostgreSQL (More Powerful, Industry Standard)**

**Installation (Linux)**:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Switch to postgres user
sudo -i -u postgres

# Access PostgreSQL prompt
psql

# Create your user
CREATE USER yourusername WITH PASSWORD 'yourpassword';
CREATE DATABASE bi_learning OWNER yourusername;
GRANT ALL PRIVILEGES ON DATABASE bi_learning TO yourusername;

# Exit
\q
exit

# Connect as your user
psql -U yourusername -d bi_learning -h localhost
```

**GUI Tool - pgAdmin**:
```bash
# Install pgAdmin 4
sudo apt install pgadmin4

# Or use DBeaver (works with many databases)
# Download from: https://dbeaver.io/download/
```

---

#### 3. BI Visualization Tools

**Option A: Google Data Studio (Free, Cloud-Based)**

**Setup**:
1. Go to: https://datastudio.google.com
2. Sign in with Google account
3. Click "Create" → "Data Source" to start
4. No installation needed!

**Pros**: Free, cloud-based, easy sharing, good for beginners
**Cons**: Less powerful than Tableau/Power BI

---

**Option B: Power BI Desktop (Free for Windows)**

**Installation (Windows Only)**:
1. Download from: https://powerbi.microsoft.com/desktop/
2. Run installer
3. Sign in with Microsoft account

**For Linux**: Use Power BI in browser (limited) or Windows VM

**Pros**: Powerful, free desktop version, integrates with Excel
**Cons**: Windows only, publishing requires paid license

---

**Option C: Tableau Public (Free)**

**Installation**:
1. Download from: https://public.tableau.com/app/discover
2. Install for your OS (Windows, Mac)
3. Create account

**For Linux**: 
- Not officially supported
- Use Wine or VM
- Or use Tableau Cloud trial

**Pros**: Very powerful, beautiful visualizations, free public version
**Cons**: Published dashboards are public, limited data connectors in free version

---

**Option D: Metabase (Free, Open-Source)**

**Installation (Linux - Docker)**:
```bash
# Install Docker first
sudo apt install docker.io docker-compose

# Run Metabase
docker run -d -p 3000:3000 --name metabase metabase/metabase

# Access at: http://localhost:3000
# Follow setup wizard
```

**Pros**: Free, self-hosted, clean interface, SQL queries
**Cons**: Less advanced features than commercial tools

---

**Option E: Apache Superset (Free, Open-Source, Advanced)**

**Installation (Linux - Docker)**:
```bash
# Clone repository
git clone https://github.com/apache/superset.git
cd superset

# Run with Docker Compose
docker-compose -f docker-compose-non-dev.yml up

# Access at: http://localhost:8088
# Default login: admin/admin
```

**Pros**: Very powerful, free, modern, SQL support
**Cons**: Steeper learning curve, requires technical setup

---

### Recommendation: Which Tools to Start With?

**Beginner Path (Spreadsheet BI)**:
- ✅ **Google Sheets** (free, easy, cloud)
- ✅ **Excel Online** (if you have Microsoft account)
- Later: Excel desktop with Power tools

**Intermediate Path (Traditional BI)**:
- ✅ **Python** + **Jupyter** (data manipulation)
- ✅ **SQLite** + **DB Browser** (easiest SQL setup)
- ✅ **Google Data Studio** (free visualization)
- Later: PostgreSQL, Tableau Public

**Advanced Path (Full Stack)**:
- ✅ All of the above
- ✅ **PostgreSQL** (real database)
- ✅ **Power BI** or **Tableau** (professional viz)
- ✅ **Metabase** or **Superset** (self-hosted BI)

---

## 📊 Practice Datasets

### Where to Find F&B Practice Data

#### Option 1: Use Our Provided Sample Datasets

I'll help you create realistic F&B sample data. Let me know and I'll generate:
- POS transaction data (sales)
- Menu/product data
- Inventory data
- Employee/labor data
- Customer data

#### Option 2: Download Public Datasets

**F&B Specific**:
1. **Kaggle**:
   - https://www.kaggle.com/datasets
   - Search: "restaurant sales", "food delivery", "menu analysis"
   - Recommended:
     - Restaurant Revenue Prediction
     - Zomato Bangalore Restaurants
     - Food Delivery datasets

2. **Data.world**:
   - https://data.world
   - Search: "restaurant", "food service"

3. **UCI Machine Learning Repository**:
   - https://archive.ics.uci.edu/ml/datasets.php
   - Restaurant customer data

4. **Google Dataset Search**:
   - https://datasetsearch.research.google.com
   - Search: "restaurant data"

**General Business Data** (adaptable to F&B):
- Sample Superstore (Tableau default dataset)
- Northwind Database (classic sales DB)
- Adventure Works (Microsoft sample DB)

#### Option 3: Generate Synthetic Data

**Tools for Creating Realistic Data**:
1. **Mockaroo** (https://mockaroo.com):
   - Free tier: 1,000 rows
   - Custom schemas
   - Export to CSV, SQL, Excel

2. **Generatedata.com** (https://generatedata.com):
   - Open-source
   - Unlimited rows
   - Many data types

**Sample Schema for F&B POS Data**:
```
Transactions Table:
- transaction_id (auto-increment)
- transaction_date (date range: last 12 months)
- transaction_time (time)
- server_id (number, 1-20)
- table_number (number, 1-30)
- payment_method (Cash, Credit, Debit, Mobile)
- tip_amount (currency)
- total_amount (currency)

Transaction_Items Table:
- item_id (auto-increment)
- transaction_id (foreign key)
- product_id (foreign key)
- quantity (number, 1-5)
- unit_price (currency)
- subtotal (currency)

Products Table:
- product_id (auto-increment)
- product_name
- category (Appetizer, Entree, Dessert, Beverage)
- subcategory (Pasta, Seafood, etc.)
- cost (currency)
- price (currency)

Employees Table:
- employee_id
- name
- role (Server, Cook, Manager, etc.)
- hire_date
- hourly_wage

Inventory Table:
- ingredient_id
- ingredient_name
- unit_type (lb, oz, each, gallon)
- current_quantity
- par_level
- cost_per_unit
```

---

## 📈 Progress Tracking System

### Learning Journal Template

I'll create tracking templates for you:

1. **Weekly Learning Log**:
   - What you learned
   - Projects completed
   - Challenges faced
   - Questions to research

2. **Module Checklist**:
   - Track completion of each curriculum module
   - Notes and key takeaways

3. **Project Portfolio**:
   - Document each dashboard/project
   - Screenshots and descriptions
   - What you learned

4. **Skills Matrix**:
   - Rate yourself 1-5 on each skill
   - Update monthly

Let me create these for you...

---

## 🚀 Quick Start Guides

### Path 1: Spreadsheet BI - First Steps

**Week 1 Goals**:
- [  ] Open Google Sheets or Excel
- [  ] Complete basic formula tutorial
- [  ] Download sample sales dataset
- [  ] Create your first pivot table
- [  ] Build a simple chart

**Getting Started Today**:
1. Open Google Sheets: https://sheets.google.com
2. Click "Blank" for new sheet
3. File → Import → Upload a CSV file
4. Try these formulas:
   ```
   =SUM(A1:A10)
   =AVERAGE(B1:B10)
   =IF(C1>100, "High", "Low")
   ```
5. Insert → Pivot table → Explore your data
6. Insert → Chart → Create a visualization

**First Project**: Import sales data, create a pivot table showing sales by product, create a column chart.

---

### Path 2: Traditional BI - First Steps

**Week 1 Goals**:
- [  ] Install Python and Jupyter
- [  ] Install SQLite and DB Browser
- [  ] Run your first Python script
- [  ] Create your first database
- [  ] Execute your first SQL query

**Getting Started Today**:

**Python**:
```bash
# Activate your virtual environment
source /home/adeandza/Desktop/anything-goes-v1/bi-learning/traditional-path/bi-env/bin/activate

# Start Jupyter
jupyter notebook

# Create new notebook
# Try this code:
```

```python
import pandas as pd
import matplotlib.pyplot as plt

# Create sample data
data = {
    'Product': ['Burger', 'Pizza', 'Salad', 'Pasta'],
    'Sales': [1200, 1500, 800, 1100]
}

df = pd.DataFrame(data)

# Display
print(df)

# Create chart
df.plot(x='Product', y='Sales', kind='bar')
plt.title('Sales by Product')
plt.show()
```

**SQL**:
```bash
# Open DB Browser for SQLite
sqlitebrowser

# Or command line:
cd /home/adeandza/Desktop/anything-goes-v1/bi-learning/traditional-path/datasets
sqlite3 practice.db
```

```sql
-- Create table
CREATE TABLE sales (
    id INTEGER PRIMARY KEY,
    product TEXT,
    amount DECIMAL(10,2),
    sale_date DATE
);

-- Insert data
INSERT INTO sales (product, amount, sale_date) VALUES
('Burger', 12.99, '2026-01-01'),
('Pizza', 18.99, '2026-01-01'),
('Salad', 9.99, '2026-01-02');

-- Query data
SELECT product, SUM(amount) as total_sales
FROM sales
GROUP BY product
ORDER BY total_sales DESC;
```

---

### Path 3: F&B Domain - First Steps

**Week 1 Goals**:
- [  ] Read F&B Business Processes guide (skim)
- [  ] Identify a restaurant to observe (or research online)
- [  ] List 20 questions a restaurant owner would want answered
- [  ] Sketch a concept map of F&B data flow
- [  ] Find an F&B dataset to analyze

**Getting Started Today**:
1. Open: [F&B Business Processes Guide](./fb_business_processes.md)
2. Read: "F&B Business Overview" section
3. Activity: Visit a restaurant and observe:
   - How do they take orders?
   - How does food get from kitchen to table?
   - What data is being generated?
   - What problems might they have?
4. Write down your observations
5. Think about: What dashboard would help them most?

---

## 🔄 Integrated Learning Workflow

**Recommended Approach**: Learn all three paths in parallel!

**Weekly Schedule Example** (10-15 hours/week):

**Monday** (2 hours): Spreadsheet Skills
- Work through spreadsheet curriculum modules
- Practice formulas and pivot tables

**Tuesday** (1 hour): F&B Domain Reading
- Read F&B business processes
- Research industry metrics and best practices

**Wednesday** (2 hours): Spreadsheet Projects
- Apply what you learned to F&B dataset
- Build mini-dashboards

**Thursday** (2 hours): Traditional BI (if pursuing)
- Python or SQL tutorials
- Practice with same F&B dataset

**Friday** (2 hours): Project Work
- Build something from scratch
- Combine spreadsheet + F&B knowledge

**Saturday** (2 hours): Deep Dive
- Longer project work
- Experiment and explore

**Sunday** (1 hour): Review & Plan
- Review what you learned
- Update progress tracker
- Plan next week

---

## 📚 Essential Resources (Bookmarks)

### Spreadsheet BI:
- **Google Sheets**: https://sheets.google.com
- **Ben Collins** (Sheets expert): https://benlcollins.com
- **Chandoo**: https://chandoo.org (Excel dashboards)
- **ExcelJet**: https://exceljet.net (quick reference)

### Traditional BI:
- **Kaggle Learn**: https://kaggle.com/learn (Python, SQL, data viz)
- **Mode SQL Tutorial**: https://mode.com/sql-tutorial
- **Python for Data Analysis**: Book by Wes McKinney
- **DataCamp**: https://datacamp.com (interactive courses)

### F&B Industry:
- **National Restaurant Association**: https://restaurant.org
- **Toast Resources**: https://pos.toasttab.com/blog
- **Restaurant Business Online**: https://restaurantbusinessonline.com

### General BI:
- **r/BusinessIntelligence**: https://reddit.com/r/BusinessIntelligence
- **r/dataisbeautiful**: https://reddit.com/r/dataisbeautiful
- **Storytelling with Data**: https://storytellingwithdata.com

---

## ✅ Final Setup Checklist

### Before You Start Learning:

**Environment**:
- [  ] Directory structure created
- [  ] At least one spreadsheet tool accessible (Sheets or Excel)
- [  ] (Optional) Python + Jupyter installed if doing traditional path
- [  ] (Optional) SQL database installed if doing traditional path

**Resources**:
- [  ] Curriculum documents saved and accessible
- [  ] Bookmark essential resource links
- [  ] Join relevant Reddit communities or forums
- [  ] Find at least one F&B practice dataset

**Tracking**:
- [  ] Create learning journal (notebook or digital)
- [  ] Set up progress tracker
- [  ] Define your weekly schedule
- [  ] Set your 3-month and 6-month goals

**Mindset**:
- [  ] Committed to regular practice (consistency > intensity)
- [  ] Ready to build projects (not just consume tutorials)
- [  ] Open to asking questions and seeking help
- [  ] Excited about your goal: beautiful BI dashboards for the everyman!

---

## 🎯 What's Next?

**Choose Your Starting Point**:

### Option 1: Spreadsheet BI Path (Recommended)
→ Start with Module 1.2 in [Spreadsheet BI Curriculum](./spreadsheet_bi_curriculum.md)
→ **First lesson**: Google Sheets basic formulas

### Option 2: Traditional BI Path
→ Start with Module 1.1 in [Traditional BI Curriculum](./bi_curriculum.md)
→ **First lesson**: Understanding Data & BI

### Option 3: F&B Domain First
→ Start with [F&B Business Processes](./fb_business_processes.md)
→ **First chapter**: F&B Business Overview section

**My Recommendation**: 
1. Spend 1-2 hours reading F&B domain basics (understand the business)
2. Dive into Spreadsheet BI path (most accessible and practical)
3. Add traditional BI tools later if you need more power

---

## 🆘 Getting Help

**Stuck on Setup?**
- Google the error message + your OS
- Check software documentation
- Ask on Reddit (r/excel, r/learnpython, r/SQL)
- Let me know - I can help troubleshoot!

**Learning Questions?**
- Review curriculum sections
- Check suggested resources
- Build small test projects
- Explain concepts to someone else (Feynman technique)

**Motivation Issues?**
- Review your goal: beautiful dashboard for the everyman
- Start smaller - one small win today
- Join a community for accountability
- Remember: consistency beats intensity

---

## 🎓 You're Ready!

You now have:
✅ Three comprehensive curricula  
✅ Organized directory structure  
✅ Software installation guides  
✅ Practice dataset sources  
✅ Progress tracking system  
✅ Quick start guides for each path  

**The hardest part is starting. But you've already done that by setting this up.**

**Your first task**: Pick ONE thing from the quick start guide and do it TODAY. Just one thing. Then tomorrow, one more thing. That's how mastery is built.

Go build something amazing! 🚀📊

---

*Setup guide created: January 2026*  
*Your journey to BI mastery starts now.*
