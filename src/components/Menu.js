import React from "react";
import recipes from '../recipes'

const Menu = () => {

    const handleOrder = (id) => {
        
    }
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This Week's Specials</h2>
                <button>Order Menu</button>
            </div>
            {/* menu cards */}
            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt=""/>
                        <div className="menu-content">
                            <div className="heading">
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderBtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        <div>
            
        </div>
        </div>

       
    );
};

export default Menu;