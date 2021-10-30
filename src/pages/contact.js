import { Container, Heading } from "@chakra-ui/react";
import FormContact from "../components/contact/form-contact";
import Layout from "../components/layouts/section";

const Contact = () => (
  <Layout title="Contact">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Contact
      </Heading>
    </Container>
    <FormContact />
  </Layout>
);

export default Contact;
