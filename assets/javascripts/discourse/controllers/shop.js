import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ShopController extends Controller {
  @tracked selectedCategory = "全部";
  @tracked selectedProduct = null;
  @tracked cartItems = [];
  @tracked showCart = false;

  categories = ["全部", "艺术品", "食品", "配饰", "电子产品", "家居", "美妆"];

  get filteredProducts() {
    if (this.selectedCategory === "全部") {
      return this.model.products;
    }
    return this.model.products.filter(product => 
      product.category === this.selectedCategory
    );
  }

  get cartTotal() {
    return this.cartItems.reduce((total, item) => {
      const price = parseInt(item.product.price.replace('¥', ''));
      return total + (price * item.quantity);
    }, 0);
  }

  get cartItemCount() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  @action
  selectCategory(category) {
    this.selectedCategory = category;
  }

  @action
  viewProduct(product) {
    this.selectedProduct = product;
  }

  @action
  closeProductDetail() {
    this.selectedProduct = null;
  }

  @action
  addToCart(product) {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems = [...this.cartItems, { product, quantity: 1 }];
    }
    
    // 显示添加成功提示
    this.showAddedToCartMessage(product);
  }

  @action
  removeFromCart(productId) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }

  @action
  updateCartQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.cartItems = [...this.cartItems]; // 触发响应式更新
    }
  }

  @action
  increaseQuantity(productId) {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      this.updateCartQuantity(productId, item.quantity + 1);
    }
  }

  @action
  decreaseQuantity(productId) {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      this.updateCartQuantity(productId, item.quantity - 1);
    }
  }

  @action
  toggleCart() {
    this.showCart = !this.showCart;
  }

  @action
  checkout() {
    if (this.cartItems.length === 0) {
      alert("购物车为空，请先添加商品！");
      return;
    }
    
    alert(`感谢您的购买！总金额：¥${this.cartTotal}`);
    this.cartItems = [];
    this.showCart = false;
  }

  showAddedToCartMessage(product) {
    // 简单的提示消息
    const message = `${product.name} 已添加到购物车！`;
    
    // 创建临时提示元素
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 9999;
      animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后移除提示
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }
}
