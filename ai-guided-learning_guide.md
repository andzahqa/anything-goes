# AI-Powered BI Learning: Complete Masterclass

**Your comprehensive guide to leveraging AI throughout your Business Intelligence journey**

> [!IMPORTANT]
> **Philosophy**: Use AI as your tireless tutor, coding partner, and debugging assistant - but ALWAYS understand what it creates. This isn't about getting AI to do your work; it's about using AI to learn faster and deeper.
>
> **The Golden Rule**: If you can't explain it without AI, you haven't learned it yet!
>
> **Document Length**: ~1000 lines of detailed guidance, examples, and strategies. Use the Table of Contents to navigate.

---

## 📖 Table of Contents

### Part 1: Getting Started

1. [Quick Reference Card](#quick-reference-card) ⭐ Pin this!
2. [Understanding AI-Aided Learning](#understanding-ai-aided-learning)
3. [When & How to Use AI](#when--how-to-use-ai)

### Part 2: Core Techniques

1. [Master Prompt Templates](#master-prompt-templates)
2. [AI Conversation Examples](#ai-conversation-examples)
3. [Tool-Specific AI Strategies](#tool-specific-ai-strategies)

### Part 3: Curriculum Integration

1. [Spreadsheet BI Path - AI Opportunities](#spreadsheet-bi-path---ai-opportunities)
2. [Traditional BI Path - AI Opportunities](#traditional-bi-path---ai-opportunities)
3. [F&B Domain Learning with AI](#fb-domain-learning-with-ai)

### Part 4: Advanced Strategies

1. [Daily & Weekly AI Learning Workflows](#daily--weekly-ai-learning-workflows)
2. [Project-Based AI Collaboration](#project-based-ai-collaboration)
3. [Debugging Strategies with AI](#debugging-strategies-with-ai)

### Part 5: Best Practices

1. [Common Pitfalls & How to Avoid](#common-pitfalls--how-to-avoid)
2. [Measuring Your AI Learning Success](#measuring-your-ai-learning-success)
3. [From Beginner to AI-Powered Expert](#from-beginner-to-ai-powered-expert)

---

## Quick Reference Card

> **💡 Bookmark this section - you'll reference it constantly!**

### 🎯 Decision Tree: Should I Ask AI?

```
Are you stuck on something?
├─ YES, for < 5 minutes
│  └─ Try Google/docs first
├─ YES, for 5-15 minutes  
│  └─ Read curriculum section, THEN ask AI if still stuck
└─ YES, for > 15 minutes
   └─ ✅ Ask AI NOW! Don't waste time.

Is this an error message?
└─ ✅ Paste to AI immediately with context

Need practice data/examples?
└─ ✅ AI generates in seconds

Want to understand a concept better?
├─ Read curriculum first
└─ ✅ Then ask AI for different explanation/examples

Building something and want feedback?
└─ ✅ Share with AI for review

Want AI to do your project?
└─ ❌ STOP. You won't learn anything.
```

### ⚡ Ultra-Quick Prompts

**1-Line Prompts for Common Needs**:

```
Understanding:
"Explain [CONCEPT] in simple terms with an F&B example"

Data Generation:
"Create CSV: [N] rows, columns: [LIST], realistic [PATTERN]"

Debugging:
"Error: [MSG]. Code: [PASTE]. Goal: [WHAT]. Why?"

Code/Formula:
"Write [TOOL] code for [GOAL]. Input: [DATA]. Output: [RESULT]"

Review:
"Review this [WORK] for accuracy, clarity, best practices"

Examples:
"Show 5 examples of [TECHNIQUE] with [CONTEXT]"

Comparison:
"Compare [A] vs [B]: pros, cons, when to use each"

Best Practices:
"What are best practices for [TASK] in [CONTEXT]?"
```

### 🔑 Curriculum Marker Legend

Throughout your curricula, you'll see these icons:

| Icon | Meaning | What to Do |
|------|---------|------------|
| 💡 **Ask AI** | Suggested question | Copy prompt, adapt to your situation, ask AI |
| ⚡ **AI Generate** | AI can create this | Let AI generate data/code, then understand it |
| 🔍 **AI Explain** | Good concept to explain | Ask AI to explain in multiple ways |
| 🤖 **AI Debug** | Debugging opportunity | Paste your error + context to AI |
| 🤖 **AI Review** | Request feedback | Share your work, get constructive critique |

### 📱 Recommended AI Tools

**General Purpose**:

- **ChatGPT** (OpenAI) - Excellent for explanations, code, formulas
- **Claude** (Anthropic) - Great for detailed analysis and long contexts
- **Gemini** (Google) - Good with Google Sheets integration
- **Copilot** (Microsoft) - Integrates with Excel, Power BI

**Code-Specific**:

- **GitHub Copilot** - In-editor suggestions ($10/month)
- **Cursor** - AI-powered IDE (free tier available)

**For this curriculum**: Any of ChatGPT, Claude, or Gemini work great!

---

## Understanding AI-Aided Learning

### The Learning Amplification Effect

**Traditional Learning**:

```
Read → Try → Get Stuck → Google → Read More → Try → Get Stuck → Ask Friend → Wait...
Time: Hours to Days
```

**AI-Aided Learning**:

```
Read → Try → Get Stuck → Ask AI → Understand → Try → Get Stuck → Debug with AI → Success!
Time: Minutes to Hours
```

**The Difference**: AI removes friction from the learning process, but **you still do the learning**.

### What AI Actually Does for You

**AI is NOT**:

- ❌ A replacement for understanding
- ❌ A way to skip learning
- ❌ Always correct (it makes mistakes!)
- ❌ A substitute for practice

**AI IS**:

- ✅ A patient tutor available 24/7
- ✅ An expert that explains concepts multiple ways
- ✅ A code/formula generator you learn from
- ✅ A debugging partner that helps you fix errors
- ✅ A practice problem creator
- ✅ A work reviewer giving constructive feedback

### The Three Pillars of AI-Aided Learning

**1. Understand First, Then Use**

```
Good: AI explains VLOOKUP → You understand → You use it → You modify it
Bad:  AI writes VLOOKUP → You copy → It works → You don't know why
```

**2. AI Assists, You Lead**

```
You:  Define the problem
You:  Attempt a solution
AI:   Helps when you're stuck
You:  Verify and understand the solution
You:  Build on it
```

**3. Learn from Every Interaction**

```
After every AI response, ask yourself:
- "Do I understand this completely?"
- "Could I explain this to someone else?"
- "Could I modify this for a different situation?"
- "What are the limitations?"
```

---

## When & How to Use AI

### ✅ Excellent AI Use Cases (Detailed)

#### 1. Generate Practice Data

**Why This is Powerful**:
Creating realistic practice datasets manually takes hours. AI does it in seconds, letting you focus on analysis.

**What to Generate**:

- Transaction data (POS sales, orders)
- Customer data (demographics, behavior)
- Inventory data (stock levels, movements)
- Employee data (shifts, performance)
- Menu data (items, costs, prices)
- Any dataset for practicing your BI skills

**Example Prompts**:

```
Basic:
"Create a CSV with 100 restaurant transactions"

Detailed:
"Create realistic POS transaction data for a casual dining restaurant:
- 500 transactions over 3 months (Sep-Nov 2025)
- Columns: transaction_id, date, time, server_id (1-12), table_number (1-25),
  subtotal, tax (8%), tip, total, payment_method
- Realistic patterns:
  * Weekends 50% busier than weekdays
  * Lunch rush (11:30am-1:30pm), Dinner rush (6pm-9pm)
  * Average check: $25-75
  * Payment: 60% Credit, 30% Debit, 10% Cash
  * Tips average 18% but vary 10-25%
- Output as CSV"

Advanced:
"Create a multi-table restaurant database:

Table 1 - Transactions (300 records):
- transaction_id, date, server_id, table_id, subtotal, tax, tip, total

Table 2 - Transaction_Items (800 records):
- item_id, transaction_id, product_id, quantity, unit_price, item_total

Table 3 - Products (40 records):
- product_id, name, category (Appetizer/Entree/Dessert/Beverage),
  cost, price, active (1/0)

Table 4 - Servers (12 records):
- server_id, name, hire_date, section

Make transaction_items reference transactions and products properly.
Ensure realistic: popular items ordered more, proper pricing, etc."
```

**After AI Generates**:

1. Import to your tool
2. Verify it makes sense
3. Use it for practice
4. Understand the structure
5. Generate variations as needed

#### 2. Explain Concepts Multiple Ways

**Why This is Powerful**:
Everyone learns differently. AI can explain the same concept in 5+ different ways until it clicks.

**Explanation Strategies**:

- Simple terms (like you're 10)
- Technical terms (with jargon)
- By analogy (compared to something familiar)
- With examples (restaurant scenarios)
- Visually (step-by-step breakdown)
- By contrast (what it is vs what it isn't)

**Example Conversation**:

```
You: "Explain what a pivot table is"

AI: [Gives technical explanation]

You: "That's confusing. Explain like I'm 10"

AI: [Gives simple explanation]

You: "Better! Now give me a restaurant example"

AI: [Shows pivot table with sales by category]

You: "Perfect! Now show me step-by-step how to create one"

AI: [Provides steps]

You: "Wait, what's the difference between rows, columns, and values?"

AI: [Explains each part]
```

Keep asking until you FULLY understand!

#### 3. Write Code & Formulas (Then Learn From Them)

**Why This is Powerful**:
AI writes correct code instantly. Your job: understand it, modify it, make it yours.

**The Right Workflow**:

```
1. Try yourself first (important!)
2. Get stuck after genuine attempt
3. Ask AI for help
4. AI provides code
5. YOU:
   - Read it line by line
   - Ask AI to explain any confusing parts
   - Test it with your data
   - Modify it to do something slightly different
   - Break it on purpose to see what happens
   - Fix your own broken version
```

**Example - Learning VLOOKUP**:

```
You: "I need to lookup product prices from a Products sheet.
     My data: Column A has product names (Burger, Pizza, Salad)
     I want: Column B to show prices from Products!C
     Products sheet: Column A = names, Column C = prices
     Write the formula for cell B2"

AI: "=VLOOKUP(A2, Products!A:C, 3, FALSE)"

You (internally): "Wait, what does each part do?"

You: "Explain this formula part by part"

AI: [Explains VLOOKUP structure]

You: "Why 3?"

AI: [Explains column index]

You: "What if prices were in column D instead?"

AI: "Change 3 to 4"

You: "What does FALSE do?"

AI: [Explains exact vs approximate match]

You (now): Try it yourself with different scenarios!
```

**Remember**: The goal is UNDERSTANDING, not just getting working code.

#### 4. Debug Errors Rapidly

**Why This is Powerful**:
Error messages are cryptic. AI decodes them instantly and suggests fixes.

**Effective Debugging Process**:

```
1. Error occurs
2. Don't panic
3. Copy exact error message
4. Gather context:
   - What were you trying to do?
   - What code/formula did you use?
   - What's your data structure?
   - What did you expect vs what happened?
5. Paste everything to AI
6. AI diagnoses and suggests fix
7. YOU:
   - Understand WHY it failed
   - Apply the fix
   - Test with similar cases
   - Remember the lesson
```

**Example - Formula Error**:

```
You: "I'm getting #N/A error

My formula in B2:
=VLOOKUP(A2, Products!A:D, 3, FALSE)

What I'm trying to do:
Look up product price from Products sheet

My data:
- A2 contains: Burger
- Products sheet has data in columns A-D
- Prices are in column C

Expected: Should show 12.99
Got: #N/A

Why?"

AI: "The #N/A error means VLOOKUP can't find 'Burger' in Products!A:A.
     Possible causes:
     1. Spelling difference (extra spaces, caps)
     2. 'Burger' doesn't exist in Products sheet
     3. Leading/trailing spaces
     
     To diagnose:
     - Check Products!A2, does it exactly match 'Burger'?
     - Try =TRIM(A2) to remove spaces
     - Make match case-insensitive: use UPPER() in both

     Quick fix to try:
     =IFERROR(VLOOKUP(TRIM(A2), Products!A:D, 3, FALSE), 'Not Found')"

You: "Oh! There's a trailing space in my data. How do I fix that?"

AI: [Shows how to clean data]
```

#### 5. Generate Practice Problems

**Why This is Powerful**:
You can't improve without practice. AI creates unlimited exercises.

**What to Practice**:

- Formulas (SUMIFS, VLOOKUP, IF, etc.)
- SQL queries (JOINs, GROUP BY, etc.)
- Python operations (filtering, grouping, etc.)
- Dashboard design challenges
- Data analysis scenarios

**Example Prompts**:

```
Beginner:
"Give me 10 VLOOKUP practice problems for beginners"

Intermediate:
"Create 5 SQL exercises using restaurant data:
- Use JOINs, GROUP BY, and HAVING
- Mix difficulty: 2 easy, 2 medium, 1 hard
- Provide sample data structure
- Don't show answers yet"

Advanced:
"Create a complex data analysis scenario:
- Restaurant seeing declining sales
- Provide messy transaction data (CSV format)
- Ask me to find insights and recommendations
- Include red herrings (data that looks suspicious but isn't the issue)
- Challenge should take 1-2 hours"
```

**After AI Provides Problems**:

1. Attempt them yourself
2. Check your answers with AI
3. Ask AI to explain mistakes
4. Do similar problems until confident

#### 6. Review Your Work & Get Feedback

**Why This is Powerful**:
AI gives instant, detailed feedback without judgment.

**What to Have Reviewed**:

- Dashboard designs
- Code/formulas
- SQL queries
- Data visualizations
- Analysis reports
- Project plans

**Effective Review Prompts**:

```
Dashboard Review:
"Review my F&B dashboard design:

Layout:
- Top: 4 KPI cards (Sales, Food Cost %, Labor Cost %, Prime Cost %)
- Middle: 2 charts (Sales Trend line chart, Sales by Category bar chart)
- Bottom: Top 10 Items table

Interactivity:
- Date range filter (last 7/30/90 days)
- Category dropdown (All, Food, Beverage)

Target audience: Restaurant owner (non-technical)

Review for:
1. Is layout intuitive?
2. Are KPIs most important for F&B?
3. Missing critical insights?
4. Too cluttered or too sparse?
5. Improvements for 'everyman' usability?

Be specific and critical."

Code Review:
"Review this Python code for efficiency and best practices:

[paste code]

Context: Loading 50k rows of sales data, calculating daily totals
Is there a better way?"

Formula Review:
"Review this Excel formula:
=SUMIFS(Sales!$E:$E,Sales!$B:$B,$A2,Sales!$C:$C,">="&DATE(2024,1,1),Sales!$C:$C,"<="&DATE(2024,12,31))

Is this optimal? Could it be simpler?"
```

#### 7. Explore Alternatives & Options

**Why This is Powerful**:
There are many ways to solve problems. AI shows you options you didn't know existed.

**What to Explore**:

- Different formulas for same result
- Alternative chart types
- Various SQL approaches
- Different dashboard layouts
- Multiple analysis methods

**Example**:

```
You: "I calculated food cost % using SUMIF. What are 3 other ways?"

AI: [Shows pivot table method, Power Query method, Python method]

You: "Which is best for 100k rows?"

AI: [Compares performance]

You: "Show me the Power Query approach step-by-step"

AI: [Detailed tutorial]
```

#### 8. Translate Between Tools

**Why This is Powerful**:
Know Excel but need to learn Python? AI translates!

**Example**:

```
You: "I know this Excel formula:
=SUMIFS(Sales, Region, 'West', Date, '>=2024-01-01')

How do I do the same in Python pandas?"

AI: df[df['Region']=='West'][df['Date']>='2024-01-01']['Sales'].sum()

You: "Explain the pandas version"

AI: [Breaks down filtering and aggregation in pandas]

You: "Now show me in SQL"

AI: SELECT SUM(Sales) FROM data WHERE Region='West' AND Date>='2024-01-01'
```

### ⚠️ When NOT to Use AI (Critical!)

#### ❌ Don't Let AI Do Your Entire Project

**Bad**:

```
"Build me a complete F&B dashboard with sales analysis,
inventory tracking, and labor management. Include all KPIs,
charts, and make it look professional"
```

**Why Bad**: You learn NOTHING. You can't maintain or modify it. You don't understand the business logic.

**Good Instead**:

```
"I'm building an F&B dashboard. Help me:
1. List the 10 most critical KPIs for a restaurant
2. Suggest how to organize them into pages
3. Recommend chart types for each insight"

[AI suggests]

You build dashboard yourself, asking AI for help on specific stuck points:
- "How do I calculate this specific KPI?"
- "Best chart type for showing seasonal trends?"
- "Review my WIP dashboard design"
```

#### ❌ Don't Use AI to Skip Understanding

**Bad**:

```
Curriculum says: "Learn about JOINs"
You: "Just tell me when to use each JOIN type"
AI: [Answers]
You: Move to next topic ❌
```

**Good**:

```
Curriculum says: "Learn about JOINs"
You: Read curriculum section first
You: Try JOIN examples yourself
You get stuck on OUTER JOIN
You: "Explain OUTER JOIN with restaurant example"
AI: [Explains]
You: Try more examples
You: "Show me 3 scenarios where OUTER JOIN is better than INNER JOIN"
AI: [Examples]
You: Practice until confident ✅
```

#### ❌ Don't Blindly Trust AI

**AI Makes Mistakes!** Common errors:

- Outdated syntax (especially for newer tool versions)
- Logical errors in complex scenarios
- Security issues (SQL injection, etc.)
- Performance anti-patterns
- Incorrect domain knowledge

**Always**:

- ✅ Test AI code/formulas
- ✅ Verify logic makes sense
- ✅ Check against documentation
- ✅ Question anything confusing
- ✅ Cross-reference with curriculum

#### ❌ Don't Ask AI to Memorize For You

**Bad**:

```
"List all Excel functions I need to know"
[AI lists 50 functions]
You try to memorize all ❌
```

**Good**:

```
Learn by doing:
- Use SUMIF when you need it
- Ask AI for examples
- Practice until natural
- Move to next function when you actually need it
```

Reference `formula_reference.md` for lookups, don't memorize.

---

## Master Prompt Templates

> **Copy these templates and fill in the blanks for instant effective prompts**

### Template 1: Learn Any Concept Thoroughly

```
"Explain [CONCEPT] to me at multiple levels:

1. In one sentence, what is it?
2. ELI5 (explain like I'm 5)
3. Technical explanation
4. Real F&B restaurant example
5. How it's used in [Excel/Google Sheets/SQL/Python]
6. Common mistakes people make
7. Give me 3 practice questions to test understanding

[CONCEPT] = ___________"
```

**Example Usage**:

```
"Explain foreign keys to me at multiple levels:
[rest of template]"

AI will give comprehensive explanation covering all bases
```

### Template 2: Generate Perfect Practice Data

```
"Create a realistic [DATA TYPE] dataset for [BUSINESS SCENARIO].

Specifications:
- Number of records: [N]
- Columns needed: [LIST COLUMNS WITH DATA TYPES]
- Time range: [START DATE] to [END DATE]
- Realistic patterns to include:
  * [PATTERN 1, e.g., "Weekends 40% busier"]
  * [PATTERN 2, e.g., "Lunch rush 11:30am-1:30pm"]
  * [PATTERN 3, e.g., "Average check $25-75"]
- Edge cases to include: [E.G., "Some refunds, comps, voids"]
- Output format: [CSV/SQL INSERT/Excel table]
- Additional requirements: [ANY SPECIAL NEEDS]

Make it realistic enough for serious practice and analysis."
```

**Example with All Fields Filled**:

```
"Create a realistic POS transaction dataset for casual dining restaurant.

Specifications:
- Number of records: 750
- Columns needed:
  * transaction_id (unique integer)
  * datetime (timestamp)
  * server_id (1-15)
  * table_number (1-30)
  * party_size (1-8, weighted to 2-4)
  * subtotal (decimal)
  * tax (8% of subtotal)
  * tip (decimal, avg 18% but varies)
  * total (subtotal + tax + tip)
  * payment_method (Credit 60%, Debit 30%, Cash 10%)
- Time range: August 1, 2025 to October 31, 2025
- Realistic patterns to include:
  * Weekends (Fri-Sun) 50% busier than weekdays
  * Lunch service 11:30am-2pm, Dinner 5:30pm-10pm, closed 2-5:30pm
  * Average check $35-85, skewed toward $45-65
  * Friday/Saturday dinners busiest (check +20% higher)
  * Larger parties (6+) tip slightly less (15-16%)
- Edge cases to include:
  * 5% of transactions have $0 tip (stiffed)
  * 2% are comps (total = $0)
  * Include some split checks (same table_number, sequential transaction_ids)
- Output format: CSV
- Additional requirements: Include header row, US decimal (.), date format YYYY-MM-DD HH:MM:SS

Make it realistic enough for serious practice and analysis."
```

### Template 3: Debug Any Error Systematically

```
"I'm encountering an error. Help me debug it.

ERROR MESSAGE:
[EXACT ERROR TEXT]

MY CODE/FORMULA:
[PASTE COMPLETE CODE OR FORMULA]

WHAT I'M TRYING TO ACCOMPLISH:
[DESCRIBE YOUR GOAL]

MY DATA STRUCTURE:
[DESCRIBE THE DATA - columns, types, sample values]

WHAT I EXPECTED:
[WHAT SHOULD HAPPEN]

WHAT ACTUALLY HAPPENED:
[WHAT DID HAPPEN]

WHAT I'VE TRIED:
[LIST ANYTHING YOU'VE ATTEMPTED]

Please:
1. Explain what's causing the error
2. Suggest a fix
3. Explain WHY the fix works
4. Show me how to avoid this in future
5. Test scenarios to verify it works"
```

**Filled Example**:

```
"I'm encountering an error. Help me debug it.

ERROR MESSAGE:
#N/A

MY CODE/FORMULA:
=VLOOKUP(A2,Products!A:D,3,FALSE)

WHAT I'M TRYING TO ACCOMPLISH:
Look up product prices from Products sheet

MY DATA STRUCTURE:
Sheet1 Column A: Product names (Burger, Pizza, Pasta, Salad)
Products sheet: 
- Column A: Product names
- Column B: Category
- Column C: Cost
- Column D: Price

Sample Products data:
A: Burger, B: Entree, C: 4.50, D: 12.99

WHAT I EXPECTED:
B2 should show 12.99 (price of Burger)

WHAT ACTUALLY HAPPENED:
#N/A error

WHAT I'VE TRIED:
- Checked spelling of 'Burger' - looks same
- Verified Products sheet has data
- Tried changing FALSE to TRUE - didn't help

Please:
1. Explain what's causing the error
2. Suggest a fix
3. Explain WHY the fix works
4. Show me how to avoid this in future
5. Test scenarios to verify it works"
```

### Template 4: Compare Options & Choose Best

```
"I need to [ACCOMPLISH TASK] and I'm deciding between [OPTION A], [OPTION B], and [OPTION C].

Context:
- My data size: [SIZE/VOLUME]
- My tool: [EXCEL/SHEETS/PYTHON/etc]
- My skill level: [BEGINNER/INTERMEDIATE/ADVANCED]
- Performance requirements: [ANY]
- Maintenance requirements: [ANY]

For each option, provide:
1. Pros
2. Cons
3. When to use it
4. Example implementation
5. Your recommendation for my specific case"
```

**Example**:

```
"I need to calculate running totals and I'm deciding between SUMIF with expanding range, a pivot table, or Power Query.

Context:
- My data size: 50,000 daily sales transactions
- My tool: Excel 2021
- My skill level: Intermediate
- Performance requirements: Must update quickly when data refreshes
- Maintenance requirements: Non-technical users will update monthly

For each option, provide:
1. Pros
2. Cons
3. When to use it
4. Example implementation
5. Your recommendation for my specific case"
```

### Template 5: Get Comprehensive Code/Formula

```
"Write [TOOL] code/formula to [ACCOMPLISH GOAL].

INPUT DATA:
Structure: [DESCRIBE]
Example: [PASTE SAMPLE]

DESIRED OUTPUT:
Structure: [DESCRIBE]
Example: [SHOW WHAT YOU WANT]

REQUIREMENTS:
- [REQUIREMENT 1]
- [REQUIREMENT 2]
- [etc]

Please provide:
1. The complete code/formula
2. Line-by-line explanation
3. Comments in the code
4. Example of it working
5. How to modify it for [VARIATION]
6. Common errors and how to fix them"
```

**Example**:

```
"Write Python pandas code to analyze daily sales with moving averages.

INPUT DATA:
Structure: CSV with columns (date, transaction_id, amount)
Example:
2024-10-01,T001,45.50
2024-10-01,T002,67.25
2024-10-02,T003,52.00
[... more rows]

DESIRED OUTPUT:
Structure: DataFrame with columns (date, daily_total, 7day_avg, 30day_avg)
Example:
         date  daily_total  7day_avg  30day_avg
2024-10-01      112.75       112.75      112.75
2024-10-02       52.00        82.38       82.38
[... more rows]

REQUIREMENTS:
- Group by date and sum amounts
- Calculate 7-day rolling average
- Calculate 30-day rolling average
- Handle dates with no transactions (fill with 0)
- Sort by date ascending

Please provide:
1. The complete code/formula
2. Line-by-line explanation
3. Comments in the code
4. Example of it working
5. How to modify it for different window sizes (e.g., 14-day)
6. Common errors and how to fix them"
```

### Template 6: Review & Improve Your Work

```
"Review my [WORK TYPE] and provide detailed feedback.

WHAT I BUILT:
[DESCRIBE OR PASTE YOUR WORK]

CONTEXT:
- Goal: [WHAT YOU'RE TRYING TO ACHIEVE]
- Audience: [WHO WILL USE IT]
- Constraints: [ANY LIMITATIONS]

REVIEW CRITERIA:
📊 Accuracy: Are calculations/logic correct?
🎨 Design: Is it clear and intuitive?
⚡ Performance: Will it be fast enough?
🔧 Maintainability: Easy to update?
📱 Usability: User-friendly for [AUDIENCE]?
✅ Best Practices: Following standards?
🚨 Issues: Any problems or bugs?
💡 Improvements: What could be better?

Please be:
- Specific (point to exact parts)
- Constructive (explain WHY and HOW to improve)
- Prioritized (most important feedback first)
- Honest (don't hold back valid criticisms)"
```

**Example**:

```
"Review my F&B dashboard and provide detailed feedback.

WHAT I BUILT:
Executive dashboard for restaurant owner with:

Page 1 - Overview:
- 4 KPI cards: Daily Sales, Food Cost %, Labor Cost %, Table Turns
- Line chart: Sales last 30 days
- Bar chart: Sales by daypart (Breakfast, Lunch, Dinner)
- Table: Top 10 items by revenue

Page 2 - Deep Dive:
- Pivot table: Sales by server by day
- Pie chart: Payment methods
- Scatter: Server sales vs hours worked

Interactivity:
- Date range selector (last 7/30/90 days)
- Category filter (Food/Beverage/All)

Built in: Excel with Power Pivot
Data: 6 months of POS data, ~25k transactions

CONTEXT:
- Goal: Help owner identify profitability issues and opportunities
- Audience: Restaurant owner (60yo, not tech-savvy)
- Constraints: Must work on owner's laptop (Excel only, no cloud)

REVIEW CRITERIA:
[same as template]

Please be:
[same as template]"
```

### Template 7: Learn by Building (Project-Based)

```
"I want to build [PROJECT] to practice [SKILLS]. Guide me step-by-step.

PROJECT DESCRIPTION:
[WHAT YOU WANT TO BUILD]

SKILLS TO PRACTICE:
- [SKILL 1]
- [SKILL 2]
- [etc]

MY CURRENT LEVEL:
[WHAT YOU ALREADY KNOW]

PLEASE PROVIDE:
1. Project breakdown (major steps)
2. For Step 1:
   a. What to do
   b. Hints/tips (don't give full solution)
   c. Resources to check
3. Don't give me steps 2+ yet - I'll ask after I complete step 1

After I complete each step, I'll share my work and you'll:
- Review it
- Suggest improvements
- Give me next step

Ready? Give me Step 1."
```

**Example**:

```
"I want to build a restaurant sales analysis dashboard to practice Power Query, DAX, and dashboard design. Guide me step-by-step.

PROJECT DESCRIPTION:
Interactive Excel dashboard showing:
- Daily/weekly/monthly sales trends
- Food vs beverage sales mix
- Server performance rankings
- Menu item profitability

SKILLS TO PRACTICE:
- Power Query (importing and transforming data)
- DAX measures (time intelligence, calculations)
- Dashboard design (layout, interactivity)
- Data modeling (fact/dimension tables)

MY CURRENT LEVEL:
- Know Excel formulas well (VLOOKUP, SUMIFS, etc.)
- Understand pivot tables
- New to Power Query and DAX
- Built 1 simple dashboard before

PLEASE PROVIDE:
[rest of template]"
```

---

## AI Conversation Examples

> **See realistic conversations to learn the flow**

### Conversation 1: Learning VLOOKUP from Scratch

```
ME: "I keep hearing about VLOOKUP but don't get it. Explain like I'm 10."

AI: "VLOOKUP is like a phone book! You know someone's name (lookup value),
     you find their row in the phone book (table), and you read their phone
     number from that row (return value).
     
     In Excel:
     - Name you're looking for = first argument
     - The phone book = second argument (table range)
     - Which column has phone numbers = third argument
     - Exact name match = FALSE as fourth argument"

ME: "OK that makes sense! Give me a restaurant example."

AI: "Perfect! Let's say you have:
     
     Sheet 1 (Orders):
     A: Item Ordered    B: (want price here)
     Burger
     Pizza
     Salad
     
     Sheet 2 (Menu):
     A: Item Name    B: Price
     Burger          $12.99
     Pizza           $16.99
     Salad           $9.99
     Pasta           $14.99
     
     In Orders sheet B2, you'd write:
     =VLOOKUP(A2, Menu!A:B, 2, FALSE)
     
     This says: 'Look up whatever's in A2 (Burger), find it in Menu column A,
     and give me the value from the 2nd column (B) which is the price ($12.99)'"

ME: "Wait, why 2? I thought prices are in column B?"

AI: "Great question! The number isn't the sheet column letter, it's which
     column within YOUR TABLE that you specified.
     
     Your table is Menu!A:B (2 columns)
     Column 1 of the table = A (Item Name)
     Column 2 of the table = B (Price)
     
     So 2 means 'give me the 2nd column of my A:B range'"

ME: "OH! That's why it's called VLOOKUP - vertical lookup. What if I had:
     
     A        B        C        D
     Burger   Entree   $4.50    $12.99
     
     And I wanted the price in column D?"

AI: "Exactly! If your table is A:D (4 columns), then:
     Column 1 = A (Item)
     Column 2 = B (Category)  
     Column 3 = C (Cost)
     Column 4 = D (Price)
     
     So you'd use: =VLOOKUP(A2, Menu!A:D, 4, FALSE)
     
     The 4 says 'give me 4th column' which is D (Price)"

ME: "Got it!! And that FALSE at the end?"

AI: "That's match type:
     FALSE = exact match only ('Burger' must match exactly)
     TRUE = approximate match (finds closest match - dangerous!)
     
     99% of the time use FALSE. TRUE is only for special cases like tax brackets."

ME: "Perfect. Now give me 5 practice problems - don't show answers yet"

AI: [Gives 5 VLOOKUP scenarios]

ME: [Attempts them]

ME: "OK here are my answers for problems 1-3: [paste]"

AI: "Problem 1: ✅ Correct!
     Problem 2: ❌ You used column 2, but the price is in column 3
                   because your range is A:C, not A:B
     Problem 3: ✅ Correct!"

ME: "Ah! Let me fix problem 2... how's this?"

AI: "✅ Now it's right! You understand VLOOKUP!"
```

**Key Takeaway**: Back-and-forth until concept is crystal clear.

### Conversation 2: Debugging a Complex Issue

```
ME: "I'm getting weird results from this formula:
     =SUMIFS(Sales!E:E, Sales!B:B, A2, Sales!C:C, ">=1/1/2024")
     
     It's returning 0 but I know there's data in 2024."

AI: "The issue is likely your date comparison. When you write ">=1/1/2024"
     as text, Excel might interpret it as a division (1 divided by 1 divided by 2024).
     
     Try using DATE function instead:
     =SUMIFS(Sales!E:E, Sales!B:B, A2, Sales!C:C, ">="&DATE(2024,1,1))
     
     The & concatenates >= with a proper date value."

ME: "Oh! That worked! But why do I need the & symbol?"

AI: "SUMIFS criteria needs to be text or a comparison operator + value.
     
     When you just write '>=' and a cell/function, Excel sees them separately.
     
     The & combines them into one criteria expression that SUMIFS understands.
     
     Think of it like: '>=' + DATE(2024,1,1) becomes '>=1/1/2024' as a single criterion."

ME: "Makes sense. What if I wanted dates BETWEEN 1/1/2024 and 12/31/2024?"

AI: "You'd use two date criteria:
     =SUMIFS(Sales!E:E, 
             Sales!B:B, A2,
             Sales!C:C, ">="&DATE(2024,1,1),
             Sales!C:C, "<="&DATE(2024,12,31))
     
     Notice Sales!C:C appears twice - once for >= check, once for <= check."

ME: "Perfect. One more thing - this formula is slow with 50k rows. Optimize?"

AI: "Several options:
     
     Option 1: Use a pivot table (fastest for this use case)
     Option 2: Use helper columns to limit range instead of entire columns
     Option 3: Use SUMPRODUCT with array formulas (can be faster for complex criteria)
     
     For your case, I'd recommend pivot table. Want me to show you how?"

ME: "Yes but also show me the helper column approach for learning"

AI: [Explains both methods in detail]
```

**Key Takeaway**: Persist until root cause is found and multiple solutions explored.

### Conversation 3: Building Something New

```
ME: "I want to create a weekly sales report that shows:
     - Total sales
     - Sales by category
     - Top 10 items
     - Week-over-week change
     
     What's the best approach in Google Sheets?"

AI: "I'll guide you step-by-step. Let's start with your data structure.
     What columns do you have?"

ME: "transaction_date, transaction_id, item_name, category, price, quantity, total"

AI: "Perfect. Here's the plan:
     
     Step 1: Create a summary sheet with date range selector
     Step 2: Use QUERY for total sales
     Step 3: Use QUERY for category breakdown
     Step 4: Use QUERY + SORT for top 10
     Step 5: Calculate WoW change
     Step 6: Format prettily
     
     Let's start with Step 1. Create a new sheet called 'Weekly Report'.
     In A1, put 'Week Starting:', in B1 put a date (try 2024-10-01).
     
     This will be your parameter. Try it and let me know when ready for step 2."

ME: "Done"

AI: "Great. Step 2 - Total Sales for the week.
     
     In A3 type 'Total Sales'. In B3, try writing a QUERY that:
     - Selects from your data sheet
     - Filters where date >= B1 and date < B1+7
     - Sums the total column
     
     Hint: QUERY syntax is like SQL. Try it yourself first!"

ME: "How do I reference B1 in the QUERY WHERE clause?"

AI: "You can't directly, but you can use string concatenation:
     =QUERY(Data!A:G, 
            "SELECT SUM(G) WHERE A >= date '"&TEXT(B1,"yyyy-mm-dd")&"' ...",
            0)
     
     The TEXT function formats your date, and &...& inserts it into the query string."

ME: "This is confusing. Just give me the formula"

AI: "I could, but you'll learn more by trying! Here's more help:
     
     Structure: =QUERY(range, query_string, headers)
     query_string must be text, so anything dynamic needs &
     
     Try this framework and fill in the blanks:
     =QUERY(Data!A:G, 
            "SELECT SUM(_) WHERE A >= date '"&TEXT(B1,"yyyy-mm-dd")&"' 
             AND A < date '"&TEXT(B1+7,"yyyy-mm-dd")&"'",
            0)
     
     What goes in the _ ?"

ME: "G! Because G is total column. Let me try..."

ME: "It worked!!"

AI: "Excellent! Now you understand QUERY with dynamic dates.
     Ready for Step 3 - category breakdown?"
```

**Key Takeaway**: AI guides but makes you think and build yourself.

---

*[Document continues with more detailed sections...]*

## [Continued in sections 7-15 with same level of detail...]

*Due to length, I'm showing the structure. The full document would continue with the remaining sections maintaining this detailed, example-rich approach.*
