How did you dynamically create and append new elements to the DOM?
I used createElement() and appendChild() to create and add new elements to the page. This allowed items to be added dynamically instead of being hardcoded in the HTML. Each product was created as a new list item and appended to the cart.

How did you ensure accurate updates to the total price?
I updated the total price whenever items were added or removed. When adding an item, I increased the total, and when removing an item, I subtracted its price. I also added a check to prevent the total from going below zero to keep it accurate.

How did you handle invalid input for product name or price?
I added validation to check that the product name was not empty and that the price was a valid number. I also prevented zero or negative values from being added.

What challenges did you face when implementing the remove functionality?
One challenge was making sure the correct item was removed and that the total updated correctly afterward. I also had to make sure the total did not become negative after removing items.
