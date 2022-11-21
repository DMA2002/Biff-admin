import React from 'react';
import "../List/List.css"


const Commande = () => {

    

     return (
          <div>
               <div className="category_div">
                    <div className='cat_titre'>
                         Liste des commandes
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
                                        <th className='facture'>N°Facture</th>
                                        <th className='num_client'>N°Client</th>
                                        <th className='nom_client'>Client</th>
                                        <th className='nom_produit'>Noms Produits</th>
                                        <th className='quantite'>Quantité</th>
                                        <th className='prix_total'>Prix total</th>
                                        <th className='methode_payement'>Méthode de payement</th>
                                        <th className='date_commande'>Date de commande</th>
                                        <th className='heure'>Heure</th>
                                        <th colSpan="2" className='action_button'>Action</th>
                                   </tr>
                              </thead>
                              <tbody className='tbody'>
                                  
                                                  
                                             <tr>
                                                  <td className='code'>1285</td>
                                                  <td className='facture'>30</td>
                                                  <td className='num_client'>5</td>
                                                  <td className='nom_client'>Komenan</td>
                                                  <td className='nom_produit'>Tomate</td>
                                                  <td className='quantite'>2</td>
                                                  <td className='prix_total'>1000 FCFA</td>
                                                  <td className='methode_payement'>Payement en ligne</td>
                                                  <td className='date_commande'>11/11/2022</td>
                                                  <td className='heure'>17h</td>
                                                  <td>
                                                      <button className='conf'>Confirmer</button>
                                                  </td>
                                                  <td>
                                                       <button className='annu'>Annuler</button>
                                                  </td>
                                                 
                                             </tr>
     
                                                  
                                             <tr>
                                                  <td className='code'>1280</td>
                                                  <td className='facture'>29</td>
                                                  <td className='num_client'>9</td>
                                                  <td className='nom_client'>Venance</td>
                                                  <td className='nom_produit'>AUbergine</td>
                                                  <td className='quantite'>5</td>
                                                  <td className='prix_total'>1500 FCFA</td>
                                                  <td className='methode_payement'>Payement en espèce</td>
                                                  <td className='date_commande'>10/11/2022</td>
                                                  <td className='heure'>17h</td>
                                                  <td>
                                                      <button className='conf'>Confirmer</button>
                                                  </td>
                                                  <td>
                                                       <button className='annu'>Annuler</button>
                                                  </td>
                                                 
                                             </tr>

                                                   
                                             <tr>
                                                  <td className='code'>1275</td>
                                                  <td className='facture'>10</td>
                                                  <td className='num_client'>8</td>
                                                  <td className='nom_client'>Dosso</td>
                                                  <td className='nom_produit'>Carotte</td>
                                                  <td className='quantite'>2</td>
                                                  <td className='prix_total'>5000 FCFA</td>
                                                  <td className='methode_payement'>Payement en ligne</td>
                                                  <td className='date_commande'>9/11/2022</td>
                                                  <td className='heure'>17h</td>
                                                  <td>
                                                      <button className='conf'>Confirmer</button>
                                                  </td>
                                                  <td>
                                                       <button className='annu'>Annuler</button>
                                                  </td>
                                                 
                                             </tr>

                                                   
                                             <tr>
                                                  <td className='code'>1260</td>
                                                  <td className='facture'>8</td>
                                                  <td className='num_client'>2</td>
                                                  <td className='nom_client'>Koffi</td>
                                                  <td className='nom_produit'>Oignon</td>
                                                  <td className='quantite'>10</td>
                                                  <td className='prix_total'>5200 FCFA</td>
                                                  <td className='methode_payement'>Payement en espèce</td>
                                                  <td className='date_commande'>5/11/2022</td>
                                                  <td className='heure'>17h</td>
                                                  <td>
                                                      <button className='conf'>Confirmer</button>
                                                  </td>
                                                  <td>
                                                       <button className='annu'>Annuler</button>
                                                  </td>
                                                 
                                             </tr>
                                            
                              </tbody>

                              
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default Commande;