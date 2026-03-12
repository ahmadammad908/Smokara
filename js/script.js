/**
 * ESSENCE E-COMMERCE - VANILLA JAVASCRIPT (NO FRAMEWORKS)
 * High-performance, event delegation, localStorage, dynamic rendering
 * Complete Responsive Header with Hamburger + Cart Integration
 * Updated: Product Suggestions, Recently Viewed, Enhanced Cart, Toast Notifications
 * ADDED: Multiple Image Gallery with Horizontal Scroll
 * ADDED: Product Description on Detail Page
 * UPDATED: Removed Shipping & Tax, Added Delivery Charges Rs. 250
 * UPDATED: Enhanced product suggestions based on name and category matching
 * UPDATED: Added Colors and Stock for all products with per price display
 * UPDATED: Category filter with immediate product display
 * FIXED: Products show by default on shop page load
 * ADDED: Smooth scroll to products on filter change
 * FIXED: Mobile search bar zoom on focus
 * ADDED: Redirect to cart page after adding to cart
 * ADDED: Order Success Popup with Invoice - PROFESSIONAL DESIGN
 * ADDED: WhatsApp Order Notification for Owner
 * FIXED: Form data capture for name, address, phone
 * UPDATED: WhatsApp number to 03229553998
 * UPDATED: Added Estimated Delivery: 5-7 Working Days
 */

'use strict';

// ======================================================================
// PRODUCT DATA (simulated database) - WITH MULTIPLE IMAGES & DESCRIPTIONS
// ADDED: Colors array for all products, In stock for all, per price in brackets
// ======================================================================
const products = [
    {
        id: 1,
        name: 'The Black Cases',
        category: 'Cigarette cases (Black)',
        price: 550,
        description: 'Simple Plastic cigarette case with a sleek black finish. Compact and lightweight, it easily fits in your pocket or bag. The durable plastic construction protects your cigarettes from damage while on the go. Perfect for smokers who want a stylish and practical way to carry their cigarettes. (Per piece: Rs. 550)',
        image: 'assets/images/Product1 (2).jpeg',
        images: [
            'assets/images/Product1 (2).jpeg',
            'assets/images/Product1.jpeg',
            'assets/images/Product1 (3).jpeg',
        ],
        stock: "In stock"
    },
    {
        id: 2,
        name: 'The Silver Cases',
        category: 'Cigarette cases (Silver)',
        price: 800,
        description: 'Premium Metal cigarette case with a polished silver finish. Sturdy and elegant, it offers superior protection for your cigarettes while adding a touch of sophistication. The sleek design fits comfortably in your hand and pocket, making it ideal for smokers who value both style and functionality. (Per piece: Rs. 800)',
        image: 'assets/images/product2.jpeg',
        images: [
            'assets/images/product2.jpeg',
            'assets/images/product2 (2).jpeg',
            'assets/images/product2 (3).jpeg',
        ],
        stock: "In stock"
    },
    {
        id: 3,
        name: 'The Silver Cases (teal bar)',
        category: 'Cigarette cases (Silver teal bar)',
        price: 550,
        description: 'Cigarette cases with teal bar. Premium quality and stylish design for your cigarette needs. (Per piece: Rs. 550)',
        image: 'assets/images/product2 (a).jpeg',
        images: [
            'assets/images/product2 (a).jpeg',
            'assets/images/product2 (b).jpeg',
        ],
        stock: "In stock"
    },
    {
        id: 4,
        name: 'The Silver Cases (Simple Plastic)',
        category: 'Cigarette cases (Silver Simple Plastic)',
        price: 550,
        description: 'Cigarette Cases with silver simple plastic. Durable and stylish design for your cigarette storage needs. (Per piece: Rs. 550)',
        image: 'assets/images/product2 (c).jpeg',
        images: [
            'assets/images/product2 (c).jpeg',
            'assets/images/product2 (d).jpeg',
        ],
        stock: "In stock"
    },
    {
        id: 5,
        name: 'The Gray Cases',
        category: 'Cigarette cases (Gray)',
        price: 800,
        description: 'Premium Gray Cigarette case with a sleek finish. Durable and stylish design for your cigarette storage needs. (Per piece: Rs. 800)',
        image: 'assets/images/product3.jpeg',
        images: [
            'assets/images/product3.jpeg',
            'assets/images/product3 (2).jpeg',
        ],
        stock: "In stock"
    },
    {
        id: 6,
        name: 'The Flower Cases (Pink)',
        category: 'Beautiful Printed Cigarette cases (Pink Flower)',
        price: 1100,
        description: 'Beautifully printed cigarette cases with floral patterns. Premium quality and stylish design for your cigarette needs. (Per piece: Rs. 1100)',
        image: 'assets/images/product4.jpeg',
        images: [
            'assets/images/product4.jpeg',
            'assets/images/product4 (2).jpeg'
        ],
        stock: "In stock"
    },
    {
        id: 7,
        name: 'The Flower Cases (Purple)',
        category: 'Beautiful Printed Cigarette cases (Purple Flower)',
        price: 1100,
        description: 'Beautifully printed cigarette cases with purple floral patterns. Premium quality and stylish design for your cigarette needs. (Per piece: Rs. 1100)',
        image: 'assets/images/product4 (a).jpeg',
        images: [
            'assets/images/product4 (a).jpeg',
            'assets/images/product4 (b).jpeg'
        ],
        stock: "In stock"
    },
    {
        id: 8,
        name: 'The Focus Edition',
        category: 'Plastic Cigarette Cases (Focus Edition)',
        price: 1000,
        description: 'Plastic cigarette case with a sleek design. Durable and stylish, it offers practical storage for your cigarettes while adding a touch of sophistication. Perfect for smokers who want a functional and fashionable way to carry their cigarettes. (Per piece: Rs. 1000)',
        image: 'assets/images/product5.jpeg',
        images: [
            'assets/images/product5.jpeg',
            'assets/images/product5 (2).jpeg',
            'assets/images/product5 (3).jpeg',
        ],
        // Colors for Focus Edition
        colors: [
            { name: 'Silver', value: '#C0C0C0' },
            { name: 'Gray', value: '#808080' },
            { name: 'Light Cream', value: '#FFFDD0' }
        ],
        stock: "In stock"
    },
    {
        id: 9,
        name: 'The Focus Edition (cases with lighter)',
        category: 'Focus cigarette cases with lighter',
        price: 1100,
        description: 'Plastic cigarette case with a sleek design and built-in lighter. Durable and stylish, it offers practical storage for your cigarettes while adding a touch of sophistication. Perfect for smokers who want a functional and fashionable way to carry their cigarettes and light them on the go. (Per piece: Rs. 1100)',
        image: 'assets/images/product5 (a).jpeg',
        images: [
            'assets/images/product5 (a).jpeg',
            'assets/images/product5 (b).jpeg',
            'assets/images/product5 (c).jpeg',
            'assets/images/product5 (d).jpeg'
        ],
        // Colors for Focus Edition with lighter
        colors: [
            { name: 'Silver', value: '#C0C0C0' },
            { name: 'Rose Gold', value: '#B76E7A' },
            { name: 'Dark Metallic Grey', value: '#4B4B4B' }
        ],
        stock: "In stock"
    },
    {
        id: 10,
        name: 'Silicone Cases',
        category: 'Beautiful silicone cases green with effiel tower, paris',
        price: 600,
        description: 'Soft silicone cigarette cases with a smooth texture and easy-to-clean surface. Perfect for protecting your cigarettes while maintaining their freshness. Features beautiful designs including Eiffel Tower and Paris themes. (Per piece: Rs. 600)',
        image: 'assets/images/product6.jpeg',
        images: [
            'assets/images/product6.jpeg',
            'assets/images/product6 (2).jpeg',
            'assets/images/product6 (3).jpeg',
            'assets/images/product6 (4).jpeg'
        ],
        // Colors for Silicone Cases
        colors: [
            { name: 'Black', value: '#000000' },
            { name: 'Green', value: '#008000' },
        ],
        stock: "In stock"
    },
    {
        id: 11,
        name: 'The Square Cases',
        category: 'Beautiful square cases with button to open with great designs and colors',
        price: 1000,
        description: 'Beautifully printed square cigarette cases with button to open. Premium quality and stylish design for your cigarette needs. (Per piece: Rs. 1000)',
        image: 'assets/images/product7.jpeg',
        images: [
            'assets/images/product7.jpeg',
            'assets/images/product7 (2).jpeg',
            'assets/images/product7 (3).jpeg',
            'assets/images/product7 (4).jpeg',
            'assets/images/product7 (5).jpeg',
            'assets/images/product7 (6).jpeg',
            'assets/images/product7 (7).jpeg',
            'assets/images/product7 (8).jpeg'
        ],
        // Colors for Square Cases
        colors: [
            { name: 'Black', value: '#000000' },
            { name: 'Brown (Bhura)', value: '#8B4513' },
            { name: 'Silver', value: '#C0C0C0' },
        ],
        stock: "In stock"
    },
    {
        id: 12,
        name: 'The Transparent Case',
        category: 'Simple and transparent. easy to use and handle',
        price: 800,
        description: 'Simple and transparent cigarette case. Easy to use and handle, it offers practical storage for your cigarettes while allowing you to see the contents at a glance. Perfect for smokers who want a functional and minimalist way to carry their cigarettes. (Per piece: Rs. 800)',
        image: 'assets/images/product8.jpeg',
        images: [
            'assets/images/product8.jpeg',
            'assets/images/product8 (2).jpeg',
        ],
        stock: "In stock"
    },
    {
        id: 13,
        name: 'Rechargable Cigarette case',
        category: 'Simple with teal bar and charging cable',
        price: 1600,
        description: 'Rechargable cigarette case with a teal bar and charging cable. Designed for convenience and style, this case allows you to keep your cigarettes charged and ready to go. (Per piece: Rs. 1600)',
        image: 'assets/images/product9.jpeg',
        images: [
            'assets/images/product9.jpeg',
            'assets/images/product9 (2).jpeg',
            'assets/images/product9 (3).jpeg',
        ],
        stock: "In stock"
    },
    {
        id: 14,
        name: 'Tin Cases',
        category: 'Lucky Strike tin cases in purple and green colour',
        price: 350,
        description: 'Beautifully designed tin cigarette cases in purple and green colors. Perfect for collectors and enthusiasts who appreciate premium packaging. (Per piece: Rs. 350)',
        image: 'assets/images/product10.jpeg',
        images: [
            'assets/images/product10.jpeg',
            'assets/images/product10 (2).jpeg',
            'assets/images/product10 (3).jpeg',
            'assets/images/product10 (4).jpeg',
        ],
        // ADDED: Colors for Tin Cases
        colors: [
            { name: 'Purple', value: '#800080' },
            { name: 'Green', value: '#008000' },
        ],
        stock: "In stock"
    }
];

