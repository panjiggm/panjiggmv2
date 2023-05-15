/** @jsx jsx */
import { FC } from 'react';
import { keyframes } from '@emotion/react';
import {
  Button,
  Container,
  Text,
  ThemeUIStyleObject,
  jsx,
} from 'theme-ui';
import { motion } from 'framer-motion';

// Icons
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

// Motions
import { header, stagger } from '../utils/motions';

interface HeaderProps {
  className: string;
  colorMode: string;
  onColorMode: () => void;
}

export const Header: FC<HeaderProps> = ({
  className,
  colorMode,
  onColorMode,
}) => {
  const AnimatedText = motion(Text);

  return (
    <motion.header
      sx={stylesHeader}
      className={className}
      id="header"
      variants={stagger}
    >
      <Container sx={styleContainer}>
        <AnimatedText variants={header} sx={styleLogo}>
          panji<span>ggm</span>
        </AnimatedText>

        <Button
          variant="none"
          aria-label="Mode"
          onClick={(e) => {
            onColorMode();
          }}
        >
          <motion.span className="menu" variants={header}>
            {colorMode === 'light' ? (
              <RiMoonClearFill size={24} sx={{ color: 'dark' }} />
            ) : (
              <RiSunFill size={24} sx={{ color: 'yellow' }} />
            )}
          </motion.span>
        </Button>
      </Container>
    </motion.header>
  );
};

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styleLogo: ThemeUIStyleObject = {
  color: 'dark',
  fontWeight: '900',
  span: {
    color: 'primary',
  },
};

const stylesHeader: ThemeUIStyleObject = {
  color: 'white',
  fontWeight: 'normal',
  py: 4,
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'transparent',
  transition: 'all 0.5s ease',
  animation: `${positionAnim} 0.4s ease`,
  '.donate__btn': {
    flexShrink: 0,
    mr: [15, 20, null, null, 0],
    ml: ['auto', null, null, null, 0],
  },
  '&.sticky': {
    position: 'fixed',
    backgroundColor: 'background',
    color: '#000000',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    py: 3,
    'nev > a': {
      color: 'text',
    },
    '.donate__btn': {
      borderColor: 'primary',
      color: 'primary',
      '&:hover': {
        boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};

const styleContainer: ThemeUIStyleObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
