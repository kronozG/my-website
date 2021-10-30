import { Container, Heading, Box, Image } from "@chakra-ui/react";
import {
  BioSection,
  BioYear,
  Paragraph,
  BioParagraph,
} from "../components/index/sections";
import Skills from "../components/index/skills";
import Layout from "../components/layouts/section";

export default function Index() {
  return (
    <Layout title="Home">
      <Container>
        <Box pt={4} align="center">
          <Heading variant="page-title">Hi, I am Gabriel Leon</Heading>
          <p>Front-End Developer</p>
        </Box>

        <Box pt={8} align="center">
          <Image
            boxSize="150px"
            borderColor="#38e2b3"
            borderWidth={3}
            borderStyle="solid"
            borderRadius="full"
            src="/images/profile.jpg"
          />
        </Box>

        <Box pt={14}>
          <Heading
            color="#38e2b3"
            textUnderlineOffset={6}
            textDecoration="underline"
            size="md"
            variant="section-title"
          >
            About
          </Heading>
          <Paragraph>
            I am a developer interested in technology, I like to learn new
            things every day and I want to grow in my skills
          </Paragraph>
        </Box>

        <Box pt={14}>
          <Heading
            color="#38e2b3"
            textUnderlineOffset={6}
            textDecoration="underline"
            size="md"
            variant="section-title"
          >
            Bio
          </Heading>

          <BioSection pt={10}>
            <BioYear>2016</BioYear>
            Career Enginner on Systems on Universidad de Sonora
          </BioSection>
          <BioParagraph>
            University - In my career I developed software skills, developing exercises and
            working on various projects
          </BioParagraph>
          <BioSection pt={2}>
            <BioYear>2016</BioYear>
            My own business Fixer
          </BioSection>
          <BioParagraph>
            Fixer - I gave technical support and installed software for
            different people
          </BioParagraph>
          <BioSection pt={2}>
            <BioYear>2017</BioYear>
            Worked at TYT Contact Center (Systems Analyst)
          </BioSection>
          <BioParagraph>
            TYT - I worked as a systems analyst, I was in charge of the TI
            department in hermosillo, developing activities for the improvement
            and administration of the department.
          </BioParagraph>
          <BioSection pt={2}>
            <BioYear>2019</BioYear>
            Worked at Listentrust (Helpdesk Enginner)
          </BioSection>
          <BioParagraph>
            Listentrust - I learned the use of Active Directory to manage a
            company, developed skills in the linux OS, and gave technical
            support
          </BioParagraph>
          <BioSection pt={2}>
            <BioYear>2021</BioYear>
            Worked at Listentrust (Software Developer)
          </BioSection>
          <BioParagraph>
            Listentrust - currently work as a software developer, with
            programming languages ​​like python, php and javascript with
            frameworks like Djando, Laravel, Vue, React.
          </BioParagraph>
        </Box>

        <Box pt={14}>
          <Heading
            color="#38e2b3"
            textUnderlineOffset={6}
            textDecoration="underline"
            size="md"
            variant="section-title"
          >
            Skills
          </Heading>
          <Skills />
        </Box>
      </Container>
    </Layout>
  );
}
