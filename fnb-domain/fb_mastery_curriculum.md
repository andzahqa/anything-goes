# F&B Domain Business Processes - Mastery Curriculum
## From Zero to F&B Business Expert

> [!IMPORTANT]
> **Why This Curriculum**: You cannot build effective BI solutions without deeply understanding the business. This curriculum teaches you F&B operations like an industry insider, enabling you to build dashboards that solve real problems.

---

## Curriculum Overview

**Total Time**: 40-60 hours over 4-6 weeks
**Format**: Self-paced reading + hands-on observation + practice projects
**Outcome**: Deep understanding of F&B operations suitable for building professional BI solutions

---

## Learning Philosophy

**Not Just Theory**:
- Read → Observe → Apply
- Every concept backed by real numbers
- Indonesian context (applicable to SEA markets)
- Practical BI opportunities highlighted

**AI-Assisted Learning**:
> Throughout this curriculum, you'll see AI learning markers (💡 Ask AI, ⚡ AI Generate, 🔍 AI Explain, 🤖 AI Debug, 🤖 AI Review). See `../ai-guided-learning_guide.md` for detailed strategies on leveraging AI to accelerate your learning.

---

## Phase 1: Foundation (Week 1) - 10-12 hours

### Goal: Understand the F&B Landscape

**📚 Reading** (6-8 hours):
1. **Complete Indonesia F&B Guide** - `fb_business_processes_indonesia.md`
   - Start to finish (1,953 lines, comprehensive!)
   - Take notes on unfamiliar concepts
   - Highlight sections you don't understand yet
   
   
   🔍 **AI Explain**: For any unfamiliar F&B terms (FOH, BOH, prime cost, etc.), ask AI: "Explain [concept] in F&B context with Indonesian examples"🔍 **AI Explain**: For any unfamiliar F&B terms (FOH, BOH, prime cost, etc.), ask AI: "Explain [concept] in F&B context with Indonesian examples"

**Reading Strategy**:
```
Day 1 (2 hours): Market Overview + Traditional Models
- Indonesia F&B Overview
- Warung, Warteg, Nasi Padang
- Kaki Lima, Angkringan

Day 2 (2 hours): Modern & International
- QSR Chains (KFC, McDonald's Indonesia)
- Coffee Chains (Kopi Kenangan vs Starbucks)
- Food Courts, Fine Dining

Day 3 (2-3 hours): Operations Deep Dive
- FOH & BOH Operations
- Supply Chain (Pasar tradisional sourcing)
- Customer Journey

Day 4 (2 hours): Business Management
- Staff Management (UMR, BPJS, turnover)
- Technology Systems (POS, GoFood integration)
- Financial Metrics
```

**🔍 Observation Exercise** (3-4 hours):
1. **Visit 3 Different F&B Types**:
   - Warung (local, cheap)
   - Mall restaurant (modern)
   - Coffee shop (Kopi Kenangan or Starbucks)
   
   
   💡 **Ask AI**: "What should I observe when visiting a [warung/mall restaurant/coffee shop] to understand their business operations?"💡 **Ask AI**: "What should I observe when visiting a [warung/mall restaurant/coffee shop] to understand their business operations?"

2. **Observe & Document**:
   - Service flow (greeting → order → food → payment)
   - Technology used (POS, tablets, payment methods)
   - Staff roles (who does what?)
   - Customer behavior (average time, payment preference)
   - Menu pricing (take photos!)

3. **Create Observation Log**:
```markdown
## Warung Observation - [Name] - [Date]

Location: [Address]
Time: [When you visited]
Duration: [How long you observed]

### Operations:
- How orders are taken: [verbal, written, POS?]
- Kitchen setup: [visible? equipment seen?]
- Service speed: [minutes from order to food]
- Payment: [cash, gopay, other?]

### Economics (estimate):
- Average customer spend: Rp [estimate]
- Covers during visit: [count]
- Staff count: [how many people working?]

### Technology:
- POS system: [yes/no, which one?]
- Payment methods accepted: [list]
- GoFood/Grab: [integrated? tablet visible?]

### Questions This Business Might Have:
1. [What data would help them?]
2. [What problems did you notice?]
3. [What BI dashboard would be useful?]
```

