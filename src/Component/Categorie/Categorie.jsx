import React from 'react';
import { Link } from 'react-router-dom';
import "../List/List.css"


const Categorie = () => {

    

     return (
          <div>
               <div className="category_div">
                    <div className='cat_titre'>
                         Liste des categories
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
                        
                    </div>
                    <div className="category_liste">
                         <table className='table'>
                              <thead>
                                   <tr>
                                        <th className='code'>Code</th>
                                        <th className='facture'>Nom de la categorie</th>
                                        <th className='num_client'>Statut</th>
                                        <th colSpan="2" className='action_button'>Action</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                  
                                                  
                                             <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Legumes</td>
                                                  <td className='num_client'>Visible</td>
                                                  <td>
                                                       <div className="modifier_btn">
                                                            <Link to="" className='modifier_cat'>Modifier</Link>
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <button className='conf'>Supprimer</button>
                                                  </td>
                                                 
                                            </tr>
                                                                                              
                                            <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Legumes</td>
                                                  <td className='num_client'>Visible</td>
                                                  <td>
                                                       <div className="modifier_btn">
                                                            <Link to="" className='modifier_cat'>Modifier</Link>
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <button className='conf'>Supprimer</button>
                                                  </td>
                                                 
                                            </tr>
                                                                                              
                                            <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Legumes</td>
                                                  <td className='num_client'>Visible</td>
                                                  <td>
                                                       <div className="modifier_btn">
                                                            <Link to="" className='modifier_cat'>Modifier</Link>
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <button className='conf'>Supprimer</button>
                                                  </td>
                                                 
                                            </tr>
                                                                                              
                                            <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Legumes</td>
                                                  <td className='num_client'>Visible</td>
                                                  <td>
                                                       <div className="modifier_btn">
                                                            <Link to="" className='modifier_cat'>Modifier</Link>
                                                       </div>
                                                  </td>
                                                  
                                                  <td>
                                                       <button className='conf'>Supprimer</button>
                                                  </td>
                                                
                                            </tr>
                                                                                              
                                            <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Legumes</td>
                                                  <td className='num_client'>Visible</td>
                                                  <td>
                                                       <div className="modifier_btn">
                                                            <Link to="" className='modifier_cat'>Modifier</Link>
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

export default Categorie;