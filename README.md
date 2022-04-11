# Homewind

A project where you can manage your buildings, floors, flats and renter information.

### [Visit the website](https://homewind.netlify.app/login) *(Not reccomended for mobile phones)*

## Technology used

- JavaScript
- TypeScript
- Angular
- Firebase
- Firebase Firestore database
- Firebase Auth
- Browser LocalStorage

## Usage

Download or `git clone` the project and use it.

### Pre-requisite installations:

- NodeJS
- npm
- Angular CLI

### Install Nodejs and NPM:
check if your system has nodejs and npm installed with

```
node -v
npm -v
```

If nodejs and npm is not installed then goto [nodejs.org](https://nodejs.org/en/) and download nodejs and npm or on linux use

```
sudo apt install nodejs
sudo apt install npm
```

### Install Angular CLI:
check if your system has angular cli installed with `ng` command.<br>
if Not then install angular cli with npm

```
npm install -g @angular/cli
```

After downloading the project from github install the dependencies to run the project with:
```
npm install
```

<hr />

Use `ng serve` to run the project in `http://localhost:4200/`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<hr />

## Firebase database

If you want to use your own firebase account and database for the project then follow this section:

### Firebase
Go to [console.firebase.google.com](https://console.firebase.google.com/) and follow these steps.

1. Add a new project.

2. Enter project name and continue.

3. If you don't want google analytics for project then untick the option and continue.

4. Then in project overview select **web** and pick a name for your app and register (You can copy the firebase config if you want to setup firebase manually in your project). 

5. Go to console and navigate to Authentication > Get Started > Email/Password > Enable. This will enable email/password signup and login option

6. Then navigate to Firestore database > Create Database > Next > Select database location (Default is reccomended) > Rules > Then change `allow read, write: if false;` to `true`

### Install Firebase sdk
To install the Firebase sdk and to login to firebase

```
npm install -g firebase
npm install -g firebase-tools
```

**Note:** if you get any permission error while installing firebase then you can run the terminal as and **administrator**.

**If you are in linux:**
```
sudo npm install -g firebase
sudo npm install -g firebase-tools 
```

### Firebase login from CLI

After downloading the project open the project in terminal and login to firebase with firebase CLI:
```
firebase login:ci
```

### Firebase setup in project

To automatically add Firebase to angular use this command

```
ng add @angular/fire
```

Then select the Authentication and Firestore option to add them to your project using your firebase account, project and app. (If you logged in using firebase cli).

<hr />

## Firebase Usage Cost

There is 2 payment plan in Firebase

1. Spark Plan (No-Cost)
	- This is the default plan. No cost usage.

2. Blaze Plan (Pay as you go)
	- This is the paid plan where you are charged by firebase usage.

### Cost for services:

**Authentication:**
- *Spark plan:* 10k per month.
- *Blaze plan:* $0.06 per verification

**Cloud Firestore (Cloud Database):**

Per Unit = Per 100,000 documents

- *Spark plan:* 1GB Free
	- Document writes: 20k per day.
	- Document reads: 50k per day.
	- Document deletes: 20k per day.

- *Blaze plan:* $0.108 per additional GB after free storage.
	- Document writes: $0.18 per unit after free quota.
	- Document reads: $0.06 per unit after free quota.
	- Document deletes: $0.02 per unit after free quota.

**Firebase hosting:**

- *Spark plan:*
	- Storage: 10GB
	- Data transfer: 360MB per day

- *Blaze plan:*
	- Storage: $0.026 per GB
	- Data transfer: $0.15 per GB

**Firebase Cloud Storage:**

- *Spark plan:*
	- GB Stored: 5GB
	- GB downloaded: 1GB per day
	- Upload operations: 20k per day
	- Download operations: 50k per day

- *Blaze plan:*
	- GB Stored: $0.026 per GB
	- GB downloaded: $0.12 per GB
	- Upload operations: $0.05 per 10k
	- Download operations: $0.004 per 10k

<hr />

## Documentation

**Login with user `admin@gmail.com` and password `123456` as password to see demo data.**

--> Navigating to `http://localhost:4200/` will redirect you to the **Login** page where you sign in with your email and password *(Logged in users are remembered by default in every browser)*.

--> You can go to **Sign-up** page to register with an email and password.

--> After logging in you can see the total number of **Building**, **Flat** and **Renter** you have added.<br>
You can view the full list too.

--> You can **Sign-out** using the Logout button located at the right side of the top bar.

### Sidebar options

- Dashboard

	- 3 simple cards to show the count of total renter, building and flat.

- Building

    - Building List -> View the full list of all the existing building you added.<br>
	You can **Edit, Delete** a building information from here.

    - Add Building -> You can **add** a new Building information here with **Building name, Floor number and Building number**.

- Flat

    - Flat list -> View the full list of all the existing Flat you added.<br>
	You can **Edit, Delete** flat information from here.

    - Add Flat -> You can **add** a new Flat to an existing **Building according to floor**.

- Renter

    - Renter List -> View the full list of all the renters.<br>
	You can **Edit, Delete** a renter Information from here.

    - Add Renter -> You can **add** a new renter into an **existing building according to floor and flat**.

- Rent Pay

	- Add rent payment information about a renter.

	- Add rent amount, month of rent payment, rent type, electric bill, gas bill and water bill.
		- **Rent Type**:
			- Active month: Rent payment of the **current/active** month
			- Due rent: Rent payment of a **due month**.
			- Advance: **Advance payment** for when adding a new renter.
    
- Report

	- See a report of an indivisual **Renter** according to month.

	- Print option -> Can print **sinlge month report** or you can print a **list of payment month** of a renter.

<br />
<br />

**Note:** Verification system for Emails and National ID is currently not used for this version of the project.