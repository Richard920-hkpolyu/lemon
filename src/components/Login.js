import React, { useEffect, useState } from "react";
import {
    HStack,
    Heading,
    Text,
    VStack,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Image,
    Box
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import img1 from "../images/small/Intro_Restaurantfood.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { socials } from "../utils/data";
import LoginPage from "./LoginPage.js";
const Login = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();
    const [isSignUp, setIsSignUp] = useState(false);

    const formik = useFormik({
        initialValues: { email: "", password: "", firstName: "" },
        onSubmit: (values) => {
            submit('https://john.com/contactme', values, isSignUp ? 'signup' : 'login');
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().required("Required"),
            firstName: isSignUp ? Yup.string().required("Required") : undefined,
        }),
    });

    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === 'success') {
                formik.resetForm();
            }
        }
    }, [response]);

    const toggleForm = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <>
            <LoginPage isSignUp={isSignUp} />
            <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#FFFFFF"
            py={{ base: 0, md: 10 }}
            color="#333333"
            borderRadius="md"
        >
            <br/>
            <VStack gap="6" alignItems="start">
                <VStack spacing={2}>
                    <form onSubmit={formik.handleSubmit}>
                        <VStack
                            width={{ base: "96vw", md: "35rem" }}
                            borderColor="#49SE57"
                            borderWidth="1px"
                            padding="2rem"
                            gap={{ base: "1.4rem", md: "2rem" }}
                        >
                            <Heading size={{ base: "md", md: "xl" }} fontWeight="semibold" color="#333333">
                                {isSignUp ? "SIGN-UP" : "SIGN-IN"}
                            </Heading>
                            <Text size="md" color="#333333">
                                {isSignUp ? "Create a new account" : "Please enter your email and password!"}
                            </Text>

                            {isSignUp && (
                                <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                    <HStack justify="space-between" align="center" width="95%">
                                        <FormLabel htmlFor="firstName">First Name<span style={{ color: 'red' }}>*</span></FormLabel>
                                        <FontAwesomeIcon icon={faUser} />
                                    </HStack>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        {...formik.getFieldProps("firstName")}
                                    />
                                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                </FormControl>
                            )}

                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                <HStack justify="space-between" align="center" width="95%">
                                    <FormLabel htmlFor="email">Email Address<span style={{ color: 'red' }}>*</span></FormLabel>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </HStack>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    {...formik.getFieldProps("email")}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={!!formik.errors.password && formik.touched.password}>
                                <HStack justify="space-between" align="center" width="95%">
                                    <FormLabel htmlFor="password">Password<span style={{ color: 'red' }}>*</span></FormLabel>
                                    <FontAwesomeIcon icon={faLock} />
                                </HStack>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    {...formik.getFieldProps("password")}
                                />
                                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                            </FormControl>

                            <Button type="submit" size="md" colorScheme="yellow" width="full" isLoading={isLoading}>
                                <span style={{ color: '#333333' }}>{isSignUp ? "Sign Up" : "Login"}</span>
                            </Button>

                            <HStack spacing={5}>
                                {socials.map(({ icon, url }) => (
                                    <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                                        <Box
                                            as="div"
                                            transition="all 0.2s linear"
                                            _hover={{ transform: "translateY(-5px)" }}>
                                            <FontAwesomeIcon icon={icon} size="xl" />
                                        </Box>
                                    </a>
                                ))}
                            </HStack>

                            <Text size="md" color="#333333" onClick={toggleForm} cursor="pointer">
                                {isSignUp ? "Have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Text>
                        </VStack>
                    </form>
                    <Image src={img1} width="full" height="40vh" borderRadius="md" fit="cover" />
                </VStack>
            </VStack>
        </FullScreenSection>
        </>
    );
};

export default Login;