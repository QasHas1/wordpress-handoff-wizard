# ✅ SOLUTION: ONE Template for ALL Forms

## The Problem
- You've reached your EmailJS template limit
- You have 6+ registration forms with different course options
- Each form has different courses in the "Select Course" dropdown

## The Solution
**Use ONE template that works for ALL forms!**

### Why This Works
Even though your forms have different course options:
- **Tajweed**: TAJBEG, TAJINT, TAJADV, TAJPOEM, TAJBOOK
- **Hifth**: HIFTHBEG, HIFTHINT, HIFTHADV, HIFTHREV
- **Arabic**: ARAB01, ARAB02, ARAB03, ARAB04, ARABC, ARABQ
- **Major Qira'at**: QIRMQ1, QIRM11, QIRM12, etc.
- **Minor Qira'at**: QIRSQ1, QIRS11, QIRS12, etc.
- **Ten Saghir**: QSA101, QSA102, QSA103, etc.

**They all get sent as the same variable: `{{course}}`**

The template just displays whatever value is in `{{course}}` - it doesn't care what the actual course code is!

---

## ✅ Code Already Updated!

I've already updated all your form files to send data using the same variable names:

- ✅ `src/components/Registration.tsx` (Tajweed, Hifth, Arabic)
- ✅ `src/pages/MajorQiraatRegistration.tsx`
- ✅ `src/pages/MinorQiraatRegistration.tsx`
- ✅ `src/pages/TenSaghirRegistration.tsx`

All forms now send:
- `fullName` (instead of firstName + lastName/surname)
- `phone` (instead of phone/telephone)
- `course` (instead of course/selectedCourses)
- `courseType` (identifies which form: "Tajweed Lessons", "Hifth (Memorization)", etc.)

---

## 📋 What YOU Need to Do

### Step 1: Update Your EmailJS Template

1. Go to **EmailJS Dashboard** → **Email Templates**
2. Edit your existing template `template_7nu246n` (or create ONE new template)
3. Copy the template below:

---

## 📧 EmailJS Template

### Subject Line:
```
New {{courseType}} Registration - {{fullName}}
```

### HTML Body:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #0f172a;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            background-color: #f8f9fa;
            padding: 30px;
            border: 1px solid #dee2e6;
        }
        .section {
            margin-bottom: 25px;
            padding: 15px;
            background-color: white;
            border-left: 4px solid #0ea5e9;
            border-radius: 4px;
        }
        .section-title {
            font-size: 18px;
            font-weight: bold;
            color: #0f172a;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        .field {
            margin-bottom: 12px;
        }
        .field-label {
            font-weight: bold;
            color: #475569;
            display: inline-block;
            min-width: 150px;
        }
        .field-value {
            color: #1e293b;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #64748b;
            font-size: 12px;
            border-top: 1px solid #dee2e6;
            margin-top: 20px;
        }
        .highlight {
            background-color: #fef3c7;
            padding: 2px 6px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New {{courseType}} Registration</h1>
        <p>Ibn Al-Jazari Institute</p>
    </div>
    
    <div class="content">
        <!-- Personal Information -->
        <div class="section">
            <div class="section-title">Personal Information</div>
            <div class="field">
                <span class="field-label">Full Name:</span>
                <span class="field-value">{{fullName}}</span>
            </div>
            <div class="field">
                <span class="field-label">Email:</span>
                <span class="field-value">{{email}}</span>
            </div>
            <div class="field">
                <span class="field-label">Phone:</span>
                <span class="field-value">{{phone}}</span>
            </div>
            <div class="field">
                <span class="field-label">Age:</span>
                <span class="field-value">{{age}}</span>
            </div>
            <div class="field">
                <span class="field-label">Country/City:</span>
                <span class="field-value">{{countryCity}}</span>
            </div>
        </div>

        <!-- Course Information -->
        <div class="section">
            <div class="section-title">Course Information</div>
            <div class="field">
                <span class="field-label">Course Type:</span>
                <span class="field-value highlight">{{courseType}}</span>
            </div>
            <div class="field">
                <span class="field-label">Selected Course(s):</span>
                <span class="field-value highlight">{{course}}</span>
            </div>
            <div class="field">
                <span class="field-label">Previous Experience:</span>
                <span class="field-value">{{experience}}</span>
            </div>
        </div>

        <!-- Availability -->
        <div class="section">
            <div class="section-title">Availability (UTC + 0)</div>
            <div class="field">
                <span class="field-label">Preferred Days:</span>
                <div class="field-value">{{daysList}}</div>
            </div>
            <div class="field">
                <span class="field-label">Preferred Time Slots:</span>
                <div class="field-value" style="white-space: pre-line;">• {{timesList}}</div>
            </div>
        </div>

        <!-- Learning Goals -->
        <div class="section">
            <div class="section-title">Learning Goals</div>
            <div class="field-value">{{goals}}</div>
        </div>

        <!-- Additional Questions -->
        <div class="section">
            <div class="section-title">Additional Questions or Comments</div>
            <div class="field-value">{{questions}}</div>
        </div>

        <div class="footer">
            <p>This is an automated email from the Ibn Al-Jazari Institute registration system.</p>
            <p>Please contact the student at {{email}} or {{phone}} to confirm their registration.</p>
        </div>
    </div>
</body>
</html>
```

---

## 🎯 How It Works - Examples

### Example 1: Tajweed Registration
**User selects:** "TAJBEG - Beginner Tajweed"

**Email shows:**
- Course Type: **Tajweed Lessons**
- Selected Course(s): **TAJBEG - Beginner Tajweed**

### Example 2: Major Qira'at Registration
**User selects:** "QIRMQ1, QIRM11, QIRM12"

**Email shows:**
- Course Type: **Major Qira'at Lessons**
- Selected Course(s): **QIRMQ1, QIRM11, QIRM12**

### Example 3: Hifth Registration
**User selects:** "HIFTHBEG - Beginner Hifth (Juz 30)"

**Email shows:**
- Course Type: **Hifth (Memorization)**
- Selected Course(s): **HIFTHBEG - Beginner Hifth (Juz 30)**

**Same template, different values!** ✅

---

## ✅ Benefits

- ✅ **Only ONE template needed** (saves 6+ template slots!)
- ✅ **No subscription limit issues**
- ✅ **Easy to maintain** - update once, all forms benefit
- ✅ **Consistent email formatting** across all registrations
- ✅ **Works with free tier**
- ✅ **Code already updated** - just update the template!

---

## 🧪 Testing

After updating your template:

1. Test **Tajweed Registration** - should show "Tajweed Lessons" and the selected course
2. Test **Hifth Registration** - should show "Hifth (Memorization)" and the selected course
3. Test **Arabic Registration** - should show "Arabic Language" and the selected course
4. Test **Major Qira'at** - should show "Major Qira'at Lessons" and selected courses
5. Test **Minor Qira'at** - should show "Minor Qira'at Lessons" and selected courses
6. Test **Ten Saghir** - should show "Ten Saghir Qira'at Recitations" and selected courses

All should work with the **same template**! 🎉

---

## 📝 Summary

**You only need to:**
1. ✅ Update ONE EmailJS template (copy the template above)
2. ✅ That's it! The code is already updated

**You DON'T need to:**
- ❌ Create separate templates for each form
- ❌ Upgrade your EmailJS subscription
- ❌ Change any code (already done!)

---

## ❓ Questions?

The key insight: **Different course options don't require different templates!**

The template just displays `{{course}}` - whatever course the user selected gets displayed. The `{{courseType}}` variable tells you which form it came from, so you know the context.

One template = All forms = Problem solved! ✅

