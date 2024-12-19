import { chakra, Box, HStack, Avatar, Heading, VStack, Flex, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Text, Image, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { extendTheme, theme as base } from "@chakra-ui/react";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const Reservation = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();
    const formik = useFormik({
        initialValues:{date:"",time:"",guests:'',},//refer to input field :name="firstName"
        onSubmit:(values) =>{
            submit('https://john.com/contactme', values);//useSubmit hooks
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Required").min(new Date(), "Date cannot be in the past"),
            time: Yup.string().required("Required"),
            guests: Yup.number().positive().integer().required("Required"),
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

    return(
        <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#EDEFEE"
        py={20}
        color="#333333"
        >
            <Heading size="xl" fontWeight="semibold" noOfLines={1} color="#333333"id="menu-section">Book your table</Heading>
            <VStack gap="6"alignItems="start">
                <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={2}>
                            <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                                <FormLabel htmlFor="date">Date<span style={{ color: 'red' }}>*</span></FormLabel>
                                <Input
                                    id="date"
                                    name="date"
                                    type="date"
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
                                    {...formik.getFieldProps("time")}
                                />
                                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
                                <FormLabel htmlFor="guests">Guests<span style={{ color: 'red' }}>*</span></FormLabel>
                                <Input
                                    id="guests"
                                    name="guests"
                                    type="number"
                                    placeholder="Number of Guests"
                                    {...formik.getFieldProps("guests")}
                                />
                                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="yellow" width="full" isLoading={isLoading}>
                                Submit
                            </Button>
                        </VStack>
                    </form>
            </VStack>
        </FullScreenSection>
    );
};

export default Reservation;