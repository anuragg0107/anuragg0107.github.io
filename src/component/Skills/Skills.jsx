import { Box,Image,Text } from '@chakra-ui/react';
import React from 'react';
import "./Skills.css";
import "../../App.css";

const Skills = () => {
  return (
    <div id="skill" className='start_skills' >
    <Box className='all_skills'>
        <Text >Skills & Tools</Text>
    </Box>
    <Box className='skill_header' >
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://tazammul.in/static/media/html.6a342d61.svg"
            alt="html" />
            <Text  className='skill_text'>HTML</Text>
        </Box>
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://tazammul.in/static/media/javascript.e9360603.svg"
            alt="JAVASCRIPT" />
            <Text  className='skill_text'>Javascript</Text>
        </Box>
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://tazammul.in/static/media/css.43b6f4bd.svg"
            alt="CSS" />
            <Text  className='skill_text'>CSS</Text>
        </Box>
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://tazammul.in/static/media/react.2b6a0717.svg"
            alt="REACT" />
            <Text  className='skill_text'>React</Text>
        </Box>
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67"
            alt="CHAKRA UI" />
            <Text  className='skill_text'>Chakra UI</Text>
        </Box>
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://tazammul.in/static/media/redux.296b9306.png"
            alt="REDUX" />
            <Text  className='skill_text'>Redux</Text>
        </Box>
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://tazammul.in/static/media/materialui.518da2c0.svg"
            alt="MATERIAL UI" />
            <Text  className='skill_text'>Material UI</Text>
        </Box>
        {/* <Box className='button skills'>
            <Image className='skill_img'
            src="data:image/png;base64,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"
            alt="EXPRESS" />
            <Text  className='skill_text'>EXPRESS</Text>
        </Box> */}
        {/* <Box className='button skills'>
            <Image className='skill_img'
            src="https://tazammul.in/static/media/nodejs.e328955d.png"
            alt="NODE JS" />
            <Text  className='skill_text'>NODEJS</Text>
        </Box> */}
        {/* <Box className='button skills'>
            <Image className='skill_img'
            src="https://tazammul.in/static/media/mongoDB.6c6da702.svg"
            alt="MONGO DB" />
            <Text  className='skill_text'>MONGODB</Text>
        </Box> */}
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://tazammul.in/static/media/git.32e68255.png"
            alt="GIT" />
            <Text  className='skill_text'>GIT</Text>
        </Box>
        <Box className='button skills'>
            <Image className='skill_img'
            src="data:image/png;base64,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"
            alt="POST MAN" />
            <Text  className='skill_text'>Postman</Text>
        </Box>
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1PTyB5nZemzUhwddgctkU5q1PSCH-ZyB5JkU3i2iH7KXGXpPt5p8dSsXjawukXb1lsU&usqp=CAU"
            alt="HEROKU " />
            <Text  className='skill_text'>Heroku</Text>
        </Box>
        <Box className='button skills'>
            <Image className='skill_img'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
            alt="nextjs" />
            <Text  className='skill_text'>Nextjs</Text>
        </Box>
    
    </Box>
    </div>
  )
}

export default Skills