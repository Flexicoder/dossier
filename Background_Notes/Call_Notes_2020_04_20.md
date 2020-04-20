# Notes from Call - 20th April 2020

Attending the call Paul Ledger and Katie Ledger

We discussed the high level points Paul had created in the initial README and expanded on what those fetaures included

## Profile

In the patients profile the following information can be captured

### Key Information
* Name
* What you like to be called
* NHS Number
* Hospital Number - you have a unique per hospital, so need to be able to add multiples, including the hospital it relates too
* DOB
* Address
* Contact Number
* Next of Kin - maybe allow for multiples
* Next of Kin Contact Number
* Next of Kin Address

This information is useful so that if the patient isn't up to talking much, they can just hand over the device and everything is in one place. All information should only be accessbile if the person has authenticated themselves with either Face Id, Touch Id or PIN


### Medical Details
* Treatments - Chemotherapy, Radiation Therapy, Post Transplant, Immunotherapy - a patient can have any combos of these - its useful to know because the symptons can be different for each
* Consultant Details  
* Clinical Nurse Specialist (CNS)
* Diagnosis 
* Allegies - Multiple entries
* Medication, including durg, does, frequency - maybe allow them to take a picture of medication box - again multiple entries
* Past Medical History - e.g. Asthma - multiple entries


## Calendar
* Date, time, duration
* Whats it for - e.g. chemo, review, results
* Location
* Notes - so they can enter any additional info, like things they need to bring
* Ability to "attach/link" scanned documents to the appointment
* Link Sympton reviews, so that they can be discussed about at the appointment
* Share appointment information so family has details

Its worth noting that these appointments will be pretty adhoc, theres not always a set pattern, i.e. every Tuesday for the next 20 weeks. Some appointments could be blocks of days, where a patient is being kept in for treatment. Appointments are likely to be made while discussing care with a consultant/nurse.

## Documents
This is an area where the patient can scan documents and store the picture in the app for later retrival. There is likely to be an initial set of folders
* Appointment letters
* Clinic letters
* Blood Results
* Discharge Summary letters

The patient should be able to create their own folders for storing scans and be able to "tag" images so that they can used for searching, e.g. you could have a document in each folder that is tagged with "Brighton"

The documents should be available to be used as email attachments

## Sympton Review
This allows the patient to review how they are coping on a day to day basis, initially this will be a set of simple questions (that could be tailored to the treatments). Each question will have a rating and summary can be viewed (like a graph) to see patterns. The review information can be linked to an appointment and shared via email so that a consultant/nurse can see.


## News & Events
We thought that this should be moved to a possible future release. As it stands the app is very "functional" and doesn't need any access to the internet and the implications that includes.

## Other Points
We are concious that the information being captured is very personal and needs to be treated with the utmost respect. We need to ensure we are adhering to GDPR, which might mean the ability to export all the information captured. This could also be the only device the patient has stored the information, what happens if the device is wiped or the app does something that corrupts data, we need some good T&C's we also might need to look at CloudKit(?). We really can't afford to incur any service costs.

Detailed Sympton Review - [UKONS](https://www.ukons.org/) have some very structured documents that allow staff to ask specific questions about how the patient is doing. Then based on the answers this could lead to changes in how the patient is treated, so its fairly important. Its also daunting to look at and could have a negative effect on the patient. It would be good to include this sort of functionality, but it needs a lot of careful thought. Katie will be contacting UKONS to see if we can use the questionaire in the first place. 

The GPL-3.0 licence the project is currently under, does that fit? For example say the app was widely used and to go to the next step we would need to look for funding or charity status, would any of the work we've done be limited by the licence. Paul to investigate. 


## Possible Features

Here is a list of "additional" features that came out of the conversation

* Hospital look up, locations, telephone numbers, etc
* Terminology, what do all the abbrieviations mean (like CNS)
