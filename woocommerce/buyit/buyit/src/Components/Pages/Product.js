import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../Redux/Actions';
import ProductCard from './ProductCard';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography,Box } from '@material-ui/core'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Product = props => {
    
    const [products,setProducts] = React.useState();
    React.useEffect(()=>{
        if(props.allproducts){
            setProducts(props.allproducts[0].allproducts);
        }
    }, [props.allproducts])

    React.useEffect(() => {
        props.dispatch(getProducts());
      }, []);
    
    return (
        
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="lg">
                    <h1>products</h1>
                    <Grid container>
                        <Grid item xs={12} sm={3}>
                    
                        </Grid>
                        <Grid item xs={12} sm={9}>
                        
                        <Box display="flex" justifyContent="space-between">
                            <Box p={1}>
                                <Typography variant="h6" color="textSecondary" component="h6">
                                    {products && products.length} Products Found 
                                </Typography>
                            </Box>
                            {/* <Box p={1} bgcolor="grey.300">
                                { <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl> }
                            </Box> */}
                        </Box>
                        <br/>
                            <Grid container  alignItems="stretch" spacing={2}>
                                {
                                    products && products.map((p,i)=>{
                                        return (
                                            <Grid item sm={6} md={4} key = {i}>
                                                <ProductCard products = {p}></ProductCard>
                                            </Grid>
                                        )
                                    })    
                                }        
                                  
                            </Grid>    
                        </Grid>
                    </Grid>    
                </Container>
        </React.Fragment>
            
    );
};


export default connect(store=>store)(Product);