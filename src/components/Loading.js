import React, { useEffect, useState } from "react";
import {
  Box,
  Spinner,
  Progress,
  Image,
  Text,
} from "@chakra-ui/react";
import logo from "../images/little_lemon.png"

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 10, 100); // Increase progress by 10 each interval
      });
    }, 30); // Update progress every 500ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Box
      height="100vh"
      bgColor="#49SE57"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color="#EDEFEE"
    >
      <Image
        src={logo}
        alt="Loading Icon"
        boxSize="100px"
        mb={4}
      />
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.5s"
        emptyColor="#333333"
        mb={4}
      />
      <Progress
        hasStripe
        isAnimated
        value={progress}
        width="80%"
        colorScheme="teal"
      />
    </Box>
  );
};

export default Loading;