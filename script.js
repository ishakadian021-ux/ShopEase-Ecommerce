document.querySelectorAll(".menu-toggle").forEach(b=>b.addEventListener("click",()=>document.querySelector(".nav-menu")?.classList.toggle("active")));
const toast=document.querySelector(".toast");function showToast(t){if(!toast)return;toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2200)}
document.querySelectorAll(".product-actions button:last-child,.add-to-cart-btn").forEach(b=>b.addEventListener("click",()=>showToast("Product added to cart!")));
document.querySelectorAll(".thumbnail-images img").forEach(t=>t.addEventListener("click",()=>{document.getElementById("mainImage").src=t.src.replace("w=100","w=600");document.querySelectorAll(".thumbnail-images img").forEach(i=>i.classList.remove("active"));t.classList.add("active")}));
document.querySelectorAll(".quantity-selector button").forEach((b,i)=>b.addEventListener("click",()=>{const q=document.getElementById("quantity");q.value=Math.max(1,+q.value+(i?1:-1))}));
document.querySelector(".newsletter-form")?.addEventListener("submit",e=>{e.preventDefault();showToast("Thanks for subscribing!");e.target.reset()});
document.querySelector(".coupon-form")?.addEventListener("submit",e=>{e.preventDefault();showToast("Coupon applied successfully!");});
document.querySelector(".checkout-btn")?.addEventListener("click",()=>showToast("Checkout demo – backend required."));