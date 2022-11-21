import React from 'react';
import { Link } from 'react-router-dom';
import "./List.css";
import ou from "../../Images/ou.jpg";
import tomate from "../../Images/tomate.png"


const List = () => {

    

     return (
          <div>
               <div className="category_div">
                    <div className='cat_titre'>
                         Liste des articles
                    </div>
                  
                    <div className="category_element">
                         <div className="category_nb">
                              <p>Afficher</p>
                              <select name="" id="">
                                   <option value="10">10</option>
                                   <option value="20">20</option>
                                   <option value="50">50</option>
                                   <option value="100">100</option>
                              </select>
                         </div>
                         <div className="category_search">
                              <input type="search" name="" id="" />
                              <button className='cher' >Rechercher</button>
                         </div>
                         <div className="add_new">
                              <Link to="/nouveau" className='add_lien'>Nouveau tableau</Link>
                         </div>
                    </div>
                    <div className="category_liste">
                         <table className='table'>
                              <thead>
                                   <tr>
                                        <th className='code'>Code</th>
                                        <th className='nom_produit'>Nom produit</th>
                                        <th className='categorie'>Catégorie</th>
                                        <th className='prix'>Prix</th>
                                        <th className='statut'>Statut</th>
                                        <th className='description'>Description</th>
                                        <th className='image'>Image</th>
                                        <th colSpan="2" className='action_button'>Action</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                  
                                                  
                                             <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='nom_produit'>Tomate</td>
                                                  <td className='categorie'>Legume</td>
                                                  <td className='prix'>500f</td>
                                                  <td className='statut'>Visible</td>
                                                  <td className='description'>tomate fraiche pour donner un meilleur gout a votre plat </td>
                                                  <td className='image'>
                                                       <div className='image_div'>
                                                            <img src={ou} alt="" />
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <div className="modifier_btn">
                                                            <Link to="/modifi" className='modifier_cat'>Modifier</Link>
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <button className='conf'>Supprimer</button>
                                                  </td>
                                                 
                                                  
                                             </tr>
                                            
                                                            
                                             <tr>
                                                  <td className='code'>1280</td>
                                                  <td className='nom_produit'>Oignon</td>
                                                  <td className='categorie'>Legume</td>
                                                  <td className='prix'>1000f</td>
                                                  <td className='statut'>Visible</td>
                                                  <td className='description'>Oignon fraiche pour donner un meilleur gout a votre plat </td>
                                                  <td className='image'>
                                                       <div className='image_div'>
                                                            <img src={tomate} alt="" />
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <div className="modifier_btn">
                                                            <Link to="/modifi" className='modifier_cat'>Modifier</Link>
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <button className='conf'>Supprimer</button>
                                                  </td>
                                                 
                                                  
                                             </tr>
               
                                             <tr>
                                                  <td className='code'>1270</td>
                                                  <td className='nom_produit'>Carotte</td>
                                                  <td className='categorie'>Legume</td>
                                                  <td className='prix'>700f</td>
                                                  <td className='statut'>Visible</td>
                                                  <td className='description'>Carotte fraiche pour donner un meilleur gout a votre plat </td>
                                                  <td className='image'>
                                                       <div className='image_div'>
                                                            <img src={ou} alt="" />
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <div className="modifier_btn">
                                                            <Link to="/modifi" className='modifier_cat'>Modifier</Link>
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <button className='conf'>Supprimer</button>
                                                  </td>
                                                 
                                                  
                                             </tr>
                 
                                             <tr>
                                                  <td className='code'>1260</td>
                                                  <td className='nom_produit'>Aubergine</td>
                                                  <td className='categorie'>Legume</td>
                                                  <td className='prix'>400f</td>
                                                  <td className='statut'>Visible</td>
                                                  <td className='description'>Aubergine fraiche pour donner un meilleur gout a votre plat </td>
                                                  <td className='image'>
                                                       <div className='image_div'>
                                                            <img src={tomate} alt="" />
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <div className="modifier_btn">
                                                            <Link to="/modifi" className='modifier_cat'>Modifier</Link>
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <button className='conf'>Supprimer</button>
                                                  </td>
                                                 
                                                  
                                             </tr>            
                              </tbody>

                              
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default List;