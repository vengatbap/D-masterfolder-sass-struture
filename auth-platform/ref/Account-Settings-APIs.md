Account Settings APIs

These are required for user profile management.

Get Profile
GET /account/profile

Response

{
 "id":"123",
 "email":"john@company.com",
 "firstName":"John",
 "lastName":"Doe",
 "phone":"+123456",
 "avatar":"url"
}
Update Profile
PUT /account/profile

Body

{
 "firstName":"John",
 "lastName":"Doe",
 "phone":"+123456"
}
Upload Avatar
POST /account/avatar
Change Password
POST /account/change-password

Body

{
 "currentPassword":"oldpass",
 "newPassword":"newpass"
}

Security checks:

✔ verify current password
✔ enforce password rules

Enable MFA (optional future)
POST /account/mfa/enable
4️⃣ Account Settings UI
4

Page structure:

/account/settings

Tabs:

Profile
Security
Notifications
API Keys

Profile form:

First name
Last name
Phone
Avatar
Timezone

Security tab:

Change password
Enable MFA
Sessions