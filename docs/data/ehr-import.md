---
sidebar_position: 1
title: EHR Import
description: Import client data from your previous EHR system
---

# EHR Import

Import your existing client records from another EHR system. Upload a data export zip file and the platform automatically parses and creates client records.

## How It Works

1. Export your data from your previous EHR (as a zip file)
2. Go to **Settings > EHR Import**
3. Upload the zip file
4. The system automatically parses:
   - **Client contacts** (VCF files) → Patient records
   - **Progress notes** (PDFs) → Clinical notes with session dates, diagnoses, and CPT codes
   - **Treatment plans** (PDFs) → Structured treatment plan records
   - **Other documents** → Stored as uploaded documents on the client's profile
5. Review the imported data

## Supported Formats

- Password-protected zip files from most EHR export systems
- VCF contact files
- PDF progress notes, treatment plans, and documents

## After Import

- Imported records are tagged so you can easily identify them
- Review imported data for accuracy
- All imported records are linked to the correct client profiles

:::info
EHR Import is available on the **Plus** plan. Go to **Settings > EHR Import** to get started.
:::

## Related

- [Data export](/data/data-export)
