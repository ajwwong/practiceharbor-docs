---
sidebar_position: 1
title: Scheduling Client Appointments
description: Create, edit, and manage client appointments on your calendar
---

# Scheduling and Managing Client Appointments

When you sign in to your Practice Harbor account, you can navigate to your **Calendar** from the left sidebar to view and manage appointments for your practice.

In this guide, we'll cover:

- [Creating an appointment](#creating-an-appointment)
- [Editing an appointment](#editing-an-appointment)
- [Deleting an appointment](#deleting-an-appointment)
- [Deleting a locked appointment](#deleting-a-locked-appointment)
- [Calendar views](#calendar-views)
- [Scheduling for couples or groups](#scheduling-for-couples-or-groups)

---

## Creating an Appointment

To create a new appointment:

1. Navigate to your **Calendar** from the left sidebar

{/* TODO: Screenshot — calendar week view with an existing appointment visible */}

2. Click on any time slot in the calendar — the **New Appointment** panel will open on the right side

   :::tip
   You can click on any empty time slot in the Week or Day view to quickly create an appointment at that time.
   :::

{/* TODO: Screenshot — the New Appointment panel open on the right side, showing client selector and fields */}

3. **Select a client** from the search dropdown
   - For couples or family therapy, you can select an existing **therapy group** instead of an individual client

4. **Set the date and time**
   - Choose the appointment date
   - Set the start time — the end time will auto-calculate based on the default duration (50 minutes)
   - Adjust the duration if needed

5. **Choose the appointment type**
   - **Intake Therapy** — for initial sessions with new clients
   - **Follow-up Therapy** — for ongoing sessions

6. **Select a location** from the dropdown if your practice has multiple locations
   - If this is a telehealth appointment, select your **virtual/telehealth** location
   - The system will check for room availability conflicts automatically

7. **Set the service and billing details**
   - Select a **service code** (e.g., 90834, 90837)
   - Add **modifiers** if needed (up to 4 per service)
   - Adjust the **fee** if it differs from your default rate
   - You can add **multiple services** to a single appointment using the **+ Add Service** button

8. **Make it recurring** (optional)
   - Check the **Recurring** checkbox
   - Choose the frequency (every N weeks or months)
   - Set the number of sessions to create
   - All sessions in the series are created at once

9. Click **Save**

{/* TODO: Screenshot — completed appointment form with service code, fee, and Save button visible */}

:::note Conflict Detection
If the appointment overlaps with an existing appointment or a Google Calendar event, you'll see a conflict warning. You can choose to **Schedule Anyway** or adjust the time.
:::

{/* TODO: Screenshot — conflict detection warning dialog */}

---

## Editing an Appointment

You can edit an existing appointment to update details such as the date, time, service, fee, or location.

To edit an appointment:

1. Navigate to your **Calendar**
2. Click on the appointment you want to edit — the **Appointment Details** panel will open

{/* TODO: Screenshot — appointment details panel showing status dropdown, services, and action buttons */}

3. Edit any of the following:
   - **Date and time** — change the appointment date or time
   - **Location** — switch to a different practice location
   - **Services** — add, remove, or change service codes, modifiers, and fees
   - **Status** — update to **Booked**, **Show**, **Cancelled**, or **No Show**

4. Click **Save**

If the appointment is part of a recurring series, you'll be asked whether to apply changes to:
- **This appointment only**
- **This and future appointments**
- **All appointments in the series**

:::note
Changing the status to **Show** (fulfilled) will lock certain appointment details. See [Deleting a locked appointment](#deleting-a-locked-appointment) for more information.
:::

### Additional Actions from the Appointment Details Panel

Once an appointment is created, you can also:

- **Record Session** — start an audio recording for AI-assisted progress notes
- **Dictate Note** — dictate a note for the appointment
- **Upload File** — attach a document to the appointment
- **Video Session** — launch a telehealth session (if the location is virtual)
- **Create Invoice & Add Payment** — generate an invoice and record payment
- **Extend Series** — add more sessions to a recurring series (1–12 additional sessions)

---

## Deleting an Appointment

You can delete appointments from your calendar when they're no longer needed. **Once an appointment is deleted, this action can't be undone.**

To delete an appointment:

1. Navigate to your **Calendar**
2. Click on the appointment
3. Click the **trash icon** at the bottom of the appointment panel

{/* TODO: Screenshot — trash icon location on the appointment panel */}

4. Confirm the deletion

### Deleting a Recurring Appointment

When deleting an appointment that's part of a recurring series, you'll be asked:

- **Delete Only This Appointment** — removes just this one session
- **Delete This and Future Appointments** — removes this session and all future ones in the series
- **Delete All Appointments in Series** — removes the entire series

{/* TODO: Screenshot — recurring series delete options dialog showing the three choices */}

:::caution
When deleting a series, associated encounters and billing items (charge items) are also removed. Any submitted insurance claims will be retained.
:::

---

## Deleting a Locked Appointment

An appointment is considered **locked** if it has an invoice attached. You won't be able to delete a locked appointment until the associated documents are removed.

To unlock and delete a locked appointment:

1. Navigate to the appointment on your **Calendar**
2. The system will show a message indicating that documents are attached

{/* TODO: Screenshot — locked appointment message showing "delete invoice to delete appointment" */}
3. **Delete the invoice** by clicking the trash icon on the invoice within the appointment panel
4. Once the invoice is removed, you can delete the appointment

:::note
If payments are attached to the invoice, they will become unallocated when the invoice is deleted. You can then reallocate them to a new invoice.
:::

---

## Calendar Views

The calendar supports three views, accessible from the toggle at the top:

{/* TODO: Screenshot — calendar header showing Day/Week/Month toggle with Week selected */}

### Month View
An overview of the entire month. Click on any day to see its appointments or create a new one. This is the default view.

### Week View
See your full week at a glance. Appointments appear as color-coded time blocks.

### Day View
A detailed view of a single day with 30-minute time slots. The calendar automatically scrolls to the current time when you open this view.

:::tip
Your preferred view is saved automatically and will be remembered the next time you open the calendar.
:::

---

## Scheduling for Couples or Groups

Practice Harbor supports scheduling appointments for **couples** and **family therapy groups**.

To schedule a group appointment:

1. Create a new appointment from the calendar
2. In the client selector, search for and select the **therapy group** (e.g., "Jamie & Karen")

{/* TODO: Screenshot — client selector showing a therapy group option */}
3. The appointment will be linked to the group, and billing will use the group's identified patient and guarantor settings
4. All other appointment details (time, service, location) work the same as individual appointments

:::note
To set up a therapy group, navigate to the client's profile and create a couples or family group from there. See the [Couples & Family Therapy](/clients/couples-family) documentation for more details.
:::

---

## Appointment Reminders

Email reminders are sent automatically before each appointment. The default reminder window is **48 hours** before the appointment. You can customize this in **Settings > Client Emails**.

---

## Related

- [Recurring appointments](/scheduling/recurring-appointments)
- [Online booking](/scheduling/online-booking)
- [Google Calendar sync](/scheduling/google-calendar-sync)