⚡ **AI Generate**: Ask AI to generate a detailed observation framework template for each F&B type
🤖 **AI Review**: Share your observation logs with AI for completeness and insight quality feedback

#### Resources

- **Documentation**:
  - Indonesia F&B Guide (`fb_business_processes_indonesia.md`)
- **Books**:
  - "Setting the Table" by Danny Meyer
- **Media**:
  - YouTube Restaurant Day-in-life
  - Local Food Vlogs

> **🤖 AI Assistance**:
> - **🔍 AI Explain**: "Explain [concept] in F&B context with Indonesian examples"
> - **💡 Ask AI**: "What should I observe when visiting a [warung/mall restaurant/coffee shop] to understand their business operations?"
> - **⚡ AI Generate**: "Ask AI to generate a detailed observation framework template for each F&B type"
> - **🤖 AI Review**: "Share your observation logs with AI for completeness and insight quality feedback"

#### Common Pitfalls

❌ **Observation Mistakes**:
- Only visiting during slow hours (miss peak operations)
- Not asking permission before taking photos/notes
- Making assumptions without verification
- Only observing front-of-house (missing kitchen operations)

❌ **Learning Mistakes**:
- Reading without taking notes (information overload)
- Not connecting theory to real observations
- Skipping the observation exercise (crucial for understanding)
- Assuming all F&B businesses work the same way

#### Assessment Checklist

Before moving to Phase 2, you should be able to:
- [ ] Explain the difference between warung, warteg, and kaki lima
- [ ] Describe FOH and BOH operations
- [ ] List major F&B business models in Indonesia
- [ ] Identify at least 10 data points generated in an F&B transaction
- [ ] Explain how GoFood/Grab integration works
- [ ] Compare traditional vs modern F&B operations

**✅ Phase 1 Completion Checklist**:
- [ ] Read complete Indonesia F&B guide
- [ ] Visited 3 different F&B types
- [ ] Created observation logs for each
- [ ] Listed 10 BI dashboard ideas based on observations

---

## Phase 2: Deep Dive - Operations (Week 2) - 10-12 hours

### Goal: Understand Daily Workflows & Data Generation

**📚 Reading** (4 hours):
1. **Re-read with Focus**:
   - FOH & BOH Operations section (detailed)
   - Supply Chain section
   - Operations & Workflows section

2. **Additional Resources** (if available in `resources/` folder):
   - Regional guides (compare Indonesia to other countries)
   - Note differences and similarities

**🎯 Mapping Exercise** (3 hours):
Create **Data Flow Maps** for each business model:

**Example: Warung Data Flow Map**
```
Customer Journey → Data Generated:

1. Customer enters
   ↓ [No data - walk-in]

2. Sits at table
   ↓ [Table occupied - mental note]

3. Orders: Nasi goreng + es teh
   ↓ [Data: Order written on paper scrap]

4. Owner shouts to kitchen
   ↓ [Data: Verbal communication, no system]

5. Food prepared (8 minutes)
   ↓ [Data: None - no timer]

6. Food served
   ↓ [Data: None]

7. Customer asks for bill
   ↓ [Data: Mental calculation]
   ↓ "Nasi goreng 15 ribu, es teh 3 ribu, total 18 ribu"

8. Cash payment
   ↓ [Data: Cash in drawer, maybe noted in notebook end of day]

9. Customer leaves
   ↓ [Data: Maybe tally mark?]

BI Opportunity:
- What data is MISSING that would help?
- How could simple tech improve this?
- What's the ROI of adding a basic POS?
```

**Create Maps For**:
- [ ] Warung (traditional, minimal tech)
- [ ] Modern restaurant (mall, POS system)
- [ ] Cloud kitchen (delivery-only, app-driven)



**🔬 Interview Exercise** (3 hours):
**Find and interview someone who works in F&B** (server, cook, owner):

Questions to ask:
```
Operations:
1. What's the busiest time of day? Why?
2. How do you know when to restock ingredients?
3. What's the hardest part of daily operations?

Technology:
4. What technology do you use? (POS, apps, etc.)
5. How do you track inventory?
6. Do you use GoFood/Grab? What's the commission?

Financials:
7. What metrics does the owner track?
8. How often do they review reports?
9. What data do they wish they had?

Pain Points:
10. What wastes the most time daily?
11. What causes the most losses (waste, theft, etc.)?
12. If you could change one thing, what would it be?
```



