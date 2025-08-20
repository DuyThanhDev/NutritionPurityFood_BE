export interface Product {
  id: string;
  name: string;
  category: string;
  mainImage: string;
  images: string[];
  description: string;
  price: string;
  ingredients: string;
  appearance: string;
  taste: string;
  instructions: string[];
  isBest: boolean;
}

export const products: Product[] = [
  // Trà
  {
    id: "tra-001",
    name: "Trà Xanh Tân Long Hộp Giấy 100g",
    category: "Trà",
    mainImage: "/assets/tra-xanh-100g.jpg",
    images: [
      "/assets/tra-xanh-100g.jpg",
      "/assets/99x100x1-tra-xanh-125-2.jpg",
      "/assets/99x100x1-tach-tra-xanh.jpg.jpg"
    ],
    description: "Trà xanh Tân Long chất lượng cao được chế biến từ búp trà tươi ngon nhất.",
    price: "35,000 VNĐ",
    ingredients: "100% búp trà xanh một tôm hai lá",
    appearance: "Lá trà nhỏ, màu xanh đậm, đều đặn",
    taste: "Nước trà xanh trong, vị thanh đậm đà, hương thơm tự nhiên",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 8g - 10g trà vào ấm, tráng trà rồi đổ bỏ nước",
      "Chế 200ml - 250ml nước sôi vào ấm, đậy nắp đợi 2-3 phút",
      "Rót trà ra tách và thưởng thức"
    ],
    isBest: true
  },
  {
    id: "tra-002", 
    name: "Trà Oolong Tân Long Gold Class 320g",
    category: "Trà",
    mainImage: "/assets/olong-gold-320g.jpg",
    images: [
      "/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Oolong cao cấp với hương vị đặc trưng, có thể pha được nhiều lần.",
    price: "180,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: true
  },

  {
    id: "tra-003", 
    name: "Trà Oolong Tân Long Daily Class 100g",
    category: "Trà",
    mainImage: "/assets/olong-goi-100g-2022.jpg",
    images: [
      "/assets/olong-goi-100g-2022.jpg",
      "/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: true
  },

    {
    id: "tra-004", 
    name: "Trà Daily Oolong Tân Long Class 500g",
    category: "Trà",
    mainImage: "/assets/olong-gold-320g.jpg",
    images: [
      "/assets/olong-goi-100g-2022.jpg",
      "/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: false
  },

    {
    id: "tra-005", 
    name: "Trà Long Class Xanh Tân 100g",
    category: "Trà",
    mainImage: "/assets/olong-goi-100g-2022.jpg",
    images: [
      "/assets/olong-goi-100g-2022.jpg",
      "/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: false
  },

    {
    id: "tra-006", 
    name: "Trà Class Xanh Tân Class 100g",
    category: "Trà",
    mainImage: "/assets/olong-goi-100g-2022.jpg",
    images: [
      "/assets/olong-goi-100g-2022.jpg",
      "/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: false
  },

    {
    id: "tra-007", 
    name: "Trà Oolong Class Xanh Tân 100g",
    category: "Trà",
    mainImage: "/assets/olong-goi-100g-2022.jpg",
    images: [
      "/assets/olong-goi-100g-2022.jpg",
      "/assets/99x100x1-goi-100g-2002_hong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/olong-gold-320g.jpg"
    ],
    description: "Trà Ô Long Tân Long được tuyển chọn từ những búp trà Oolong non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế , đóng thánh phẩm đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề. Điện thoại mua hàng : 028.36008101 - 028.39225005 Hotline : 093.1062070",
    price: "69,000 VNĐ",
    ingredients: "100% búp trà Oolong một tôm 2 lá",
    appearance: "Viên tròn to, đều đặn, màu xanh đen bóng tuyệt đẹp",
    taste: "Nước trà xanh vàng trong suốt, vị thanh tao, nhẹ nhàng, hương thơm phảng phất, dễ chịu",
    instructions: [
      "Tráng ấm trà và tách trà bằng nước nóng",
      "Cho khoảng 10g – 12g trà vào ấm, sau đó cho ít nước sôi vào tráng trà rồi đổ bỏ nước",
      "Chế khoảng 250ml – 300ml nước sôi vào ấm trà, đậy nắp và đợi khoảng 2 – 3 phút",
      "Đổ 1 ít nước sôi bên ngoài ấm trà từ trên xuống để giữ độ nóng và hãm trà",
      "Rót trà ra tách và thưởng thức trà",
      "Trà Oolong Tân Long có thể pha được 4-5 nước vẫn còn hương vị"
    ],
    isBest: false
  },

  // Kimchi & Rau Chua
  {
    id: "kimchi-001",
    name: "Kimchi Hàn Quốc MR LEE",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/kimchi-mr-lee-main.jpg",
    images: [
      "/assets/products/kimchi-mr-lee-1.jpg",
      "/assets/products/kimchi-mr-lee-2.jpg",
      "/assets/products/kimchi-mr-lee-3.jpg",
      "/assets/products/kimchi-mr-lee-4.jpg",
      "/assets/products/kimchi-mr-lee-5.jpg"
    ],
    description: "Kimchi Hàn Quốc đậm đà hương vị truyền thống, chua cay vừa phải.",
    price: "45,000đ",
    ingredients: "Bắp cải, ớt đỏ Hàn Quốc, tỏi, gừng, nước mắm",
    appearance: "Màu đỏ cam đặc trưng, rau củ giòn tươi",
    taste: "Vị chua cay đặc trưng, thơm ngon, giòn ngọt",
    instructions: [
      "Bảo quản trong tủ lạnh",
      "Sử dụng đũa sạch khi lấy kimchi",
      "Có thể ăn trực tiếp hoặc chế biến món ăn"
    ],
    isBest: false
  },
  {
    id: "rau-chua-001",
    name: "Rau Củ Quả NGỌC PHÚ",
    category: "Kimchi, Rau Chua", 
    mainImage: "/assets/products/rau-chua-ngoc-phu-main.jpg",
    images: [
      "/assets/products/rau-chua-ngoc-phu-1.jpg",
      "/assets/products/rau-chua-ngoc-phu-2.jpg",
      "/assets/products/rau-chua-ngoc-phu-3.jpg"
    ],
    description: "Rau củ quả muối chua tươi ngon, giòn ngọt tự nhiên.",
    price: "25,000đ",
    ingredients: "Củ cải trắng, cà rốt, muối, đường, giấm",
    appearance: "Màu trắng, cam tự nhiên, thái miếng vừa ăn",
    taste: "Vị chua ngọt hài hòa, giòn tươi",
    instructions: [
      "Bảo quản nơi khô ráo, thoáng mát",
      "Sử dụng đũa sạch khi lấy",
      "Ngon nhất khi ăn cùng cơm"
    ],
    isBest: false
  },

  // Bánh Tráng
  {
    id: "banh-trang-001",
    name: "Bánh Tráng Kim's Đặc Biệt",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-kims-main.jpg",
    images: [
      "/assets/products/banh-trang-kims-1.jpg",
      "/assets/products/banh-trang-kims-2.jpg",
      "/assets/products/banh-trang-kims-3.jpg",
      "/assets/products/banh-trang-kims-4.jpg"
    ],
    description: "Bánh tráng giòn tan, thơm ngon được làm từ gạo tẻ cao cấp.",
    price: "15,000đ",
    ingredients: "Gạo tẻ, nước, muối",
    appearance: "Bánh tròn, mỏng, màu trắng đều",
    taste: "Giòn tan, thơm mùi gạo tự nhiên",
    instructions: [
      "Bảo quản nơi khô ráo",
      "Tránh ẩm ướt",
      "Có thể nướng trước khi ăn để giòn hơn"
    ],
    isBest: false
  },
  {
    id: "banh-trang-002",
    name: "Bánh Tráng Kim's Mè",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-me-main.jpg",
    images: [
      "/assets/products/banh-trang-me-1.jpg",
      "/assets/products/banh-trang-me-2.jpg",
      "/assets/products/banh-trang-me-3.jpg"
    ],
    description: "Bánh tráng mè thơm béo, giòn rụm với hương vị đặc trưng.",
    price: "18,000đ",
    ingredients: "Gạo tẻ, mè trắng, nước, muối",
    appearance: "Bánh tròn có rắc mè trắng, màu vàng nhạt",
    taste: "Giòn rụm, thơm béo mùi mè",
    instructions: [
      "Bảo quản nơi khô ráo, thoáng mát",
      "Tránh ánh nắng trực tiếp",
      "Nướng nhẹ trước khi ăn để tăng độ giòn"
    ],
    isBest: false
  },

  // Thêm sản phẩm Trà
  {
    id: "tra-008",
    name: "Trà Đen Tân Long Đặc Biệt 200g",
    category: "Trà",
    mainImage: "/assets/tra-xanh-100g.jpg",
    images: [
      "/assets/tra-xanh-100g.jpg",
      "/assets/99x100x1-tra-xanh-125-2.jpg"
    ],
    description: "Trà đen thượng hạng với hương vị đậm đà, thích hợp uống buổi sáng.",
    price: "85,000 VNĐ",
    ingredients: "100% búp trà đen một tôm hai lá",
    appearance: "Lá trà đen, khô ráo, đều đặn",
    taste: "Vị đậm đà, có chút đắng nhẹ, hương thơm nồng",
    instructions: [
      "Tráng ấm trà bằng nước nóng",
      "Cho 8g-10g trà vào ấm",
      "Chế nước sôi 100°C, đợi 3-4 phút",
      "Có thể uống với sữa hoặc đường"
    ],
    isBest: false
  },
  {
    id: "tra-009",
    name: "Trà Lài Tân Long Premium 150g",
    category: "Trà",
    mainImage: "/assets/olong-goi-100g-2022.jpg",
    images: [
      "/assets/olong-goi-100g-2022.jpg",
      "/assets/99x100x1-goi-100g-2002_hong.jpg"
    ],
    description: "Trà lài thơm ngát với hương hoa nhài tự nhiên, thanh mát dễ uống.",
    price: "120,000 VNĐ",
    ingredients: "Trà xanh, hoa nhài tươi",
    appearance: "Lá trà xanh có hạt nhài khô",
    taste: "Vị thanh ngọt, hương hoa nhài thơm dịu",
    instructions: [
      "Dùng nước 80°C pha trà",
      "Cho 6g-8g trà vào ấm",
      "Đợi 2-3 phút để trà thấm",
      "Uống nóng hoặc để nguội đều ngon"
    ],
    isBest: true
  },
  {
    id: "tra-010",
    name: "Trà Atiso Tân Long 100g",
    category: "Trà",
    mainImage: "/assets/olong-gold-320g.jpg",
    images: [
      "/assets/olong-gold-320g.jpg"
    ],
    description: "Trà atiso giúp thanh nhiệt, mát gan, tốt cho sức khỏe.",
    price: "65,000 VNĐ",
    ingredients: "100% lá atiso khô",
    appearance: "Lá atiso khô màu nâu, thái nhỏ",
    taste: "Vị hơi đắng, thanh mát, dễ uống",
    instructions: [
      "Cho 5g-7g trà vào tách",
      "Rót nước sôi vào",
      "Đợi 3-5 phút",
      "Có thể thêm mật ong"
    ],
    isBest: false
  },
  {
    id: "tra-011",
    name: "Trà Oolong Tân Long Special 250g",
    category: "Trà",
    mainImage: "/assets/99x100x1-tach-tra-olong.jpg",
    images: [
      "/assets/99x100x1-tach-tra-olong.jpg",
      "/assets/olong-goi-100g-2022.jpg"
    ],
    description: "Trà Oolong đặc biệt với quy trình sản xuất truyền thống, hương vị tinh tế.",
    price: "200,000 VNĐ",
    ingredients: "100% búp trà Oolong tuyển chọn",
    appearance: "Viên tròn to, màu xanh đậm",
    taste: "Vị ngọt thanh, hương thơm lâu",
    instructions: [
      "Tráng ấm trà bằng nước nóng",
      "Cho 10g-12g trà vào ấm",
      "Chế nước 95°C, đợi 2-3 phút",
      "Có thể pha 5-6 lần"
    ],
    isBest: true
  },
  {
    id: "tra-012",
    name: "Trà Xanh Tân Long Hộp Thiếc 200g",
    category: "Trà",
    mainImage: "/assets/99x100x1-tra-xanh-125-2.jpg",
    images: [
      "/assets/99x100x1-tra-xanh-125-2.jpg",
      "/assets/tra-xanh-100g.jpg"
    ],
    description: "Trà xanh cao cấp đóng hộp thiếc sang trọng, bảo quản tốt hương vị.",
    price: "150,000 VNĐ",
    ingredients: "100% búp trà xanh tuyển chọn",
    appearance: "Lá trà xanh tươi, đều đặn",
    taste: "Vị thanh đậm đà, hương tự nhiên",
    instructions: [
      "Dùng nước 75-80°C",
      "Cho 8g trà vào ấm",
      "Đợi 2-3 phút",
      "Rót ra tách và thưởng thức"
    ],
    isBest: false
  },

  // Thêm sản phẩm Kimchi, Rau Chua
  {
    id: "kimchi-002",
    name: "Kimchi Cải Thảo MR LEE Cay Nồng",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/kimchi-mr-lee-main.jpg",
    images: [
      "/assets/products/kimchi-mr-lee-1.jpg",
      "/assets/products/kimchi-mr-lee-2.jpg"
    ],
    description: "Kimchi cải thảo cay nồng đậm đà, phù hợp với khẩu vị Việt Nam.",
    price: "55,000đ",
    ingredients: "Cải thảo, ớt Hàn Quốc, tỏi, gừng, nước mắm, muối",
    appearance: "Màu đỏ cam đậm, rau củ tươi giòn",
    taste: "Vị cay nồng đặc trưng, chua ngọt hài hòa",
    instructions: [
      "Bảo quản trong tủ lạnh 2-8°C",
      "Dùng đũa sạch khi lấy",
      "Ngon nhất sau 3-5 ngày"
    ],
    isBest: false
  },
  {
    id: "kimchi-003",
    name: "Kimchi Củ Cải Trắng MR LEE",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/kimchi-mr-lee-3.jpg",
    images: [
      "/assets/products/kimchi-mr-lee-3.jpg",
      "/assets/products/kimchi-mr-lee-4.jpg"
    ],
    description: "Kimchi củ cải trắng giòn ngọt, ít cay, phù hợp cho cả gia đình.",
    price: "48,000đ",
    ingredients: "Củ cải trắng, ớt đỏ, tỏi, gừng",
    appearance: "Củ cải trắng thái múi, màu đỏ nhạt",
    taste: "Vị chua ngọt, ít cay, giòn tươi",
    instructions: [
      "Bảo quản lạnh dưới 8°C",
      "Sử dụng trong vòng 2 tuần",
      "Có thể ăn kèm cơm hoặc làm gỏi"
    ],
    isBest: true
  },
  {
    id: "rau-chua-002",
    name: "Dưa Chua NGỌC PHÚ Truyền Thống",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/rau-chua-ngoc-phu-main.jpg",
    images: [
      "/assets/products/rau-chua-ngoc-phu-1.jpg",
      "/assets/products/rau-chua-ngoc-phu-2.jpg"
    ],
    description: "Dưa chua làm theo công thức truyền thống, vị chua ngọt chuẩn.",
    price: "30,000đ",
    ingredients: "Dưa chuột, muối, đường, giấm gạo",
    appearance: "Dưa chuột thái lát, màu vàng nhạt",
    taste: "Vị chua ngọt đặc trưng, giòn tươi",
    instructions: [
      "Bảo quản nơi khô mát",
      "Đậy kín sau khi sử dụng",
      "Dùng đũa khô khi lấy"
    ],
    isBest: false
  },
  {
    id: "rau-chua-003",
    name: "Củ Kiệu Muối Chua NGỌC PHÚ",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/rau-chua-ngoc-phu-3.jpg",
    images: [
      "/assets/products/rau-chua-ngoc-phu-3.jpg",
      "/assets/products/rau-chua-ngoc-phu-2.jpg"
    ],
    description: "Củ kiệu muối chua giòn ngọt, ăn kèm phở và bún bò rất ngon.",
    price: "35,000đ",
    ingredients: "Củ kiệu, muối, đường, giấm",
    appearance: "Củ kiệu thái sợi, màu trắng trong",
    taste: "Vị chua nhẹ, ngọt tự nhiên, giòn tan",
    instructions: [
      "Bảo quản trong tủ lạnh",
      "Ăn trong vòng 1 tuần",
      "Ngon nhất khi ăn kèm món nước"
    ],
    isBest: false
  },
  {
    id: "rau-chua-004",
    name: "Cà Rót Muối Chua NGỌC PHÚ",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/rau-chua-ngoc-phu-1.jpg",
    images: [
      "/assets/products/rau-chua-ngoc-phu-1.jpg",
      "/assets/products/rau-chua-ngoc-phu-main.jpg"
    ],
    description: "Cà rốt muối chua ngọt ngào, giàu vitamin, tốt cho sức khỏe.",
    price: "28,000đ",
    ingredients: "Cà rốt, muối biển, đường mía",
    appearance: "Cà rốt thái miếng, màu cam tươi",
    taste: "Vị ngọt tự nhiên, chua nhẹ",
    instructions: [
      "Bảo quản nơi thoáng mát",
      "Sử dụng thìa sạch",
      "Có thể ăn trực tiếp"
    ],
    isBest: true
  },

  // Thêm sản phẩm Bánh Tráng
  {
    id: "banh-trang-003",
    name: "Bánh Tráng Kim's Nướng Tỏi Ớt",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-kims-main.jpg",
    images: [
      "/assets/products/banh-trang-kims-1.jpg",
      "/assets/products/banh-trang-kims-2.jpg"
    ],
    description: "Bánh tráng nướng tỏi ớt thơm nồng, cay đậm đà, ăn là ghiền.",
    price: "22,000đ",
    ingredients: "Gạo tẻ, tỏi, ớt, muối, dầu thực vật",
    appearance: "Bánh tròn, màu vàng nhạt, có mùi tỏi ớt",
    taste: "Vị cay nồng, thơm tỏi, giòn tan",
    instructions: [
      "Bảo quản nơi khô ráo",
      "Tránh ẩm ướt",
      "Ăn ngay sau khi mở bao"
    ],
    isBest: false
  },
  {
    id: "banh-trang-004",
    name: "Bánh Tráng Kim's Muối Tôm",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-kims-3.jpg",
    images: [
      "/assets/products/banh-trang-kims-3.jpg",
      "/assets/products/banh-trang-kims-4.jpg"
    ],
    description: "Bánh tráng muối tôm đậm đà hương vị biển cả, thơm ngon khó cưỡng.",
    price: "25,000đ",
    ingredients: "Gạo tẻ, muối tôm, hành lá, ớt",
    appearance: "Bánh tròn, có rắc muối tôm và hành lá",
    taste: "Vị đậm đà muối tôm, thơm ngon",
    instructions: [
      "Bảo quản trong hộp kín",
      "Tránh ánh nắng trực tiếp",
      "Nướng nhẹ trước khi ăn"
    ],
    isBest: true
  },
  {
    id: "banh-trang-005",
    name: "Bánh Tráng Kim's Tôm Khô",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-me-main.jpg",
    images: [
      "/assets/products/banh-trang-me-1.jpg",
      "/assets/products/banh-trang-me-2.jpg"
    ],
    description: "Bánh tráng tôm khô giòn rụm, vị ngọt tự nhiên của tôm biển.",
    price: "35,000đ",
    ingredients: "Gạo tẻ, tôm khô, muối, đường",
    appearance: "Bánh tròn có rắc tôm khô xay nhuyễn",
    taste: "Vị ngọt tự nhiên của tôm, giòn tan",
    instructions: [
      "Bảo quản nơi khô thoáng",
      "Đậy kín sau khi sử dụng",
      "Có thể ăn kèm tương ớt"
    ],
    isBest: false
  },
  {
    id: "banh-trang-006",
    name: "Bánh Tráng Kim's Hành Tím",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-me-3.jpg",
    images: [
      "/assets/products/banh-trang-me-3.jpg",
      "/assets/products/banh-trang-kims-1.jpg"
    ],
    description: "Bánh tráng hành tím thơm nồng, vị đậm đà đặc trưng miền Tây.",
    price: "20,000đ",
    ingredients: "Gạo tẻ, hành tím, muối, dầu ăn",
    appearance: "Bánh tròn, màu vàng nhạt, có mùi hành tím",
    taste: "Vị thơm nồng hành tím, giòn ngon",
    instructions: [
      "Bảo quản tránh ẩm",
      "Nướng nhẹ để thêm giòn",
      "Ăn kèm với rau sống"
    ],
    isBest: false
  },
  {
    id: "banh-trang-007",
    name: "Bánh Tráng Kim's Siêu Mỏng",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-kims-4.jpg",
    images: [
      "/assets/products/banh-trang-kims-4.jpg",
      "/assets/products/banh-trang-kims-main.jpg"
    ],
    description: "Bánh tráng siêu mỏng như giấy, giòn tan trong miệng, chất lượng cao.",
    price: "18,000đ",
    ingredients: "100% gạo tẻ ngon, nước tinh khiết",
    appearance: "Bánh cực mỏng, trong suốt, đều đặn",
    taste: "Vị ngọt nhẹ của gạo, giòn tan",
    instructions: [
      "Bảo quản cẩn thận, dễ vỡ",
      "Tránh làm ướt",
      "Dùng để cuốn nem hoặc gỏi cuốn"
    ],
    isBest: true
  },

  // Thêm 6 sản phẩm mới
  {
    id: "tra-013",
    name: "Trà Hoa Cúc Tân Long 80g",
    category: "Trà",
    mainImage: "/assets/tra-xanh-100g.jpg",
    images: [
      "/assets/tra-xanh-100g.jpg",
      "/assets/99x100x1-tach-tra-xanh.jpg.jpg"
    ],
    description: "Trà hoa cúc thơm dịu, giúp thư giãn và giải stress hiệu quả.",
    price: "75,000 VNĐ",
    ingredients: "100% hoa cúc khô tự nhiên",
    appearance: "Hoa cúc khô màu vàng nhạt, nguyên bông",
    taste: "Vị ngọt nhẹ, hương thơm dễ chịu",
    instructions: [
      "Cho 3-5 bông hoa cúc vào tách",
      "Rót nước sôi 85°C vào",
      "Đợi 3-5 phút cho thấm",
      "Có thể thêm mật ong"
    ],
    isBest: false
  },
  {
    id: "kimchi-004",
    name: "Kimchi Hành Lá MR LEE",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/kimchi-mr-lee-5.jpg",
    images: [
      "/assets/products/kimchi-mr-lee-5.jpg",
      "/assets/products/kimchi-mr-lee-1.jpg"
    ],
    description: "Kimchi hành lá tươi ngon, thích hợp làm bánh xèo và các món nướng.",
    price: "42,000đ",
    ingredients: "Hành lá, ớt đỏ, tỏi, gừng, muối",
    appearance: "Hành lá xắt khúc, màu đỏ cam nhạt",
    taste: "Vị chua cay nhẹ, thơm hành lá",
    instructions: [
      "Bảo quản trong tủ lạnh",
      "Dùng khi làm bánh xèo, bánh khọt",
      "Ăn kèm thịt nướng rất ngon"
    ],
    isBest: true
  },
  {
    id: "banh-trang-008", 
    name: "Bánh Tráng Kim's Nướng Mắm Ruốc",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-kims-2.jpg",
    images: [
      "/assets/products/banh-trang-kims-2.jpg",
      "/assets/products/banh-trang-me-1.jpg"
    ],
    description: "Bánh tráng nướng mắm ruốc đậm đà hương vị đồng quê, thơm ngon khó quên.",
    price: "28,000đ",
    ingredients: "Gạo tẻ, mắm ruốc, hành lá, ớt",
    appearance: "Bánh tròn, màu nâu nhạt, có rắc mắm ruốc",
    taste: "Vị đậm đà mắm ruốc, thơm nồng",
    instructions: [
      "Bảo quản nơi khô ráo",
      "Nướng nhẹ trước khi ăn",
      "Ăn kèm với dưa leo"
    ],
    isBest: false
  },
  {
    id: "tra-014",
    name: "Trà Oolong Tân Long Royal 500g",
    category: "Trà",
    mainImage: "/assets/olong-gold-320g.jpg",
    images: [
      "/assets/olong-gold-320g.jpg",
      "/assets/99x100x1-tach-tra-olong.jpg"
    ],
    description: "Trà Oolong Royal cao cấp nhất, dành cho những người sành trà.",
    price: "450,000 VNĐ",
    ingredients: "100% búp trà Oolong đặc biệt tuyển chọn",
    appearance: "Viên tròn đều, màu xanh đen bóng cao cấp",
    taste: "Vị ngọt thanh tinh tế, hương thơm lâu",
    instructions: [
      "Tráng ấm trà bằng nước 95°C",
      "Cho 12g-15g trà vào ấm",
      "Đợi 2-3 phút",
      "Có thể pha được 6-7 lần"
    ],
    isBest: true
  },
  {
    id: "rau-chua-005",
    name: "Bắp Cải Muối Chua NGỌC PHÚ",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/rau-chua-ngoc-phu-2.jpg",
    images: [
      "/assets/products/rau-chua-ngoc-phu-2.jpg",
      "/assets/products/rau-chua-ngoc-phu-main.jpg"
    ],
    description: "Bắp cải muối chua giòn ngọt, làm theo công thức gia truyền.",
    price: "32,000đ",
    ingredients: "Bắp cải tươi, muối, đường, giấm",
    appearance: "Bắp cải thái sợi, màu trắng xanh tự nhiên",
    taste: "Vị chua ngọt cân bằng, giòn tươi",
    instructions: [
      "Bảo quản lạnh dưới 10°C",
      "Sử dụng trong 10 ngày",
      "Ngon khi ăn cùng thịt luộc"
    ],
    isBest: false
  },
  {
    id: "banh-trang-009",
    name: "Bánh Tráng Kim's Cuốn Nem",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-me-2.jpg",
    images: [
      "/assets/products/banh-trang-me-2.jpg",
      "/assets/products/banh-trang-kims-main.jpg"
    ],
    description: "Bánh tráng mỏng đặc biệt dành cho cuốn nem, dẻo dai vừa phải.",
    price: "16,000đ",
    ingredients: "Gạo tẻ cao cấp, nước tinh khiết",
    appearance: "Bánh tròn mỏng, trong suốt, mềm dẻo",
    taste: "Vị ngọt tự nhiên của gạo, dẻo dai",
    instructions: [
      "Làm ướt nhẹ trước khi cuốn",
      "Bảo quản nơi khô thoáng",
      "Dùng để cuốn nem tươi"
    ],
    isBest: true
  },

  // Thêm 6 sản phẩm bổ sung
  {
    id: "tra-015",
    name: "Trà Sen Tân Long Thượng Hạng 120g",
    category: "Trà",
    mainImage: "/assets/99x100x1-tra-xanh-125-2.jpg",
    images: [
      "/assets/99x100x1-tra-xanh-125-2.jpg",
      "/assets/tra-xanh-100g.jpg"
    ],
    description: "Trà sen thơm nhẹ nhàng, hương sen thanh khiết, giúp thư giãn tâm hồn.",
    price: "95,000 VNĐ",
    ingredients: "Trà xanh, hạt sen, lá sen khô",
    appearance: "Lá trà xanh có lẫn hạt sen vàng nhạt",
    taste: "Vị thanh ngọt, hương sen dịu nhẹ",
    instructions: [
      "Dùng nước 80°C pha trà",
      "Cho 7g-9g trà vào ấm",
      "Đợi 2-3 phút cho thấm đều",
      "Uống nóng để cảm nhận hương sen"
    ],
    isBest: false
  },
  {
    id: "kimchi-005",
    name: "Kimchi Kim Chi Cay MR LEE Extra Hot",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/kimchi-mr-lee-2.jpg",
    images: [
      "/assets/products/kimchi-mr-lee-2.jpg",
      "/assets/products/kimchi-mr-lee-main.jpg"
    ],
    description: "Kimchi siêu cay dành cho những ai thích vị cay nồng, thử thách vị giác.",
    price: "58,000đ",
    ingredients: "Bắp cải, ớt ghost pepper, tỏi, gừng, nước mắm đặc biệt",
    appearance: "Màu đỏ rực rỡ, rau củ giòn tươi",
    taste: "Vị cay nồng cực độ, chua ngọt hài hòa",
    instructions: [
      "Chỉ dành cho người chịu được cay",
      "Bảo quản trong tủ lạnh ngăn mát",
      "Ăn từng ít một để thưởng thức"
    ],
    isBest: true
  },
  {
    id: "banh-trang-010",
    name: "Bánh Tráng Kim's Nướng Chấm",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-me-3.jpg",
    images: [
      "/assets/products/banh-trang-me-3.jpg",
      "/assets/products/banh-trang-kims-3.jpg"
    ],
    description: "Bánh tráng nướng chấm đặc biệt, ăn kèm với tương ớt và mayonnaise.",
    price: "24,000đ",
    ingredients: "Gạo tẻ, trứng, hành lá, gia vị đặc biệt",
    appearance: "Bánh tròn, màu vàng óng, có lớp trứng mỏng",
    taste: "Vị béo ngậy, thơm trứng, giòn tan",
    instructions: [
      "Nướng trực tiếp trên bếp than",
      "Chấm kèm tương ớt",
      "Ăn nóng để ngon nhất"
    ],
    isBest: false
  },
  {
    id: "tra-016",
    name: "Trà Bí Đao Tân Long Detox 100g",
    category: "Trà",
    mainImage: "/assets/olong-goi-100g-2022.jpg",
    images: [
      "/assets/olong-goi-100g-2022.jpg",
      "/assets/99x100x1-goi-100g-2002_hong.jpg"
    ],
    description: "Trà bí đao giúp giảm cân, thanh lọc cơ thể, tốt cho sức khỏe.",
    price: "68,000 VNĐ",
    ingredients: "100% bí đao khô tự nhiên, không chất bảo quản",
    appearance: "Miếng bí đao khô màu vàng nhạt, thái mỏng",
    taste: "Vị ngọt nhẹ tự nhiên, thanh mát",
    instructions: [
      "Cho 8g-10g vào ấm",
      "Rót nước sôi 90°C",
      "Đợi 5-7 phút",
      "Uống 2-3 lần/ngày sau bữa ăn"
    ],
    isBest: true
  },
  {
    id: "rau-chua-006",
    name: "Su Hào Muối Chua NGỌC PHÚ",
    category: "Kimchi, Rau Chua",
    mainImage: "/assets/products/rau-chua-ngoc-phu-3.jpg",
    images: [
      "/assets/products/rau-chua-ngoc-phu-3.jpg",
      "/assets/products/rau-chua-ngoc-phu-1.jpg"
    ],
    description: "Su hào muối chua giòn ngọt, thích hợp ăn kèm cơm và các món ăn mặn.",
    price: "29,000đ",
    ingredients: "Su hào tươi, muối biển, đường cát, giấm gạo",
    appearance: "Su hào thái sợi nhỏ, màu trắng trong",
    taste: "Vị chua ngọt thanh mát, giòn tự nhiên",
    instructions: [
      "Bảo quản trong tủ lạnh",
      "Dùng thìa sạch khi lấy",
      "Ăn trong vòng 2 tuần"
    ],
    isBest: false
  },
  {
    id: "banh-trang-011",
    name: "Bánh Tráng Kim's Nước Dừa",
    category: "Bánh Tráng",
    mainImage: "/assets/products/banh-trang-kims-1.jpg",
    images: [
      "/assets/products/banh-trang-kims-1.jpg",
      "/assets/products/banh-trang-me-main.jpg"
    ],
    description: "Bánh tráng nước dừa thơm béo, có vị ngọt tự nhiên của dừa tươi.",
    price: "21,000đ",
    ingredients: "Gạo tẻ, nước dừa tươi, muối biển",
    appearance: "Bánh tròn, màu trắng ngà, mỏng đều",
    taste: "Vị ngọt béo của dừa, thơm tự nhiên",
    instructions: [
      "Bảo quản nơi khô mát",
      "Tránh ẩm ướt và nắng gắt",
      "Có thể ăn trực tiếp hoặc nướng"
    ],
    isBest: true
  }
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};

export const getBestProducts = (): Product[] => {
  return products.filter(product => product.isBest);
};

export const getTop3BestProducts = (): Product[] => {
  return products.filter(product => product.isBest).slice(0, 3);
};