import { Box, Center,Text, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
import "../App.css"
function Gitgraph(){

    return (
        <>
            <Box fontWeight={"bold"} >
                <Center p={"12"} >
                    {/* <Heading fontSize={'48px'} fontFamily='Robot'>My GitHub Calender</Heading> */}
                    <Text className='github_data' fontSize={'2.8rem'} fontFamily='Robot'  >My <strong className='strong'>GitHub</strong> Calender</Text>
                </Center>
                <Githubcalendar
                    username="anuragg0107"
                    blockSize={18}
                    blockMargin={5}
                    fontSize={16}
                    color={"green"}
                />
            </Box>
        </>
    );
};

export default Gitgraph;