/**
 * Stylish Shoes & Bags - Ultra-Luxury Delivery Invoice & Consignment Packing Slip
 * Professional A4 Receipt with Auto-Print & PDF Export
 */

const numberToWords = (num) => {
  if (!num || isNaN(num)) return 'Zero Rupees';
  const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  const convert = (n) => {
    if (n === 0) return '';
    if (n < 20) return a[n] + ' ';
    if (n < 100) return b[Math.floor(n / 10)] + ' ' + a[n % 10] + ' ';
    if (n < 1000) return a[Math.floor(n / 100)] + ' Hundred ' + convert(n % 100);
    if (n < 100000) return convert(Math.floor(n / 1000)) + 'Thousand ' + convert(n % 1000);
    if (n < 10000000) return convert(Math.floor(n / 100000)) + 'Lakh ' + convert(n % 100000);
    return convert(Math.floor(n / 10000000)) + 'Crore ' + convert(n % 10000000);
  };

  const words = convert(Math.round(num)).trim();
  return words ? words + ' Rupees Only' : 'Zero Rupees';
};

const generateBarcodeSvg = (code) => {
  const cleanCode = (code || 'STYL-837293').toUpperCase();
  const bars = [];
  let x = 8;
  bars.push(`<rect x="${x}" y="0" width="2" height="34" fill="#0f172a"/>`);
  x += 3;
  bars.push(`<rect x="${x}" y="0" width="1" height="34" fill="#0f172a"/>`);
  x += 3;

  for (let i = 0; i < cleanCode.length; i++) {
    const charCode = cleanCode.charCodeAt(i);
    const pattern = [(charCode % 3) + 1, ((charCode >> 1) % 2) + 1, ((charCode >> 2) % 3) + 1, 1];
    pattern.forEach((w, idx) => {
      if (idx % 2 === 0) {
        bars.push(`<rect x="${x}" y="0" width="${w * 1.6}" height="34" fill="#0f172a"/>`);
      }
      x += (w * 1.6) + 1.8;
    });
  }

  bars.push(`<rect x="${x}" y="0" width="2" height="34" fill="#0f172a"/>`);
  x += 3;
  bars.push(`<rect x="${x}" y="0" width="1" height="34" fill="#0f172a"/>`);
  x += 8;

  return `<svg width="${x}" height="34" viewBox="0 0 ${x} 34" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:auto;">${bars.join('')}</svg>`;
};