**Document Interview**:
- Create `fnb-domain/notes/interview_[name]_[date].md`
- Highlight insights relevant to BI

**Tools**:
- **Diagramming**: Draw.io / Lucidchart (Data Flow Maps)
- **Transcription**: Otter.ai / Voice Recorder (Interview capture)
- **Notes**: Notion / Obsidian (Structured observation logs)

#### Resources

- **Templates**:
  - Data Flow Diagram Template
  - Interview Question Bank
- **Reading**:
  - "The Lean Startup" (MVP thinking)
- **Community**:
  - F&B Facebook Groups Indonesia

> **🤖 AI Assistance**:
> - **💡 Ask AI**: "Help me create a data flow diagram for [business model] - what data touchpoints should I include?"
> - **💡 Ask AI**: "What are good interview questions to understand F&B operations for someone building a BI dashboard?"
> - **⚡ AI Generate**: "Create interview question list for F&B owners/managers/staff covering operations, pain points, and data needs"
> - **🤖 AI Review**: "I interviewed [role]. Here are their answers: [summary]. What insights can I draw for BI opportunities?"

#### Common Pitfalls

❌ **Mapping Mistakes**:
- Creating overly complex diagrams (keep it simple)
- Missing critical touchpoints (payment, inventory checks)
- Not identifying where data is lost or manual
- Assuming all businesses use the same workflow

❌ **Interview Mistakes**:
- Not building rapport first (jump straight to questions)
- Asking leading questions
- Not listening actively (focused on next question)
- Interrupting or judging their current processes

#### Assessment Checklist

Before moving to Phase 3, you should be able to:
- [ ] Draw complete data flow maps for 3 different F&B models
- [ ] Identify 15+ data touchpoints in restaurant operations
- [ ] Explain the customer journey from entry to exit
- [ ] Describe supply chain flow (supplier → kitchen → customer)
- [ ] List common pain points F&B operators face
- [ ] Identify where technology can add most value

**✅ Phase 2 Completion Checklist**:
- [ ] Created data flow maps for 3 business models
- [ ] Interviewed someone in F&B
- [ ] Documented interview insights
- [ ] Identified process improvement opportunities

---

## Phase 3: Financial & Metrics Mastery (Week 3-4) - 12-15 hours

### Goal: Understand the Numbers That Matter

**📚 Reading** (3 hours):
1. **Focus Sections**:
   - Financial Metrics (Indonesia guide)
   - Business models economics (all 13 models!)
   - Challenges & BI Solutions

2. **Create Metrics Cheat Sheet**:
```markdown
# F&B Metrics Cheat Sheet

## Food Cost %
Formula: (COGS / Food Sales) × 100
Target: 28-35% (Indonesia)
Why: Too high = losing money, too low = quality concerns

## Labor Cost %
Formula: (Labor / Sales) × 100
Target: 25-32% (Indonesia chains), 15-20% (warung family labor)
Why: Biggest expense after food, must optimize

## Prime Cost %
Formula: (COGS + Labor) / Sales × 100
Target: <65% (sustainable)
Why: Combined food + labor = baseline profitability

[Continue for all metrics from guide...]
```



**📊 Practice Calculation** (4-5 hours):
**Using Real/Simulated Data**:
[Continue for all metrics from guide...]
```

🔍 **AI Explain**: "Explain the difference between gross margin and contribution margin in F&B context with examples"


**Exercise 1: Warung Economics Calculation**
```
Given:
- Daily customers: 120
- Average spend: Rp 20,000
- Daily ingredient cost: Rp 850,000
- Rent: Rp 4,000,000/month
- Labor: Owner + spouse (no wage, but value = Rp 8M/month)

Calculate:
1. Daily revenue
2. Monthly revenue
3. Food cost %
4. Gross margin %
5. Net profit (if owner takes Rp 8M salary)
6. Is this sustainable?

