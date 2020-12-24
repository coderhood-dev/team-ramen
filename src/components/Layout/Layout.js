import React from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Header } from '..';

const MotionFlex = motion.custom(Flex);

const variants = {
  hidden: {
    opacity: 0,
    x: '100px',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1, type: 'spring', stiffness: 100 },
  },
  exit: {
    opacity: 0,
    x: '-100px',
    transition: { duration: 0.1, type: 'spring', stiffness: 100 },
  },
};

export const Layout = ({ children }) => (
  <MotionFlex
    minH="100vh"
    w="full"
    bg="background"
    direction="column"
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    position="relative"
  >
    <Header />
    {children}
  </MotionFlex>
);
