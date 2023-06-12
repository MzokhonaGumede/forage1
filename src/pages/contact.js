import { Typography, Container } from "@material-ui/core";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
//import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";

function Contact() {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://localhost:7031/api/vacancies');
            setData(response);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
        return (data);
    };
    
    return <Container component="main" maxWidth="lg">
        <Typography component="h1" variant="h5">
            Vacancies | Freelancers
        </Typography>
        <Box
            sx={{ mt: 1 }}
        >
            <Card sx={{ maxWidth: 1300, mx: 'auto' }}>
                <CardHeader
                    title="Software Development"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.

                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.

                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)
                    </Typography>
                </CardContent>
                </Card>
            </Box>
        </Container>
        
}
export default Contact;