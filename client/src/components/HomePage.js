import React from 'react';
import {connect} from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import {compose} from 'redux';

const HomePage = () => (
      <div className='app-container__container'>
         <div className='home'>
           <h1 className='home__gtitre'>Bienvenue dans l'application Ecommerce</h1>
           <h2 className='home__ptitre'>La plus grande source de placages</h2>
           <div className='home__linkbox'>
             <NavLink to="/products" className='home__btn home__btn--blue home__btn--animated'>Entrer</NavLink>
           </div>
         </div>
       </div>  
);


export default compose(withRouter, connect(null, null))(HomePage);

// // here

// import React from 'react';
// import {connect} from 'react-redux';
// import { NavLink, withRouter } from 'react-router-dom';
// import {compose} from 'redux';
// import SearchBox from './SearchBox';
// //import R from 'ramda';

// import {
//     getFamilies,
//     getActiveFamilyId
//   } from '../selectors';

// const SideBar = ({families, activeFamilyId}) =>  (
//         <div className="sidebar">
//   <SearchBox />
//   <div className="sidebar__list">
//     <div className="sidebar__list__headerlist">
//       Familles de placages:
//     </div>
//     <div className="sidebar__navbox">
//         <NavLink exact={true} to="/products" className="sidebar__list__listing" activeClassName="page-products__sidebar__list__listing--is-active">Toutes les essences</NavLink>
//         {families.map((family, index) => 
//         <NavLink
//             key={family._id}
//             to={`/families/${family.id}`}
//             className="sidebar__list__listing"
//             activeClassName="page-products__sidebar__list__listing--is-active">
//             {family.name}
//         </NavLink> )}
//     </div>
//   </div>
// </div>
//     );

  

// const mapStateToProps = (state, ownProps) => ({
//     families: getFamilies(state),
//     activeFamilyId: getActiveFamilyId(ownProps)
// });
  
// export default compose(withRouter, connect(mapStateToProps, null))(SideBar);


