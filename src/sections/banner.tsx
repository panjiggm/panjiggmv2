/** @jsx jsx */
import {
  jsx,
  ThemeUICSSObject,
  Container,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  Link,
} from 'theme-ui';
import { motion } from 'framer-motion';

// Icons
import { HiDownload } from 'react-icons/hi';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from 'react-icons/ai';
import { IconContext } from 'react-icons';

// Motions
import {
  btnGroup,
  easeing,
  fadeInUp,
  stagger,
  star,
} from '../utils/motions';

// Components
import { AnimatedTextCharacter } from '../components';

// Assets

export const Banner = () => {
  let AnimatedText = motion(Text);
  let AnimatedFlex = motion(Flex);
  let AnimatedButton = motion(Button);

  const socials = [
    {
      link: 'https://www.linkedin.com/in/panjiggm/',
      icon: <AiFillLinkedin color="#0A66C2" />,
    },
    {
      link: 'https://instagram.com/panjiggm',
      icon: <AiFillInstagram color="#E4405F" />,
    },
    {
      link: 'https://twitter.com/panjiggm',
      icon: <AiFillTwitterCircle color="#1DA1F2" />,
    },
    {
      link: 'https://github.com/panjiggm',
      icon: <AiFillGithub color="#2C3E50" />,
    },
    {
      link: 'https://facebook.com/panjiggmz',
      icon: <AiFillFacebook color="#1877F2" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: easeing }}
      sx={styleBanner}
    >
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={styleContaierBox}>
          <Heading as="h1" variant="heroPrimary">
            <AnimatedTextCharacter text="Hi! Panji here." />
            <AnimatedTextCharacter text="Welcome 🤓" />
          </Heading>
          <AnimatedText
            as="p"
            variant="heroSecondary"
            variants={fadeInUp}
          >
            I'am a software engineer based in Tangerang, Indonesia.
            Below are some projects that I have worked on.
          </AnimatedText>
          <AnimatedFlex sx={{ gap: 3 }} variants={stagger}>
            <AnimatedButton
              variant="darkButton"
              aria-label="Hire Me"
              variants={btnGroup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </AnimatedButton>
            <AnimatedButton
              variant="primaryButtonOutline"
              aria-label="Get Resume"
              variants={btnGroup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Flex sx={{ gap: 1 }}>
                <HiDownload size={20} />
                <span>Get Resume</span>
              </Flex>
            </AnimatedButton>
          </AnimatedFlex>
          <motion.div variants={stagger} style={{ marginTop: 30 }}>
            <AnimatedText
              as="p"
              variant="text"
              color="muted"
              variants={fadeInUp}
            >
              Follow me on Social Media
            </AnimatedText>
            <IconContext.Provider
              value={{
                size: '28px',
                style: {
                  marginRight: 8,
                },
              }}
            >
              {socials.map((social, i) => (
                <motion.span
                  key={i}
                  variants={star}
                  whileHover={{
                    scale: 1.2,
                    rotate: 180,
                    borderRadius: '100%',
                    cursor: 'pointer',
                  }}
                >
                  <Link href={social.link} target="_blank">
                    {social.icon}
                  </Link>
                </motion.span>
              ))}
            </IconContext.Provider>
          </motion.div>
        </Box>

        <Box sx={styleImageBox}>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Flex
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <motion.div
                style={{
                  width: 340,
                  height: 340,
                  borderRadius: 500,
                  backgroundColor: '#8ae287',
                  backgroundImage:
                    'linear-gradient(43deg, #8ae287 0%, #4158D0 30%, #C850C0 66%, #FFCC70 100%)',
                  position: 'relative',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  ease: 'linear',
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <Image
                src={'../../ava.webp'}
                alt="banner"
                style={{
                  width: 340,
                  height: 340,
                  borderRadius: 200,
                  position: 'absolute',
                  left: 'auto',
                  right: 'auto',
                }}
              />
            </Flex>
          </motion.div>
        </Box>
      </Container>
    </motion.div>
  );
};

const styleBanner: ThemeUICSSObject = {
  overflow: ['hidden', 'initial', null, 'hidden'],
  backgroundRepeat: `no-repeat`,
  backgroundPosition: 'top left',
  backgroundSize: 'cover',
  borderBottomRightRadius: [100, 150, null, null, null, 250],
  pt: ['150px', null, null, null, null, null, '140px', '130px'],
  pb: ['100px', null, null, '110px', null, 10, '150px'],
  backgroundColor: 'background',
};

const styleContaierBox: ThemeUICSSObject = {
  width: ['100%', null, '85%', '55%', '50%', '55%'],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexShrink: 0,
  pt: [0, null, null, null, null, null, 5, 7],
};

const styleImageBox: ThemeUICSSObject = {
  display: ['none', null, null, 'flex'],
  justifyContent: 'center',
  alignItems: 'center',
  // overflow: 'hidden',
  width: '100%',
  height: '100%',
  // ml: [
  //   0,
  //   null,
  //   null,
  //   '-110px',
  //   '-115px',
  //   '-150px',
  //   '-210px',
  //   '-270px',
  // ],
  // mr: [
  //   0,
  //   null,
  //   null,
  //   '-145px',
  //   '-160px',
  //   '-180px',
  //   '-220px',
  //   '-290px',
  // ],
  // mt: [0, null, null, null, 4, 7, 0],
  // mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
};