// ======================================================================
// CART STATE (localStorage persistent)
// ======================================================================
let cart = JSON.parse(localStorage.getItem('essenceCart')) || [];

// ======================================================================
// WHATSAPP CONFIGURATION - UPDATED WITH CORRECT OWNER NUMBER
// ======================================================================
const WHATSAPP_CONFIG = {
    ownerNumber: '923229553998', // Owner's WhatsApp number (0322-9553998 in international format)
    messageTemplate: (orderData) => {
        // Format phone number for display
        const formattedPhone = orderData.phone ? orderData.phone.replace(/(\d{4})(\d{7})/, '$1-$2') : 'Not provided';
        
        return `🛍️ *NEW ORDER RECEIVED* 🛍️
                
👤 *CUSTOMER DETAILS:*
• Full Name: ${orderData.name || 'Not provided'}
• Phone: ${formattedPhone}
• Email: ${orderData.email || 'Not provided'}
• Address: ${orderData.address || 'Not provided'}${orderData.city ? `, ${orderData.city}` : ''}

📦 *ORDER ITEMS:*
${orderData.items.map(item => 
    `• ${item.name}${item.color ? ` (${item.color})` : ''} 
  Quantity: ${item.quantity} × Rs. ${item.price.toFixed(2)} = Rs. ${(item.price * item.quantity).toFixed(2)}`
).join('\n')}

💰 *ORDER SUMMARY:*
• Subtotal: Rs. ${orderData.subtotal.toFixed(2)}
• Delivery Charges: Rs. ${orderData.deliveryCharges.toFixed(2)}
• *TOTAL AMOUNT: Rs. ${orderData.total.toFixed(2)}*

🆔 *Order ID: ${orderData.orderId}*
📅 *Date: ${orderData.date}*

✅ *Please confirm this order with customer*
📍 *Delivery address: ${orderData.address || 'Not provided'}, ${orderData.city || ''}*`
    }
};

// ======================================================================
// UTILITY FUNCTIONS
// ======================================================================

/**
 * Generate unique order ID
 * @returns {string} Unique order ID
 */
const generateOrderId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `ORD-${timestamp}-${random}`;
};

/**
 * Format date for order
 * @returns {string} Formatted date string
 */
