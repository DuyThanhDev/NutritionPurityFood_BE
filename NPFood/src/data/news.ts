export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export const newsData: NewsItem[] = [
  {
    id: "news-001",
    title: "NPFOOD ra mắt dòng sản phẩm Trà Organic mới",
    excerpt:
      "Công ty NPFOOD Việt Nam vừa chính thức ra mắt dòng sản phẩm trà organic cao cấp, được chứng nhận an toàn cho sức khỏe người tiêu dùng.",
    content:
      "Với cam kết mang đến những sản phẩm chất lượng cao nhất, NPFOOD đã nghiên cứu và phát triển dòng trà organic mới với quy trình sản xuất khép kín, đảm bảo không sử dụng hóa chất độc hại. Dòng sản phẩm này được chứng nhận bởi các tổ chức uy tín quốc tế và đã qua kiểm nghiệm nghiêm ngặt về chất lượng.",
    image: "/assets/tra-xanh-100g.jpg",
    date: "15/12/2024",
    category: "Sản phẩm",
    author: "NPFOOD Team",
  },
  {
    id: "news-002",
    title: "Kimchi MR LEE chinh phục thị trường Việt Nam",
    excerpt:
      "Thương hiệu Kimchi MR LEE đã trở thành lựa chọn hàng đầu của người tiêu dùng Việt Nam yêu thích ẩm thực Hàn Quốc.",
    content:
      "Với hương vị đậm đà và chất lượng tuyệt vời, Kimchi MR LEE đã thu hút được lòng tin của khách hàng Việt Nam. Sản phẩm được làm theo công thức truyền thống Hàn Quốc nhưng đã được điều chỉnh phù hợp với khẩu vị người Việt. Doanh số bán hàng tăng 150% trong quý vừa qua.",
    image: "/assets/products/kimchi-mr-lee-main.jpg",
    date: "12/12/2024",
    category: "Thị trường",
    author: "Marketing Team",
  },
  {
    id: "news-003",
    title: "NPFOOD đạt chứng nhận ISO 22000:2018",
    excerpt:
      "Nhà máy sản xuất của NPFOOD vừa được cấp chứng nhận ISO 22000:2018 về hệ thống quản lý an toàn thực phẩm.",
    content:
      "Đây là một cột mốc quan trọng khẳng định cam kết của NPFOOD trong việc đảm bảo chất lượng và an toàn thực phẩm. Chứng nhận ISO 22000:2018 được công nhận trên toàn thế giới và là minh chứng cho hệ thống quản lý chất lượng hoàn thiện của công ty.",
    image: "/assets/cong-cong-ty2.jpg",
    date: "10/12/2024",
    category: "Công ty",
    author: "Quality Team",
  },
  {
    id: "news-004",
    title: "Bánh tráng Kim's - Hương vị truyền thống Việt Nam",
    excerpt:
      "Dòng sản phẩm bánh tráng Kim's mang đến hương vị đặc trưng của miền Nam, được làm từ nguyên liệu tự nhiên 100%.",
    content:
      "Bánh tráng Kim's được sản xuất theo công nghệ hiện đại nhưng vẫn giữ được hương vị truyền thống của miền Nam Việt Nam. Nguyên liệu chính là gạo tẻ thơm ngon được tuyển chọn kỹ lưỡng từ các vùng trồng lúa nổi tiếng. Sản phẩm không chứa chất bảo quản và được đóng gói trong môi trường vô trùng.",
    image: "/assets/products/banh-trang-kims-main.jpg",
    date: "08/12/2024",
    category: "Sản phẩm",
    author: "Product Team",
  },
  {
    id: "news-005",
    title: "NPFOOD tham gia Hội chợ Thực phẩm Quốc tế 2024",
    excerpt:
      "NPFOOD sẽ tham gia triển lãm tại Hội chợ Thực phẩm Quốc tế Việt Nam 2024 với nhiều sản phẩm mới hấp dẫn.",
    content:
      "Đây là cơ hội để NPFOOD giới thiệu các sản phẩm chất lượng cao đến với khách hàng trong và ngoài nước. Tại hội chợ, công ty sẽ trưng bày toàn bộ dòng sản phẩm từ trà, kimchi, rau củ muối chua đến bánh tráng. Đặc biệt, NPFOOD sẽ ra mắt 5 sản phẩm mới với công nghệ sản xuất tiên tiến.",
    image: "/assets/san-xuong-bau-tre-2.jpg",
    date: "05/12/2024",
    category: "Sự kiện",
    author: "Event Team",
  },
  {
    id: "news-006",
    title: "Rau củ muối chua NGỌC PHÚ - Hương vị thuần Việt",
    excerpt:
      "Dòng sản phẩm rau củ muối chua NGỌC PHÚ được làm theo công thức truyền thống, giữ nguyên hương vị đặc trưng.",
    content:
      "Với quy trình sản xuất khép kín và nguyên liệu tươi ngon, rau củ muối chua NGỌC PHÚ mang đến hương vị thuần Việt đích thực. Sản phẩm được làm từ rau củ tươi ngon nhất, muối biển tinh khiết và không sử dụng chất tạo màu nhân tạo. Quy trình muối chua được thực hiện theo phương pháp truyền thống kết hợp với công nghệ hiện đại.",
    image: "/assets/products/rau-chua-ngoc-phu-main.jpg",
    date: "03/12/2024",
    category: "Sản phẩm",
    author: "Production Team",
  },
  {
    id: "news-007",
    title: "NPFOOD mở rộng hệ thống phân phối toàn quốc",
    excerpt:
      "Công ty NPFOOD chính thức mở rộng hệ thống phân phối với 500 điểm bán mới trên toàn quốc trong năm 2024.",
    content:
      "Để đáp ứng nhu cầu ngày càng tăng của khách hàng, NPFOOD đã quyết định mở rộng hệ thống phân phối. Các sản phẩm của NPFOOD sẽ có mặt tại các siêu thị lớn, cửa hàng tiện lợi và hệ thống bán lẻ truyền thống trên khắp cả nước.",
    image: "/assets/banner-8-1920x932-01.png",
    date: "01/12/2024",
    category: "Công ty",
    author: "Sales Team",
  },
  {
    id: "news-008",
    title: "Trà Oolong Tân Long đạt giải thưởng Sản phẩm Xanh 2024",
    excerpt:
      "Sản phẩm Trà Oolong Tân Long vừa được vinh danh tại giải thưởng Sản phẩm Xanh Việt Nam 2024.",
    content:
      "Giải thưởng này là sự ghi nhận cho những nỗ lực không ngừng của NPFOOD trong việc sản xuất các sản phẩm thân thiện với môi trường. Trà Oolong Tân Long được sản xuất theo quy trình xanh, từ khâu trồng trọt đến đóng gói hoàn toàn thân thiện với môi trường.",
    image: "/assets/olong-gold-320g.jpg",
    date: "28/11/2024",
    category: "Sản phẩm",
    author: "Quality Team",
  },
  {
    id: "news-009",
    title: "NPFOOD đầu tư 50 tỷ đồng xây dựng nhà máy mới",
    excerpt:
      "Công ty NPFOOD thông báo kế hoạch đầu tư 50 tỷ đồng xây dựng nhà máy sản xuất hiện đại tại Bình Dương.",
    content:
      "Nhà máy mới sẽ được trang bị công nghệ sản xuất tiên tiến nhất, năng suất gấp 3 lần nhà máy hiện tại. Dự kiến nhà máy sẽ hoàn thành và đi vào hoạt động vào quý 2/2025, góp phần nâng cao chất lượng sản phẩm và mở rộng thị trường xuất khẩu.",
    image: "/assets/banner-12-2.jpg",
    date: "25/11/2024",
    category: "Công ty",
    author: "Management Team",
  },
  {
    id: "news-010",
    title: "Kimchi MR LEE ra mắt phiên bản ít muối cho trẻ em",
    excerpt:
      "Thương hiệu Kimchi MR LEE vừa cho ra mắt dòng sản phẩm kimchi ít muối dành riêng cho trẻ em và người cao tuổi.",
    content:
      "Sản phẩm kimchi ít muối mới được nghiên cứu đặc biệt để phù hợp với sức khỏe của trẻ em và người cao tuổi. Hàm lượng muối giảm 40% so với sản phẩm thông thường nhưng vẫn giữ được hương vị đặc trưng của kimchi Hàn Quốc.",
    image: "/assets/products/kimchi-mr-lee-2.jpg",
    date: "22/11/2024",
    category: "Sản phẩm",
    author: "R&D Team",
  },
  {
    id: "news-011",
    title: "NPFOOD được vinh danh Top 100 Doanh nghiệp Phát triển Bền vững",
    excerpt:
      "NPFOOD vinh dự được xếp hạng trong Top 100 Doanh nghiệp Phát triển Bền vững Việt Nam năm 2024.",
    content:
      "Giải thưởng này ghi nhận những nỗ lực của NPFOOD trong việc phát triển bền vững, từ việc sử dụng năng lượng tái tạo, giảm thiểu chất thải đến đầu tư vào cộng đồng. Công ty cam kết tiếp tục hành trình phát triển xanh trong tương lai.",
    image: "/assets/cong-cong-ty2.jpg",
    date: "20/11/2024",
    category: "Công ty",
    author: "CSR Team",
  },
  {
    id: "news-012",
    title: "Trà Xanh Tân Long xuất khẩu sang thị trường Nhật Bản",
    excerpt:
      "Sản phẩm Trà Xanh Tân Long chính thức được xuất khẩu sang thị trường Nhật Bản với đơn hàng đầu tiên 10 tấn.",
    content:
      "Đây là thành quả của quá trình đàm phán và kiểm định chất lượng kéo dài 8 tháng. Trà Xanh Tân Long đã đáp ứng được tiêu chuẩn khắt khe của thị trường Nhật Bản về chất lượng và an toàn thực phẩm.",
    image: "/assets/tra-xanh-100g.jpg",
    date: "18/11/2024",
    category: "Thị trường",
    author: "Export Team",
  },
  {
    id: "news-013",
    title: "Bánh tráng Kim's tham gia Festival Ẩm thực Miền Nam",
    excerpt:
      "Bánh tráng Kim's sẽ có mặt tại Festival Ẩm thực Miền Nam 2024 với gian hàng trưng bày và thử nghiệm sản phẩm.",
    content:
      "Tại festival, khách hàng sẽ được trải nghiệm quy trình làm bánh tráng truyền thống và thưởng thức các món ăn đặc sắc từ bánh tráng Kim's. Đây là cơ hội để giới thiệu văn hóa ẩm thực miền Nam đến với du khách trong và ngoài nước.",
    image: "/assets/products/banh-trang-kims-1.jpg",
    date: "15/11/2024",
    category: "Sự kiện",
    author: "Marketing Team",
  },
  {
    id: "news-014",
    title: "NPFOOD ra mắt ứng dụng mobile cho khách hàng",
    excerpt:
      "Ứng dụng NPFOOD Store chính thức ra mắt trên iOS và Android, hỗ trợ khách hàng mua sắm trực tuyến dễ dàng.",
    content:
      "Ứng dụng cung cấp đầy đủ thông tin sản phẩm, cho phép đặt hàng online, theo dõi đơn hàng và nhận thông báo khuyến mãi. Khách hàng cũng có thể tìm kiếm cửa hàng gần nhất và đọc tin tức về sản phẩm mới.",
    image: "/assets/banner-8-1920x932-01.png",
    date: "12/11/2024",
    category: "Công ty",
    author: "IT Team",
  },
  {
    id: "news-015",
    title: "Rau củ muối chua NGỌC PHÚ mở rộng dòng sản phẩm organic",
    excerpt:
      "Dòng sản phẩm rau củ muối chua organic NGỌC PHÚ được bổ sung thêm 5 loại rau củ mới từ nông trại hữu cơ.",
    content:
      "Các sản phẩm mới bao gồm: bắp cải organic, củ cải đỏ organic, su hào organic, cà rốt baby organic và củ kiệu organic. Tất cả đều được trồng theo tiêu chuẩn hữu cơ nghiêm ngặt và được chứng nhận bởi tổ chức quốc tế.",
    image: "/assets/products/rau-chua-ngoc-phu-3.jpg",
    date: "10/11/2024",
    category: "Sản phẩm",
    author: "Product Team",
  },
  {
    id: "news-016",
    title: "NPFOOD ký kết hợp tác với 50 nhà phân phối tại TP.HCM",
    excerpt:
      "Lễ ký kết hợp tác giữa NPFOOD và 50 nhà phân phối tại TP.HCM nhằm mở rộng mạng lưới bán hàng.",
    content:
      "Sự kiện diễn ra tại khách sạn Rex với sự tham gia của đại diện lãnh đạo công ty và các nhà phân phối. Thỏa thuận hợp tác sẽ giúp sản phẩm NPFOOD tiếp cận được nhiều khách hàng hơn tại khu vực phía Nam.",
    image: "/assets/san-xuong-bau-tre-2.jpg",
    date: "08/11/2024",
    category: "Thị trường",
    author: "Sales Team",
  },
  {
    id: "news-017",
    title: "Trà Lài Tân Long Premium đạt chứng nhận Fair Trade",
    excerpt:
      "Sản phẩm Trà Lài Tân Long Premium vừa nhận được chứng nhận Fair Trade từ tổ chức công bằng thương mại quốc tế.",
    content:
      "Chứng nhận Fair Trade khẳng định NPFOOD cam kết thương mại công bằng, đảm bảo quyền lợi cho nông dân trồng trà và bảo vệ môi trường. Đây là bước tiến quan trọng trong chiến lược phát triển bền vững của công ty.",
    image: "/assets/99x100x1-tra-xanh-125-2.jpg",
    date: "05/11/2024",
    category: "Sản phẩm",
    author: "Sustainability Team",
  },
  {
    id: "news-018",
    title: "NPFOOD tổ chức chương trình 'Ngày hội Sức khỏe Cộng đồng'",
    excerpt:
      "Chương trình 'Ngày hội Sức khỏe Cộng đồng' do NPFOOD tổ chức sẽ diễn ra tại 10 tỉnh thành trên cả nước.",
    content:
      "Chương trình bao gồm khám sức khỏe miễn phí, tư vấn dinh dưỡng và giới thiệu các sản phẩm thực phẩm tốt cho sức khỏe. NPFOOD cam kết đóng góp vào việc nâng cao nhận thức về sức khỏe cộng đồng thông qua hoạt động thiện nguyện này.",
    image: "/assets/banner-12-2.jpg",
    date: "02/11/2024",
    category: "Sự kiện",
    author: "Community Team",
  }
];

export const newsCategories = [
  "Tất cả", 
  "Sản phẩm", 
  "Công ty", 
  "Thị trường", 
  "Sự kiện"
];

// Helper functions
export const getNewsByCategory = (category: string): NewsItem[] => {
  return category === "Tất cả" 
    ? newsData 
    : newsData.filter(news => news.category === category);
};

export const getNewsById = (id: string): NewsItem | undefined => {
  return newsData.find(news => news.id === id);
};

export const getLatestNews = (limit: number = 3): NewsItem[] => {
  return newsData
    .sort((a, b) => new Date(b.date.split('/').reverse().join('-')).getTime() - 
                   new Date(a.date.split('/').reverse().join('-')).getTime())
    .slice(0, limit);
};

export const formatNewsDate = (dateString: string) => {
  const [day, month, year] = dateString.split('/');
  return { day, month, year };
};