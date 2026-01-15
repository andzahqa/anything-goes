# Sample F&B Datasets

This directory contains practice datasets for learning BI with F&B data.

## Available Datasets

### 1. menu_items.csv
**Description**: Complete menu with products, categories, costs, and prices  
**Use for**: Menu analysis, profitability calculations, food cost %  
**Records**: 35 menu items  
**Fields**:
- `product_id`: Unique identifier
- `product_name`: Item name
- `category`: Main category (Entree, Appetizer, Dessert, Beverage)
- `subcategory`: Detailed category
- `cost`: Cost to make (COGS per item)
- `price`: Selling price
- `active`: 1=currently on menu, 0=discontinued

**Sample Analysis Questions**:
- What is the food cost % by category?
- Which items are most profitable (highest margin)?
- What's the average price point by category?
- Menu engineering: popularity vs. profitability matrix

---

### 2. sample_transactions.csv (Generate this yourself!)

**Suggested Structure**:
```csv
transaction_id,transaction_date,transaction_time,server_id,table_number,payment_method,subtotal,tax,tip,total
1,2025-11-01,18:30:00,5,12,Credit,45.97,3.68,9.00,58.65
```

**How to Create**:
- Use Mockaroo.com or Generatedata.com
- Generate 1000-5000 transactions
- Date range: Last 6-12 months
- Include weekdays and weekends
- Vary times (lunch: 11am-2pm, dinner: 5pm-9pm)

**Use for**: Sales analysis, trend identification, daypart analysis

---

### 3. transaction_items.csv (Goes with #2)

**Suggested Structure**:
```csv
item_id,transaction_id,product_id,quantity,unit_price,item_total
1,1,1,2,12.99,25.98
```

**Use for**: Item-level sales analysis, popular items, upsell patterns

---

### 4. employees.csv

**Suggested Structure**:
```csv
employee_id,first_name,last_name,role,hire_date,hourly_wage,status
1,John,Smith,Server,2024-03-15,15.00,Active
```

**Roles**: Server, Cook, Manager, Host, Bartender

**Use for**: Labor analysis, staff performance

---

### 5. inventory.csv

**Suggested Structure**:
```csv
ingredient_id,ingredient_name,category,unit,quantity_on_hand,par_level,cost_per_unit,supplier
1,Ground Beef,Protein,lb,45,50,4.50,ABC Foods
```

**Use for**: Inventory management, ordering, waste analysis

---

## Quick Start

### Spreadsheet Path:
1. Open `menu_items.csv` in Google Sheets or Excel
2. Create pivot table: Categories vs. Average Price
3. Calculate: `Food Cost % = (cost / price) * 100`
4. Create chart: Sales Price by Category
5. Build simple dashboard showing menu profitability

### Traditional Path:
```python
import pandas as pd

# Load data
menu = pd.read_csv('menu_items.csv')

# Calculate food cost %
menu['food_cost_pct'] = (menu['cost'] / menu['price']) * 100

# Analyze by category
category_analysis = menu.groupby('category').agg({
    'price': 'mean',
    'cost': 'mean',
    'food_cost_pct': 'mean'
}).round(2)

print(category_analysis)
```

Or in SQL (after importing to database):
```sql
SELECT 
    category,
    AVG(price) as avg_price,
    AVG(cost) as avg_cost,
    AVG((cost / price) * 100) as avg_food_cost_pct
FROM menu_items
WHERE active = 1
GROUP BY category
ORDER BY avg_price DESC;
```

---

## Next Steps

1. **Generate More Data**: Use the structures above to create transaction data
2. **Combine Datasets**: Link transactions to menu items (JOIN operation)
3. **Build Dashboards**: Use the data to practice your BI skills
4. **Ask Questions**: What insights can you find in this data?

---

## Need More Data?

**Sources**:
- Kaggle: Search "restaurant sales"
- Mockaroo: Generate custom schemas
- Ask me: I can help generate more realistic F&B datasets

**Tips for Realistic Data**:
- Weekends should have higher sales
- Lunch (11am-2pm) and Dinner (5pm-9pm) are peak times
- Some items are more popular than others (use Pareto principle)
- Seasonal variations (if using >1 year of data)
- Include some returned items, comps, discounts for realism

---

*Start simple with menu_items.csv, then expand to transactional data!*
