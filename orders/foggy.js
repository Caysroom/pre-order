/* Foggy Collection order data (v2: one combined Google Form, weights per size).
   The back-office Sheet's "Publish to website" button rewrites this file. */
window.CAYS_ORDER = {
 "key": "foggy",
 "version": 2,
 "collection": "FOGGY COLLECTION",
 "period": "17 Oct 21:00 – 20 Oct 23:59 (Thai time) / 17 ต.ค. 21:00 – 20 ต.ค. 23:59 น.",
 "event": "LYKN REFLEXION CONCERT",
 "opens": "2026-10-17T14:00:00.000Z",
 "closes": "2026-10-20T16:59:00.000Z",
 "shipStart": "7 Nov 2026",
 "publishedAt": "15 Oct 2026",
 "maxQ": 5,
 "packaging": 50,
 "buffer": 40,
 "notice": [
  ["Pre-order: 17 Oct 21:00 – 20 Oct 23:59 (Thai time).", "พรีออเดอร์: 17 ต.ค. 21:00 – 20 ต.ค. 23:59 น."],
  ["Booth pickup at LYKN REFLEXION CONCERT, 23–25 Oct, 9:00–16:00.", "รับที่บูธ LYKN REFLEXION CONCERT 23–25 ต.ค. เวลา 9:00–16:00 น."],
  ["Delivery ships from 7 Nov 2026.", "เริ่มจัดส่ง 7 พ.ย. 2569"],
  ["You pay in the order form, on its payment page. The total is filled in for you. No changes or cancellations after you submit.", "ชำระเงินในหน้าชำระเงินของฟอร์ม ยอดรวมจะกรอกให้แล้ว ไม่สามารถแก้ไขหรือยกเลิกได้หลังส่งฟอร์ม"],
  ["Overseas parcels: up to 2 kg per order (USA up to 5 kg).", "พัสดุต่างประเทศ: ไม่เกิน 2 กก. ต่อออเดอร์ (อเมริกาไม่เกิน 5 กก.)"],
  ["Damaged or missing item? Film an unboxing video and contact CAYSROOM LINE OFFICIAL within 7 days.", "สินค้าชำรุด/ขาด: ถ่ายวิดีโอขณะเปิดพัสดุ และแจ้ง CAYSROOM LINE OFFICIAL ภายใน 7 วัน"]
 ],
 "products": [
  {
   "code": "LS",
   "name": "FOGGY LONG SLEEVE",
   "price": 1150,
   "sizeNote": "S chest 40\" length 24\" · M chest 44\" length 25\" · L chest 50\" length 27\"",
   "photo": "",
   "colors": ["Strawberry", "Grey", "Sunny"],
   "rows": [
    ["Strawberry - S", "Strawberry", "S"], ["Strawberry - M", "Strawberry", "M"], ["Strawberry - L", "Strawberry", "L"],
    ["Grey - S", "Grey", "S"], ["Grey - M", "Grey", "M"], ["Grey - L", "Grey", "L"],
    ["Sunny - S", "Sunny", "S"], ["Sunny - M", "Sunny", "M"], ["Sunny - L", "Sunny", "L"]
   ],
   "weights": { "S": 350, "M": 400, "L": 450 }
  },
  {
   "code": "BT",
   "name": "SAILING BABY TEE",
   "price": 750,
   "sizeNote": "S chest 33\" length 17\" · M chest 36\" length 18\" · L chest 40\" length 19\"",
   "photo": "",
   "colors": ["Day", "Night"],
   "rows": [
    ["Day - S", "Day", "S"], ["Day - M", "Day", "M"], ["Day - L", "Day", "L"],
    ["Night - S", "Night", "S"], ["Night - M", "Night", "M"], ["Night - L", "Night", "L"]
   ],
   "weights": { "S": 300, "M": 350, "L": 400 }
  },
  {
   "code": "OT",
   "name": "OVERSIZE TEE",
   "price": 1090,
   "sizeNote": "S chest 44\" length 29\" · M chest 48\" length 30\" · L chest 52\" length 31\"",
   "photo": "",
   "colors": ["Sea", "Sand"],
   "rows": [
    ["Sea - S", "Sea", "S"], ["Sea - M", "Sea", "M"], ["Sea - L", "Sea", "L"],
    ["Sand - S", "Sand", "S"], ["Sand - M", "Sand", "M"], ["Sand - L", "Sand", "L"]
   ],
   "weights": { "S": 500, "M": 550, "L": 600 }
  }
 ],
 "methods": [
  { "id": "PICKUP", "label": "Pick up at the booth (free) / รับที่บูธ (ฟรี)", "sub": "LYKN REFLEXION CONCERT · Fri 23, Sat 24, Sun 25 Oct · 9:00–16:00. Choose your day in the form." },
  { "id": "TH", "label": "Thai address (free) / ส่งในไทย (ฟรี)", "sub": "Door to door in Thailand · ships from 7 Nov" },
  { "id": "CARGO", "label": "My Thai cargo forwarder (free) / คาร์โก้ของฉัน (ฟรี)", "sub": "To your forwarder's warehouse in Thailand · ships from 7 Nov" },
  { "id": "INTL", "label": "International door-to-door / ส่งต่างประเทศ", "sub": "Fee by parcel weight and country · ships from 7 Nov" }
 ],
 "form": {
  "url": "https://docs.google.com/forms/d/e/1FAIpQLSdNZ2TCqdRapRPVkrEOYALxZNG6b4zVAx9l1wTZQeK3P-Ju_w/viewform",
  "open": true,
  "rows": {
   "LS": {
    "Strawberry - S": "entry.1250884974", "Strawberry - M": "entry.395466195", "Strawberry - L": "entry.1808123458",
    "Grey - S": "entry.466429423", "Grey - M": "entry.50846189", "Grey - L": "entry.507888972",
    "Sunny - S": "entry.918024581", "Sunny - M": "entry.152542474", "Sunny - L": "entry.1690815186"
   },
   "BT": {
    "Day - S": "entry.654414727", "Day - M": "entry.523019012", "Day - L": "entry.1791925453",
    "Night - S": "entry.1083494800", "Night - M": "entry.80540223", "Night - L": "entry.975202606"
   },
   "OT": {
    "Sea - S": "entry.818134032", "Sea - M": "entry.1177335865", "Sea - L": "entry.479357972",
    "Sand - S": "entry.967687514", "Sand - M": "entry.1967692765", "Sand - L": "entry.161819371"
   }
  },
  "ship": "entry.1152750563",
  "shipValues": {
   "PICKUP": "SELF-PICK UP / รับสินค้าด้วยตัวเอง",
   "DELIVERY": "DELIVERY (ships from 7 Nov) / จัดส่งถึงบ้าน เริ่มจัดส่ง 7 พ.ย."
  },
  "option": "entry.1936939119",
  "optionValues": {
   "TH": "OPTION 1 - Thai Domestic / ที่อยู่ในประเทศไทย",
   "CARGO": "OPTION 1 - Thai Domestic / ที่อยู่ในประเทศไทย",
   "INTL": "OPTION 2 - International Shipping / จัดส่งต่างประเทศ"
  },
  "country": "entry.1696074321",
  "fee": "entry.621758904",
  "amount": "entry.24180669"
 },
 "bank": "KASIKORNBANK · THADAN CO., LTD. · 216-1-38490-1",
 "qr": "",
 "line": "CAYSROOM LINE OFFICIAL",
 "sizeGuide": "",
 "popular": ["Japan", "South Korea", "Taiwan", "Hong Kong", "Singapore", "Philippines", "Indonesia", "Malaysia", "United States (Mainland)", "United Kingdom"],
 "stock": {},
 "lowStock": 5
};
