import { HStack, Heading, VStack, Button, FormControl, FormErrorMessage, FormLabel, Input, Image, Radio, RadioGroup } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import img1 from "../images/small/Intro_Restaurantfood.jpg";
//import { Radio, RadioGroup } from "@/components/ui/radio"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faChair } from '@fortawesome/free-solid-svg-icons';

const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    // Add leading zero if month or day is single digit
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
};

const Reservation = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();
    const [click, setClick] = useState(0);
    const [ date, setDate] = useState("");
    const [ time, setTime] = useState("");
    const [ person, setPerson] = useState("");
    const dateRef = useRef(null);
    const timeRef = useRef(null);
    //const [value, setValue] = useState("2")
    const formik = useFormik({
        initialValues:{date:"",time:"",guests:'',firstName:"",email:""},//refer to input field :name="firstName"
        onSubmit:(values) =>{
            submit('https://john.com/contactme', values);//useSubmit hooks
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Required"),
            time: Yup.string().required("Required"),
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
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


    const toggleEvent = () => {
        setClick(1);
        setDate(dateRef.current.value);
        setTime(timeRef.current.value);
    };
    const backEvent = () =>{
        setClick(0);
    }

    const handleChange = (value) => {
        setPerson(value);
    };
    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#EDEFEE"
        py={10}
        color="#333333"
        >
            <Heading size="xl" fontWeight="semibold" noOfLines={1} color="#333333"id="menu-section">Book your table</Heading>
            <br/>
            <VStack gap="6"alignItems="start">
                <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={2}>
                            {click == 0 && true ? (
                                <>
                                <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                                <FormLabel htmlFor="date">Date<span style={{ color: 'red' }}>*</span></FormLabel>
                                <Input
                                    id="date"
                                    name="date"
                                    type="date"
                                    ref={dateRef}
                                    min={getCurrentDate()}
                                    {...formik.getFieldProps("date")}
                                />
                                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                                <FormLabel htmlFor="time">Time<span style={{ color: 'red' }}>*</span></FormLabel>
                                <Input
                                    id="time"
                                    name="time"
                                    type="time"
                                    ref={timeRef}
                                    {...formik.getFieldProps("time")}
                                />
                                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <br/>
                                <HStack justify="space-between" align="center" width="95%">
                                    <FormLabel htmlFor="guests">Guests<span style={{ color: 'red' }}>*</span></FormLabel>
                                    <FontAwesomeIcon icon={faChair} />
                                </HStack>
                                <RadioGroup defaultValue="2" value={person} onChange={handleChange}>
                                    <HStack gap="6">
                                        <Radio value="2">2-person table</Radio>
                                        <Radio value="4">4-person table</Radio>
                                        <Radio value="6">6-person table</Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                            <Button onClick={toggleEvent} size="md" colorScheme="yellow" width="full" isLoading={isLoading}
                                isDisabled={!!formik.errors.date || !formik.touched.date || !!formik.errors.time || !formik.touched.time || person==""}
                            >
                                    <span style={{ color: '#333333' }}>Next</span>
                            </Button>
                            <br/>
                                </>
                                ):(
                                    <VStack width="27rem">
                                        <HStack justify="space-between" align="center" width="95%" borderWidth="thin" borderColor="#495E57" padding={5} borderRadius="3xl" backgroundColor="#495E57" color="#EDEFEE">
                                            <Heading size="md" fontWeight="normal">
                                                <span style={{ color: '#F4CE14' }}>Date: </span>{date}
                                            </Heading>
                                            <Heading size="md" fontWeight="normal">
                                                <span style={{ color: '#F4CE14' }}>Time: </span>{time}
                                            </Heading>
                                            <Heading size="md" fontWeight="normal">
                                                <span style={{ color: '#F4CE14' }}>Persons: </span>{person}
                                            </Heading>
                                        </HStack>
                                        <br/>
                                    <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                        <HStack justify="space-between" align="center" width="95%">
                                            <FormLabel htmlFor="firstName">Name</FormLabel>
                                            <FontAwesomeIcon icon={faUser} />
                                        </HStack>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            {...formik.getFieldProps("firstName")}
                                        />
                                        <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                        <HStack justify="space-between" align="center" width="95%">
                                            <FormLabel htmlFor="email">Email Address<span style={{ color: 'red' }}>*</span></FormLabel>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </HStack>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
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
                                )
                            }
                            <Image src= {img1} width="full" height="40vh" borderRadius="md" fit="cover" />
                        </VStack>
                </form>
            </VStack>
        </FullScreenSection>
    );
};

export default Reservation;

/*
<Button type="submit" size="md" colorScheme="yellow" width="full" isLoading={isLoading}>
                                <span style={{ color: '#333333' }}>Submit</span>
                            </Button>
*/