Analyze:
- What if ingredients cost increases 15%?
- What if lose 10% customers?
- What if delivery (25% commission) = 30% of orders?
```



**Exercise 2: Modern Restaurant Analysis**
```
Given (from guide - KFC-type economics):
- Monthly revenue: Rp 500M
- Food cost: 30%
- Rent: Rp 70M
- Labor: 18%
- Royalty: 6%

Calculate:
1. Food cost (Rp)
2. Labor cost (Rp)
3. Total costs (Rp and %)
4. Net profit (Rp and %)
5. Break-even revenue

Analyze:
- What happens if revenue drops 20% (slow month)?
- How many customers needed daily at Rp 38k average?
- What if labor cost increases 25% (new minimum wage)?
```

**Create Spreadsheet Models** (`fnb-domain/projects/`):
- [ ] Warung profitability calculator
- [ ] Restaurant break-even analyzer
- [ ] Menu item profitability matrix
- [ ] Ramadan revenue planner (40-60% spike)



**Tools**:
- **Documentation**: Camera (Menu prices, layout), Voice Recorder (Staff interviews - with permission)
- **Logging**: Notion / Obsidian / Physical Notebook
- **Discovery**: Google Maps (Review analysis), Zomato / PergiKuliner (Competitor research)
- **Spreadsheet**: Excel / Google Sheets (Key functions: `SUMIFS`, `VLOOKUP`, Pivot Tables)
- **Calculators**: Financial Calculator (Prime Cost, RevPASH)
- **Reporting**: POS Reports (Toast, Square, Moka exports)
- **Analysis**: Menu Engineering Matrix Template (Stars/Dogs quadrant)

#### Resources

- **Books**:
  - "Restaurant Success by the Numbers" by Roger Fields
- **Data**:
  - BPS Indonesia F&B Statistics
  - National Restaurant Association Benchmarks
  - Kaggle F&B Datasets
- **Templates**:
  - Financial Modeling Calculator
  - Menu Engineering Matrix
  - Capstone Project Templates

> **🤖 AI Assistance**:
> - **🔍 AI Explain**: "Explain the difference between gross margin and contribution margin in F&B context"
> - **⚡ AI Generate**: "Ask AI to create 5 more realistic F&B scenarios with varying business models"
> - **🤖 AI Debug**: "If your calculations don't match expected ranges, paste your work to AI for verification"
> - **⚡ AI Generate**: "Generate realistic sample data for each model"
> - **🤖 AI Review**: "Share your spreadsheet formulas with AI for optimization suggestions"
> - **🔍 AI Explain**: "Explain the menu engineering matrix - how to classify menu items as Stars, Plow Horses, Puzzles, and Dogs"
> - **⚡ AI Generate**: "Generate sample menu data (20 items) with popularity and profit margin"
> - **💡 Ask AI**: "What are typical food cost % targets for different F&B types?"





#### Common Pitfalls

❌ **Metric Mistakes**:
- Focusing only on revenue (ignoring costs)
- Not understanding the difference between margin and markup
- Comparing metrics across different F&B types (apples to oranges)
- Ignoring regional cost differences (Jakarta vs Yogyakarta)

❌ **Calculation Errors**:
- Not including ALL costs in prime cost (forgetting benefits, taxes)
- Using gross revenue instead of net for calculations
- Not accounting for waste and spoilage
- Mixing up percentages (20% margin ≠ 20% markup)

#### Assessment Checklist

Before moving to Phase 4, you should be able to:
- [ ] Calculate food cost %, labor cost %, and prime cost %
- [ ] Explain what RevPASH is and why it matters
- [ ] Perform menu engineering analysis
- [ ] Compare financial metrics across F&B types
- [ ] Identify when a metric is "good" vs "concerning"
- [ ] Build a financial model in Excel/Sheets

**✅ Phase 3 Completion Checklist**:
- [ ] Built F&B financial calculator
- [ ] Calculated metrics for 3 different businesses
- [ ] Performed menu analysis on real/sample menu
- [ ] Understood regional variations in costs based on observations

---

## Phase 4: Regional Comparison & Patterns (Week 5) - 8-10 hours

### Goal: Understand Market Variations & Identify Patterns

**📚 Reading** (5-6 hours):
1. **Compare Regional Guides** (in `resources/regional_guides/`):
   - Pick 3 countries: Indonesia + 2 others (e.g., Thailand, Singapore)
   - OR: Pick 3 USA cities (NYC, LA, Austin)
   - Read with comparative lens

2. **Create Comparison Matrix**:
```markdown
| Metric | Indonesia (Jakarta) | Thailand (Bangkok) | Singapore |
|--------|---------------------|-------------------|-----------|
| Avg meal cost | Rp 20k ($1.25) | 40-60 baht ($1.20-1.80) | $5-8 SGD |
| Labor cost % | 25-32% | 28-35% | 35-40% |
| Rent burden | 6-12% | 8-15% | 15-25%! |
| Digital payment | 45% | 60% | 80% |
| Key differentiator | Ramadan +50% | Street food dominant | Hawker centers |
```
| Key differentiator | Ramadan +50% | Street food dominant | Hawker centers |
```

