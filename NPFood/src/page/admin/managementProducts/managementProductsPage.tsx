

import React, { useState, useMemo } from 'react';
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, SearchOutlined } from '@ant-design/icons';
import { Table, Input, Button, Select, Tag, Image, Tooltip, Modal, Descriptions, message, Switch } from 'antd';
import type { TableColumnsType } from 'antd';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import { products, type Product, getProductsByCategory } from '../../../data/products';

const categories = [
  "Tất cả",
  "Trà",
  "Kimchi, Rau Chua",
  "Bánh Tráng"
];

const ManagementProductsPage: React.FC = () => {
  // State cho modal thêm sản phẩm
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addValues, setAddValues] = useState<any>({
    id: '',
    name: '',
    category: '',
    price: '',
    mainImage: '',
    images: [],
    isBest: false,
    description: '',
    ingredients: '',
    taste: '',
    instructions: [],
  });
  const [addLoading, setAddLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");

  // Lọc sản phẩm theo danh mục và từ khóa
  const filteredProducts = useMemo(() => {
    let filtered: Product[] = products;
    if (category !== "Tất cả") {
      filtered = getProductsByCategory(category);
    }
    if (search.trim()) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(search.toLowerCase()))
      );
    }
    // Thêm stt cho từng sản phẩm
    return filtered.map((item, idx) => ({ ...item, stt: idx + 1 }));
  }, [category, search]);

  // Handler các thao tác (chỉ alert demo)
  const handleAdd = () => {
    setAddValues({
      id: '',
      name: '',
      category: '',
      price: '',
      mainImage: '',
      images: [],
      isBest: false,
      description: '',
      ingredients: '',
      taste: '',
      instructions: [],
    });
    setAddModalOpen(true);
  };
  const handleAddChange = (field: string, value: any) => {
    setAddValues((prev: any) => ({ ...prev, [field]: value }));
  };
  const handleAddImageChange = (i: number, url: string) => {
    setAddValues((prev: any) => {
      const newImages = [...(prev.images || [])];
      newImages[i] = url;
      return { ...prev, images: newImages };
    });
  };
  const handleAddImageDelete = (i: number) => {
    setAddValues((prev: any) => {
      const newImages = [...(prev.images || [])];
      newImages.splice(i, 1);
      return { ...prev, images: newImages };
    });
  };
  const handleAddMainImage = (url: string) => {
    setAddValues((prev: any) => ({ ...prev, mainImage: url }));
  };
  const handleAddSubmit = () => {
    setAddLoading(true);
        const autoId = 'sp-' + Date.now();
        setTimeout(() => {
          setAddModalOpen(false);
          setAddLoading(false);
          message.success(`Thêm sản phẩm thành công (ID: ${autoId}) (demo)`);
        }, 800);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product & { stt?: number } | null>(null);
  const [editFields, setEditFields] = useState<{ [key: string]: boolean }>({});
  const [editValues, setEditValues] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleEdit = (product: Product & { stt?: number }) => {
    setSelectedProduct(product);
    setEditFields({});
    setEditValues({});
    setModalOpen(true);
  };

  const handleFieldClick = (field: string, value: any) => {
    setEditFields(prev => ({ ...prev, [field]: true }));
    setEditValues((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleFieldChange = (field: string, value: any) => {
    setEditValues((prev: any) => ({ ...prev
        , [field]: value }));
  };

  const handleFieldBlur = (field: string) => {
    setEditFields(prev => ({ ...prev, [field]: false }));
  };

  const handleCancel = () => {
    setModalOpen(false);
    setEditFields({});
    setEditValues({});
  };

  const handleUpdate = () => {
    if (!selectedProduct) return;
    setLoading(true);
    setTimeout(() => {
      setSelectedProduct(prev => prev ? { ...prev, ...editValues } : prev);
      setModalOpen(false);
      setEditFields({});
      setEditValues({});
      setLoading(false);
      message.success('Cập nhật thành công (demo)');
    }, 800);
  };
  const handleDelete = (product: Product) => {
    if (window.confirm(`Bạn có chắc muốn xóa sản phẩm: ${product.name}?`)) {
      alert("Đã xóa (demo, cần tích hợp API)");
    }
  };

  // Cột cho bảng antd
  const columns: TableColumnsType<Product & { stt: number }> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      width: 40,
      align: 'center',
      className: 'text-xs sm:text-sm font-semibold',
      render: (stt: number) => (
        <span className="block w-6 sm:w-8 text-center mx-auto text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100 rounded">
          {stt}
        </span>
      ),
    },
    {
      title: 'ID',
      dataIndex: 'id',
      width: 70,
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Ảnh đại diện',
      dataIndex: 'mainImage',
      width: 60,
      align: 'center',
      render: (img: string, record) => (
        <div className="flex justify-center items-center max-w-xs mx-auto">
          <Image
            src={img}
            alt={record.name}
            width={48}
            height={48}
            className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-md bg-gray-100"
            style={{ objectFit: 'cover', background: '#f3f6f9', borderRadius: 8 }}
            preview={false}
          />
        </div>
      ),
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      width: 200,
      align: 'left',
      ellipsis: {
        showTitle: false,
      },
      render: (text: string) => (
        <Tooltip placement="topLeft" title={text}>
          <span className="font-bold text-[#77b843]">{text}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      width: 60,
      align: 'center',
      ellipsis: {
        showTitle: false,
      },
      render: (text: string) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      width: 100,
      align: 'center',
      ellipsis: {
        showTitle: false,
      },
      render: (text: string) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: 'Best SL',
      dataIndex: 'isBest',
      width: 50,
      align: 'center',
      render: (isBest: boolean) => isBest ? <Tag color="green">Best</Tag> : null,
    },
    {
      title: 'Thao tác',
      dataIndex: 'actions',
      width: 140,
      align: 'center',
      render: (_: any, record: Product & { stt: number }) => (
        <div className="flex gap-1 justify-center">
          <Button icon={<EditOutlined />} size="small" onClick={() => handleEdit(record)} title="Chỉnh sửa" style={{ background: '#facc15', color: '#fff', border: 'none' }} />
          <Button icon={<DeleteOutlined />} size="small" danger onClick={() => handleDelete(record)} title="Xóa" />
          <Button icon={<EyeOutlined />} size="small" onClick={() => alert('Ẩn/Hiện sản phẩm (demo)')} title="Ẩn/Hiện" />
        </div>
      ),
    },
  ];

  return (
    <>
      <HeaderAdmin />
      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-6 min-h-screen bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#77b843] mb-4 text-center">QUẢN LÝ SẢN PHẨM</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 w-full">
          <Select
            className="w-full md:w-56"
            value={category}
            onChange={setCategory}
            options={categories.map(c => ({ value: c, label: c }))}
            size="large"
          />
          <Input
            className="w-full md:flex-1"
            size="large"
            placeholder="Tìm kiếm theo tên, mô tả..."
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
            Thêm sản phẩm
          </Button>
      {/* Modal thêm sản phẩm */}
      <Modal
        open={addModalOpen}
        onCancel={() => setAddModalOpen(false)}
        title={<span className="text-base md:text-lg">Thêm sản phẩm mới</span>}
        width={window.innerWidth < 500 ? '98vw' : 600}
        className="max-w-full"
        bodyStyle={{ padding: window.innerWidth < 500 ? 8 : 24 }}
        footer={[
          <Button key="cancel" onClick={() => setAddModalOpen(false)} className="w-full md:w-auto">Hủy</Button>,
          <Button key="add" type="primary" loading={addLoading} onClick={handleAddSubmit} style={{ background: '#77b843', border: 'none' }} className="w-full md:w-auto">Thêm</Button>
        ]}
      >
        <Descriptions bordered column={1} size="middle" className="w-full text-xs md:text-base">
          <Descriptions.Item label="ID">
            <span className="text-gray-400 italic">(Tự động sinh khi thêm)</span>
          </Descriptions.Item>
          <Descriptions.Item label="Ảnh đại diện">
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
              <Image src={addValues.mainImage} alt={addValues.name} width={window.innerWidth < 500 ? 64 : 100} height={window.innerWidth < 500 ? 64 : 100} style={{ objectFit: 'contain', background: '#f3f6f9', borderRadius: 8 }} />
              <div className="flex gap-2">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="addMainImageUpload"
                  onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      handleAddMainImage(url);
                    }
                  }}
                />
                <Button size="small" onClick={() => document.getElementById('addMainImageUpload')?.click()}>Chọn ảnh</Button>
                <Button size="small" danger onClick={() => handleAddMainImage('')}>Xóa</Button>
              </div>
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="Tên sản phẩm">
            <Input value={addValues.name} onChange={e => handleAddChange('name', e.target.value)} />
          </Descriptions.Item>
          <Descriptions.Item label="Danh mục">
            <Input value={addValues.category} onChange={e => handleAddChange('category', e.target.value)} />
          </Descriptions.Item>
          <Descriptions.Item label="Giá">
            <Input value={addValues.price} onChange={e => handleAddChange('price', e.target.value)} />
          </Descriptions.Item>
          <Descriptions.Item label="Thành phần">
            <Input value={addValues.ingredients} onChange={e => handleAddChange('ingredients', e.target.value)} />
          </Descriptions.Item>
          <Descriptions.Item label="Mô tả">
            <Input.TextArea value={addValues.description} onChange={e => handleAddChange('description', e.target.value)} autoSize={{ minRows: 2, maxRows: 4 }} />
          </Descriptions.Item>
          <Descriptions.Item label="Hương vị">
            <Input value={addValues.taste} onChange={e => handleAddChange('taste', e.target.value)} />
          </Descriptions.Item>
          <Descriptions.Item label="Hướng dẫn">
            <Input.TextArea
              value={Array.isArray(addValues.instructions) ? addValues.instructions.join('\n') : addValues.instructions}
              onChange={e => handleAddChange('instructions', e.target.value.split(/\r?\n/))}
              autoSize={{ minRows: 3, maxRows: 8 }}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Hình ảnh">
            <div className="flex flex-col gap-2 w-full">
              {(addValues.images || []).map((img: string, i: number) => (
                <div key={i} className="flex flex-col xs:flex-row items-start xs:items-center gap-2 mb-1 w-full">
                  <Image src={img} alt={addValues.name + i} width={window.innerWidth < 500 ? 40 : 48} height={window.innerWidth < 500 ? 40 : 48} style={{ objectFit: 'cover', borderRadius: 8, border: '1px solid #eee' }} />
                  <div className="flex gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      id={`addImageUpload_${i}`}
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          handleAddImageChange(i, url);
                        }
                      }}
                    />
                    <Button size="small" onClick={() => document.getElementById(`addImageUpload_${i}`)?.click()}>Chọn ảnh</Button>
                    <Button size="small" danger onClick={() => handleAddImageDelete(i)}>Xóa</Button>
                  </div>
                </div>
              ))}
              <Button size="small" className="w-full md:w-auto" onClick={() => setAddValues((prev: any) => ({ ...prev, images: [...(prev.images || []), ''] }))}>Thêm ảnh</Button>
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="Best?">
            <div className="flex items-center gap-2">
              <Switch checked={addValues.isBest} onChange={checked => handleAddChange('isBest', checked)} />
              <span>{addValues.isBest ? <Tag color="green">Best</Tag> : <Tag color="red">Not Best</Tag>}</span>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Modal>
        </div>
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-lg">
          <Table
            columns={columns}
            dataSource={filteredProducts}
            rowKey="id"
            bordered
            pagination={{ pageSize: 10, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 50] }}
            onChange={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="min-w-[600px] sm:min-w-[800px] text-xs sm:text-sm align-middle"
            size={window.innerWidth < 640 ? 'small' : 'middle'}
          />
        </div>
        {/* Modal chi tiết sản phẩm */}
      <Modal
        open={modalOpen}
        onCancel={handleCancel}
        title={<span className="text-base md:text-lg">{selectedProduct ? `Chi tiết sản phẩm: ${selectedProduct.name}` : ''}</span>}
        width={window.innerWidth < 500 ? '98vw' : 600}
        className="max-w-full"
        bodyStyle={{ padding: window.innerWidth < 500 ? 8 : 24 }}
        footer={[
          <Button key="cancel" onClick={handleCancel} className="w-full md:w-auto">Hủy</Button>,
          <Button key="update" type="primary" loading={loading} onClick={handleUpdate} style={{ background: '#77b843', border: 'none' }} className="w-full md:w-auto">Cập nhật</Button>
        ]}
      >
        {selectedProduct && (
          <Descriptions bordered column={1} size="middle" className="w-full text-xs md:text-base">
              <Descriptions.Item label="ID">{selectedProduct.id}</Descriptions.Item>
              <Descriptions.Item label="Ảnh đại diện">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
                  <Image src={editValues.mainImage ?? selectedProduct.mainImage} alt={selectedProduct.name} width={window.innerWidth < 500 ? 64 : 100} height={window.innerWidth < 500 ? 64 : 100} style={{ objectFit: 'contain', background: '#f3f6f9', borderRadius: 8 }} />
                  <div className="flex gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="mainImageUpload"
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          handleFieldChange('mainImage', url);
                        }
                      }}
                    />
                    <Button size="small" onClick={() => document.getElementById('mainImageUpload')?.click()}>Chọn ảnh</Button>
                    <Button size="small" danger onClick={() => handleFieldChange('mainImage', '')}>Xóa</Button>
                  </div>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Tên sản phẩm">
                {editFields.name ? (
                  <Input
                    value={editValues.name ?? selectedProduct.name}
                    onChange={e => handleFieldChange('name', e.target.value)}
                    onBlur={() => handleFieldBlur('name')}
                    autoFocus
                  />
                ) : (
                  <span onClick={() => handleFieldClick('name', selectedProduct.name)} style={{ cursor: 'pointer' }}>{editValues.name ?? selectedProduct.name}</span>
                )}
              </Descriptions.Item>
              <Descriptions.Item label="Danh mục">
                {editFields.category ? (
                  <Input
                    value={editValues.category ?? selectedProduct.category}
                    onChange={e => handleFieldChange('category', e.target.value)}
                    onBlur={() => handleFieldBlur('category')}
                    autoFocus
                  />
                ) : (
                  <span onClick={() => handleFieldClick('category', selectedProduct.category)} style={{ cursor: 'pointer' }}>{editValues.category ?? selectedProduct.category}</span>
                )}
              </Descriptions.Item>
              <Descriptions.Item label="Giá">
                {editFields.price ? (
                  <Input
                    value={editValues.price ?? selectedProduct.price}
                    onChange={e => handleFieldChange('price', e.target.value)}
                    onBlur={() => handleFieldBlur('price')}
                    autoFocus
                  />
                ) : (
                  <span onClick={() => handleFieldClick('price', selectedProduct.price)} style={{ cursor: 'pointer' }}>{editValues.price ?? selectedProduct.price}</span>
                )}
              </Descriptions.Item>
              {('ingredients' in selectedProduct) && (
                <Descriptions.Item label="Thành phần">
                  {editFields.ingredients ? (
                    <Input
                      value={editValues.ingredients ?? selectedProduct.ingredients}
                      onChange={e => handleFieldChange('ingredients', e.target.value)}
                      onBlur={() => handleFieldBlur('ingredients')}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleFieldClick('ingredients', selectedProduct.ingredients)} style={{ cursor: 'pointer' }}>{editValues.ingredients ?? selectedProduct.ingredients}</span>
                  )}
                </Descriptions.Item>
              )}
              {('description' in selectedProduct) && (
                <Descriptions.Item label="Mô tả">
                  {editFields.description ? (
                    <Input.TextArea
                      value={editValues.description ?? selectedProduct.description}
                      onChange={e => handleFieldChange('description', e.target.value)}
                      onBlur={() => handleFieldBlur('description')}
                      autoSize={{ minRows: 2, maxRows: 4 }}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleFieldClick('description', selectedProduct.description)} style={{ cursor: 'pointer' }}>{editValues.description ?? selectedProduct.description}</span>
                  )}
                </Descriptions.Item>
              )}
              {('taste' in selectedProduct) && (
                <Descriptions.Item label="Hương vị">
                  {editFields.taste ? (
                    <Input
                      value={editValues.taste ?? selectedProduct.taste}
                      onChange={e => handleFieldChange('taste', e.target.value)}
                      onBlur={() => handleFieldBlur('taste')}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleFieldClick('taste', selectedProduct.taste)} style={{ cursor: 'pointer' }}>{editValues.taste ?? selectedProduct.taste}</span>
                  )}
                </Descriptions.Item>
              )}
              {selectedProduct.instructions && selectedProduct.instructions.length > 0 && (
                <Descriptions.Item label="Hướng dẫn">
                  {editFields.instructions ? (
                    <Input.TextArea
                      value={(editValues.instructions ?? selectedProduct.instructions).join('\n')}
                      onChange={e => handleFieldChange('instructions', e.target.value.split(/\r?\n/))}
                      onBlur={() => handleFieldBlur('instructions')}
                      autoSize={{ minRows: 3, maxRows: 8 }}
                      autoFocus
                    />
                  ) : (
                    <div onClick={() => handleFieldClick('instructions', (editValues.instructions ?? selectedProduct.instructions))} style={{ cursor: 'pointer', whiteSpace: 'pre-line' }}>
                      {(editValues.instructions ?? selectedProduct.instructions).join('\n')}
                    </div>
                  )}
                </Descriptions.Item>
              )}
              {selectedProduct.images && selectedProduct.images.length > 0 && (
                <Descriptions.Item label="Hình ảnh">
                  <div className="flex flex-col gap-2 w-full">
                    {(editValues.images ?? selectedProduct.images).map((img: string, i: number) => (
                      <div key={i} className="flex flex-col xs:flex-row items-start xs:items-center gap-2 mb-1 w-full">
                        <Image src={img} alt={selectedProduct.name + i} width={window.innerWidth < 500 ? 40 : 48} height={window.innerWidth < 500 ? 40 : 48} style={{ objectFit: 'cover', borderRadius: 8, border: '1px solid #eee' }} />
                        <div className="flex gap-2">
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            id={`imageUpload_${i}`}
                            onChange={e => {
                              const file = e.target.files?.[0];
                              if (file) {
                                const url = URL.createObjectURL(file);
                                const newImages = [...(editValues.images ?? selectedProduct.images)];
                                newImages[i] = url;
                                handleFieldChange('images', newImages);
                              }
                            }}
                          />
                          <Button size="small" onClick={() => document.getElementById(`imageUpload_${i}`)?.click()}>Chọn ảnh</Button>
                          <Button size="small" danger onClick={() => {
                            const newImages = [...(editValues.images ?? selectedProduct.images)];
                            newImages.splice(i, 1);
                            handleFieldChange('images', newImages);
                          }}>Xóa</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Descriptions.Item>
              )}
              <Descriptions.Item label="Best?">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={editValues.isBest ?? selectedProduct.isBest}
                    onChange={checked => handleFieldChange('isBest', checked)}
                  />
                  <span>
                    {(editValues.isBest ?? selectedProduct.isBest)
                      ? <Tag color="green">Best</Tag>
                      : <Tag color="red">Not Best</Tag>}
                  </span>
                </div>
              </Descriptions.Item>
            </Descriptions>
          )}
        </Modal>
      </div>
      <Footer />
    </>
  );
};


export default ManagementProductsPage;
