import { useState } from 'react'
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Container,
  IconButton
} from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';


import Print from './Print';


const Login = () => {
  const [courses] = useState(["course1", "course2", "course3"])
  const [selectedCourse, setSelectedCourse] = useState("")
  const [courseDesc, setCourseDesc] = useState("")

  const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };


  function SimpleDialog(props) {
    const { open ,onClose} = props;
    return (
     <Dialog  open={open}  fullWidth={true} maxWidth="lg"  onClose={onClose}>
       <DialogTitle>Preview Page
       <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
       </DialogTitle>
       <Print course={selectedCourse} description={courseDesc} />
     </Dialog>
    )
  }




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
        <Box component="form" noValidate sx={{ mt: 1 }}>
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
        <Button onClick={handleClickOpen} variant="outlined">Preview</Button>
      </Box>
      <SimpleDialog  open={open} onClose={handleClickClose}/>
    </Container>
  )
}

export default Login

