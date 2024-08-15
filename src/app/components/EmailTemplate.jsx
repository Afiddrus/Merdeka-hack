import { Html, Heading, Text } from "@react-email/components";

const EmailTemplate = ({ name, email, message }) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details:</Text>
      <Text><strong>Name:</strong> {name}</Text>
      <Text><strong>Email:</strong> {email}</Text>
      <Text><strong>Message:</strong></Text>
      <Text>{message}</Text>
    </Html>
  );
};

export default EmailTemplate;