const formatOrderDate = () => {
    const now = new Date();
    return now.toLocaleString('en-PK', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
};

/**
 * Send order notification to WhatsApp
 * @param {object} orderData - Complete order data
 */
const sendWhatsAppNotification = (orderData) => {
    const message = WHATSAPP_CONFIG.messageTemplate(orderData);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.ownerNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
};

/**
 * Show order success popup with invoice - PROFESSIONAL DESIGN
 * @param {object} orderData - Complete order data
 */
const showOrderSuccessPopup = (orderData) => {
    // Create popup container if it doesn't exist
    let popupContainer = document.querySelector('.order-popup-container');
    if (!popupContainer) {
        popupContainer = document.createElement('div');
        popupContainer.className = 'order-popup-container';
        document.body.appendChild(popupContainer);
    }

    // Generate invoice items HTML
    const itemsHTML = orderData.items.map(item => `
        <tr>
            <td>
                <div class="product-info-cell">
                    <span class="product-name">${item.name}</span>
                    ${item.color ? `<span class="product-color">Color: ${item.color}</span>` : ''}
                </div>
            </td>
            <td class="text-center">${item.quantity}</td>
            <td class="text-right">Rs. ${item.price.toFixed(2)}</td>
            <td class="text-right">Rs. ${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
    `).join('');

    popupContainer.innerHTML = `
        <div class="order-popup">
            <div class="order-popup-header">
                <div class="success-animation">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                        <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                </div>
                <h2>Order Placed Successfully!</h2>
                <button class="popup-close" aria-label="Close">&times;</button>
            </div>
            
            <div class="order-popup-content">
                <div class="order-confirmation-message">
                    <p>Thank you for your order, <strong>${orderData.name}</strong>!</p>
                    <p>We've sent your order details to our team. You'll receive a confirmation call shortly at <strong>${orderData.phone}</strong>.</p>
                </div>
                
                <div class="invoice-card">
                    <div class="invoice-header">
                        <div class="brand-section">
                            <h2 class="brand-name">Smokara</h2>
                            <p class="brand-tagline">E-COMMERCE</p>
                        </div>
                        <div class="invoice-badge">
                            <span class="badge-paid">PAID</span>
                        </div>
                    </div>
                    
                    <div class="invoice-id-section">
                        <div class="invoice-id">
                            <span class="label">Order ID:</span>
                            <span class="value">${orderData.orderId}</span>
                        </div>
                        <div class="invoice-date">
                            <span class="label">Date:</span>
                            <span class="value">${orderData.date}</span>
                        </div>
                    </div>
                    
                    <div class="customer-details-grid">
                        <div class="detail-card">
                            <div class="detail-icon">👤</div>
                            <div class="detail-content">
                                <span class="detail-label">Customer</span>
                                <span class="detail-value">${orderData.name}</span>
                            </div>
                        </div>
                        <div class="detail-card">
                            <div class="detail-icon">📞</div>
                            <div class="detail-content">
                                <span class="detail-label">Phone</span>
                                <span class="detail-value">${orderData.phone}</span>
                            </div>
                        </div>
                        <div class="detail-card">
                            <div class="detail-icon">✉️</div>
                            <div class="detail-content">
                                <span class="detail-label">Email</span>
                                <span class="detail-value">${orderData.email || 'Not provided'}</span>
                            </div>
                        </div>
                        <div class="detail-card full-width">
                            <div class="detail-icon">📍</div>
                            <div class="detail-content">
                                <span class="detail-label">Delivery Address</span>
                                <span class="detail-value">${orderData.address}${orderData.city ? `, ${orderData.city}` : ''}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="order-items-section">
                        <h3>Order Summary</h3>
                        <div class="table-responsive">
                            <table class="invoice-items-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th class="text-center">Qty</th>
                                        <th class="text-right">Price</th>
                                        <th class="text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${itemsHTML}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="3" class="text-right summary-label">Subtotal:</td>
                                        <td class="text-right summary-value">Rs. ${orderData.subtotal.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-right summary-label">Delivery Charges:</td>
                                        <td class="text-right summary-value">Rs. ${orderData.deliveryCharges.toFixed(2)}</td>
                                    </tr>
                                    <tr class="total-row">
                                        <td colspan="3" class="text-right total-label"><strong>TOTAL:</strong></td>
                                        <td class="text-right total-value"><strong>Rs. ${orderData.total.toFixed(2)}</strong></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    
                    <div class="payment-method-info">
                        <div class="payment-badge">
                            <span class="payment-icon">💳</span>
                            <span>Cash on Delivery</span>
                        </div>
                        <div class="delivery-estimate">
                            <span class="estimate-icon">🚚</span>
                            <span>Estimated delivery: 5-7 Working days</span>
                        </div>
                    </div>
                    
                    <div class="invoice-footer">
                        <p>We'll contact you shortly to confirm your order.</p>
                        <p class="thank-you">Thank you for choosing Smokara! ✨</p>
                    </div>
                </div>
                
                <div class="order-popup-actions">
                    <button class="btn btn-primary" id="view-orders-btn">
                        <span class="btn-icon">🛍️</span>
                        Continue Shopping
                    </button>
                    <button class="btn btn-outline" id="print-invoice-btn">
                        <span class="btn-icon">🖨️</span>
                        Print Invoice
                    </button>
                </div>
            </div>
        </div>
    `;

    // Add event listeners for popup
    const closeBtn = popupContainer.querySelector('.popup-close');
    const viewOrdersBtn = popupContainer.querySelector('#view-orders-btn');
    const printInvoiceBtn = popupContainer.querySelector('#print-invoice-btn');

    closeBtn.addEventListener('click', () => {
        popupContainer.classList.add('fade-out');
        setTimeout(() => popupContainer.remove(), 300);
    });

    viewOrdersBtn.addEventListener('click', () => {
        popupContainer.classList.add('fade-out');
        setTimeout(() => {
            popupContainer.remove();
            window.location.href = 'shop.html';
        }, 300);
    });

    printInvoiceBtn.addEventListener('click', () => {
        const invoiceContent = popupContainer.querySelector('.invoice-card').cloneNode(true);
        const printWindow = window.open('', '_blank');
        
        printWindow.document.write(`
            <html>
                <head>
                    <title>ESSENCE Invoice - ${orderData.orderId}</title>
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
                            background: #f8f9fa;
                            padding: 40px 20px;
                            line-height: 1.6;
                        }
                        .invoice-card {
                            max-width: 800px;
                            margin: 0 auto;
                            background: white;
                            border-radius: 24px;
                            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                            overflow: hidden;
                        }
                        .invoice-header {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 30px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                        .brand-name {
                            font-size: 32px;
                            font-weight: 800;
                            letter-spacing: -0.5px;
                            margin: 0;
                        }
                        .brand-tagline {
                            font-size: 14px;
                            opacity: 0.9;
                            margin-top: 4px;
                        }
                        .badge-paid {
                            background: rgba(255,255,255,0.2);
                            padding: 8px 20px;
                            border-radius: 40px;
                            font-size: 14px;
                            font-weight: 600;
                            letter-spacing: 1px;
                        }
                        .invoice-id-section {
                            padding: 20px 30px;
                            background: #f8f9fa;
                            border-bottom: 1px solid #e9ecef;
                            display: flex;
                            justify-content: space-between;
                        }
                        .customer-details-grid {
                            padding: 30px;
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 20px;
                        }
                        .detail-card {
                            display: flex;
                            align-items: center;
                            gap: 15px;
                            padding: 15px;
                            background: #f8f9fa;
                            border-radius: 12px;
                        }
                        .detail-card.full-width {
                            grid-column: 1 / -1;
                        }
                        .detail-icon {
                            font-size: 24px;
                            width: 48px;
                            height: 48px;
                            background: white;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .detail-content {
                            display: flex;
                            flex-direction: column;
                        }
                        .detail-label {
                            font-size: 12px;
                            color: #6c757d;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                        }
                        .detail-value {
                            font-size: 16px;
                            font-weight: 600;
                            color: #212529;
                        }
                        .order-items-section {
                            padding: 0 30px 30px;
                        }
                        .order-items-section h3 {
                            margin-bottom: 20px;
                            color: #212529;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th {
                            text-align: left;
                            padding: 12px;
                            background: #f8f9fa;
                            color: #495057;
                            font-weight: 600;
                            font-size: 14px;
                        }
                        td {
                            padding: 12px;
                            border-bottom: 1px solid #e9ecef;
                        }
                        .product-info-cell {
                            display: flex;
                            flex-direction: column;
                        }
                        .product-name {
                            font-weight: 500;
                            color: #212529;
                        }
                        .product-color {
                            font-size: 12px;
                            color: #6c757d;
                            margin-top: 2px;
                        }
                        .text-center { text-align: center; }
                        .text-right { text-align: right; }
                        .summary-label {
                            color: #6c757d;
                            font-weight: normal;
                        }
                        .summary-value {
                            font-weight: 500;
                        }
                        .total-row td {
                            border-top: 2px solid #dee2e6;
                            border-bottom: none;
                        }
                        .total-label, .total-value {
                            font-size: 18px;
                            color: #212529;
                        }
                        .payment-method-info {
                            padding: 20px 30px;
                            background: #f8f9fa;
                            border-top: 1px solid #e9ecef;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                        .payment-badge, .delivery-estimate {
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            font-size: 14px;
                            color: #495057;
                        }
                        .invoice-footer {
                            padding: 30px;
                            text-align: center;
                            background: white;
                            border-top: 1px solid #e9ecef;
                        }
                        .thank-you {
                            margin-top: 10px;
                            font-size: 18px;
                            font-weight: 600;
                            color: #667eea;
                        }
                        @media print {
                            body { background: white; padding: 0; }
                            .invoice-card { box-shadow: none; }
                        }
                    </style>
                </head>
                <body>
                    ${invoiceContent.outerHTML}
                </body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    });

    // Auto close popup when clicking outside
    popupContainer.addEventListener('click', (e) => {
        if (e.target === popupContainer) {
            popupContainer.classList.add('fade-out');
            setTimeout(() => popupContainer.remove(), 300);
        }
    });
};

/**
 * Process complete order with success popup and WhatsApp notification
 * @param {object} formData - Customer form data
 */
const processOrder = (formData) => {
    const { subtotal, deliveryCharges, total } = calculateCartTotals();
    
    // Prepare order items with product details
    const orderItems = cart.map(item => {
        const product = getProduct(item.id);
        return {
            name: product.name,
            price: product.price,
            quantity: item.quantity,
            color: item.color || null,
            id: item.id
        };
    });

    // Format phone number for WhatsApp (remove spaces, ensure proper format)
    let phoneNumber = formData.phone || '';
    phoneNumber = phoneNumber.replace(/\s+/g, ''); // Remove spaces
    
    // If phone starts with 0, replace with 92 for international format
    if (phoneNumber.startsWith('0')) {
        phoneNumber = '92' + phoneNumber.substring(1);
    }
    // If phone starts with +, remove the +
    if (phoneNumber.startsWith('+')) {
        phoneNumber = phoneNumber.substring(1);
    }

    // Prepare complete order data with all fields properly mapped
    const orderData = {
        orderId: generateOrderId(),
        date: formatOrderDate(),
        name: formData.name || formData.fullname || 'Not provided',
        phone: phoneNumber || 'Not provided',
        email: formData.email || 'Not provided',
        address: formData.address || 'Not provided',
        city: formData.city || '',
        postal: formData.postal || '',
        items: orderItems,
        subtotal: subtotal,
        deliveryCharges: deliveryCharges,
        total: total
    };

    // Save order to localStorage for history (optional)
    const orderHistory = JSON.parse(localStorage.getItem('essenceOrders')) || [];
    orderHistory.unshift(orderData);
    localStorage.setItem('essenceOrders', JSON.stringify(orderHistory.slice(0, 10))); // Keep last 10 orders

    // Show success popup
    showOrderSuccessPopup(orderData);

    // Send WhatsApp notification
    sendWhatsAppNotification(orderData);

    // Clear cart
    clearCart();

    // Track order in analytics if needed
    console.log('Order processed:', orderData);
};

/**
 * Save cart to localStorage and update UI
 */
const saveCart = () => {
    localStorage.setItem('essenceCart', JSON.stringify(cart));
    updateCartCount();
    renderCartPage();
    renderOrderSummary();
};

/**
 * Update cart count badges across all pages
 * Fixed: Proper positioning for both desktop and mobile
 */
const updateCartCount = () => {
    const countEls = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    countEls.forEach(el => {
        el.textContent = totalItems;

        // Ensure proper positioning on all devices
        const cartIcon = el.closest('.cart-icon');
        if (cartIcon) {
            cartIcon.style.position = 'relative';
            el.style.position = 'absolute';
            el.style.top = '-8px';
            el.style.right = '-10px';
        }
    });
};

/**
 * Find product by ID
 * @param {number} id - Product ID
 * @returns {object} Product object
 */
const getProduct = (id) => products.find(p => p.id === parseInt(id));

/**
 * Format price to PKR (Pakistani Rupees)
 * @param {number} price - Price value
 * @returns {string} Formatted price
 */
const formatPrice = (price) => {
    return `Rs. ${price.toFixed(2)}`;
};

/**
 * Get all unique categories from products
 * @returns {array} Array of unique category names
 */
const getAllCategories = () => {
    const categories = products.map(p => p.category);
    return ['all', ...new Set(categories)];
};

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// ======================================================================
// CART ACTIONS - MODIFIED for products with colors and redirect to cart
// ======================================================================

/**
 * Add product to cart (modified to handle color selection for products with colors)
 * @param {number} productId - Product ID to add
 */
const addToCart = (productId) => {
    const product = getProduct(productId);

    // Check if product has colors (ID 8, 9, 10, 11, 14)
    if (productId === 8 || productId === 9 || productId === 10 || productId === 11 || productId === 14) {
        // Check if color is selected
        const selectedColor = document.querySelector('input[name="color"]:checked');
        if (!selectedColor) {
            showToast('Please select a color', 'error');
            return;
        }

        const color = selectedColor.value;

        // Check if same product with same color exists
        const existingIndex = cart.findIndex(item =>
            item.id === productId && item.color === color
        );

        if (existingIndex !== -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({
                id: productId,
                color: color,
                quantity: 1
            });
        }

        showToast(`${product.name} (${color}) added to cart`, 'success');
    } else {
        // Original behavior for other products
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }

        showToast(`${product.name} added to cart`, 'success');
    }

    saveCart();
    
    // 🆕 REDIRECT TO CART PAGE AFTER ADDING TO CART
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 500); // 500ms delay to show toast message
};

/**
 * Remove product from cart (modified to handle color)
 * @param {number} productId - Product ID to remove
 * @param {string} color - Color (for products with colors)
 */
const removeFromCart = (productId, color = '') => {
    if (color) {
        cart = cart.filter(item => !(item.id === productId && item.color === color));
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    saveCart();
    showToast('Item removed from cart', 'info');
};

/**
 * Update product quantity in cart (modified to handle color)
 * @param {number} productId - Product ID
 * @param {number} newQuantity - New quantity value
 * @param {string} color - Color (for products with colors)
 */
const updateQuantity = (productId, newQuantity, color = '') => {
    if (newQuantity <= 0) {
        removeFromCart(productId, color);
    } else {
        const item = cart.find(i =>
            i.id === productId && (i.color === color || (!i.color && !color))
        );
        if (item) {
            item.quantity = newQuantity;
            saveCart();
        }
    }
};

/**
 * Clear entire cart
 */
const clearCart = () => {
    if (cart.length === 0) {
        showToast('Cart is already empty', 'info');
        return;
    }
    cart = [];
    saveCart();
    showToast('Cart cleared', 'info');
};

/**
 * Calculate cart totals - UPDATED: Removed shipping & tax, added delivery charges
 * @returns {object} Cart totals object
 */
const calculateCartTotals = () => {
    const subtotal = cart.reduce((acc, item) => {
        const product = getProduct(item.id);
        return acc + (product ? product.price * item.quantity : 0);
    }, 0);

    const deliveryCharges = 400; // Fixed delivery charges Rs. 400
    const total = subtotal + deliveryCharges;

    return { subtotal, deliveryCharges, total };
};

/**
 * Show temporary notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type (success, error, info)
 */
const showToast = (message, type = 'success') => {
    // Check if toast container exists, create if not
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Remove toast after animation
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
};

// ======================================================================
// MOBILE MENU FUNCTIONALITY
// ======================================================================

/**
 * Initialize responsive mobile menu with hamburger
 */
const initMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navWrapper = document.querySelector('.nav-cart-wrapper');

    if (!menuToggle || !navWrapper) return;

    // Create overlay element if it doesn't exist
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    /**
     * Toggle mobile menu
     * @param {boolean} show - Force state (optional)
     */
    const toggleMenu = (show) => {
        const isActive = show !== undefined ? show : !navWrapper.classList.contains('active');

        if (isActive) {
            navWrapper.classList.add('active');
            menuToggle.classList.add('active');
            overlay.classList.add('active');
            menuToggle.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');
        } else {
            navWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    };

    // Event listeners
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    overlay.addEventListener('click', () => toggleMenu(false));

    // Close menu when clicking nav links
    navWrapper.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => toggleMenu(false), 150);
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navWrapper.classList.contains('active')) {
            toggleMenu(false);
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && navWrapper.classList.contains('active')) {
                toggleMenu(false);
            }
        }, 250);
    });

    // Set initial ARIA state
    menuToggle.setAttribute('aria-expanded', 'false');
};

// ======================================================================
// SUGGESTED PRODUCTS & RECOMMENDATIONS - ENHANCED FOR NAME/CATEGORY MATCHING
// ======================================================================

/**
 * Extract keywords from product name and category
 * @param {string} text - Text to extract keywords from
 * @returns {array} Array of keywords
 */
const extractKeywords = (text) => {
    if (!text) return [];

    // Convert to lowercase, remove special characters, split into words
    return text.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(word => word.length > 2); // Filter out short words
};

/**
 * Calculate name similarity score between two products
 * @param {object} product1 - First product
 * @param {object} product2 - Second product
 * @returns {number} Similarity score
 */
const calculateNameSimilarity = (product1, product2) => {
    const keywords1 = extractKeywords(product1.name);
    const keywords2 = extractKeywords(product2.name);

    // Find common keywords
    const commonKeywords = keywords1.filter(keyword => keywords2.includes(keyword));

    // Calculate Jaccard similarity coefficient
    const union = new Set([...keywords1, ...keywords2]);

    if (union.size === 0) return 0;

    return commonKeywords.length / union.size;
};

/**
 * Get personalized product recommendations - ENHANCED for name/category matching
 * @param {number} productId - Current product ID
 * @param {number} limit - Number of recommendations
 * @returns {array} Array of recommended products
 */
const getPersonalizedSuggestions = (productId, limit = 4) => {
    const currentProduct = getProduct(productId);
    if (!currentProduct) return products.slice(0, limit);

    // Get recently viewed products
    const recentlyViewed = getRecentlyViewed();

    // Enhanced recommendation algorithm with better name/category matching
    const scoredProducts = products
        .filter(p => p.id !== productId)
        .map(product => {
            let score = 0;

            // ===== CATEGORY MATCHING (Highest Priority) =====

            // Exact category match - 10 points (highest)
            if (product.category === currentProduct.category) {
                score += 10;

                // Check for color/type similarity within same category
                const currentColorMatch = currentProduct.name.match(/\((.*?)\)/);
                const productColorMatch = product.name.match(/\((.*?)\)/);

                if (currentColorMatch && productColorMatch) {
                    if (currentColorMatch[1] === productColorMatch[1]) {
                        score += 5; // Same color/variant within category
                    }
                }
            }

            // Partial category match (if one contains the other) - 5 points
            if (product.category.includes(currentProduct.category) ||
                currentProduct.category.includes(product.category)) {
                score += 5;
            }

            // Category keyword matching - 3 points per matching keyword
            const categoryKeywords1 = extractKeywords(product.category);
            const categoryKeywords2 = extractKeywords(currentProduct.category);

            const commonCategoryKeywords = categoryKeywords1.filter(keyword =>
                categoryKeywords2.includes(keyword)
            );

            score += commonCategoryKeywords.length * 3;

            // ===== NAME MATCHING (Second Priority) =====

            // Calculate name similarity (0-1 scale) - convert to points (max 8)
            const nameSimilarity = calculateNameSimilarity(currentProduct, product);
            score += nameSimilarity * 8;

            // Check for color/variant matching in parentheses
            const currentVariant = currentProduct.name.match(/\((.*?)\)/);
            const productVariant = product.name.match(/\((.*?)\)/);

            if (currentVariant && productVariant) {
                if (currentVariant[1] === productVariant[1]) {
                    score += 4; // Same variant/color
                }
            }

            // Common words in names (like "Cases", "Silver", "Flower")
            const currentWords = extractKeywords(currentProduct.name);
            const productWords = extractKeywords(product.name);

            const commonWords = currentWords.filter(word => productWords.includes(word));
            score += commonWords.length * 2;

            // ===== PRICE SIMILARITY =====

            // Similar price range (±20%): 2 points
            const priceDiff = Math.abs(product.price - currentProduct.price);
            const priceRange = currentProduct.price * 0.2;
            if (priceDiff <= priceRange) {
                score += 2;
            }

            // ===== BEHAVIORAL SIGNALS =====

            // In recently viewed: 1 point
            if (recentlyViewed.includes(product.id)) {
                score += 1;
            }

            // Popular items (simulated based on ID): 0.5 points
            if (product.id <= 4) {
                score += 0.5;
            }

            return { ...product, score };
        })
        .sort((a, b) => b.score - a.score);

    return scoredProducts.slice(0, limit);
};

/**
 * Render suggested products on product detail page
 * @param {object} currentProduct - Current product being viewed
 */
const renderSuggestedProducts = (currentProduct) => {
    const grid = document.getElementById('suggested-products-grid');
    if (!grid) return;

    const suggestions = getPersonalizedSuggestions(currentProduct.id, 4);

    if (suggestions.length === 0) {
        grid.innerHTML = '<p class="no-products">No suggestions available.</p>';
        return;
    }

    grid.innerHTML = suggestions.map(product => `
        <div class="product-card" data-id="${product.id}">
            <a href="product-details.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="400">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price)}</p>
                </div>
            </a>
            <button class="btn btn-outline add-to-cart-btn" data-id="${product.id}">
                Add to cart
            </button>
        </div>
    `).join('');
};

// ======================================================================
// RECENTLY VIEWED PRODUCTS
// ======================================================================

/**
 * Track recently viewed products
 * @param {number} productId - Viewed product ID
 */
const trackRecentlyViewed = (productId) => {
    let viewed = JSON.parse(localStorage.getItem('essenceRecentlyViewed')) || [];

    // Remove if already exists
    viewed = viewed.filter(id => id !== productId);

    // Add to beginning
    viewed.unshift(productId);

    // Keep only last 8 items
    viewed = viewed.slice(0, 8);

    localStorage.setItem('essenceRecentlyViewed', JSON.stringify(viewed));
};

/**
 * Get recently viewed products
 * @returns {array} Array of recently viewed product IDs
 */
const getRecentlyViewed = () => {
    return JSON.parse(localStorage.getItem('essenceRecentlyViewed')) || [];
};

/**
 * Render recently viewed products
 */
const renderRecentlyViewed = () => {
    const grid = document.getElementById('recently-viewed-grid');
    if (!grid) return;

    const viewedIds = getRecentlyViewed();
    const viewedProducts = viewedIds
        .map(id => getProduct(id))
        .filter(p => p !== undefined)
        .slice(0, 4);

    // Hide section if not enough products
    const section = grid.closest('.recently-viewed-section');
    if (viewedProducts.length < 2) {
        if (section) section.style.display = 'none';
        return;
    }

    if (section) section.style.display = 'block';

    grid.innerHTML = viewedProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <a href="product-details.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="400">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price)}</p>
                </div>
            </a>
            <button class="btn btn-outline add-to-cart-btn" data-id="${product.id}">
                Add to cart
            </button>
        </div>
    `).join('');
};

// ======================================================================
// RENDERING FUNCTIONS (Page-specific)
// ======================================================================

/**
 * Render featured products on home page
 */
const renderFeaturedProducts = () => {
    const grid = document.getElementById('featured-products-grid');
    if (!grid) return;

    const featured = products.slice(0, 4);
    grid.innerHTML = featured.map(product => `
        <div class="product-card" data-id="${product.id}">
            <a href="product-details.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="400">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price)}</p>
                </div>
            </a>
            <button class="btn btn-outline add-to-cart-btn" data-id="${product.id}">
                Add to cart
            </button>
        </div>
    `).join('');
};

/**
 * Render category filter options in the shop page
 */
const renderCategoryFilter = () => {
    const categoryFilter = document.getElementById('category-filter');
    if (!categoryFilter) return;

    const categories = getAllCategories();
    
    categoryFilter.innerHTML = categories.map(category => {
        const displayName = category === 'all' ? 'All Categories' : category;
        return `<option value="${category}">${displayName}</option>`;
    }).join('');
};

/**
 * Render shop products with filtering and search
 * @param {string} filterCategory - Category filter value
 * @param {string} sortBy - Sort method
 * @param {string} searchTerm - Search query
 */
const renderShopProducts = (filterCategory = 'all', sortBy = 'default', searchTerm = '') => {
    const grid = document.getElementById('shop-products-grid');
    if (!grid) return;

    let filtered = [...products];

    // Category filter
    if (filterCategory !== 'all') {
        filtered = filtered.filter(p => p.category === filterCategory);
    }

    // Search filter
    if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchLower) ||
            p.category.toLowerCase().includes(searchLower)
        );
    }

    // Sort
    if (sortBy === 'low-to-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-to-low') {
        filtered.sort((a, b) => b.price - a.price);
    }

    // Update category count display
    const categoryCount = document.getElementById('category-count');
    if (categoryCount) {
        categoryCount.textContent = `Showing ${filtered.length} products`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-products">No products found in this category.</div>';
        return;
    }

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            <a href="product-details.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="400">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price)}</p>
                </div>
            </a>
            <button class="btn btn-outline add-to-cart-btn" data-id="${product.id}">
                Add to cart
            </button>
        </div>
    `).join('');
};

/**
 * Initialize product gallery with thumbnail click and scroll functionality
 */
const initProductGallery = () => {
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const thumbnailScroll = document.getElementById('thumbnail-scroll');
    const leftScrollBtn = document.querySelector('.left-scroll');
    const rightScrollBtn = document.querySelector('.right-scroll');

    if (!thumbnails.length || !mainImage) return;

    // Thumbnail click handler
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));

            // Add active class to clicked thumbnail
            this.classList.add('active');

            // Update main image
            const newSrc = this.dataset.src;
            mainImage.src = newSrc;

            // Update alt text
            const viewNumber = Array.from(thumbnails).indexOf(this) + 1;
            mainImage.alt = mainImage.alt.replace(/ - view \d+$/, '') + ` - view ${viewNumber}`;
        });
    });

    // Horizontal scroll functionality
    if (leftScrollBtn && rightScrollBtn && thumbnailScroll) {
        const scrollAmount = 200; // Pixels to scroll per click

        leftScrollBtn.addEventListener('click', () => {
            thumbnailScroll.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        rightScrollBtn.addEventListener('click', () => {
            thumbnailScroll.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Keyboard navigation for thumbnails
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                thumb.click();
            }
        });

        // Add tabindex for accessibility
        if (!thumb.hasAttribute('tabindex')) {
            thumb.setAttribute('tabindex', '0');
            thumb.setAttribute('role', 'button');
            thumb.setAttribute('aria-label', `View image ${index + 1} of ${thumbnails.length}`);
        }
    });

    // Auto-scroll active thumbnail into view
    const activeThumb = document.querySelector('.thumbnail.active');
    if (activeThumb && thumbnailScroll) {
        const thumbLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.offsetWidth;
        const scrollLeft = thumbnailScroll.scrollLeft;
        const containerWidth = thumbnailScroll.offsetWidth;

        if (thumbLeft < scrollLeft || thumbLeft + thumbWidth > scrollLeft + containerWidth) {
            thumbnailScroll.scrollTo({
                left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
                behavior: 'smooth'
            });
        }
    }
};

/**
 * Get product images for gallery
 * @param {object} product - Product object
 * @returns {array} Array of image paths
 */
const getProductImages = (product) => {
    // If product has custom images array, use it
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
        return product.images;
    }

    // Fallback: generate dynamic images based on main image
    const basePath = product.image.substring(0, product.image.lastIndexOf('/') + 1);
    const fileName = product.image.substring(product.image.lastIndexOf('/') + 1);
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    const ext = fileName.substring(fileName.lastIndexOf('.'));

    return [
        product.image,
        `${basePath}${nameWithoutExt} (2)${ext}`,
        `${basePath}${nameWithoutExt}-angle1${ext}`,
        `${basePath}${nameWithoutExt}-angle2${ext}`,
        `${basePath}${nameWithoutExt}-detail${ext}`
    ];
};

/**
 * Initialize color selection functionality for products with colors (ID 8, 9, 10, 11, 14)
 * @param {number} productId - Product ID
 */
const initColorSelection = (productId) => {
    const colorRadios = document.querySelectorAll('input[name="color"]');
    const addToCartBtn = document.querySelector('.add-to-cart-btn[data-id="' + productId + '"]');

    if (!colorRadios.length || !addToCartBtn) return;

    // Pre-select first color
    const firstColor = colorRadios[0];
    if (firstColor) {
        firstColor.checked = true;
    }

    // Handle color selection
    colorRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            // Remove selected class from all color options
            document.querySelectorAll('.color-option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Add selected class to parent option
            this.closest('.color-option').classList.add('selected');
        });
    });
};

/**
 * Render product detail page with multiple images, description, and color selection for products with colors
 */
const renderProductDetail = () => {
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = getProduct(productId);

    if (!product) {
        container.innerHTML = `
            <div class="error-container">
                <p>Product not found.</p>
                <a href="shop.html" class="btn btn-primary">Browse products</a>
            </div>
        `;
        return;
    }

    // Track this product view
    trackRecentlyViewed(productId);

    // Get product images (use custom images array if available)
    const productImages = getProductImages(product);

    // Generate color options HTML for products with colors (ID 8, 9, 10, 11, 14)
    const colorOptionsHTML = ((product.id === 8 || product.id === 9 || product.id === 10 || product.id === 11 || product.id === 14) && product.colors) ? `
        <div class="product-colors">
            <h4>Available Colors:</h4>
            <div class="color-options">
                ${product.colors.map(color => `
                    <label class="color-option">
                        <input type="radio" name="color" value="${color.name}" class="color-radio">
                        <span class="color-circle" style="background-color: ${color.value};" title="${color.name}"></span>
                        <span class="color-name">${color.name}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    ` : '';

    // Stock status HTML with icon for all products
    const stockHTML = product.stock ? `
        <div class="product-stock">
            <span class="stock-badge in-stock">
                <span class="stock-icon">✓</span> In stock
            </span>
        </div>
    ` : '';

    container.innerHTML = `
        <div class="product-detail">
            <div class="product-gallery">
                <div class="main-image-container">
                    <img src="${product.image}" alt="${product.name} - main view" class="main-image" id="main-product-image" width="600" height="600" loading="eager">
                </div>
                
                <div class="thumbnail-container">
                    <button class="scroll-btn left-scroll" aria-label="Previous images">‹</button>
                    
                    <div class="thumbnail-scroll" id="thumbnail-scroll">
                        ${productImages.map((img, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-src="${img}">
                                <img src="${img}" alt="${product.name} - view ${index + 1}" loading="lazy" onerror="this.src='${product.image}'">
                            </div>
                        `).join('')}
                    </div>
                    
                    <button class="scroll-btn right-scroll" aria-label="Next images">›</button>
                </div>
            </div>
            
            <div class="detail-info">
                <span class="product-category">${product.category}</span>
                <h1>${product.name}</h1>
                <div style="display: flex; align-items: center; gap: 6px;">
                    <p class="product-price" style="margin: 0;">
                        ${formatPrice(product.price)}
                    </p>
                    <span style="font-size: 14px; color: #777;">
                        (Per Price)
                    </span>
                </div>
                
                ${stockHTML}
                
                ${colorOptionsHTML}
                
                <p class="product-description">${product.description || 'Thoughtfully designed, premium quality. Made to last with sustainable materials and timeless aesthetics. Perfect for daily use and built to withstand the test of time.'}</p>
                
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">
                        Add to cart 
                    </button>
                </div>
            </div>
        </div>
    `;

    // Initialize gallery functionality
    initProductGallery();

    // Initialize color selection for products with colors
    if ((product.id === 8 || product.id === 9 || product.id === 10 || product.id === 11 || product.id === 14) && product.colors) {
        initColorSelection(product.id);
    }

    // Render suggested products
    renderSuggestedProducts(product);
};

/**
 * Render shopping cart page with enhanced summary - SHOWS COLOR for products with colors
 */
const renderCartPage = () => {
    const container = document.getElementById('cart-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty.</p>
                <a href="shop.html" class="btn btn-primary">Continue shopping</a>
            </div>
        `;
        return;
    }

    const { subtotal, deliveryCharges, total } = calculateCartTotals();

    const cartItemsHTML = cart.map(item => {
        const product = getProduct(item.id);
        if (!product) return '';

        // Show color if product has colors (ID 8, 9, 10, 11, or 14) and has color property
        const colorInfo = ((item.id === 8 || item.id === 9 || item.id === 10 || item.id === 11 || item.id === 14) && item.color) ?
            `<span class="cart-item-color">Color: ${item.color}</span>` : '';

        return `
            <div class="cart-item" data-id="${item.id}" data-unique-id="${item.id}-${item.color || ''}">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="cart-item-details">
                    <div class="cart-item-header">
                        <div>
                            <h3 class="cart-item-title">${product.name}</h3>
                            ${colorInfo}
                            <span class="product-category">${product.category}</span>
                        </div>
                        <p class="cart-item-price">${formatPrice(product.price)}</p>
                    </div>
                    <div class="cart-quantity">
                        <button class="quantity-btn" data-action="decr" data-id="${item.id}" data-color="${item.color || ''}">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" data-action="incr" data-id="${item.id}" data-color="${item.color || ''}">+</button>
                    </div>
                    <button class="remove-btn" data-action="remove" data-id="${item.id}" data-color="${item.color || ''}">
                        Remove
                    </button>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="cart-layout">
            <div class="cart-items-container">
                <h2>Cart Items (${cart.length})</h2>
                <div class="cart-items">${cartItemsHTML}</div>
            </div>
            <div class="cart-summary">
                <h2>Order Summary</h2>
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Charges</span>
                    <span>${formatPrice(deliveryCharges)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total</span>
                    <span>${formatPrice(total)}</span>
                </div>
                <a href="checkout.html" class="btn btn-primary checkout-btn">Proceed to checkout</a>
                <button class="btn btn-outline clear-cart-btn">Clear cart</button>
            </div>
        </div>
    `;
};

/**
 * Render order summary on checkout page - UPDATED: Removed tax, added delivery charges
 */
const renderOrderSummary = () => {
    const itemsEl = document.getElementById('order-summary-items');
    const subtotalEl = document.getElementById('order-subtotal');
    const deliveryEl = document.getElementById('order-delivery');
    const totalEl = document.getElementById('order-total');

    if (!itemsEl) return;

    if (cart.length === 0) {
        itemsEl.innerHTML = '<p class="empty-summary">No items in cart.</p>';
        if (subtotalEl) subtotalEl.textContent = formatPrice(0);
        if (deliveryEl) deliveryEl.textContent = formatPrice(0);
        if (totalEl) totalEl.textContent = formatPrice(0);
        return;
    }

    const { subtotal, deliveryCharges, total } = calculateCartTotals();

    const itemsHTML = cart.map(item => {
        const product = getProduct(item.id);
        if (!product) return '';
        const itemTotal = product.price * item.quantity;

        // Show color in order summary for products with colors (ID 8, 9, 10, 11, or 14)
        const colorText = ((item.id === 8 || item.id === 9 || item.id === 10 || item.id === 11 || item.id === 14) && item.color) ? ` (${item.color})` : '';

        return `
            <div class="summary-item">
                <span class="item-name">${product.name}${colorText} <span class="item-quantity">x${item.quantity}</span></span>
                <span class="item-price">${formatPrice(itemTotal)}</span>
            </div>
        `;
    }).join('');

    itemsEl.innerHTML = itemsHTML;

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (deliveryEl) deliveryEl.textContent = formatPrice(deliveryCharges);
    if (totalEl) totalEl.textContent = formatPrice(total);
};

// ======================================================================
// EVENT HANDLERS
// ======================================================================

/**
 * Global event delegation handler
 * @param {Event} e - Click event
 */
const handleDocumentClick = (e) => {
    // Add to cart button
    const addToCartBtn = e.target.closest('.add-to-cart-btn');
    if (addToCartBtn) {
        const productId = parseInt(addToCartBtn.dataset.id);
        addToCart(productId);
        e.preventDefault();
        return;
    }

    // Quantity buttons (cart page)
    const quantityBtn = e.target.closest('.quantity-btn');
    if (quantityBtn) {
        const productId = parseInt(quantityBtn.dataset.id);
        const color = quantityBtn.dataset.color || '';
        const cartItem = quantityBtn.closest('.cart-item');
        if (cartItem) {
            const qtySpan = cartItem.querySelector('.quantity');
            let currentQty = parseInt(qtySpan.textContent);

            if (quantityBtn.dataset.action === 'incr') {
                updateQuantity(productId, currentQty + 1, color);
            } else if (quantityBtn.dataset.action === 'decr') {
                updateQuantity(productId, currentQty - 1, color);
            }
        }
        e.preventDefault();
        return;
    }

    // Remove button
    const removeBtn = e.target.closest('.remove-btn');
    if (removeBtn) {
        const productId = parseInt(removeBtn.dataset.id);
        const color = removeBtn.dataset.color || '';
        removeFromCart(productId, color);
        e.preventDefault();
        return;
    }

    // Clear cart button
    const clearCartBtn = e.target.closest('.clear-cart-btn');
    if (clearCartBtn) {
        clearCart();
        e.preventDefault();
        return;
    }
};

/**
 * Smooth scroll to products section
 */
const scrollToProducts = () => {
    const productsSection = document.getElementById('shop-products-grid');
    if (productsSection) {
        // Small delay to allow rendering to complete
        setTimeout(() => {
            productsSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }, 100);
    }
};

/**
 * Initialize shop page filters with immediate update and smooth scroll
 */
const initShopFilters = () => {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchInput = document.getElementById('search-input');

    if (!categoryFilter) return;

    // Render category filter options first
    renderCategoryFilter();

    const updateFilters = () => {
        renderShopProducts(
            categoryFilter.value,
            priceFilter ? priceFilter.value : 'default',
            searchInput ? searchInput.value : ''
        );
        
        // ADDED: Smooth scroll to products on any filter change
        scrollToProducts();
    };

    // Immediate update on category change WITH SCROLL
    categoryFilter.addEventListener('change', updateFilters);

    if (priceFilter) {
        // ADDED: Smooth scroll on sort change
        priceFilter.addEventListener('change', updateFilters);
    }

    if (searchInput) {
        searchInput.addEventListener('input', debounce(updateFilters, 300));
    }

    // Also handle direct category links if they exist
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            if (categoryFilter) {
                categoryFilter.value = category;
                updateFilters();
                
                // Scroll to products section smoothly
                scrollToProducts();
            }
        });
    });

    // FIXED: Call renderShopProducts on initial load to show all products
    // This ensures products show up immediately when page loads
    renderShopProducts('all', 'default', '');
};

