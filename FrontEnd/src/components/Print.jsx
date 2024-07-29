import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Page1 from "./Page1";
import Page2 from "./Page2";

import {
    Button,
    Box,
    Typography,
    Container
} from '@mui/material';


const Print = ({ course, description }) => {
    let componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Trail",
        onPrintError: () => alert("error occured")
    });

    return (
        <Container>

            <Box ClassName="print-content"

                ref={componentRef}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 8,
                    gap: 2,
                }}
            >

                <Page1 />
                <Box sx={{ display: "grid", gap: 1, textAlign: "center" }}>
                    <Typography>Selected Course is: {course}</Typography>
                    <Typography>Description: {description}</Typography>
                </Box>
                <Page2 />
            </Box>
            <Box sx={{ marginBottom: 4,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <Button variant="contained" onClick={handlePrint}>
                    Print
                </Button>
            </Box>
        </Container>
    );
}

export default Print;
