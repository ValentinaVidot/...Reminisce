# Reminisce Prototype - Simplified User Flow

## Overview
This document provides a simplified flow diagram showing the main user journeys in the Reminisce dementia monitoring app prototype.

---

## Main Application Flow

```
┌─────────────────────────────────────┐
│    Reminisce App Entry Point (/)    │
└──────────┬──────────────────────────┘
           │
     ┌─────┴─────┐
     │           │
     ▼           ▼
┌─────────┐  ┌────────┐
│Register │  │ Login  │
└────┬────┘  └───┬────┘
     │           │
     └─────┬─────┘
           │
           ▼
    ┌──────────────────┐
    │ Dashboard Home   │
    │ (/dashboard)     │
    └────┬──┬──┬──┬────┘
         │  │  │  │
    ┌────┴──┴──┴──┴────┐
    │   4 Main Actions │
    └──┬──┬──┬──┬──────┘
       │  │  │  │
       ▼  ▼  ▼  ▼
    ┌──┐ ┌──┐ ┌──┐ ┌──────────────┐
    │01│ │02│ │03│ │04            │
    │  │ │  │ │  │ │              │
    └──┘ └──┘ └──┘ └──────────────┘
```

---

## Primary User Journeys

### 1️⃣ Memory Testing
```
Dashboard
    │
    ▼
┌─────────────────────────────┐
│ Memory Test Chat Interface  │
│  • Bot asks questions       │
│  • Text or voice input      │
│  • User responds            │
└────────┬────────────────────┘
         │
         ▼
┌─────────────────────────────┐
│ Test Results Summary        │
│  • Overall Score            │
│  • Performance Trend        │
│  • Back to Dashboard        │
└─────────────────────────────┘
```

### 2️⃣ Medication Reminder
```
Dashboard
    │
    ▼
┌─────────────────────────────┐
│ Medication Schedule         │
│  • List of today's meds     │
│  • Mark as Taken button     │
│  • Weekly calendar view     │
└────────┬────────────────────┘
         │
         ▼
    Dashboard
```

### 3️⃣ Emergency Contact Setup
```
Dashboard
    │
    ▼
┌─────────────────────────────┐
│ Emergency Contact Form      │
│  • Primary contact info     │
│  • Backup contact info      │
│  • Save & Test Alert        │
└────────┬────────────────────┘
         │
         ▼
    Dashboard
```

### 4️⃣ Emergency Response
```
Dashboard
    │
    ▼
┌─────────────────────────────┐
│ Emergency Alert Page        │
│  • Alert notification       │
│  • Display contact info     │
│  • Call button              │
└─────────────────────────────┘
```

---

## Key Features by Page

| Page | Purpose | Key Actions |
|------|---------|------------|
| **Home (/)** | Entry point | Register / Login |
| **Dashboard** | Hub | Access all 4 main features |
| **Memory Test** | Assess cognition | Respond to bot questions (text/voice) |
| **Medications** | Track medication | Check schedule & mark as taken |
| **Emergency Contact** | Setup alerts | Add primary & backup contacts |
| **Emergency Alert** | Rapid response | Call caregiver immediately |

---

## Navigation Summary
- All features accessible from Dashboard
- Each feature loops back to Dashboard
- Emergency flow has dedicated alert page
- Mobile-first responsive design