/**
 * Initialize checkout form with validation and order processing
 */
const initCheckoutForm = () => {
    const checkoutForm = document.getElementById('checkout-form');
    if (!checkoutForm) return;

    // Check if cart is empty
    if (cart.length === 0) {
        const submitBtn = checkoutForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.title = 'Your cart is empty';
        }
    }

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form
        const required = checkoutForm.querySelectorAll('[required]');
        let isValid = true;
        const formData = {};

        required.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
                // Use field.name or fallback to id, then store with proper key
                const fieldName = field.name || field.id;
                formData[fieldName] = field.value.trim();
            }
        });

        // Email validation
        const email = checkoutForm.querySelector('input[type="email"]');
        if (email && email.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                email.classList.add('error');
                isValid = false;
                showToast('Please enter a valid email', 'error');
            } else {
                formData.email = email.value;
            }
        }

        // Phone validation (Pakistani format)
        const phone = checkoutForm.querySelector('input[type="tel"], input[name="phone"]');
        if (phone && phone.value) {
            const phonePattern = /^((\+92)|(03))[0-9]{9}$/;
            if (!phonePattern.test(phone.value.replace(/\s/g, ''))) {
                phone.classList.add('error');
                isValid = false;
                showToast('Please enter a valid Pakistani phone number (e.g., 0322XXXXXXX)', 'error');
            } else {
                formData.phone = phone.value;
            }
        }

        // Check if cart is empty
        if (cart.length === 0) {
            showToast('Your cart is empty', 'error');
            isValid = false;
        }

        if (isValid) {
            // Process the order with success popup and WhatsApp notification
            processOrder(formData);
            
            // Clear form
            checkoutForm.reset();
        } else {
            showToast('Please fill all required fields correctly', 'error');
        }
    });

    // Remove error class on input
    checkoutForm.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('error');
        });
    });
};

