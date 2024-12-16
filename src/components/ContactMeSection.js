import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
//Covers a complete form implementation using formik and yup for validation
//useFormik: manage the form state(e.g.name was modified), handle form submission and validation and error messages.
//w="100%", make the input field width = viewpoint width
const ContactMeSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();
    const formik = useFormik({
        initialValues:{firstName:"",email:"",type:"hireMe",comment:"",},//refer to input field :name="firstName"
        onSubmit:(values) =>{
            submit('https://john.com/contactme', values);//useSubmit hooks
            console.log('Form data',values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
        }),

    });
    useEffect(()=>{
        if(response){
            onOpen(response.type, response.message);//useAlertContext() API
            if (response.type === 'success') {
                formik.resetForm();
            }
        }
    },[response]);
//input: onchange={formik.handleChange} value={formik.values.name}, not require to code the handleChange listener
//!!convert a value to boolean
//formik.errors.firstName: hold error message for the firstName field if there is a validation error
//!!formik.errors.firstName: true if there is an error message
//formik.touched.firstName: show error messages only after the user has interacted with a field
//...formik.getFieldProps("firstName"): props includes value, onChange,onBlur
    return(
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="contactme-section">Contact me</Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    {...formik.getFieldProps("firstName")}
                                />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    {...formik.getFieldProps("email")}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                <Select id="type" name="type">
                                    <option value="hireMe">Freelance project proposal</option>
                                    <option value="openSource">Open source consultancy session</option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                                <FormLabel htmlFor="comment">Your message</FormLabel>
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    height={250}
                                    {...formik.getFieldProps("comment")}
                                />
                                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default ContactMeSection;