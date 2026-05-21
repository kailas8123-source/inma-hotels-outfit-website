const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 1034 >>
stream
BT
/F1 28 Tf
72 720 Td
(INMA Hotels Outfit LLC) Tj
/F1 16 Tf
0 -34 Td
(Premium UAE Hotel Amenities & Linen Supply Catalog) Tj
/F1 11 Tf
0 -42 Td
(Branded Toiletries | Luxury Towels | Bedsheets | Guest Room Accessories) Tj
0 -18 Td
(Lobby Accessories | Hygiene Products | Same-Day or 48-Hour UAE Delivery) Tj
0 -44 Td
(Core Product Families:) Tj
0 -20 Td
(1. Branded Toiletries & Amenities: shampoo, conditioner, body wash, lotion and kits.) Tj
0 -18 Td
(2. Luxury Towels & Bath Linen: bath towels, hand towels, face towels and bath mats.) Tj
0 -18 Td
(3. Bedsheets & Room Linen: bedsheets, pillow covers, duvet support and premium textiles.) Tj
0 -18 Td
(4. Guest Room, Lobby & Hygiene: accessories, dispensers, consumables and replenishment.) Tj
0 -44 Td
(Procurement Workflow:) Tj
0 -20 Td
(Requirement Collection -> Product Matching -> Quotation -> UAE Delivery Timing -> Support.) Tj
0 -44 Td
(For hotel pricing, share item lists, quantities, UAE delivery location and timeline.) Tj
0 -20 Td
(Email: procurement@inmahotelsoutfit.ae | WhatsApp: +971 56 735 1095) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000241 00000 n 
0000001326 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
1396
%%EOF`;

export async function GET() {
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="inma-hotels-outfit-catalog.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
