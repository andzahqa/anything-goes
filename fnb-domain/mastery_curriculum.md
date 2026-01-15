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
- Read → this Observe → Apply
- Every concept backed by real numbers
- Indonesian context (applicable to SEA markets)
- Practical BI opportunities highlighted

---

## Phase 1: Foundation (Week 1) - 10-12 hours

### Goal: Understand the F&B Landscape

**📚 Reading** (6-8 hours):
1. **Complete Indonesia F&B Guide** - `fb_business_processes_indonesia.md`
   - Start to finish (1,953 lines, comprehensive!)
   - Take notes on unfamiliar concepts
   - Highlight sections you don't understand yet

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

**✅ Phase 2 Completion Checklist**:
- [ ] Created 3 data flow maps
- [ ] Interviewed F&B worker/owner
- [ ] Documented 5 pain points discovered
- [ ] Listed 5 BI solutions for those pain points

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

**🎯 Real Menu Analysis** (3-4 hours):
**Collect Real Data**:
1. Visit restaurant, photograph menu (with prices)
2. Estimate ingredient costs (Google typical prices)
3. Calculate:
   - Food cost % per menu item
   - Contribution margin per item
   - Popularity (observe what people order)

**Create Menu Engineering Matrix**:
```
High Margin, High Popularity = STARS ⭐ (promote!)
High Margin, Low Popularity = PUZZLES ❓ (rename? reposition?)
Low Margin, High Popularity = PLOWHORSES 🐴 (can't remove, but optimize cost)
Low Margin, Low Popularity = DOGS 🐕 (remove from menu!)
```

**✅ Phase 3 Completion Checklist**:
- [ ] Created comprehensive metrics cheat sheet
- [ ] Completed 5+ calculation exercises
- [ ] Built 2+ Excel/Sheets models
- [ ] Analyzed real restaurant menu (20+ items)
- [ ] Identified menu engineering opportunities

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

**✅ Phase 4 Completion Checklist**:
- [ ] Compared 3+ regional guides
- [ ] Created comparison matrix (10+ metrics)
- [ ] Listed 10 universal patterns
- [ ] Listed 10 regional patterns
- [ ] Identified 5 BI customizations needed for Indonesia

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

**📝 Documentation**:
Create `fnb-domain/projects/capstone_[project_name]/`:
```
README.md - Project overview, business context
data/ - Sample data used
dashboard/ - Exported dashboard/screenshots
analysis.md - Insights discovered, recommendations
reflection.md - What you learned, what was hard, what you'd improve
```

**✅ Phase 5 Completion Checklist**:
- [ ] Completed capstone project
- [ ] Dashboard has 5+ meaningful metrics
- [ ] Documented business context
- [ ] Listed 3+ actionable insights
- [ ] Reflected on learning journey

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
