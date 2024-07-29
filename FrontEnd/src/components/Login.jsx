//*MATERAL UI  IMPORTS
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

//FORMIK
import { useFormik } from 'formik';
import * as Yup from 'yup';

//GENERAL IMPORTS
import { useState } from 'react'
import Print from './Print';


const Login = () => {
  const [courses] = useState(["course1", "course2", "course3"])
  const [selectedCourse, setSelectedCourse] = useState("")
  const [courseDesc, setCourseDesc] = useState("")
  const [open, setOpen] =useState(false); //MODAL TRIGGER

  const handleClickOpen = () => { //MODAL OPEN FUNCTION
    setOpen(true);
  };

  const handleClickClose = () => {//MODAL CLOSE FUNCTION
    setOpen(false);
  };


  function SimpleDialog(props) { //MODAL OPEN CONTENT COMPONENT
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


  const Schema=Yup.object({
    courseSelection: Yup.string()
      .required('Required'),
      courseDescription: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  })

  const InitialValues={
    courseSelection:"",
    courseDescription:"",
  }

  const formik=useFormik({
    initialValues:InitialValues,
    validationSchema:Schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

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
              name='courseSelection'
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

