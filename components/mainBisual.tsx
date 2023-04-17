import { useEffect, useRef } from "react";
import { Box, Text } from '@chakra-ui/react'
import Typed from "typed.js";

export default function MainBisual() {
  const el = useRef(null!);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Webエンジニアの備忘録です",
        "HTML/CSS",
        "Tailwind CSS",
        "Chakra UI",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Redux",
        "Vercel",
        "Express.js",
        "Java",
        "Spring Boot",
        "Ruby",
        "Ruby on Rails",
        "GraphQL",
        "SQL",
        "Linux",
        "AWS",
        "Docker",
        "Kubernetes",
        "Auth0",
        "Webエンジニアの備忘録です"
      ],
      startDelay: 3000,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box 
      as="section"
      position="relative" 
      height="30vh" 
      display="flex" 
      justifyContent="center" 
      flexDirection="column" 
      overflow="hidden"
      >
      <Box position="relative" zIndex="1">
        <Text fontSize="xl" color="white" textAlign="center">
          <span ref={el}></span>
        </Text>
      </Box>
      <video className="video" src="/movies/14019_1280x720.mp4" autoPlay loop muted playsInline></video>
    </Box>
  )
}