export const printOrderInvoice = (order) => {
  if (!order) return;

  const orderId = order.orderId || `STYL-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = order.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const subtotal = order.subtotal || order.total || 0;
  const discount = order.discount || 0;
  const shippingFee = order.shippingFee !== undefined ? order.shippingFee : 0;
  const total = order.total || 0;
  const isCOD = (order.paymentMethod || '').toLowerCase() !== 'jazzcash';
  const customer = order.customer || {};
  const customerName = customer.fullName || customer.name || 'Valued Customer';
  const customerPhone = customer.phone || 'N/A';
  const customerAddress = customer.address || 'N/A';
  const customerCity = customer.city || 'Pakistan';
  const totalQty = (order.items || []).reduce((acc, it) => acc + (it.quantity || 1), 0);

  const itemsList = order.items || [];
  const itemsHtml = itemsList
    .map((item, idx) => {
      const title = item.product?.title || item.title || 'Luxury Footwear Item';
      const price = item.product?.price || item.price || 0;
      const image = item.product?.image || item.image || item.product?.images?.[0] || '';
      const size = item.selectedSize || item.size || 'Standard';
      const color = item.selectedColor || item.color || 'Standard';
      const qty = item.quantity || 1;
      const lineTotal = price * qty;

      return `
      <tr class="item-row ${idx % 2 === 1 ? 'row-alt' : ''}">
        <td class="col-idx">${idx + 1}</td>
        <td class="col-product">
          <div class="product-cell">
            ${
              image
                ? `<img src="${image}" alt="${title}" class="prod-thumb" onerror="this.style.display='none'" />`
                : `<div class="prod-thumb-placeholder">👠</div>`
            }
            <div class="prod-details">
              <div class="prod-title">${title}</div>
              <div class="prod-specs">
                <span class="spec-pill"><strong>Size:</strong> ${size}</span>
                <span class="spec-pill"><strong>Color:</strong> ${color}</span>
                <span class="spec-pill code">SKU: SS-${size}-${color.substring(0, 3).toUpperCase()}</span>
              </div>
            </div>
          </div>
        </td>
        <td class="col-qty"><span class="qty-badge">${qty}</span></td>
        <td class="col-price">Rs. ${price.toLocaleString()}</td>
        <td class="col-total">Rs. ${lineTotal.toLocaleString()}</td>
      </tr>
    `;
    })
    .join('');

  const barcodeSvg = generateBarcodeSvg(orderId);
  const amountInWords = numberToWords(total);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Official Invoice - ${orderId} - Stylish Shoes & Bags</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4 portrait;
            margin: 10mm 12mm 10mm 12mm;
          }
          * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #0f172a;
            margin: 0;
            padding: 24px 16px;
            background: #f1f5f9;
            font-size: 12px;
            line-height: 1.4;
          }

          /* Interactive Print Toolbar (Hidden on print) */
          .screen-toolbar {
            max-width: 820px;
            margin: 0 auto 16px auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #09090b;
            padding: 12px 20px;
            border-radius: 16px;
            box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
            border: 1px solid #27272a;
          }
          .toolbar-brand {
            color: #fff;
            font-weight: 800;
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 8px;
            letter-spacing: 0.5px;
          }
          .toolbar-brand span {
            color: #f43f5e;
          }
          .toolbar-actions {
            display: flex;
            gap: 10px;
          }
          .btn-print {
            background: linear-gradient(135deg, #be185d 0%, #db2777 100%);
            color: #ffffff;
            border: none;
            padding: 9px 20px;
            border-radius: 10px;
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.5px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(219, 39, 119, 0.35);
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
          }
          .btn-print:hover {
            opacity: 0.92;
            transform: translateY(-1px);
          }
          .btn-close {
            background: #27272a;
            color: #e4e4e7;
            border: 1px solid #3f3f46;
            padding: 9px 16px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .btn-close:hover {
            background: #3f3f46;
            color: #fff;
          }

          /* Document Canvas */
          .invoice-canvas {
            max-width: 820px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            padding: 36px 40px;
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.07);
            position: relative;
            overflow: hidden;
          }

          /* Luxury Decorative Top Bar */
          .luxury-top-strip {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #be185d 0%, #db2777 35%, #f59e0b 70%, #09090b 100%);
          }

          /* Header Section */
          .header-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 1.5px solid #f1f5f9;
            padding-bottom: 22px;
            margin-bottom: 20px;
          }
          .brand-col {
            max-width: 440px;
          }
          .brand-badge {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: #0f172a;
            color: #f8fafc;
            padding: 3px 10px;
            border-radius: 6px;
            font-size: 9.5px;
            font-weight: 800;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            margin-bottom: 8px;
          }
          .brand-badge .dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #f43f5e;
          }
          .brand-logo-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 28px;
            font-weight: 900;
            color: #09090b;
            letter-spacing: -0.5px;
            margin: 0 0 4px 0;
            line-height: 1.15;
            text-transform: uppercase;
          }
          .brand-logo-title span {
            color: #db2777;
          }
          .brand-subtext {
            font-size: 11px;
            font-weight: 700;
            color: #64748b;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 6px;
          }
          .brand-meta {
            font-size: 11px;
            color: #475569;
            line-height: 1.5;
          }
          .brand-meta strong {
            color: #0f172a;
          }

          /* Invoice Number & Barcode Block */
          .doc-id-col {
            text-align: right;
          }
          .invoice-pill-title {
            font-size: 10px;
            font-weight: 900;
            color: #db2777;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 4px;
          }
          .invoice-main-number {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 24px;
            font-weight: 900;
            color: #09090b;
            letter-spacing: 0.5px;
            line-height: 1.1;
          }
          .invoice-date-text {
            font-size: 11.5px;
            color: #64748b;
            font-weight: 600;
            margin-top: 4px;
          }
          .barcode-wrapper {
            margin-top: 10px;
            padding: 6px 10px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            display: inline-block;
            text-align: center;
          }
          .barcode-label {
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 1.8px;
            color: #475569;
            margin-top: 2px;
            font-family: monospace;
          }

          /* Payment COD / Pre-Paid Luxury Banner */
          .cod-banner {
            background: ${isCOD ? 'linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)' : 'linear-gradient(135deg, #064e3b 0%, #047857 100%)'};
            color: #ffffff;
            border-radius: 14px;
            padding: 14px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 22px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          }
          .cod-info-left {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .cod-icon-circle {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            background: ${isCOD ? 'rgba(244, 63, 94, 0.2)' : 'rgba(16, 185, 129, 0.2)'};
            border: 1px solid ${isCOD ? '#f43f5e' : '#10b981'};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
          }
          .cod-title-main {
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.8px;
            text-transform: uppercase;
          }
          .cod-subtitle {
            font-size: 11px;
            opacity: 0.85;
            margin-top: 1px;
          }
          .cod-amount-box {
            text-align: right;
            background: rgba(255, 255, 255, 0.1);
            padding: 6px 14px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
          }
          .cod-amount-label {
            font-size: 9.5px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: ${isCOD ? '#fbbf24' : '#a7f3d0'};
            font-weight: 800;
          }
          .cod-amount-value {
            font-size: 18px;
            font-weight: 900;
            color: #ffffff;
            letter-spacing: -0.3px;
          }

          /* Two Column Destination & Shipper Information Grid */
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 24px;
          }
          .info-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 16px 18px;
          }
          .info-card-header {
            font-size: 10px;
            font-weight: 900;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            color: #db2777;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 8px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .info-card-header .tag {
            background: #fff;
            border: 1px solid #cbd5e1;
            color: #475569;
            padding: 2px 7px;
            border-radius: 6px;
            font-size: 9px;
          }
          .recipient-name {
            font-size: 15px;
            font-weight: 900;
            color: #09090b;
            margin-bottom: 4px;
          }
          .info-row {
            font-size: 11.5px;
            color: #334155;
            margin-bottom: 4px;
            line-height: 1.45;
          }
          .info-row strong {
            color: #0f172a;
          }
          .highlight-phone {
            color: #0f172a;
            font-weight: 800;
            background: #fef08a;
            padding: 2px 6px;
            border-radius: 5px;
            display: inline-block;
          }

          /* Items Table */
          .table-container {
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            overflow: hidden;
            margin-bottom: 22px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          thead th {
            background: #0f172a;
            color: #ffffff;
            font-size: 10.5px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding: 11px 14px;
            border: none;
          }
          .col-idx {
            width: 36px;
            text-align: center;
            color: #94a3b8;
            font-weight: 800;
            font-size: 11px;
          }
          .col-product {
            text-align: left;
            padding: 12px 14px;
          }
          .col-qty {
            width: 60px;
            text-align: center;
          }
          .col-price {
            width: 110px;
            text-align: right;
            font-weight: 600;
            color: #475569;
          }
          .col-total {
            width: 120px;
            text-align: right;
            font-weight: 800;
            color: #09090b;
            padding-right: 16px;
          }
          .item-row {
            border-bottom: 1px solid #f1f5f9;
          }
          .item-row:last-child {
            border-bottom: none;
          }
          .row-alt {
            background: #fdfafc;
          }
          .product-cell {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .prod-thumb {
            width: 48px;
            height: 48px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid #cbd5e1;
            background: #f8fafc;
            flex-shrink: 0;
          }
          .prod-thumb-placeholder {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            background: #fdf2f8;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            flex-shrink: 0;
          }
          .prod-details {
            min-width: 0;
          }
          .prod-title {
            font-size: 13px;
            font-weight: 800;
            color: #09090b;
            margin-bottom: 4px;
          }
          .prod-specs {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }
          .spec-pill {
            font-size: 10px;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            padding: 2px 7px;
            border-radius: 5px;
            color: #334155;
          }
          .spec-pill.code {
            background: #f1f5f9;
            color: #64748b;
            font-family: monospace;
          }
          .qty-badge {
            background: #0f172a;
            color: #fff;
            padding: 3px 9px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 900;
          }

          /* Financial Summary & Seal Box */
          .bottom-summary-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 24px;
          }
          .quality-seal-box {
            flex: 1;
            background: #faf5ff;
            border: 1px dashed #d8b4fe;
            border-radius: 14px;
            padding: 16px 18px;
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .seal-stamp {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            border: 2px dashed #9333ea;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex-shrink: 0;
            color: #7e22ce;
            box-shadow: 0 4px 10px rgba(147, 51, 234, 0.12);
          }
          .seal-stamp .star {
            font-size: 12px;
            color: #d97706;
          }
          .seal-stamp .seal-text {
            font-size: 7.5px;
            font-weight: 900;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            line-height: 1;
          }
          .seal-content h5 {
            margin: 0 0 4px 0;
            font-size: 11.5px;
            font-weight: 900;
            color: #581c87;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .seal-content p {
            margin: 0;
            font-size: 10.5px;
            color: #6b21a8;
            line-height: 1.4;
          }

          /* Calculations Table */
          .calc-table-wrapper {
            width: 330px;
            flex-shrink: 0;
          }
          .calc-table {
            width: 100%;
            border-collapse: collapse;
          }
          .calc-table td {
            padding: 6px 10px;
            font-size: 12px;
          }
          .calc-label {
            color: #64748b;
            font-weight: 600;
          }
          .calc-val {
            text-align: right;
            font-weight: 700;
            color: #0f172a;
          }
          .calc-val.discount {
            color: #e11d48;
            font-weight: 800;
          }
          .calc-val.free-ship {
            color: #059669;
            font-weight: 800;
          }
          .grand-total-row {
            background: #09090b !important;
            border-radius: 10px;
          }
          .grand-total-row td {
            padding: 12px 14px !important;
          }
          .grand-label {
            color: #ffffff !important;
            font-size: 13px !important;
            font-weight: 900 !important;
            letter-spacing: 0.5px;
          }
          .grand-val {
            color: #facc15 !important;
            font-size: 18px !important;
            font-weight: 900 !important;
            text-align: right;
            letter-spacing: -0.3px;
          }
          .amount-in-words {
            font-size: 10px;
            color: #64748b;
            text-align: right;
            font-style: italic;
            margin-top: 6px;
            padding-right: 4px;
          }

          /* Courier Tear-Off / Receiving Manifest Slip */
          .tear-off-divider {
            border-top: 2px dashed #cbd5e1;
            position: relative;
            margin: 24px 0 18px 0;
            text-align: center;
          }
          .tear-off-badge {
            position: absolute;
            top: -9px;
            left: 50%;
            transform: translateX(-50%);
            background: #ffffff;
            padding: 0 12px;
            font-size: 9px;
            font-weight: 800;
            color: #64748b;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .tear-off-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 16px;
            font-size: 10.5px;
            color: #475569;
            padding-top: 6px;
          }
          .sign-field {
            border-bottom: 1px solid #94a3b8;
            height: 26px;
            margin-top: 14px;
          }
          .sign-label {
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            color: #64748b;
            margin-top: 4px;
          }

          /* Footer Legal Notes */
          .invoice-footer-notes {
            margin-top: 16px;
            padding-top: 14px;
            border-top: 1px solid #f1f5f9;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 10px;
            color: #94a3b8;
          }
          .invoice-footer-notes strong {
            color: #475569;
          }

          /* Print Only Media Rules */
          @media print {
            body {
              background: #ffffff !important;
              padding: 0 !important;
            }
            .screen-toolbar {
              display: none !important;
            }
            .invoice-canvas {
              border: none !important;
              box-shadow: none !important;
              padding: 0 !important;
              max-width: 100% !important;
              border-radius: 0 !important;
            }
            .no-print {
              display: none !important;
            }
          }
        </style>
      </head>
      <body>
        <!-- Top Action Bar (Hidden when printed) -->
        <div class="screen-toolbar no-print">
          <div class="toolbar-brand">
            <span>👠</span> STYLISH SHOES & BAGS &bull; OFFICIAL INVOICE VIEWER
          </div>
          <div class="toolbar-actions">
            <button onclick="window.print()" class="btn-print">
              🖨️ Print Receipt / Save PDF
            </button>
            <button onclick="window.close()" class="btn-close">
              ✕ Close
            </button>
          </div>
        </div>

        <!-- Printable Document -->
        <div class="invoice-canvas">
          <div class="luxury-top-strip"></div>

          <!-- Top Brand & Consignment Header -->
          <div class="header-row">
            <div class="brand-col">
              <div class="brand-badge">
                <span class="dot"></span>
                <span>Luxury Footwear & Accessories &bull; Pakistan</span>
              </div>
              <h1 class="brand-logo-title">Stylish <span>Shoes</span> & Bags</h1>
              <div class="brand-subtext">Haute Couture Footwear & Leather Goods</div>
              <div class="brand-meta">
                Distribution Hub: <strong>Multan Commercial Logistics Center</strong><br>
                Official Helpline & WhatsApp: <strong>+92 325 5964412</strong><br>
                Online Boutique: <strong>stylish-shoes.vercel.app</strong>
              </div>
            </div>

            <div class="doc-id-col">
              <div class="invoice-pill-title">Official Packing Invoice</div>
              <div class="invoice-main-number">${orderId}</div>
              <div class="invoice-date-text">Booking Date: <strong>${orderDate}</strong></div>
              
              <div class="barcode-wrapper">
                ${barcodeSvg}
                <div class="barcode-label">${orderId}</div>
              </div>
            </div>
          </div>

          <!-- Prominent COD / Payment Status Banner -->
          <div class="cod-banner">
            <div class="cod-info-left">
              <div class="cod-icon-circle">
                ${isCOD ? '💵' : '💳'}
              </div>
              <div>
                <div class="cod-title-main">
                  ${isCOD ? 'Cash On Delivery (COD) Consignment' : 'Pre-Paid Order (Paid Online)'}
                </div>
                <div class="cod-subtitle">
                  ${
                    isCOD
                      ? 'Rider Note: Please collect exact cash before handing parcel to consignee.'
                      : `Pre-paid via JazzCash Transfer${order.jazzcashTid ? ` (TID: ${order.jazzcashTid})` : ''}. Do not collect cash.`
                  }
                </div>
              </div>
            </div>

            <div class="cod-amount-box">
              <div class="cod-amount-label">${isCOD ? 'Cash To Collect' : 'Total Paid'}</div>
              <div class="cod-amount-value">Rs. ${total.toLocaleString()}</div>
            </div>
          </div>

          <!-- Destination & Consignee Information -->
          <div class="info-grid">
            <div class="info-card">
              <div class="info-card-header">
                <span>📍 Consignee / Deliver To</span>
                <span class="tag">Destination</span>
              </div>
              <div class="recipient-name">${customerName}</div>
              <div class="info-row">
                <strong>Primary Phone:</strong> <span class="highlight-phone">${customerPhone}</span>
              </div>
              <div class="info-row">
                <strong>Delivery Address:</strong> ${customerAddress}
              </div>
              <div class="info-row">
                <strong>Destination City:</strong> <strong>${customerCity}</strong>, Pakistan
              </div>
              ${customer.notes ? `<div class="info-row" style="color: #be185d;"><strong>Delivery Note:</strong> ${customer.notes}</div>` : ''}
            </div>

            <div class="info-card">
              <div class="info-card-header">
                <span>📦 Consignment & Dispatch Info</span>
                <span class="tag">Logistics</span>
              </div>
              <div class="info-row">
                <strong>Tracking / AWB Number:</strong> <span style="font-family: monospace; font-weight: 800; color: #db2777;">${orderId}</span>
              </div>
              <div class="info-row">
                <strong>Total Items in Parcel:</strong> <strong>${totalQty} Pair(s) / Item(s)</strong>
              </div>
              <div class="info-row">
                <strong>Courier Partner:</strong> Trax Express / Leopard / TCS COD
              </div>
              <div class="info-row">
                <strong>Dispatch Status:</strong> <span style="color: #059669; font-weight: 800;">QC Passed & Dispatched</span>
              </div>
              <div class="info-row">
                <strong>Shipper Helpline:</strong> +92 325 5964412
              </div>
            </div>
          </div>

          <!-- Items Table -->
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th class="col-idx">#</th>
                  <th class="col-product">Product Description & Specifications</th>
                  <th class="col-qty">Qty</th>
                  <th class="col-price">Unit Price</th>
                  <th class="col-total">Line Total</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
          </div>

          <!-- Financial Calculation & Official Seal -->
          <div class="bottom-summary-row">
            <div class="quality-seal-box">
              <div class="seal-stamp">
                <span class="star">★ ★ ★</span>
                <span class="seal-text">VERIFIED<br>QUALITY<br>SEALED</span>
              </div>
              <div class="seal-content">
                <h5>100% Quality Inspected Guarantee</h5>
                <p>
                  Every shoe is hand-inspected for stitching, leather quality, and exact sizing before dispatch.<br>
                  <strong>7-Day Replacement Policy:</strong> Size issue? Contact our WhatsApp helpline with this slip.
                </p>
              </div>
            </div>

            <div class="calc-table-wrapper">
              <table class="calc-table">
                <tr>
                  <td class="calc-label">Items Subtotal:</td>
                  <td class="calc-val">Rs. ${subtotal.toLocaleString()}</td>
                </tr>
                ${
                  discount > 0
                    ? `
                <tr>
                  <td class="calc-label">Voucher Discount:</td>
                  <td class="calc-val discount">- Rs. ${discount.toLocaleString()}</td>
                </tr>`
                    : ''
                }
                <tr>
                  <td class="calc-label">Courier Shipping:</td>
                  <td class="calc-val ${shippingFee === 0 ? 'free-ship' : ''}">
                    ${shippingFee === 0 ? 'FREE (Special Offer)' : `Rs. ${shippingFee}`}
                  </td>
                </tr>
                <tr class="grand-total-row">
                  <td class="grand-label">TOTAL AMOUNT:</td>
                  <td class="grand-val">Rs. ${total.toLocaleString()}</td>
                </tr>
              </table>
              <div class="amount-in-words">${amountInWords}</div>
            </div>
          </div>

          <!-- Tear-off Courier Delivery Slip -->
          <div class="tear-off-divider">
            <span class="tear-off-badge">✂ Courier Delivery Handover Slip</span>
          </div>
          <div class="tear-off-content">
            <div>
              <strong>Order ID:</strong> ${orderId} &bull; <strong>Consignee:</strong> ${customerName} (${customerCity})<br>
              <strong>Payment Due:</strong> <strong style="color: #0f172a;">${isCOD ? `Rs. ${total.toLocaleString()} (COD)` : 'PAID IN ADVANCE'}</strong>
            </div>
            <div>
              <div class="sign-field"></div>
              <div class="sign-label">Recipient Signature</div>
            </div>
            <div>
              <div class="sign-field"></div>
              <div class="sign-label">Rider Signature &amp; Date</div>
            </div>
          </div>

          <!-- Footer Metadata -->
          <div class="invoice-footer-notes">
            <div>
              Stylish Shoes & Bags &bull; Step Into Style &bull; Helpline: <strong>+92 325 5964412</strong>
            </div>
            <div>
              Computer Generated Tax Invoice &bull; Page 1 of 1
            </div>
          </div>
        </div>

        <script>
          // Automatic Print Trigger
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 400);
          };
        </script>
      </body>
    </html>
  `;

  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  } else {
    // Popup fallback using invisible iframe
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(html);
    iframe.contentWindow.document.close();
    setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }, 500);
  }
};

// Expose globally
if (typeof window !== 'undefined') {
  window.printInvoice = printOrderInvoice;
  window.downloadPdfInvoice = printOrderInvoice;
}
