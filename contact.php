<?php
// Update this email address before deployment.
$recipientEmail = 'hello@a4aesthetics.com';
$redirectBase = 'categories.html#contact';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . $redirectBase);
    exit;
}

function clean_input($value) {
    return trim(strip_tags((string)$value));
}

$fullName = clean_input($_POST['full_name'] ?? '');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = clean_input($_POST['phone'] ?? '');
$company = clean_input($_POST['company'] ?? '');
$location = clean_input($_POST['location'] ?? '');
$service = clean_input($_POST['service'] ?? '');
$projectType = clean_input($_POST['project_type'] ?? '');
$budget = clean_input($_POST['budget'] ?? '');
$timeline = clean_input($_POST['timeline'] ?? '');
$preferredContact = clean_input($_POST['preferred_contact'] ?? '');
$referral = clean_input($_POST['referral'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($fullName === '' || !$email || $phone === '' || $service === '' || $message === '') {
    header('Location: categories.html?contact=error#contact');
    exit;
}

$subject = 'New Project Enquiry from A4 Website';

$emailBody = "A new project enquiry has been submitted on the A4 Aesthetics & Design website.\n\n" .
    "Full Name: {$fullName}\n" .
    "Email: {$email}\n" .
    "Phone: {$phone}\n" .
    "Company: {$company}\n" .
    "Project Location: {$location}\n" .
    "Service Needed: {$service}\n" .
    "Project Type: {$projectType}\n" .
    "Estimated Budget: {$budget}\n" .
    "Desired Timeline: {$timeline}\n" .
    "Preferred Contact Method: {$preferredContact}\n" .
    "Referral Source: {$referral}\n\n" .
    "Project Brief:\n{$message}\n";

$headers = [
    'From: A4 Website <no-reply@a4aesthetics.com>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8'
];

$mailSent = mail($recipientEmail, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    header('Location: categories.html?contact=success#contact');
} else {
    header('Location: categories.html?contact=error#contact');
}
exit;