⚡ **AI Generate**: "Create a comparison matrix template for 5 countries with 15 F&B business metrics"


**🔍 Pattern Exercise** (3-4 hours):
**Identify Universal vs Regional**:

**Universal Patterns** (applies everywhere):
```
- Food cost typically 28-35%
- Labor cost 25-35% (varies by automation)
- Prime cost target <65%
- Lunch = 50-60% of daily revenue
- Delivery commission 20-30%
```

**Regional Patterns** (Indonesia-specific):
```
- Pasar tradisional daily sourcing (vs weekly orders West)
- Ramadan +40-60% revenue spike
- Halal requirement (87% market)
- GoPay/OVO dominance (vs credit cards West)
- Family labor common (warung model)
```

**Why This Matters for BI**:
- Universal patterns = benchmark against
- Regional patterns = must customize for

- Regional patterns = must customize for

💡 **Ask AI**: "What patterns should I look for in F&B sales data to identify actionable insights?"
⚡ **AI Generate**: "Generate realistic F&B transaction data (1000 rows) for analysis practice"
🤖 **AI Review**: "I analyzed this F&B data and found: [findings]. Are these insights actionable? What am I missing?"

**Tools**:
- **Analysis**: Google Sheets (Comparison Matrix)
- **Visualization**: Chart.js / Recharts (for coding practice) or Excel Charts
- **Market Research**: Google Trends (Regional Interest), Statista (Industry Benchmarks)

#### Resources

- **Books**:
  - "Setting the Table" by Danny Meyer
  - "Kitchen Confidential" by Anthony Bourdain
- **Data**:
  - Kaggle F&B Datasets
  - Regional F&B Reports
- **Learning**:
  - Google Sheets QUERY Tutorials
  - Restaurant Analytics Case Studies

> **🤖 AI Assistance**:
> - **⚡ AI Generate**: "Create a comparison matrix template for 5 countries with 15 F&B business metrics"
> - **💡 Ask AI**: "What patterns should I look for in F&B sales data to identify actionable insights?"
> - **⚡ AI Generate**: "Generate realistic F&B transaction data (1000 rows) for analysis practice"
> - **🤖 AI Review**: "I analyzed this F&B data and found: [findings]. Are these insights actionable?"

#### Common Pitfalls

❌ **Analysis Mistakes**:
- Not cleaning data first (garbage in, garbage out)
- Looking at absolute numbers without percentages
- Ignoring seasonal patterns (Ramadan, holidays)
- Not segmenting data (all customers treated the same)

❌ **Insight Mistakes**:
- Finding correlations but assuming causation
- Presenting analysis without actionable recommendations
- Too much detail (drowning in data)
- Not validating insights with F&B operators

#### Assessment Checklist

Before moving to Phase 5, you should be able to:
- [ ] Clean and prepare F&B transaction data
- [ ] Perform sales analysis by time, product, location
- [ ] Identify bestsellers and underperformers
- [ ] Calculate customer metrics (frequency, spend, lifetime value)
- [ ] Create comparison reports (WoW, MoM, YoY)
- [ ] Visualize data effectively
- [ ] Generate actionable recommendations from data

**✅ Phase 4 Completion Checklist**:
- [ ] Analyzed sample or real F&B dataset
- [ ] Created 5 different analysis reports
- [ ] Built charts and visualizations
- [ ] Generated business recommendations from findings

