import React, { useState, useMemo } from "react";
import { Table, Button, Input, Select, Modal, Tag, message, Tooltip, Descriptions } from "antd";
import type { TableColumnsType } from "antd";
import { newsData, newsCategories } from "../../../data/news";
import type { NewsItem } from "../../../data/news";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Footer from "../../../components/Footer";
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, EyeOutlined } from "@ant-design/icons";

const ManagementNewsPage: React.FC = () => {
  const [category, setCategory] = useState<string>("Tất cả");
  const [search, setSearch] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editValues, setEditValues] = useState<Partial<NewsItem>>({});
  const [editMode, setEditMode] = useState<"add" | "edit">("add");
  const [loading, setLoading] = useState(false);

  // Lọc bài báo
  const filteredNews = useMemo(() => {
    let filtered = newsData;
    if (category !== "Tất cả") {
      filtered = filtered.filter((n) => n.category === category);
    }
    if (search.trim()) {
      filtered = filtered.filter(
        (n) =>
          n.title.toLowerCase().includes(search.toLowerCase()) ||
          n.excerpt.toLowerCase().includes(search.toLowerCase()) ||
          n.content.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filtered.map((item, idx) => ({ ...item, stt: idx + 1 }));
  }, [category, search]);

  // Cột bảng
  const columns: TableColumnsType<NewsItem & { stt: number }> = [
    {
      title: "STT",
      dataIndex: "stt",
      width: 40,
      align: "center",
      render: (stt: number) => (
        <span className="block w-6 sm:w-8 text-center mx-auto text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100 rounded">{stt}</span>
      ),
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      width: 200,
      render: (text: string) => (
        <Tooltip title={text}><span className="font-semibold text-[#77b843]">{text}</span></Tooltip>
      ),
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      width: 80,
      align: "center",
      render: (cat: string) => <Tag color="green">{cat}</Tag>,
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      width: 100,
      align: "center",
    },
    {
      title: "Ngày",
      dataIndex: "date",
      width: 80,
      align: "center",
    },
    {
      title: "Thao tác",
      dataIndex: "actions",
      width: 150,
      align: "center",
      render: (_: any, record) => (
        <div className="flex gap-1 justify-center">
          <Button icon={<EditOutlined />} size="small" onClick={() => handleEdit(record)} title="Sửa" style={{ background: '#facc15', color: '#fff', border: 'none' }} />
          <Button icon={<DeleteOutlined />} size="small" danger onClick={() => handleDelete(record)} title="Xóa" />
          <Button icon={<EyeOutlined />} size="small" onClick={() => alert('Ẩn/Hiện bài báo (demo)')} title="Ẩn/Hiện" />
        </div>
      ),
    },
  ];

  // Thêm/sửa bài báo
  const handleAdd = () => {
    setEditMode("add");
    setEditValues({});
    // setSelectedNews(null);
    setModalOpen(true);
  };
  const handleEdit = (news: NewsItem) => {
    setEditMode("edit");
    setEditValues(news);
    // setSelectedNews(news);
    setModalOpen(true);
  };
  const handleDelete = (news: NewsItem) => {
    Modal.confirm({
      title: `Xóa bài: ${news.title}`,
      content: "Bạn có chắc muốn xóa bài báo này? (demo)",
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk: () => message.success("Đã xóa bài báo (demo)")
    });
  };
  const handleModalOk = () => {
    setLoading(true);
    setTimeout(() => {
      setModalOpen(false);
      setLoading(false);
      message.success(editMode === "add" ? "Thêm bài báo thành công (demo)" : "Cập nhật bài báo thành công (demo)");
    }, 800);
  };

  return (
    <>
      <HeaderAdmin />
      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-6 min-h-screen bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#77b843] mb-4 text-center">QUẢN LÝ BÀI BÁO</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 w-full">
          <Select
            className="w-full md:w-56"
            value={category}
            onChange={setCategory}
            options={newsCategories.map((c) => ({ value: c, label: c }))}
            size="large"
          />
          <Input
            className="w-full md:flex-1"
            size="large"
            placeholder="Tìm kiếm theo tiêu đề, nội dung..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            prefix={<SearchOutlined />}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            className="w-full md:w-auto"
            style={{ background: "#77b843", border: "none" }}
            onClick={handleAdd}
          >
            Thêm bài báo
          </Button>
        </div>
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-lg">
          <Table
            columns={columns}
            dataSource={filteredNews}
            rowKey="id"
            bordered
            pagination={{ pageSize: 10, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 50] }}
            className="min-w-[700px] text-xs sm:text-sm align-middle"
            size={window.innerWidth < 640 ? 'small' : 'middle'}
          />
        </div>
        <Modal
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          title={<span className="text-base md:text-lg">{editMode === "add" ? "Thêm bài báo mới" : `Sửa bài: ${editValues.title}`}</span>}
          width={window.innerWidth < 500 ? '98vw' : 600}
          className="max-w-full"
          bodyStyle={{ padding: window.innerWidth < 500 ? 8 : 24 }}
          confirmLoading={loading}
          onOk={handleModalOk}
          okText={editMode === "add" ? "Thêm" : "Cập nhật"}
          cancelText="Hủy"
        >
          <Descriptions
            bordered
            column={1}
            size="middle"
            className="w-full text-xs md:text-base"
            labelStyle={{
              fontSize: 14,
              color: '#9ca3af',
              fontWeight: 400,
              minWidth: 90,
              width: 90,
              textAlign: 'left',
              lineHeight: '18px',
              paddingRight: 8
            }}
          >
            <Descriptions.Item label="Tiêu đề bài báo">
              <Input value={editValues.title || ''} onChange={e => setEditValues(v => ({ ...v, title: e.target.value }))} />
            </Descriptions.Item>
            <Descriptions.Item label="Tóm tắt (excerpt)">
              <Input value={editValues.excerpt || ''} onChange={e => setEditValues(v => ({ ...v, excerpt: e.target.value }))} />
            </Descriptions.Item>
            <Descriptions.Item label="Nội dung bài báo">
              <Input.TextArea value={editValues.content || ''} onChange={e => setEditValues(v => ({ ...v, content: e.target.value }))} autoSize={{ minRows: 4, maxRows: 10 }} />
            </Descriptions.Item>
            <Descriptions.Item label="Ảnh bài báo">
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
                {editValues.image ? (
                  <img
                    src={editValues.image}
                    alt="Ảnh bài báo"
                    className="w-24 h-24 object-cover rounded border bg-gray-100"
                  />
                ) : (
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-100 border rounded text-gray-400 text-xs">No image</div>
                )}
                <div className="flex gap-2 mt-2 xs:mt-0">
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="newsImageUpload"
                    onChange={e => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setEditValues(v => ({ ...v, image: url }));
                      }
                    }}
                  />
                  <Button size="small" onClick={() => document.getElementById('newsImageUpload')?.click()}>Chọn ảnh</Button>
                  <Button size="small" danger onClick={() => setEditValues(v => ({ ...v, image: '' }))}>Xóa</Button>
                </div>
              </div>
            </Descriptions.Item>
            <Descriptions.Item label="Ngày đăng (dd/mm/yyyy)">
              <Input value={editValues.date || ''} onChange={e => setEditValues(v => ({ ...v, date: e.target.value }))} />
            </Descriptions.Item>
            <Descriptions.Item label="Danh mục">
              <Select
                value={editValues.category || newsCategories[1]}
                onChange={val => setEditValues(v => ({ ...v, category: val }))}
                options={newsCategories.filter(c => c !== "Tất cả").map(c => ({ value: c, label: c }))}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Tác giả">
              <Input value={editValues.author || ''} onChange={e => setEditValues(v => ({ ...v, author: e.target.value }))} />
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default ManagementNewsPage;
