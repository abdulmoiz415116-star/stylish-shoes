/**
 * Stylish Shoes & Bags - Luxury Delivery Invoice & Packing Slip Printer
 * Generates an official print-ready receipt / packing invoice with auto-print & PDF save.
 */

export const printOrderInvoice = (order) => {
  if (!order) return;

  const printWindow = window.open('', '_blank', 'width=850,height=950');
  
  const subtotal = order.subtotal || order.total || 0;
  const discount = order.discount || 0;
  const shippingFee = order.shippingFee !== undefined ? order.shippingFee : 0;
  const total = order.total || 0;

  const itemsHtml = (order.items || [])
    .map(
      (item, idx) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: center; font-weight: bold; color: #6b7280;">${idx + 1}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
          <div style="font-weight: 800; color: #111827; font-size: 13px;">${item.product?.title || 'Product'}</div>
          <div style="font-size: 11px; color: #6b7280; margin-top: 3px;">
            Size: <strong style="color: #111827;">${item.selectedSize || 'N/A'}</strong> &nbsp;|&nbsp; Color: <strong style="color: #111827;">${item.selectedColor || 'Standard'}</strong>
          </div>
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: center; font-weight: 800; font-size: 13px;">${item.quantity}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600; color: #4b5563;">Rs. ${(item.product?.price || 0).toLocaleString()}</td>
        <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 900; color: #111827;">Rs. ${((item.product?.price || 0) * item.quantity).toLocaleString()}</td>
      </tr>
    `
    )
    .join('');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Invoice - ${order.orderId} - Stylish Shoes & Bags</title>
        <style>
          @page { size: A4; margin: 12mm; }
          * { box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #1f2937;
            margin: 0;
            padding: 24px;
            background: #f9fafb;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .invoice-box {
            max-width: 780px;
            margin: auto;
            border: 1px solid #e5e7eb;
            border-radius: 20px;
            padding: 32px;
            background: #ffffff;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2px solid #db2777;
            padding-bottom: 20px;
            margin-bottom: 24px;
          }
          .brand-title {
            font-size: 24px;
            font-weight: 900;
            letter-spacing: -0.5px;
            color: #000;
            text-transform: uppercase;
            margin: 0;
          }
          .brand-tagline {
            font-size: 11px;
            font-weight: 800;
            color: #db2777;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-top: 4px;
          }
          .brand-contact {
            font-size: 11px;
            color: #4b5563;
            margin-top: 4px;
          }
          .invoice-badge {
            text-align: right;
          }
          .invoice-number {
            font-size: 20px;
            font-weight: 900;
            color: #db2777;
            letter-spacing: 0.5px;
          }
          .invoice-date {
            font-size: 12px;
            color: #6b7280;
            margin-top: 2px;
          }
          .status-tag {
            margin-top: 6px;
            display: inline-block;
            background: #dcfce7;
            color: #166534;
            font-size: 10px;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border: 1px solid #bbf7d0;
          }
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            background: #fdf2f8;
            padding: 18px 20px;
            border-radius: 14px;
            margin-bottom: 24px;
            border: 1px solid #fbcfe8;
          }
          .info-section h4 {
            margin: 0 0 8px 0;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #9d174d;
          }
          .info-section p {
            margin: 4px 0;
            font-size: 12px;
            color: #374151;
            line-height: 1.4;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
          }
          th {
            background: #111827;
            color: #fff;
            padding: 11px 10px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 800;
          }
          .totals-container {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 28px;
          }
          .totals-table {
            width: 320px;
            border-collapse: collapse;
          }
          .totals-table td {
            padding: 6px 12px;
            font-size: 13px;
          }
          .total-highlight {
            background: #111827 !important;
            border-radius: 10px;
          }
          .total-highlight td {
            color: #facc15 !important;
            font-size: 16px !important;
            font-weight: 900 !important;
            padding: 12px !important;
          }
          .footer {
            border-top: 1px dashed #d1d5db;
            padding-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 11px;
            color: #6b7280;
            line-height: 1.5;
          }
          .courier-stamp {
            border: 2px dashed #db2777;
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 10px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #9d174d;
            background: #fff;
            text-align: center;
          }
          .print-toolbar {
            text-align: center;
            margin-bottom: 18px;
          }
          .print-btn {
            background: #111827;
            color: #ffffff;
            border: none;
            padding: 11px 24px;
            border-radius: 12px;
            font-weight: 800;
            cursor: pointer;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.18);
            margin: 0 6px;
            transition: all 0.2s;
          }
          .print-btn:hover {
            background: #db2777;
            transform: translateY(-1px);
          }
          @media print {
            body { padding: 0; background: #fff; }
            .invoice-box { border: none; box-shadow: none; padding: 10px; max-width: 100%; }
            .no-print { display: none !important; }
          }
        </style>
      </head>
      <body>
        <div class="print-toolbar no-print">
          <button onclick="window.print()" class="print-btn">
            🖨️ Print Receipt / Save as PDF
          </button>
          <button onclick="window.close()" class="print-btn" style="background: #e5e7eb; color: #374151;">
            ✕ Close Window
          </button>
        </div>

        <div class="invoice-box">
          <div class="header">
            <div>
              <h1 class="brand-title">Stylish Shoes & Bags</h1>
              <div class="brand-tagline">Step Into Style • Official Delivery Invoice</div>
              <div class="brand-contact">
                Helpline & WhatsApp: <strong>+92 325 5964412</strong> &bull; Web: <strong>stylish-shoes.vercel.app</strong>
              </div>
            </div>
            <div class="invoice-badge">
              <div style="font-size: 10px; font-weight: 800; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">DELIVERY & PACKING SLIP</div>
              <div class="invoice-number">${order.orderId}</div>
              <div class="invoice-date">Date: ${order.date || 'Recent'}</div>
              <div class="status-tag">
                ${order.paymentMethod === 'jazzcash' ? 'JAZZCASH / ONLINE' : 'CASH ON DELIVERY (COD)'}
              </div>
            </div>
          </div>

          <div class="info-grid">
            <div class="info-section">
              <h4>Deliver To (Customer Details):</h4>
              <p><strong>Customer Name:</strong> ${order.customer?.fullName || 'Valued Customer'}</p>
              <p><strong>Contact Phone:</strong> ${order.customer?.phone || 'N/A'}</p>
              <p><strong>Delivery Address:</strong> ${order.customer?.address || 'N/A'}</p>
              <p><strong>City / Area:</strong> ${order.customer?.city || 'Pakistan'}</p>
            </div>
            <div class="info-section">
              <h4>Order & Dispatch Status:</h4>
              <p><strong>Order Tracking ID:</strong> ${order.orderId}</p>
              <p><strong>Payment Type:</strong> ${order.paymentMethod === 'jazzcash' ? 'JazzCash Transfer' : 'Cash On Delivery'}</p>
              ${order.jazzcashTid ? `<p><strong>JazzCash Ref / TID:</strong> ${order.jazzcashTid}</p>` : ''}
              <p><strong>Order Status:</strong> <strong>${order.status || 'Confirmed'}</strong></p>
              <p><strong>Courier Service:</strong> Trax / Call Courier / Leopard COD</p>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 36px; text-align: center;">#</th>
                <th style="text-align: left;">Product Description</th>
                <th style="width: 50px; text-align: center;">Qty</th>
                <th style="width: 110px; text-align: right;">Unit Price</th>
                <th style="width: 120px; text-align: right;">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div class="totals-container">
            <table class="totals-table">
              <tr>
                <td style="color: #6b7280; font-weight: 600;">Subtotal:</td>
                <td style="text-align: right; font-weight: 700;">Rs. ${subtotal.toLocaleString()}</td>
              </tr>
              ${discount > 0 ? `
              <tr>
                <td style="color: #db2777; font-weight: 700;">Discount:</td>
                <td style="text-align: right; font-weight: 800; color: #db2777;">-Rs. ${discount.toLocaleString()}</td>
              </tr>` : ''}
              <tr>
                <td style="color: #6b7280; font-weight: 600;">Delivery / Shipping:</td>
                <td style="text-align: right; font-weight: 800; color: #16a34a;">${shippingFee === 0 ? 'FREE' : `Rs. ${shippingFee}`}</td>
              </tr>
              <tr class="total-highlight">
                <td style="font-weight: 900; color: #fff;">TOTAL PAYABLE:</td>
                <td style="text-align: right; font-weight: 900;">Rs. ${total.toLocaleString()}</td>
              </tr>
            </table>
          </div>

          <div class="footer">
            <div>
              <strong>7-Day Replacement Policy:</strong> In case of size exchange or claim, contact helpline.<br>
              Thank you for shopping with <strong>Stylish Shoes & Bags</strong>! Step Into Style.
            </div>
            <div class="courier-stamp">
              Verified &amp; Sealed<br>
              <span style="font-size: 9px; font-weight: 600; color: #6b7280;">Official Packing Slip</span>
            </div>
          </div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 350);
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
    // Popup fallback using iframe
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

// Also attach globally to window for any component invocation
if (typeof window !== 'undefined') {
  window.printInvoice = printOrderInvoice;
  window.downloadPdfInvoice = printOrderInvoice;
}
