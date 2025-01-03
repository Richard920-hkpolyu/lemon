import {
    HStack,
    Heading,
    VStack,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Image,
    Radio,
    RadioGroup,
    useMediaQuery
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import img1 from "../images/small/Intro_Restaurantfood.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faChair } from '@fortawesome/free-solid-svg-icons';

const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const Reservation = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();
    const [click, setClick] = useState(0);
    const [person, setPerson] = useState("");

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: '',
            firstName: "",
            email: ""
        },
        onSubmit: (values) => {
            submit('https://john.com/contactme', values, 'reservation');
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Required"),
            time: Yup.string().required("Required"),
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            guests: Yup.string().required("Required"),
        }),
    });
    const handleChange = (value) => {
        formik.setFieldValue("guests", value); // Update Formik state
    };
    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === 'success') {
                formik.resetForm();
            }
        }
    }, [response]);

    const toggleEvent = () => setClick(1);
    const backEvent = () => setClick(0);
    //const handleChange = value => setPerson(value);
    const [isMobile] = useMediaQuery("(max-width: 48em)");
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#EDEFEE"
            py={10}
            color="#333333"
        >
            <br/>
            <VStack gap="6" alignItems="start">
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={2}>
                        {click === 0 ? (
                            <VStack width={{ base: "100vw", md: "35rem" }} borderColor="#49SE57" borderWidth="1px" padding="2rem" gap="2rem">
                                <Heading size="xl" fontWeight="semibold" color="#333333">Book your table</Heading>
                                <FormControl isInvalid={formik.touched.date && !!formik.errors.date}>
                                    <FormLabel htmlFor="date">Date<span style={{ color: 'red' }}>*</span></FormLabel>
                                    <Input
                                        id="date"
                                        name="date"
                                        type="date"
                                        min={getCurrentDate()}
                                        {...formik.getFieldProps("date")}
                                    />
                                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={formik.touched.time && !!formik.errors.time}>
                                    <FormLabel htmlFor="time">Time<span style={{ color: 'red' }}>*</span></FormLabel>
                                    <Input
                                        id="time"
                                        name="time"
                                        type="time"
                                        {...formik.getFieldProps("time")}
                                    />
                                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <HStack justify="space-between" align="center" width="95%">
                                        <FormLabel htmlFor="guests">Guests<span style={{ color: 'red' }}>*</span></FormLabel>
                                        <FontAwesomeIcon icon={faChair} />
                                    </HStack>
                                    <RadioGroup defaultValue="2" value={formik.values.guests} onChange={handleChange}>
                                        <HStack gap="6">
                                            <Radio value="2">2-person table</Radio>
                                            <Radio value="4">4-person table</Radio>
                                            <Radio value="6">6-person table</Radio>
                                        </HStack>
                                    </RadioGroup>
                                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                                </FormControl>
                                <Button
                                    onClick={toggleEvent}
                                    size="md"
                                    colorScheme="yellow"
                                    width="full"
                                    isLoading={isLoading}
                                    isDisabled={
                                        !!formik.errors.date || !formik.touched.date ||
                                        !!formik.errors.time || !formik.touched.time ||
                                        !formik.values.guests
                                    }
                                >
                                    <span style={{ color: '#333333' }}>Next</span>
                                </Button>
                            </VStack>
                        ) : (
                            <VStack width={{ base: "100vw", md: "35rem" }} borderColor="#49SE57" borderWidth="1px" padding="2rem" gap="2rem">
                                <Heading size={{ base: "md", md: "xl" }} fontWeight="semibold" color="#333333">Book your table</Heading>
                                <HStack justify="space-between" align="center" width="95%" borderWidth="thin" borderColor="#495E57" padding={5} borderRadius="3xl" backgroundColor="#495E57" color="#EDEFEE">
                                    <Heading size="md" fontWeight="normal">
                                        <span style={{ color: '#F4CE14' }}>Date: </span>{isMobile ? <br /> : null}{formik.values.date}
                                    </Heading>
                                    <Heading size="md" fontWeight="normal">
                                        <span style={{ color: '#F4CE14' }}>Time: </span>{isMobile ? <br /> : null}{formik.values.time}
                                    </Heading>
                                    <Heading size="md" fontWeight="normal">
                                        <span style={{ color: '#F4CE14' }}>Persons: </span>{isMobile ? <br /> : null}{formik.values.guests}
                                    </Heading>
                                </HStack>
                                <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                                    <HStack justify="space-between" align="center" width="95%">
                                        <FormLabel htmlFor="firstName">Name</FormLabel>
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
                                <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
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
                                <HStack width="100%">
                                    <Button onClick={backEvent} size="md" colorScheme="yellow" width="30%">
                                        <span style={{ color: '#333333' }}>Back</span>
                                    </Button>
                                    <Button type="submit" size="md" colorScheme="yellow" width="70%" isLoading={isLoading}>
                                        <span style={{ color: '#333333' }}>Submit</span>
                                    </Button>
                                </HStack>
                            </VStack>
                        )}
                        <Image src={img1} width="full" height="40vh" borderRadius="md" fit="cover" />
                    </VStack>
                </form>
            </VStack>
        </FullScreenSection>
    );
};

export default Reservation;