/**
 * Initialize contact form
 */
const initContactForm = () => {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        const name = contactForm.querySelector('input[placeholder*="name" i]');
        const email = contactForm.querySelector('input[type="email"]');
        const message = contactForm.querySelector('textarea');

        if (name && email && message) {
            if (name.value.trim() && email.value.trim() && message.value.trim()) {
                showToast('Message sent successfully!', 'success');
                contactForm.reset();
            } else {
                showToast('Please fill all fields', 'error');
            }
        }
    });
};

/**
 * Initialize newsletter form
 */
const initNewsletterForm = () => {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]');
        if (email && email.value) {
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailPattern.test(email.value)) {
                showToast('Subscribed successfully!', 'success');
                email.value = '';
            } else {
                showToast('Please enter a valid email', 'error');
            }
        }
    });
};

/**
 * Set active navigation state based on current page
 */
const setActiveNavState = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');

        if (href === currentPage) {
            link.classList.add('active');
        }

        // Special case for index
        if (currentPage === 'index.html' && href === 'index.html') {
            link.classList.add('active');
        }
    });
};

// ======================================================================
// INITIALIZATION
// ======================================================================

/**
 * Main initialization function
 */
const initApp = () => {
    // Global click listener (event delegation)
    document.addEventListener('click', handleDocumentClick);

    // Initialize mobile menu
    initMobileMenu();

    // Set active navigation state
    setActiveNavState();

    // Render page-specific content
    renderFeaturedProducts();
    renderProductDetail();
    renderCartPage();
    renderOrderSummary();
    renderRecentlyViewed();

    // Update cart count
    updateCartCount();

    // Initialize page-specific features
    initShopFilters();  // This now calls renderShopProducts internally
    initCheckoutForm();
    initContactForm();
    initNewsletterForm();
};

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

// Handle page navigation with History API
window.addEventListener('popstate', () => {
    renderProductDetail();
    renderRecentlyViewed();
    setActiveNavState();
});

// ======================================================================
// EXPOSE GLOBAL FUNCTIONS (for inline handlers if needed)
// ======================================================================
window.addToCartHandler = addToCart;
window.essence = {
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    getProduct,
    formatPrice,
    products,
    filterByCategory: (category) => {
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.value = category;
            renderShopProducts(category, 
                document.getElementById('price-filter')?.value || 'default',
                document.getElementById('search-input')?.value || ''
            );
            // ADDED: Smooth scroll on category filter
            const productsSection = document.getElementById('shop-products-grid');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
};