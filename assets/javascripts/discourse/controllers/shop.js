import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ShopController extends Controller {
  @tracked selectedCategory = "All";
  @tracked searchQuery = "";
  @tracked sortBy = "name";
  @tracked viewMode = "grid"; // grid or list
  @tracked selectedProduct = null;
  @tracked showProductModal = false;
  @tracked cart = [];
  @tracked showCart = false;

  // 商品筛选逻辑
  get filteredProducts() {
    let products = this.model.products;

    // 按分类筛选
    if (this.selectedCategory !== "All") {
      products = products.filter(product => product.category === this.selectedCategory);
    }

    // 按搜索关键词筛选
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      products = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // 排序
    switch (this.sortBy) {
      case "price-low":
        products = products.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products = products.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        products = products.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
      default:
        products = products.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return products;
  }

  // 购物车商品总数
  get cartItemCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  // 购物车总价
  get cartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  }

  @action
  selectCategory(category) {
    this.selectedCategory = category;
  }

  @action
  updateSearchQuery(event) {
    this.searchQuery = event.target.value;
  }

  @action
  changeSortBy(event) {
    this.sortBy = event.target.value;
  }

  @action
  toggleViewMode() {
    this.viewMode = this.viewMode === "grid" ? "list" : "grid";
  }

  @action
  showProductDetails(product) {
    this.selectedProduct = product;
    this.showProductModal = true;
  }

  @action
  closeProductModal() {
    this.showProductModal = false;
    this.selectedProduct = null;
  }

  @action
  addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart = [...this.cart, { ...product, quantity: 1 }];
    }

    // 显示添加成功的反馈
    this.showAddToCartFeedback(product);
  }

  @action
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  @action
  updateCartQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.cart = [...this.cart]; // 触发响应式更新
    }
  }

  @action
  increaseQuantity(productId) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      this.updateCartQuantity(productId, item.quantity + 1);
    }
  }

  @action
  decreaseQuantity(productId) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      this.updateCartQuantity(productId, item.quantity - 1);
    }
  }

  @action
  toggleCart() {
    this.showCart = !this.showCart;
  }

  @action
  clearCart() {
    this.cart = [];
  }

  @action
  checkout() {
    if (this.cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // 模拟结账流程
    alert(`Checkout successful! Total: $${this.cartTotal}`);
    this.clearCart();
    this.showCart = false;
  }

  showAddToCartFeedback(product) {
    // 创建临时的成功提示
    const feedback = document.createElement('div');
    feedback.className = 'shop-add-to-cart-feedback';
    feedback.textContent = `${product.name} added to cart!`;
    document.body.appendChild(feedback);

    // 3秒后移除提示
    setTimeout(() => {
      if (feedback.parentNode) {
        feedback.parentNode.removeChild(feedback);
      }
    }, 3000);
  }
}
