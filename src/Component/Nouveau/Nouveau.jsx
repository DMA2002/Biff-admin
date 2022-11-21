import React from 'react';

function Nouveau() {
  return (
    <div className='grande_div'>
        <div className='petit'>
           <p className='entete'>Modification ou ajout d'un aricle</p>
           <form action="">
                <div className='formulaire'>
                    <div className='lab'>
                        <label htmlFor="produit">Nom produit</label>
                        <input type="text" placeholder='  Tomate' />

                    </div>
                    <div className='lab2'>
                        <div className='info1'>
                            <label htmlFor="categorie">Selection de la categorie</label>
                            <select name="" id="">
                                   <option value="10">Legume</option>
                                   <option value="20">Tubercule</option>
                                   <option value="50">Legume</option>
                                   <option value="100">Tubercule</option>
                            </select>
                        </div>
                        <div className='info1'>
                            <label htmlFor="categorie">Selection de la categorie</label>
                            <select name="" id="">
                                   <option value="10">Legume</option>
                                   <option value="20">Tubercule</option>
                                   <option value="50">Legume</option>
                                   <option value="100">Tubercule</option>
                            </select>
                        </div>
                   </div>
                   <div className='lab2'>
                            <div className='info1'>
                                <label htmlFor="quantité">Quantité</label>
                                <input type="text" placeholder='  05' />
                            </div>
                            <div className='info1'>
                                <label htmlFor="prix">Prix</label>
                                <input type="text" placeholder='  500Fcfa' />
                            </div>

                     </div>
                     <div className='lab'>
                        <label htmlFor="description">Description</label>
                        <textarea name="" id="" cols="60" rows="10"></textarea>

                    </div>
                    <div className='lab5'>
                        <input type="file" className='file' />

                    </div>

                </div>
           </form>
        </div>
        <div className='petit'>
            <p className='entete'>Article</p>
            <div className='modifi_img'>
                <img src="#" alt="" />
            </div>
            <div className='togget'>
                <p >Statut disponible</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            
            <div className='togget'>
                <p >Article en promotion</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className='togget'>
                <button className='annuler'>Annuler</button>
                <button className='enregistrer'>Enregistrer et ajouter</button>

            </div>

        </div>
      
    </div>
  )
}

export default Nouveau
