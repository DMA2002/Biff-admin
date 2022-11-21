import React from 'react';
import "../List/List.css";


const Commande = () => {

    

     return (
          <div>
               <div className="category_div">
                    <div className='cat_titre'>
                         Liste des clients
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
                                        <th className='facture'>Nom</th>
                                        <th className='num_client'>Prenom</th>
                                        <th className='nom_produit'>Mail</th>
                  
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                  
                                                  
                                             <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Komenan</td>
                                                  <td className='num_client'>koffi serge</td>
                                                  <td className='nom_produit'>komenan@gmail.com</td>
                                                    
                                             </tr>
                                             <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Komenan</td>
                                                  <td className='num_client'>koffi serge</td>
                                                  <td className='nom_produit'>komenan@gmail.com</td>                                             
                                             </tr>
     
                                             <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Komenan</td>
                                                  <td className='num_client'>koffi serge</td>
                                                  <td className='nom_produit'>komenan@gmail.com</td>                                                    
                                             </tr>
                                             <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Komenan</td>
                                                  <td className='num_client'>koffi serge</td>
                                                  <td className='nom_produit'>komenan@gmail.com</td>
                                             </tr>
                                             <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>Komenan</td>
                                                  <td className='num_client'>koffi serge</td>
                                                  <td className='nom_produit'>komenan@gmail.com</td>
                                             </tr>
     
                                                         
                                                         

                                                  
     
                                                                       
                              </tbody>

                              
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default Commande;