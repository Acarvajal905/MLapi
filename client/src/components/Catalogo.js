import React from 'react';
import ProductCard from "./ProductCard";
import axios from 'axios'

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from "../Redux/Actions/index"


class Catalogo extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3001/api/search?query={ps4}`)
            .then(result => {
                console.log(result.data)
            }).catch(console.log)
    }
    render() {
        return (

            // <div class="box5">
            //     {this.props.allproducts.map(v =>

            //         <ProductCard
            //             name={v.name}
            //             id={v.id}
            //             description={v.description}
            //             price={v.price}
            //             stock={v.stock}
            //             image={v.image}
            //             quantity={v.quantity}
            //             content={v.content}
            //             percentage={v.percentage}
            //             country={v.country}
            //             colour={v.colour}
            //         />

            //     )
            //     }
            // </div>
            <h1>Test</h1>

        );
    }

}

// function mapStateToProps(state) {
//     return {
//         allproducts: state.allproducts,
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actionCreators, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
export default Catalogo;
