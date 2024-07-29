import  { useState } from 'react'
import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Typography,
    Container
  } from '@mui/material';
  import Print from './Print';

const Login = () => {
    const [courses]=useState(["course1","course2","course3"])
    const [selectedCourse,setSelectedCourse]=useState("")
    const [courseDesc,setCourseDesc]=useState("")

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5"> Register</Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
        <FormControl fullWidth margin="normal" required >
        <InputLabel id="course-label">course</InputLabel>
        <Select
              labelId="course-label"
              id="course"
              value={selectedCourse}
              label="Course"
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {courses.map((course, index) => (
                <MenuItem key={index} value={course}>
                  {course}
                </MenuItem>
              ))}
            </Select>
        </FormControl>
        <TextField
            margin="normal"
            required
            fullWidth
            id="courseDescription"
            label="Course Description"
            name="courseDescription"
            value={courseDesc}
            onChange={(e) => setCourseDesc(e.target.value)}
          />
         
        </Box>
        <div>

        <Print course={selectedCourse} description={courseDesc}/>
        
        </div>
      </Box>
    </Container>
  )
}

export default Login