**Deliverable**:
- Complete regional F&B analysis report (20-30 pages)
- BI dashboard with F&B insights
- Presentation summarizing findings
- Action plan for F&B business improvement

#### Resources

- "Restaurant Financial Basics" by Raymond Goodman
- QuickBooks for Restaurants guide
- F&B financial management courses
- Industry P&L templates and benchmarks
- Cost control and budgeting guides
- National Restaurant Association financial benchmarks
- Restaurant accounting best practices
- All previous F&B Business Processes guides
- BI curriculum materials  
- Regional F&B industry reports
- Capstone project templates

#### Common Pitfalls

❌ **Capstone Mistakes**:
- Scope too broad (can't finish)
- Not applying F&B domain knowledge
- Generic insights not actionable
- Missing business context

❌ **Presentation Issues**:
- Too technical for F&B operators
- No clear recommendations
- Missing proof/validation
- Poor visual communication

#### Final Assessment

Capstone complete when you can demonstrate:
- [ ] Comprehensive F&B domain mastery
- [ ] Applied BI skills to real F&B scenario
- [ ] Regional F&B business understanding
- [ ] Actionable insights delivered
- [ ] Professional presentation quality
- [ ] Portfolio-ready work
- [ ] Ability to consult F&B businesses
- [ ] Integration of all curriculum learning

---

## Phase 5: BI Application & Capstone (Week 6) - 8-10 hours

### Goal: Apply Domain Knowledge to Build BI Solution

**🎯 Capstone Project Options**:

**Option A: Restaurant Dashboard (Full)**
```
Choose a business model (Warung, KFC-type, Cloud Kitchen)

Build:
1. Daily Operations Dashboard
   - Revenue tracking (actual vs target)
   - Food cost % monitoring
   - Labor cost % monitoring
   - Top selling items

2. Inventory Dashboard (if applicable)
   - Stock levels
   - Reorder alerts
   - Pasar price tracking (if warung)

3. Customer Analytics
   - Peak hours heatmap
   - Average spend trends
   - Payment method split
Tools: Excel/Google Sheets (start simple!) or Power BI/Tableau
```

🔍 **AI Explain**: "Explain how to build a RevPASH (Revenue Per Available Seat Hour) dashboard for F&B"
4. Financial Overview
   - Monthly P&L
   - Prime cost tracking
   - Break-even analysis

Tools: Excel/Google Sheets (start simple!) or Power BI/Tableau
```



**Option B: Menu Engineering Tool**
```
Build calculator that:
1. Takes menu items + costs + prices
2. Calculates:
   - Food cost % per item
   - Contribution margin
   - Menu engineering category (Star/Puzzle/Plow/Dog)
3. Recommends:
   - Items to promote
   - Items to remove
   - Pricing adjustments

Tools: Google Sheets with formulas + conditional formatting
```



**Option C: Ramadan Revenue Planner (Indonesia-specific)**
```
Build planner that:
1. Takes normal month baseline
2. Forecasts Ramadan impact (+40-60%)
3. Calculates:
   - Ingredient order increase needed
   - Extra staff hours required
   - Peak hour capacity planning (buka puasa 6pm rush!)
4. Provides:
   - Daily inventory checklist
   - Cash flow projection

Tools: Excel/Sheets with scenario modeling
```


reflection.md - What you learned, what was hard, what you'd improve
```

⚡ **AI Generate**: "Generate comprehensive sample F&B data for capstone project: transactions, menu, inventory, staff"
🤖 **AI Review**: "Review my F&B BI dashboard design. Does it answer the key business questions? What's missing?"
💡 **Ask AI**: "What are must-have vs nice-to-have features for an F&B dashboard for small restaurant owners?"
**📝 Documentation**:
Create `fnb-domain/projects/capstone_[project_name]/`:
```
README.md - Project overview, business context
data/ - Sample data used
dashboard/ - Exported dashboard/screenshots
analysis.md - Insights discovered, recommendations
reflection.md - What you learned, what was hard, what you'd improve
```



**Tools**:
- **Design**: Canva / Figma (UI Mockups & Wireframes)
- **Prototyping**: Excel / Google Sheets (Functional Logic)
- **BI Platforms**: Power BI / Tableau / Apache Superset (Optional)
- **Data Generation**: Mockaroo / Python Faker (Synthetic Datasets)

#### Resources

- **Design**:
  - Canva / Figma
  - Dashboard Inspiration Galleries
- **Data**:
  - Generated Datasets
  - Anonymized Real Data
- **Presentation**:
  - Google Slides Templates

> **🤖 AI Assistance**:
> - **🔍 AI Explain**: "Explain how to build a RevPASH (Revenue Per Available Seat Hour) dashboard for F&B"
> - **⚡ AI Generate**: "Generate spreadsheet formulas for menu engineering calculator"
> - **💡 Ask AI**: "How should I forecast Ramadan impact on different F&B business models?"
> - **⚡ AI Generate**: "Generate comprehensive sample F&B data for capstone project"
> - **🤖 AI Review**: "Review my F&B BI dashboard design. Does it answer key business questions?"
> - **💡 Ask AI**: "What are must-have vs nice-to-have features for MVP?"

#### Common Pitfalls

❌ **Dashboard Mistakes**:
- Too many metrics (information overload)
- No clear hierarchy (everything looks equally important)
- Using technical language (jargon that owners don't understand)
- Not mobile-friendly (owners check on phone)

❌ **Project Mistakes**:
- Scope creep (trying to build everything)
- Not testing with actual F&B operators
- Focusing on fancy features over core functionality
- No clear problem being solved

#### Final Assessment Checklist

By the end of this curriculum, you should be able to:
- [ ] **Explain F&B operations** at the level of an industry insider
- [ ] **Identify data touchpoints** throughout F&B workflows
- [ ] **Calculate and interpret** all major F&B metrics
- [ ] **Analyze F&B data** to find actionable insights
- [ ] **Design BI dashboards** specifically for F&B operators
- [ ] **Communicate insights** to non-technical F&B owners
- [ ] **Understand regional context** (Indonesia/SEA market)

**✅ Capstone Completion**:
- [ ] Designed complete F&B BI solution
- [ ] Created documentation and user guide
- [ ] Presented to F&B stakeholder or peer
- [ ] Incorporated feedback and iterated
- [ ] Ready to build actual BI dashboards for F&B businesses!

---

## Continuous Learning

**Stay Current**:
- [ ] Join F&B Indonesia communities (Facebook groups, forums)
- [ ] Follow industry news (QSR Magazine, F&B Report Indonesia)
- [ ] Visit new restaurants monthly with observation mindset
- [ ] Interview F&B professionals quarterly
- [ ] Update your knowledge as market changes (new tech, trends)

**Expand to Other Domains**:
Once you master F&B, same approach for:
- Retail (ecommerce, brick-and-mortar)
- Healthcare (clinics, hospitals)
- Education (schools, e-learning)
- **Domain knowledge = your competitive advantage!**

---

## Assessment: Are You Ready?

**You've mastered F&B business processes when you can**:
- ✅ Explain 5 different F&B business models and their economics
- ✅ Calculate key metrics (food cost %, prime cost %, etc.) from raw data
- ✅ Identify data sources and flows in any F&B operation
- ✅ Spot operational inefficiencies just by observing
- ✅ Design a relevant BI dashboard for a specific F&B type
- ✅ Speak knowledgeably with F&B owners/managers
- ✅ Customize BI solutions for regional specifics (halal, Ramadan, etc.)

---

## Resources

**In This Repository**:
- `fb_business_processes_indonesia.md` - Complete guide (1,953 lines!)
- `resources/regional_guides/` - 24 regional F&B guides for comparison
- `datasets/` - Practice datasets (expand as you progress)
- `projects/` - Your project workspace

**External** (Recommended):
- **Books**:
  - "Restaurant Financial Basics" by Raymond Goodman
  - "Setting the Table" by Danny Meyer (hospitality philosophy)
- **YouTube Channels**:
  - "Restaurant Owners Uncorked" (operations insights)
  - Indonesia F&B vloggers (local market reality)
- **Communities**:
  - Reddit: r/restaurateur, r/KitchenConfidential
  - Indonesia: FB groups for F&B owners

---

**Start Your Journey**: Begin with Phase 1 this week! 🍽️📊

---

*Last Updated: January 2026*
*Curriculum designed for BI professionals seeking F&B domain expertise*
