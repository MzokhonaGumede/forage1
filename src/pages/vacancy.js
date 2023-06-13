import { Typography, Container } from "@material-ui/core";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Link from "@mui/material/Link";

function Vacancy() {
    const [vacancies, setVacancies] = useState();
    const navigate = useNavigate();

    function handleClick() {
        navigate("/createVacancy");
    }
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://localhost:7031/api/vacancies');
            setVacancies(response);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    return <Container component="main" maxWidth="lg">
        <Typography component="h1" variant="h5">
            Vacancies | <Link onClick={handleClick}>Create Vacancy</Link>
        </Typography>
        {vacancies && vacancies.map(vacancy => {
            <Box
                sx={{ mt: 1 }}
            >
                <Card sx={{ maxWidth: 1300, mx: 'auto' }}>
                    <CardHeader
                        title={vacancy.companyName}
                        subheader={vacancy.closingDate}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {vacancy.Description}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        })
        }
    </Container>

}
export default Vacancy;