# Quick Start - Traditional BI Path

Welcome to the Traditional BI learning path! 🚀

## Your Curriculum

📚 **Main Curriculum**: [bi_curriculum.md](bi_curriculum.md)

This is your complete roadmap to mastering BI using SQL, Python, and professional BI tools.

## What You'll Learn

- **Phase 1**: Foundations (3 weeks)
- **Phase 2**: Data Analysis - SQL, Python, Statistics (4 weeks)
- **Phase 3**: Data Visualization & Design (4 weeks)
- **Phase 4**: Business Intelligence & Advanced Dashboards (4 weeks)
- **Phase 5**: F&B Specialization (5 weeks)
- **Phase 6**: Capstone Project (4 weeks)

**Total**: 6-9 months

## First Steps

### 1. Install Required Software

**Python & Jupyter**:
```bash
# Check if Python is installed
python3 --version

# Install if needed (Ubuntu/Debian)
sudo apt install python3 python3-pip python3-venv

# Create virtual environment
cd /home/adeandza/Desktop/anything-goes-v1/traditional-path
python3 -m venv bi-env
source bi-env/bin/activate

# Install libraries
pip install pandas numpy matplotlib jupyter
```

**SQLite** (easiest database):
```bash
sudo apt install sqlite3 sqlitebrowser
```

**BI Tool** (choose one):
- Google Data Studio (free, cloud): https://datastudio.google.com
- Power BI Desktop (Windows): https://powerbi.microsoft.com
- Tableau Public (free): https://public.tableau.com

See [Setup Guide](setup_guide.md) for detailed installation.

### 2. Your First Python Script

**Right now** (10 minutes):
```bash
# Activate environment
cd /home/adeandza/Desktop/anything-goes-v1/traditional-path
source bi-env/bin/activate

# Start Jupyter
jupyter notebook
```

Create new notebook and try:
```python
import pandas as pd
import matplotlib.pyplot as plt

# Create sample data
data = {
    'Product': ['Burger', 'Pizza', 'Salad', 'Pasta'],
    'Sales': [1200, 1500, 800, 1100]
}

df = pd.DataFrame(data)
print(df)

# Create chart
df.plot(x='Product', y='Sales', kind='bar')
plt.title('Sales by Product')
plt.show()
```

### 3. Your First SQL Query

**Next** (10 minutes):
```bash
# Create sample database
cd datasets
sqlite3 practice.db
```

```sql
-- Create table
CREATE TABLE sales (
    product TEXT,
    amount DECIMAL(10,2),
    sale_date DATE
);

-- Insert data
INSERT INTO sales VALUES 
('Burger', 12.99, '2026-01-01'),
('Pizza', 18.99, '2026-01-01'),
('Salad', 9.99, '2026-01-02');

-- Query
SELECT product, SUM(amount) as total
FROM sales
GROUP BY product;

-- Exit
.quit
```

### 4. Start Learning

**Then**:
1. Open [bi_curriculum.md](bi_curriculum.md)
2. Start with **Module 1.1**: Understanding Data & BI
3. Work through systematically
4. Track progress in [progress_tracker.md](progress_tracker.md)

## Resources in This Directory

- `bi_curriculum.md` - Your complete curriculum
- `datasets/` - Database files and CSVs
- `projects/` - Your Python scripts, SQL queries, dashboards
- `notes/` - Code snippets and learning notes
- `resources/` - Database schemas, documentation
- `bi-env/` - Python virtual environment (create this)

## Quick Commands

**Every session**:
```bash
# Navigate and activate Python environment
cd /home/adeandza/Desktop/anything-goes-v1/traditional-path
source bi-env/bin/activate

# Start Jupyter for Python work
jupyter notebook

# Or work with SQLite
sqlite3 datasets/yourdb.db
```

## Need Help?

- Check the curriculum for detailed explanations
- Review the [Setup Guide](setup_guide.md) for installation help
- Kaggle Learn: https://kaggle.com/learn (great tutorials)
- Stack Overflow for specific questions
- r/learnpython, r/SQL on Reddit

## Your Goal

> Build a beautifully working, easy-to-use, and engaging business intelligence & analytics dashboard for the everyman.

Master the technical tools to make this happen!

---

**You've got this!** The traditional path is more technical, but incredibly powerful. 💪📊
